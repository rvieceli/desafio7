import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

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

function Cart({ cart, loading, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1, 'plus');
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1, 'minus');
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
                  <RemoveButton onPress={() => removeFromCart(item.id)}>
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

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.shape({
    minus: PropTypes.bool,
    plus: PropTypes.bool,
  }).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
  ),
  loading: state.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
