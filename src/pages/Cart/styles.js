import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #000;
`;

export const EmptyCartContainer = styled.View`
  margin-bottom: 20px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyCartText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 28px;
  margin-top: 30px;
`;

export const CartContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  flex: 1;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ProductContainer = styled.View`
  background: #fff;
  margin: 15px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  height: 60px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #000;
  font-size: 16px;
`;

export const Price = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const RemoveButton = styled.TouchableOpacity`
  margin: 0 10px;
`;

export const Amounts = styled.View`
  background: #ccc;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
  height: 50px;
  padding: 10px;
`;
export const Amount = styled.View`
  flex: 1;
  align-items: center;
  align-content: center;
  flex-direction: row;
`;

export const Quantity = styled.Text`
  height: 30px;
  width: 50px;
  font-size: 20px;
  font-weight: bold;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  text-align-vertical: center;
  margin: 0 5px;
`;
export const ProductTotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const QuantityButtonIcon = styled(Icon).attrs({
  color: '#7159c1',
  size: 26,
})``;

export const Totals = styled.View`
  padding: 15px;
  align-content: center;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TotalValue = styled.Text`
  color: #000;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FinishBotton = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
export const FinishBottonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#7159c1',
  size: 26,
})``;
