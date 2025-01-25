import TarotCard from "@/components/ui/TarotCard";
import { useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  Platform,
  View,
  Pressable,
  Dimensions,
} from "react-native";

export default function HomeScreen() {
  const [appStarted, setAppStarted] = useState(true);

  const startMesage = () => {
    return (
      <View style={styles.startContainer}>
        <Pressable
          style={styles.startButton}
          onPress={() => setAppStarted(false)}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            START
          </Text>
        </Pressable>
      </View>
    );
  };

  if (appStarted) {
    return startMesage();
  }

  return (
    <View>
      <Pressable onPress={() => setAppStarted(false)}>
        <TarotCard
          image={require("@/assets/images/tarot_cards/Ace_of_cups.jpg")}
          name="The Fool"
          description="New beginnings, innocence, spontaneity, and free spirit"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  startContainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
