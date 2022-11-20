import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { HEIGHT, WIDTH } from "./constants";

export const CardContainer = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Container = styled(Animated.View)`
  justify-content: center;
  height: ${HEIGHT}px;
  width: ${WIDTH}px;
  background-color: #F5F5F0;
  border-radius: 24px;
  padding: 24px;
  /* overflow: hidden; */
`;

export const Title = styled.Text`
  color: black;
  font-size: 40px;
  margin-top: 12px;
  font-family: 'AttilaSansClassic-Medium';
`;

export const Description = styled.Text`
  color: #575555;
  font-size: 12px;
  margin-top: 24px;
  font-family: 'NeueHaasUnicaPro-Regular';
  line-height: 16px;
`;

export const CartButton = styled.TouchableOpacity`
  background-color: black;
  color: #F5F5F0;
  height: 36px;
  width: 110px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Content = styled.View`
  margin-top: 160px;
`;

export const TotalPrice = styled.Text`
  font-size: 14px;
  font-family: 'NeueHaasUnicaPro-Regular';
  line-height: 16px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-family: 'NeueHaasUnicaPro-Regular';
`;

export const AddToCart = styled.Text`
  color: white; 
  font-size: '14px';
  font-weight: 700;
  font-family: 'NeueHaasUnicaPro-Regular';
`;

export const Footer = styled.View`
  margin-top: auto;
  flex-direction: row;
  justify-content: space-between;
`;

export const AbsoluteContainer = styled.View`
  flex: 1;
  position: absolute;
  z-index: 99999;
  height: 100%;
  width: 100%;
  align-items: center;
`

export const Tagliatelle = styled(Animated.Image)`
  position: absolute;
  z-index: 9999;
  width: 300px;
  height: 230px;
  margin-top: 185px;
  resize-mode: 'cover';

`

export const Badge = styled.Image`
  height: 12px;
  width: 12px;
  margin-top: -1px;
  resize-mode: 'cover';
`

export const Hand = styled.Image`
  position: absolute;
  z-index: 99999;
  left: 215px;
  top: 200px;
  height: 200px;
  width: 200px;
  resize-mode: 'contain';
`