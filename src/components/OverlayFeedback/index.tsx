import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import { Canvas, Rect, BlurMask } from '@shopify/react-native-skia';

import { THEME } from '../../styles/theme';

export function OverlayFeedback({ status = 'NEUTRAL' }) {
  const opacity = useSharedValue(0);
  const { height, width } = useWindowDimensions();

  const styleAnimated = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  });

  useEffect(() => {
    opacity.value = withSequence(
      withTiming(1, { duration: 400, easing: Easing.bounce }),
      withTiming(0)
    );
  }, [status]);
  
  return (
    <Animated.View style={[{ height, width, position: 'absolute' }, styleAnimated]}>
      <Canvas style={{ flex: 1 }}>
        <Rect
          x={0}
          y={0}
          width={width}
          height={height}
          color={
            status === 'CORRECT' ? THEME.COLORS.BRAND_LIGHT :
            (status === 'WRONG' ? THEME.COLORS.DANGER_LIGHT : 'transparent')
          }
        >
          <BlurMask blur={50} style="inner" />
        </Rect>
      </Canvas>
    </Animated.View>
  )
}