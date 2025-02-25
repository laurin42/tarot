import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

export const useFloatingAnimation = (trigger?: number) => {
  const floatingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      floatingAnim.setValue(0);

      Animated.sequence([
        // Quick bounce up
        Animated.timing(floatingAnim, {
          toValue: -15,
          duration: 100,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        // Quick bounce down
        Animated.timing(floatingAnim, {
          toValue: 0,
          duration: 100,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [trigger]); // Add trigger dependency

  return floatingAnim;
};
