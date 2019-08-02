import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

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

class Main extends Component {
  static propTypes = {
    addToCardRequest: PropTypes.func.isRequired,
    amount: PropTypes.shape({
      amount: PropTypes.number,
    }).isRequired,
    loading: PropTypes.shape({
      plus: PropTypes.bool,
      minus: PropTypes.bool,
    }).isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get(`products`);

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const { addToCardRequest } = this.props;
    addToCardRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount, loading } = this.props;

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
              <AddToCartButton onPress={() => this.handleAddProduct(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
  loading: state.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
