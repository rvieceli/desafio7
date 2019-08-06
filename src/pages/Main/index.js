import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  Product,
  ProductImage,
  Title,
  Price,
  AddToCartButton,
  AddToCartButtonText,
  AddToCartButtonViewCart,
  AddToCartButtonViewCartText,
} from './styles';
import { formatPrice } from '../../util/format';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((acumulator, product) => {
      acumulator[product.id] = product.amount;

      return acumulator;
    }, {})
  );
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`products`);

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  });

  function handleAddProduct(id) {
    dispatch(CartActions.addToCardRequest(id));
  }

  return (
    <Container>
      <List
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductImage source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.priceFormatted}</Price>
            <AddToCartButton onPress={() => handleAddProduct(item.id)}>
              <AddToCartButtonViewCart>
                {loading[item.id] ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <>
                    <Icon name="add-shopping-cart" color="#fff" size={16} />
                    <AddToCartButtonViewCartText>
                      {amount[item.id] || 0}
                    </AddToCartButtonViewCartText>
                  </>
                )}
              </AddToCartButtonViewCart>
              <AddToCartButtonText>Adicionar ao carrinho</AddToCartButtonText>
            </AddToCartButton>
          </Product>
        )}
      />
    </Container>
  );
}
