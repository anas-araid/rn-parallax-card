import React from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  Easing,
  Extrapolate,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import {
  TRANSLATION_X_INPUT,
  TRANSLATION_X_OUTPUT,
  DURATION,
  TRANSLATION_Y_INPUT,
  TRANSLATION_Y_OUTPUT,
  ROTATE_X_FIRST_INPUT,
  ROTATE_X_SECOND_INPUT,
  ROTATE_X_OUTPUT,
  ROTATE_Y_FIRST_INPUT,
  ROTATE_Y_SECOND_INPUT,
  ROTATE_Y_OUTPUT,
  PERSPECTIVE
} from './constants';
import {
  AbsoluteContainer,
  AddToCart,
  Badge,
  CardContainer,
  CartButton,
  Container,
  Content,
  Description,
  Footer,
  Price,
  Tagliatelle,
  Title,
  TotalPrice
} from './styled';

const Card = (): JSX.Element => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const panGestureEvent = Gesture.Pan()
    .onBegin(e => {
      translationX.value = withTiming(
        interpolate(
          e.translationX,
          [-TRANSLATION_X_INPUT, TRANSLATION_X_INPUT],
          [-TRANSLATION_X_OUTPUT, TRANSLATION_X_OUTPUT],
          Extrapolation.CLAMP
        ),
        { duration: DURATION, easing: Easing.linear }
      );
      translationY.value = withSpring(
        interpolate(
          e.translationY,
          [-TRANSLATION_Y_INPUT, TRANSLATION_Y_INPUT],
          [-TRANSLATION_Y_OUTPUT, TRANSLATION_Y_OUTPUT],
          Extrapolation.CLAMP
        )
      );
      rotateX.value = withSpring(
        interpolate(
          e.x,
          [ROTATE_X_FIRST_INPUT, ROTATE_X_SECOND_INPUT],
          [-ROTATE_X_OUTPUT, ROTATE_X_OUTPUT],
          Extrapolate.CLAMP
        )
      );
      rotateY.value = withSpring(
        interpolate(
          e.y,
          [ROTATE_Y_FIRST_INPUT, ROTATE_Y_SECOND_INPUT],
          [-ROTATE_Y_OUTPUT, ROTATE_Y_OUTPUT],
          Extrapolate.CLAMP
        )
      );
    })
    .onUpdate(e => {
      translationX.value = withTiming(
        interpolate(
          e.translationX,
          [-TRANSLATION_X_INPUT, TRANSLATION_X_INPUT],
          [-TRANSLATION_X_OUTPUT, TRANSLATION_X_OUTPUT],
          Extrapolation.CLAMP
        ),
        { duration: DURATION, easing: Easing.linear }
      );

      translationY.value = withSpring(
        interpolate(
          e.translationY,
          [-TRANSLATION_Y_INPUT, TRANSLATION_Y_INPUT],
          [-TRANSLATION_Y_OUTPUT, TRANSLATION_Y_OUTPUT],
          Extrapolation.CLAMP
        )
      );

      rotateX.value = withSpring(
        interpolate(
          e.x,
          [ROTATE_X_FIRST_INPUT, ROTATE_X_SECOND_INPUT],
          [-ROTATE_X_OUTPUT, ROTATE_X_OUTPUT],
          Extrapolate.CLAMP
        )
      );

      rotateY.value = withSpring(
        interpolate(
          e.y,
          [ROTATE_Y_FIRST_INPUT, ROTATE_Y_SECOND_INPUT],
          [-ROTATE_Y_OUTPUT, ROTATE_Y_OUTPUT],
          Extrapolate.CLAMP
        )
      );
    })
    .onFinalize(() => {
      translationX.value = withSpring(0);
      translationY.value = withSpring(0);
      rotateX.value = withSpring(0);
      rotateY.value = withSpring(0);
    });

  const tagliatelleStyle = useAnimatedStyle(() => {
    const rotateXvalue = `${rotateX.value * 2}deg`;
    const rotateYvalue = `${-rotateY.value * 2}deg`;

    return {
      transform: [
        {
          perspective: PERSPECTIVE
        },
        {
          translateY: translationY.value
        },
        {
          translateX: translationX.value
        },
        {
          rotateY: rotateXvalue
        },
        {
          rotateX: rotateYvalue
        }
      ]
    };
  });

  const cardStyle = useAnimatedStyle(() => {
    const rotateXvalue = `${rotateX.value * 2}deg`;
    const rotateYvalue = `${-rotateY.value * 2}deg`;

    return {
      transform: [
        {
          perspective: PERSPECTIVE
        },
        {
          rotateY: rotateXvalue
        },
        {
          rotateX: rotateYvalue
        }
      ]
    };
  });

  const image = require('../../assets/tagliatelle.png');
  const badge = require('../../assets/badge.png');

  return (
    <GestureDetector gesture={panGestureEvent}>
      <CardContainer>
        <AbsoluteContainer>
          <Tagliatelle style={[tagliatelleStyle]} source={image} />
        </AbsoluteContainer>
        <Container
          style={[
            cardStyle,
            {
              shadowOpacity: 0.15,
              shadowRadius: 5,
              shadowColor: 'black',
              shadowOffset: { height: 0, width: 0 }
            }
          ]}
        >
          <Content>
            <Title>Tagliatelle</Title>
            <Description>
              Tagliatelle are one of the tastiest fresh pasta shapes in Italian cuisine. The texture is porous and
              rough, making it ideal for thick sauces.
            </Description>
          </Content>
          <Footer>
            <View>
              <TotalPrice>
                Total price
                <Badge source={badge} />
              </TotalPrice>
              <Price>$ 8.00</Price>
            </View>
            <CartButton>
              <AddToCart>Add to cart</AddToCart>
            </CartButton>
          </Footer>
        </Container>
      </CardContainer>
    </GestureDetector>
  );
};

export default Card;
