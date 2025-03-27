import * as FileSystem from 'expo-file-system';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

/**
 * Optimizes images for the app to reduce bundle size
 * @param uri Image URI to optimize
 * @param width Target width (height will be proportionally scaled)
 * @param quality Compression quality (0-1)
 * @returns URI of the optimized image
 */
export async function optimizeImage(
  uri: string, 
  width: number = 800,
  quality: number = 0.8
): Promise<string> {
  try {
    // First, resize the image
    const result = await manipulateAsync(
      uri,
      [{ resize: { width } }],
      { compress: quality, format: SaveFormat.WEBP }
    );
    
    return result.uri;
  } catch (error) {
    console.error("Failed to optimize image:", error);
    return uri; // Return original if optimization fails
  }
}

// Use this in your card loading logic