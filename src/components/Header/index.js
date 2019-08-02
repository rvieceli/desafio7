import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          {cartSize > 0 && <ItemCount>{cartSize || 0}</ItemCount>}
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(
  mapStateToProps,
  null
)(Header);
