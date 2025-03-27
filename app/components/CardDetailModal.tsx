import React from "react";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ISelectedAndShownCard } from "@/constants/tarotcards";

interface CardDetailModalProps {
  isVisible: boolean;
  card: ISelectedAndShownCard | null;
  onClose: () => void;
}

const CardDetailModal: React.FC<CardDetailModalProps> = ({
  isVisible,
  card,
  onClose,
}) => {
  if (!card) return null;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{card.name}</Text>

          <ScrollView
            style={styles.modalScrollView}
            contentContainerStyle={styles.modalScrollContent}
            showsVerticalScrollIndicator={true}
          >
            <Text style={styles.modalText}>{card.explanation}</Text>
          </ScrollView>

          <TouchableOpacity
            style={styles.modalButtonFullWidth}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Schließen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "rgba(31, 41, 55, 0.98)",
    borderRadius: 16,
    padding: 24,
    paddingBottom: 0,
    width: "100%",
    maxHeight: "85%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  modalText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    marginBottom: 20,
  },
  modalButtonFullWidth: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "rgba(249, 115, 22, 0.9)",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    marginTop: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalScrollView: {
    width: "100%",
    maxHeight: "80%",
    marginBottom: 0,
  },
  modalScrollContent: {
    paddingBottom: 8,
  },
});

export default CardDetailModal;
