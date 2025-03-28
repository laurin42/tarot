import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { tarotDeckOptimizer } from "../utils/tarotDeckOptimizer";
import { assetManager } from "../utils/assetPreloader";

// Props für die TarotCardImage-Komponente
interface TarotCardImageProps {
  cardId: string;
  imageSource: number; // Der require('./path/to/image')-Wert
  size?: "small" | "medium" | "large";
  style?: Record<string, unknown>;
}

export default function TarotCardImage({
  cardId,
  imageSource,
  size = "medium",
  style = {},
}: TarotCardImageProps) {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadOptimizedImage() {
      try {
        // Versuche zuerst, das Bild aus dem Deck-Optimizer zu laden
        const cachedCard = tarotDeckOptimizer.getCards([cardId])[0];

        if (cachedCard) {
          // Je nach gewünschter Größe das passende Bild wählen
          const uri =
            size === "small"
              ? cachedCard.thumbnailUri
              : size === "large" && cachedCard.detailUri
              ? cachedCard.detailUri
              : cachedCard.regularUri;

          if (isMounted) {
            setImageUri(uri);
            setIsLoading(false);
          }
        } else {
          // Wenn nicht im Cache, dann dynamisch laden
          const width = size === "small" ? 200 : size === "large" ? 1200 : 600;
          const uri = await assetManager.getOptimizedImage(imageSource, width);

          if (isMounted) {
            setImageUri(uri);
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error(
          `Failed to load optimized image for card ${cardId}:`,
          error
        );
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadOptimizedImage();

    return () => {
      isMounted = false;
    };
  }, [cardId, imageSource, size]);

  // Blurhash für Placeholder während des Ladens
  const blurhash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";

  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={imageUri ? { uri: imageUri } : imageSource}
        placeholder={blurhash}
        contentFit="contain"
        transition={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
