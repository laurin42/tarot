export default {
  expo: {
    name: "tarot",
    slug: "tarot",
    scheme: "tarot",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#1F2937"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.laurin.tarot",
      config: {
        usesNonExemptEncryption: false
      }
    },
    android: {
      package: "com.laurin.tarot",
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#1F2937"
      }
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true
    }
  }
};