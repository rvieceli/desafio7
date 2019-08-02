import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #000;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Product = styled.View`
  margin-bottom: 20px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const AddToCartButtonViewCart = styled.View`
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 12px;
  width: 55px;
  height: 40px;
`;

export const AddToCartButtonViewCartText = styled.Text`
  margin-left: 5px;
  color: #fff;
`;

export const AddToCartButtonText = styled.Text`
  color: #fff;
  padding: 12px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
