import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

interface SummaryPanelProps {
  loading: boolean;
  error: string | null;
  summary: string;
  showButton: boolean;
  onButtonPress: () => void;
}

const SummaryPanel: React.FC<SummaryPanelProps> = ({
  loading,
  error,
  summary,
  showButton,
  onButtonPress,
}) => {
  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>{summary}</Text>

      {showButton && (
        <TouchableOpacity
          style={styles.summaryButtonFullWidth}
          onPress={onButtonPress}
        >
          <Text style={styles.buttonText}>Neue Legung beginnen</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: "rgba(31, 41, 55, 0.95)",
    borderRadius: 16,
    padding: 24,
    paddingBottom: 24,
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    position: "relative",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  summaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
  },
  summaryButtonFullWidth: {
    width: "100%",
    paddingTop: 12,
    paddingBottom: 18,
    backgroundColor: "rgba(249, 115, 22, 0.9)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    marginTop: 24,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "#EF4444",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default SummaryPanel;
