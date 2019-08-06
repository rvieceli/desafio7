import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  EmptyCartContainer,
  EmptyCartText,
  CartContainer,
  CartList,
  ProductContainer,
  Product,
  Description,
  Title,
  Price,
  ProductImage,
  RemoveButton,
  Amounts,
  Amount,
  Quantity,
  ProductTotal,
  QuantityButtonIcon,
  Totals,
  TotalText,
  TotalValue,
  FinishBotton,
  FinishBottonText,
  Loading,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useMemo(
    () =>
      formatPrice(
        cart.reduce((acumulator, product) => {
          return acumulator + product.amount * product.price;
        }, 0)
      ),
    [cart]
  );

  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(
      CartActions.updateAmountRequest(product.id, product.amount + 1, 'plus')
    );
  }
  function decrement(product) {
    dispatch(
      CartActions.updateAmountRequest(product.id, product.amount - 1, 'minus')
    );
  }

  function handleRemoveProduct(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  return (
    <Container>
      {cart.length !== 0 ? (
        <CartContainer>
          <CartList
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <ProductContainer>
                <Product>
                  <ProductImage
                    source={{
                      uri: item.image,
                    }}
                  />
                  <Description>
                    <Title>{item.title}</Title>
                    <Price>{item.priceFormatted}</Price>
                  </Description>
                  <RemoveButton onPress={() => handleRemoveProduct(item.id)}>
                    <Icon name="delete-forever" size={32} color="#7159c1" />
                  </RemoveButton>
                </Product>

                <Amounts>
                  <Amount>
                    {loading[item.id] && loading[item.id].minus ? (
                      <Loading />
                    ) : (
                      <TouchableOpacity onPress={() => decrement(item)}>
                        <QuantityButtonIcon name="remove-circle-outline" />
                      </TouchableOpacity>
                    )}
                    <Quantity>{item.amount}</Quantity>
                    {loading[item.id] && loading[item.id].plus ? (
                      <Loading />
                    ) : (
                      <TouchableOpacity onPress={() => increment(item)}>
                        <QuantityButtonIcon name="add-circle-outline" />
                      </TouchableOpacity>
                    )}
                  </Amount>
                  <ProductTotal>{item.subTotal}</ProductTotal>
                </Amounts>
              </ProductContainer>
            )}
          />
          <Totals>
            <TotalText>Total</TotalText>
            <TotalValue>{total}</TotalValue>
            <FinishBotton onPress={() => {}}>
              <FinishBottonText>Finalizar Pedido</FinishBottonText>
            </FinishBotton>
          </Totals>
        </CartContainer>
      ) : (
        <EmptyCartContainer>
          <Icon name="remove-shopping-cart" color="#999" size={100} />
          <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
        </EmptyCartContainer>
      )}
    </Container>
  );
}
