import { useMemo } from 'react';
import { Dimensions } from 'react-native';

export const useCardDimensions = () => {
  const { width, height } = Dimensions.get('window');

  return useMemo(() => {
    const baseWidth = width > 400 ? 150 : 100;
    return {
      width: baseWidth,
      height: baseWidth * 1.6,
      spacing: baseWidth * 0.52,
      slots: {
        left: { x: 20, y: height * 0.5 },
        center: { x: (width - baseWidth) / 2, y: height * 0.5 },
        right: { x: width - baseWidth - 20, y: height * 0.5 },
      }
    };
  }, [width, height]);
};
