// app/components/ErrorDisplay.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ErrorDisplayProps {
  message: string;
  onRetry?: () => void;
}

const ErrorDisplay = ({ message, onRetry }: ErrorDisplayProps) => {
  return (
    <View className="p-4 bg-red-50 border border-red-200 rounded-lg my-2">
      <Text className="text-red-700 mb-2">{message}</Text>
      {onRetry && (
        <TouchableOpacity
          onPress={onRetry}
          className="py-2 px-4 bg-red-600 rounded-md self-start"
        >
          <Text className="text-white">Erneut versuchen</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ErrorDisplay;
