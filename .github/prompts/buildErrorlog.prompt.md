lauri@WINDOWS-MMO3SPS MINGW64 ~/tarot/frontend (main)
$ npx expo run:android
env: load .env.local .env
env: export EXPO_PUBLIC_API_URL EXPO_PUBLIC_ANDROID_CLIENT_ID EXPO_PUBLIC_IOS_CLIENT_ID EXPO_PUBLIC_WEB_CLIENT_ID EXPO_PUBLIC_FIREBASE_API_KEY EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN EXPO_PUBLIC_FIREBASE_PROJECT_ID EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID EXPO_PUBLIC_FIREBASE_APP_ID EXPO_PUBLIC_BUGSNAG_API_KEY EXPO_PUBLIC_ENVIRONMENT
› Building app...
Starting a Gradle Daemon (subsequent builds will be faster)
Configuration on demand is an incubating feature.

> Configure project :app
> ?? Applying gradle plugin 'expo-dev-launcher-gradle-plugin' (expo-dev-launcher@5.0.31)

> Configure project :react-native-firebase_analytics
> :react-native-firebase_analytics package.json found at C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\analytics\package.json
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_analytics:firebase.bom using default value: 33.11.0  
> :react-native-firebase_analytics package.json found at C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\analytics\package.json
> :react-native-firebase_analytics:version set from package.json: 21.13.0 (21,13,0 - 21013000)
> :react-native-firebase_analytics:android.compileSdk using custom value: 35
> :react-native-firebase_analytics:android.targetSdk using custom value: 34  
> :react-native-firebase_analytics:android.minSdk using custom value: 24
> :react-native-firebase_analytics:reactNativeAndroidDir C:\Users\lauri\tarot\frontend\node_modules\react-native\android

> Configure project :react-native-firebase_app  
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_app:firebase.bom using default value: 33.11.0  
> :react-native-firebase_app:play.play-services-auth using default value: 21.3.0
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_app:version set from package.json: 21.13.0 (21,13,0 - 21013000)
> :react-native-firebase_app:android.compileSdk using custom value: 35
> :react-native-firebase_app:android.targetSdk using custom value: 34
> :react-native-firebase_app:android.minSdk using custom value: 24
> :react-native-firebase_app:reactNativeAndroidDir C:\Users\lauri\tarot\frontend\node_modules\react-native\android

> Configure project :react-native-firebase_auth
> :react-native-firebase_auth package.json found at C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\auth\package.json
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_auth:firebase.bom using default value: 33.11.0
> :react-native-firebase_auth package.json found at C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\auth\package.json
> :react-native-firebase_auth:version set from package.json: 21.13.0 (21,13,0 - 21013000)
> :react-native-firebase_auth:android.compileSdk using custom value: 35
> :react-native-firebase_auth:android.targetSdk using custom value: 34
> :react-native-firebase_auth:android.minSdk using custom value: 24
> :react-native-firebase_auth:reactNativeAndroidDir C:\Users\lauri\tarot\frontend\node_modules\react-native\android

> Configure project :expo

Using expo modules

- expo-application (6.0.2)
- expo-asset (11.0.5)
- expo-blur (14.0.3)
- expo-constants (17.0.8)
- expo-crypto (14.0.2)
- expo-dev-client (5.0.15)
- expo-dev-launcher (5.0.31)
- expo-dev-menu (6.0.21)
- expo-device (7.0.2)
- expo-file-system (18.0.12)
- expo-font (13.0.4)
- expo-haptics (14.0.1)
- expo-image (2.0.7)
- expo-image-loader (5.0.0)
- expo-image-manipulator (13.0.6)
- expo-json-utils (0.14.0)
- expo-keep-awake (14.0.3)
- expo-linking (7.0.5)
- expo-manifests (0.15.7)
- expo-modules-core (2.2.3)
- expo-random (14.0.1)
- expo-secure-store (14.0.1)
- expo-splash-screen (0.29.22)
- expo-system-ui (4.0.8)
- expo-web-browser (14.0.2)

> Configure project :react-native-reanimated
> Android gradle plugin: 8.6.0
> Gradle: 8.10.2

> Task :expo-file-system:processDebugManifest
> C:\Users\lauri\tarot\frontend\node_modules\expo-file-system\android\src\main\AndroidManifest.xml:6:9-8:20 Warning:

        provider#expo.modules.filesystem.FileSystemFileProvider@android:authorities was tagged at AndroidManifest.xml:6 to replace other declarations but no other declaration present

> Task :expo-modules-core:processDebugManifest
> C:\Users\lauri\tarot\frontend\node_modules\expo-modules-core\android\src\main\AndroidManifest.xml:8:9-11:45 Warning:

        meta-data#com.facebook.soloader.enabled@android:value was tagged at AndroidManifest.xml:8 to replace other declarations but no other declaration present

> Task :react-native-async-storage_async-storage:processDebugManifest
> package="com.reactnativecommunity.asyncstorage" found in source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-async-storage\async-storage\android\src\main\AndroidManifest.xml.
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.  
> Recommendation: remove package="com.reactnativecommunity.asyncstorage" from the source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-async-storage\async-storage\android\src\main\AndroidManifest.xml.

> Task :react-native-community_netinfo:processDebugManifest  
> package="com.reactnativecommunity.netinfo" found in source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-community\netinfo\android\src\main\AndroidManifest.xml.
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
> Recommendation: remove package="com.reactnativecommunity.netinfo" from the source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-community\netinfo\android\src\main\AndroidManifest.xml.

> Task :react-native-firebase_analytics:processDebugManifest
> package="io.invertase.firebase.analytics" found in source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\analytics\android\src\main\AndroidManifest.xml.
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
> Recommendation: remove package="io.invertase.firebase.analytics" from the source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\analytics\android\src\main\AndroidManifest.xml.

> Task :react-native-firebase_app:processDebugManifest
> package="io.invertase.firebase" found in source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\app\android\src\main\AndroidManifest.xml.  
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
> Recommendation: remove package="io.invertase.firebase" from the source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\app\android\src\main\AndroidManifest.xml.

> Task :react-native-firebase_auth:processDebugManifest
> package="io.invertase.firebase.auth" found in source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\auth\android\src\main\AndroidManifest.xml.
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
> Recommendation: remove package="io.invertase.firebase.auth" from the source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\auth\android\src\main\AndroidManifest.xml.

> Task :react-native-google-signin_google-signin:processDebugManifest
> package="com.reactnativegooglesignin" found in source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-google-signin\google-signin\android\src\main\AndroidManifest.xml.
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
> Recommendation: remove package="com.reactnativegooglesignin" from the source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-google-signin\google-signin\android\src\main\AndroidManifest.xml.

> Task :react-native-picker_picker:processDebugManifest
> package="com.reactnativecommunity.picker" found in source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-picker\picker\android\src\main\AndroidManifest.xml.
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
> Recommendation: remove package="com.reactnativecommunity.picker" from the source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\@react-native-picker\picker\android\src\main\AndroidManifest.xml.

> Task :react-native-safe-area-context:processDebugManifest
> package="com.th3rdwave.safeareacontext" found in source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\react-native-safe-area-context\android\src\main\AndroidManifest.xml.
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
> Recommendation: remove package="com.th3rdwave.safeareacontext" from the source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\react-native-safe-area-context\android\src\main\AndroidManifest.xml.

> Task :react-native-screens:processDebugManifest  
> package="com.swmansion.rnscreens" found in source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\react-native-screens\android\src\main\AndroidManifest.xml.
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
> Recommendation: remove package="com.swmansion.rnscreens" from the source AndroidManifest.xml: C:\Users\lauri\tarot\frontend\node_modules\react-native-screens\android\src\main\AndroidManifest.xml.

> Task :app:processDebugMainManifest  
> C:\Users\lauri\tarot\frontend\android\app\src\debug\AndroidManifest.xml:6:5-162 Warning:

        application@android:usesCleartextTraffic was tagged at AndroidManifest.xml:6 to replace other declarations but no other declaration present

C:\Users\lauri\tarot\frontend\android\app\src\debug\AndroidManifest.xml Warning:
provider#expo.modules.filesystem.FileSystemFileProvider@android:authorities was tagged at AndroidManifest.xml:0 to replace other declarations but no other declaration present

> Task :react-native-async-storage_async-storage:compileDebugJavaWithJavac
> C:\Users\lauri\tarot\frontend\node_modules\@react-native-async-storage\async-storage\android\src\main\java\com\reactnativecommunity\asyncstorage\AsyncStorageModule.java:84: warning: [removal] onCatalystInstanceDestroy() in NativeModule has been deprecated and marked for removal
> public void onCatalystInstanceDestroy() {

              ^

Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.  
Note: C:\Users\lauri\tarot\frontend\node_modules\@react-native-async-storage\async-storage\android\src\javaPackage\java\com\reactnativecommunity\asyncstorage\AsyncStoragePackage.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
1 warning

> Task :react-native-community_datetimepicker:compileDebugJavaWithJavac  
> Note: Some input files use or override a deprecated API.
> Note: Recompile with -Xlint:deprecation for details.

> Task :react-native-community_netinfo:compileDebugJavaWithJavac
> C:\Users\lauri\tarot\frontend\node_modules\@react-native-community\netinfo\android\src\main\java\com\reactnativecommunity\netinfo\NetInfoModule.java:47: warning: [removal] onCatalystInstanceDestroy() in NativeModule has been deprecated and marked for removal

    public void onCatalystInstanceDestroy() {
                ^

Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.  
1 warning

> Task :react-native-firebase_app:compileDebugJavaWithJavac
> Note: Some input files use or override a deprecated API.
> Note: Recompile with -Xlint:deprecation for details.

> Task :react-native-firebase_analytics:compileDebugJavaWithJavac  
> Note: Some input files use or override a deprecated API.
> Note: Recompile with -Xlint:deprecation for details.

> Task :react-native-firebase_auth:compileDebugJavaWithJavac
> Note: C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\auth\android\src\main\java\io\invertase\firebase\auth\ReactNativeFirebaseAuthModule.java uses or overrides a deprecated API.  
> Note: Recompile with -Xlint:deprecation for details.
> Note: C:\Users\lauri\tarot\frontend\node_modules\@react-native-firebase\auth\android\src\main\java\io\invertase\firebase\auth\ReactNativeFirebaseAuthModule.java uses unchecked or unsafe operations.
> Note: Recompile with -Xlint:unchecked for details.

> Task :react-native-reanimated:compileDebugJavaWithJavac
> Note: Some input files use or override a deprecated API.
> Note: Recompile with -Xlint:deprecation for details.
> Note: Some input files use unchecked or unsafe operations.
> Note: Recompile with -Xlint:unchecked for details.

> Task :react-native-picker_picker:compileDebugJavaWithJavac  
> Note: Some input files use or override a deprecated API.
> Note: Recompile with -Xlint:deprecation for details.

> Task :react-native-google-signin_google-signin:compileDebugJavaWithJavac
> Note: Some input files use or override a deprecated API.  
> Note: Recompile with -Xlint:deprecation for details.  
> Note: C:\Users\lauri\tarot\frontend\node_modules\@react-native-google-signin\google-signin\android\src\main\java\com\reactnativegooglesignin\RNGoogleSigninModule.java uses unchecked or unsafe operations.
> Note: Recompile with -Xlint:unchecked for details.

> Task :react-native-safe-area-context:compileDebugKotlin
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-safe-area-context/android/src/main/java/com/th3rdwave/safeareacontext/SafeAreaContextPackage.kt:27:11 'constructor ReactModuleInfo(String, String, Boolean, Boolean, Boolean, Boolean, Boolean)' is deprecated. use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)]  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-safe-area-context/android/src/main/java/com/th3rdwave/safeareacontext/SafeAreaContextPackage.kt:33:27 'getter for hasConstants: Boolean' is deprecated. This property is unused and it's planning to be removed in a future version of

        React Native. Please refrain from using it.

w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-safe-area-context/android/src/main/java/com/th3rdwave/safeareacontext/SafeAreaView.kt:59:23 'getter for uiImplementation: UIImplementation!' is deprecated. Deprecated in Java

> Task :react-native-gesture-handler:compileDebugKotlin
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:69:42 'constructor ReactModuleInfo(String, String, Boolean, Boolean, Boolean, Boolean, Boolean)' is deprecated. use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)]
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/core/FlingGestureHandler.kt:25:26 Parameter 'event' is never used
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:72:62 The corresponding parameter in the supertype 'ViewGroupManager' is named 'borderRadius'. This may cause problems when calling this function with named arguments.
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:77:63 The corresponding parameter in the supertype 'ViewGroupManager' is named 'borderRadius'. This may cause problems when calling this function with named arguments.
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:82:65 The corresponding parameter in the supertype 'ViewGroupManager' is named 'borderRadius'. This may cause problems when calling this function with named arguments.
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:87:66 The corresponding parameter in the supertype 'ViewGroupManager' is named 'borderRadius'. This may cause problems when calling this function with named arguments.

> Task :react-native-svg:compileDebugJavaWithJavac
> Note: Some input files use or override a deprecated API.
> Note: Recompile with -Xlint:deprecation for details.
> Note: Some input files use unchecked or unsafe operations.
> Note: Recompile with -Xlint:unchecked for details.

> Task :react-native-screens:compileDebugKotlin  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/CustomToolbar.kt:19:53 'FrameCallback' is deprecated. Use Choreographer.FrameCallback instead
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/CustomToolbar.kt:20:38 'FrameCallback' is deprecated. Use Choreographer.FrameCallback instead
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:64:17 'constructor ReactModuleInfo(String, String, Boolean, Boolean, Boolean, Boolean, Boolean)' is deprecated. use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)]
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/Screen.kt:45:77 Unchecked cast: CoordinatorLayout.Behavior<(raw) View!>? to BottomSheetBehavior<Screen>
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenContainer.kt:33:53 'FrameCallback' is deprecated. Use Choreographer.FrameCallback instead
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenContainer.kt:34:38 'FrameCallback' is deprecated. Use Choreographer.FrameCallback instead
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenFooter.kt:252:9 Parameter 'changed' is never used  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenFooter.kt:253:9 Parameter 'left' is never used  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenFooter.kt:254:9 Parameter 'top' is never used  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenFooter.kt:255:9 Parameter 'right' is never used  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenFooter.kt:256:9 Parameter 'bottom' is never used  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackFragment.kt:257:31 'setter for targetElevation: Float' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackFragment.kt:260:13 'setHasOptionsMenu(Boolean): Unit' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackFragment.kt:496:22 'onPrepareOptionsMenu(Menu): Unit' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackFragment.kt:504:22 'onCreateOptionsMenu(Menu, MenuInflater): Unit' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackHeaderConfig.kt:100:38 'getter for systemWindowInsetTop: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackHeaderConfigViewManager.kt:7:34 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackHeaderConfigViewManager.kt:209:9 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackHeaderConfigViewManager.kt:211:13 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackHeaderConfigViewManager.kt:213:13 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:7:34 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:375:48 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:376:49 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:377:45 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:378:52 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:379:48 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:380:51 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:381:56 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:382:57 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenViewManager.kt:383:51 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt:55:42 'replaceSystemWindowInsets(Int, Int, Int, Int): WindowInsetsCompat' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt:56:39 'getter for systemWindowInsetLeft: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt:58:39 'getter for systemWindowInsetRight: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt:59:39 'getter for systemWindowInsetBottom: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt:98:53 'getter for statusBarColor: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt:109:48 'getter for statusBarColor: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt:112:32 'setter for statusBarColor: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt:208:72 'getter for navigationBarColor: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt:214:16 'setter for navigationBarColor: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarManager.kt:5:34 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarManager.kt:138:66 Elvis operator (?:) always returns the left operand of non-nullable type Boolean
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarManager.kt:142:9 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarManager.kt:144:13 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarManager.kt:146:13 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarManager.kt:148:13 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarManager.kt:150:13 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarManager.kt:152:13 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarManager.kt:154:13 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchBarView.kt:153:43 Parameter 'flag' is never used  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/bottomsheet/BottomSheetDialogRootView.kt:7:34 'ReactFeatureFlags' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/bottomsheet/BottomSheetDialogRootView.kt:25:13 'ReactFeatureFlags' is deprecated. Deprecated in Java

> Task :react-native-webview:compileDebugKotlin
> w: file:///C:/Users/lauri/tarot/frontend/node*modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:22:34 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:40:71 Parameter 'webView' is never used, could be renamed to *
> w: file:///C:/Users/lauri/tarot/frontend/node*modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:82:18 'setter for allowFileAccessFromFileURLs: Boolean' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:83:18 'setter for allowUniversalAccessFromFileURLs: Boolean' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:94:102 Parameter 'contentLength' is never used, could be renamed to *  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:111:32 Variable 'urlObj' initializer is redundant  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:125:21 'allowScanningByMediaScanner(): Unit' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:162:36 'setter for systemUiVisibility: Int' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:301:14 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:344:15 Condition 'args == null' is always 'false'
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:353:34 Condition 'args != null' is always 'true'
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:372:38 'setter for allowUniversalAccessFromFileURLs: Boolean' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:384:19 Parameter 'viewWrapper' is never used
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:433:51 Unchecked cast: Any to kotlin.collections.HashMap<String, String> /_ = java.util.HashMap<String, String> _/  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:489:23 'setter for savePassword: Boolean' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:490:23 'setter for saveFormData: Boolean' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:560:23 'setter for allowFileAccessFromFileURLs: Boolean' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:661:65 Unchecked cast: ArrayList<Any> to List<Map<String, String>>  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:682:23 'setter for saveFormData: Boolean' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:717:36 Parameter 'viewWrapper' is never used  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopCustomMenuSelectionEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopCustomMenuSelectionEvent.kt:11:3 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopCustomMenuSelectionEvent.kt:22:42 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopCustomMenuSelectionEvent.kt:23:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopHttpErrorEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopHttpErrorEvent.kt:11:3 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopHttpErrorEvent.kt:22:42 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopHttpErrorEvent.kt:23:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingErrorEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingErrorEvent.kt:11:3 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingErrorEvent.kt:22:42 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingErrorEvent.kt:23:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingFinishEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingFinishEvent.kt:11:3 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingFinishEvent.kt:22:42 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingFinishEvent.kt:23:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingProgressEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingProgressEvent.kt:11:3 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingProgressEvent.kt:22:42 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingProgressEvent.kt:23:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingStartEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java  
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingStartEvent.kt:11:3 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingStartEvent.kt:22:42 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingStartEvent.kt:23:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopMessageEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopMessageEvent.kt:10:75 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopMessageEvent.kt:21:42 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopMessageEvent.kt:22:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopNewWindowEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopNewWindowEvent.kt:11:3 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopNewWindowEvent.kt:22:42 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopNewWindowEvent.kt:23:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopRenderProcessGoneEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopRenderProcessGoneEvent.kt:12:3 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopRenderProcessGoneEvent.kt:23:42 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopRenderProcessGoneEvent.kt:24:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopShouldStartLoadWithRequestEvent.kt:5:44 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopShouldStartLoadWithRequestEvent.kt:10:89 'constructor Event<T : Event<(raw) Event<_>>!>(Int)' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopShouldStartLoadWithRequestEvent.kt:27:42 'RCTEventEmitter' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopShouldStartLoadWithRequestEvent.kt:28:21 'receiveEvent(Int, String!, WritableMap?): Unit' is deprecated. Deprecated in Java

> Task :expo-manifests:compileDebugKotlin
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-manifests/android/src/main/java/expo/modules/manifests/core/EmbeddedManifest.kt:19:16 This declaration overrides deprecated member but not marked as deprecated itself. Please add @Deprecated annotation or suppress. See https://youtrack.jetbrains.com/issue/KT-47902 for details
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-manifests/android/src/main/java/expo/modules/manifests/core/EmbeddedManifest.kt:19:86 'getLegacyID(): String' is deprecated. Prefer scopeKey or projectId depending on use case
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-manifests/android/src/main/java/expo/modules/manifests/core/ExpoUpdatesManifest.kt:16:16 This declaration overrides deprecated member but not marked as deprecated itself. Please add @Deprecated annotation or suppress. See https://youtrack.jetbrains.com/issue/KT-47902 for details
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-manifests/android/src/main/java/expo/modules/manifests/core/Manifest.kt:15:12 'getRawJson(): JSONObject' is deprecated. Prefer to use specific field getters

> Task :expo-image-manipulator:compileDebugKotlin
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-image-manipulator/android/src/main/java/expo/modules/imagemanipulator/ImageManipulatorArguments.kt:78:37 'WEBP' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-image-manipulator/android/src/main/java/expo/modules/imagemanipulator/ImageManipulatorModule.kt:120:13 Name shadowed: options

> Task :expo-dev-menu:compileDebugKotlin
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/debug/java/expo/modules/devmenu/DevMenuManager.kt:18:38 'ReactFontManager' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/debug/java/expo/modules/devmenu/DevMenuManager.kt:205:7 'ReactFontManager' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/debug/java/expo/modules/devmenu/DevMenuManager.kt:429:43 The corresponding parameter in the supertype 'DevMenuManagerInterface' is named 'shouldAutoLaunch'. This may cause problems when calling this function with named arguments.
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/com/facebook/react/devsupport/DevMenuSettingsBase.kt:6:27 'PreferenceManager' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/com/facebook/react/devsupport/DevMenuSettingsBase.kt:18:51 'PreferenceManager' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/com/facebook/react/devsupport/DevMenuSettingsBase.kt:18:69 'getDefaultSharedPreferences(Context!): SharedPreferences!' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/com/facebook/react/devsupport/DevMenuSettingsBase.kt:56:16 This declaration overrides deprecated member but not marked as deprecated itself. Please add @Deprecated annotation or suppress. See https://youtrack.jetbrains.com/issue/KT-47902 for details
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/expo/modules/devmenu/fab/MovableFloatingActionButton.kt:173:17 'computeBounds(RectF, Boolean): Unit' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/expo/modules/devmenu/helpers/DevMenuOkHttpExtension.kt:58:19 'create(MediaType?, String): RequestBody' is deprecated. Moved to extension function. Put the 'content' argument first to fix Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/expo/modules/devmenu/modules/DevMenuModule.kt:33:44 Elvis operator (?:) always returns the left operand of non-nullable type ReadableMap
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/react-native-74/main/expo/modules/devmenu/react/DevMenuPackagerConnectionSettings.kt:16:9 Parameter 'host' is never used
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/vendored/react-native-safe-area-context/android/devmenu/com/th3rdwave/safeareacontext/SafeAreaProviderManager.kt:5:34 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/vendored/react-native-safe-area-context/android/devmenu/com/th3rdwave/safeareacontext/SafeAreaProviderManager.kt:29:14 'MapBuilder' is deprecated. Deprecated in Java

> Task :expo-dev-menu:compileDebugJavaWithJavac
> Note: Some input files use or override a deprecated API.
> Note: Recompile with -Xlint:deprecation for details.
> The message received from the daemon indicates that the daemon has disappeared.
> Build request sent: Build{id=861563cb-5aac-4da6-bc4b-3c1f2026f224, currentDir=C:\Users\lauri\tarot\frontend\android}
> Attempting to read last messages from the daemon log...
> Daemon pid: 15276
> log file: C:\Users\lauri\.gradle\daemon\8.10.2\daemon-15276.out.log
> ----- Last 20 lines from daemon log file - daemon-15276.out.log -----
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-manifests/android/src/main/java/expo/modules/manifests/core/EmbeddedManifest.kt:19:86 'getLegacyID(): String' is deprecated. Prefer scopeKey or projectId depending on use case
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-manifests/android/src/main/java/expo/modules/manifests/core/ExpoUpdatesManifest.kt:16:16 This declaration overrides deprecated member but not marked as deprecated itself. Please add @Deprecated annotation or suppress. See https://youtrack.jetbrains.com/issue/KT-47902 for details
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-manifests/android/src/main/java/expo/modules/manifests/core/Manifest.kt:15:12 'getRawJson(): JSONObject' is deprecated. Prefer to use specific field getters
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-image-manipulator/android/src/main/java/expo/modules/imagemanipulator/ImageManipulatorArguments.kt:78:37 'WEBP' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-image-manipulator/android/src/main/java/expo/modules/imagemanipulator/ImageManipulatorModule.kt:120:13 Name shadowed: options
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/debug/java/expo/modules/devmenu/DevMenuManager.kt:18:38 'ReactFontManager' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/debug/java/expo/modules/devmenu/DevMenuManager.kt:205:7 'ReactFontManager' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/debug/java/expo/modules/devmenu/DevMenuManager.kt:429:43 The corresponding parameter in the supertype 'DevMenuManagerInterface' is named 'shouldAutoLaunch'. This may cause problems when calling this function with named arguments.
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/com/facebook/react/devsupport/DevMenuSettingsBase.kt:6:27 'PreferenceManager' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/com/facebook/react/devsupport/DevMenuSettingsBase.kt:18:51 'PreferenceManager' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/com/facebook/react/devsupport/DevMenuSettingsBase.kt:18:69 'getDefaultSharedPreferences(Context!): SharedPreferences!' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/com/facebook/react/devsupport/DevMenuSettingsBase.kt:56:16 This declaration overrides deprecated member but not marked as deprecated itself. Please add @Deprecated annotation or suppress. See https://youtrack.jetbrains.com/issue/KT-47902 for details
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/expo/modules/devmenu/fab/MovableFloatingActionButton.kt:173:17 'computeBounds(RectF, Boolean): Unit' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/expo/modules/devmenu/helpers/DevMenuOkHttpExtension.kt:58:19 'create(MediaType?, String): RequestBody' is deprecated. Moved to extension function. Put the 'content' argument first to fix Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/main/java/expo/modules/devmenu/modules/DevMenuModule.kt:33:44 Elvis operator (?:) always returns the left operand of non-nullable type ReadableMap
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/android/src/react-native-74/main/expo/modules/devmenu/react/DevMenuPackagerConnectionSettings.kt:16:9 Parameter 'host' is never used
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/vendored/react-native-safe-area-context/android/devmenu/com/th3rdwave/safeareacontext/SafeAreaProviderManager.kt:5:34 'MapBuilder' is deprecated. Deprecated in Java
> w: file:///C:/Users/lauri/tarot/frontend/node_modules/expo-dev-menu/vendored/react-native-safe-area-context/android/devmenu/com/th3rdwave/safeareacontext/SafeAreaProviderManager.kt:29:14 'MapBuilder' is deprecated. Deprecated in Java
> Note: Some input files use or override a deprecated API.
> Note: Recompile with -Xlint:deprecation for details.----- End of the daemon log -----

JVM crash log found: file:///C:/Users/lauri/tarot/frontend/android/hs_err_pid15276.log

FAILURE: Build failed with an exception.

- What went wrong:
  Gradle build daemon disappeared unexpectedly (it may have been killed or may have crashed)

- Try:
  > Run with --stacktrace option to get the stack trace.
  > Run with --info or --debug option to get more log output.
  > Run with --scan to get full insights.
  > Get more help at https://help.gradle.org.
  > Error: C:\Users\lauri\tarot\frontend\android\gradlew.bat app:assembleDebug -x lint -x test --configure-on-demand --build-cache -PreactNativeDevServerPort=8081 -PreactNativeArchitectures=arm64-v8a,armeabi-v7a exited with non-zero code: 1
  > Error: C:\Users\lauri\tarot\frontend\android\gradlew.bat app:assembleDebug -x lint -x test --configure-on-demand --build-cache -PreactNativeDevServerPort=8081 -PreactNativeArchitectures=arm64-v8a,armeabi-v7a exited with non-zero code: 1
      at ChildProcess.completionListener (C:\Users\lauri\tarot\frontend\node_modules\@expo\spawn-async\src\spawnAsync.ts:67:13)
      at Object.onceWrapper (node:events:632:26)
      at ChildProcess.emit (node:events:517:28)
      at ChildProcess.cp.emit (C:\Users\lauri\tarot\frontend\node_modules\cross-spawn\lib\enoent.js:34:29)
      at maybeClose (node:internal/child_process:1098:16)
      at Process.ChildProcess._handle.onexit (node:internal/child_process:303:5)
      ...
      at spawnAsync (C:\Users\lauri\tarot\frontend\node_modules\@expo\spawn-async\src\spawnAsync.ts:28:21)
      at spawnGradleAsync (C:\Users\lauri\tarot\frontend\node_modules\@expo\cli\src\start\platforms\android\gradle.ts:134:28)
      at assembleAsync (C:\Users\lauri\tarot\frontend\node_modules\@expo\cli\src\start\platforms\android\gradle.ts:83:16)
      at runAndroidAsync (C:\Users\lauri\tarot\frontend\node_modules\@expo\cli\src\run\android\runAndroidAsync.ts:48:24)

lauri@WINDOWS-MMO3SPS MINGW64 ~/tarot/frontend (main)

#

# A fatal error has been detected by the Java Runtime Environment:

#

# EXCEPTION_ACCESS_VIOLATION (0xc0000005) at pc=0x00007ffb5c1b5c4b, pid=15276, tid=9680

#

# JRE version: OpenJDK Runtime Environment Microsoft-10800295 (17.0.14+7) (build 17.0.14+7-LTS)

# Java VM: OpenJDK 64-Bit Server VM Microsoft-10800295 (17.0.14+7-LTS, mixed mode, sharing, tiered, compressed oops, compressed class ptrs, g1 gc, windows-amd64)

# Problematic frame:

# V [jvm.dll+0x225c4b]

#

# No core dump will be written. Minidumps are not enabled by default on client versions of Windows

#

# If you would like to submit a bug report, please visit:

# https://github.com/microsoft/openjdk/issues

#

--------------- S U M M A R Y ------------

Command Line: -XX:MaxMetaspaceSize=512m --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.lang.invoke=ALL-UNNAMED --add-opens=java.prefs/java.util.prefs=ALL-UNNAMED --add-exports=jdk.compiler/com.sun.tools.javac.api=ALL-UNNAMED --add-exports=jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED --add-opens=java.base/java.nio.charset=ALL-UNNAMED --add-opens=java.base/java.net=ALL-UNNAMED --add-opens=java.base/java.util.concurrent.atomic=ALL-UNNAMED -Xmx2048m -Dfile.encoding=windows-1252 -Duser.country=DE -Duser.language=de -Duser.variant -javaagent:C:\Users\lauri\.gradle\wrapper\dists\gradle-8.10.2-all\7iv73wktx1xtkvlq19urqw1wm\gradle-8.10.2\lib\agents\gradle-instrumentation-agent-8.10.2.jar org.gradle.launcher.daemon.bootstrap.GradleDaemon 8.10.2

Host: Intel(R) Core(TM) i5-8365U CPU @ 1.60GHz, 8 cores, 7G, Windows 11 , 64 bit Build 26100 (10.0.26100.2454)
Time: Tue Apr 1 12:44:03 2025 Mitteleurop�ische Sommerzeit elapsed time: 888.171044 seconds (0d 0h 14m 48s)

--------------- T H R E A D ---------------

Current thread (0x00000284396c4a00): JavaThread "C2 CompilerThread0" daemon [_thread_in_native, id=9680, stack(0x000000b96b800000,0x000000b96b900000)]

Current CompileTask:
C2: 888171 58387 4 org.jetbrains.org.objectweb.asm.ClassReader::readMethod (1061 bytes)

Stack: [0x000000b96b800000,0x000000b96b900000], sp=0x000000b96b8fad30, free space=1003k
Native frames: (J=compiled Java code, j=interpreted, Vv=VM code, C=native code)
V [jvm.dll+0x225c4b]
V [jvm.dll+0x5af48b]
V [jvm.dll+0x5a7c6c]
V [jvm.dll+0x2bd966]
V [jvm.dll+0x2bd010]
V [jvm.dll+0x2ba235]
V [jvm.dll+0x2ba83a]
V [jvm.dll+0x21c0cf]
V [jvm.dll+0x219b1b]
V [jvm.dll+0x1a5596]
V [jvm.dll+0x22a27a]
V [jvm.dll+0x2283bb]
V [jvm.dll+0x7f4f48]
V [jvm.dll+0x7ef2ac]
V [jvm.dll+0x687597]
C [ucrtbase.dll+0x14ea0]
C [KERNEL32.DLL+0x2e8d7]
C [ntdll.dll+0xdfbcc]

siginfo: EXCEPTION_ACCESS_VIOLATION (0xc0000005), reading address 0x0000000000000010

Registers:
RAX=0x0000028475e10008, RBX=0x0000028476c97658, RCX=0x000000b96b8fe5f0, RDX=0x0000000000000000
RSP=0x000000b96b8fad30, RBP=0x0000000000000041, RSI=0x000000000000000a, RDI=0x00000284395987a8
R8 =0x0000000000000000, R9 =0x0000000000000000, R10=0x00007ffb7d120000, R11=0x0000000000000000
R12=0x000000000000000c, R13=0x0000000000000000, R14=0x000000b96b8faf70, R15=0x000000000000000a
RIP=0x00007ffb5c1b5c4b, EFLAGS=0x0000000000010206

Register to memory mapping:

RIP=0x00007ffb5c1b5c4b jvm.dll
RAX=0x0000028475e10008 points into unknown readable memory: 0x0000000000000041 | 41 00 00 00 00 00 00 00
RBX=0x0000028476c97658 points into unknown readable memory: 0x00007ffb5c937bb8 | b8 7b 93 5c fb 7f 00 00
RCX=0x000000b96b8fe5f0 is pointing into the stack for thread: 0x00000284396c4a00
RDX=0x0 is NULL
RSP=0x000000b96b8fad30 is pointing into the stack for thread: 0x00000284396c4a00
RBP=0x0000000000000041 is an unknown value
RSI=0x000000000000000a is an unknown value
RDI=0x00000284395987a8 points into unknown readable memory: 0x00007ffb5c967d68 | 68 7d 96 5c fb 7f 00 00
R8 =0x0 is NULL
R9 =0x0 is NULL
R10=0x00007ffb7d120000 VCRUNTIME140.dll
R11=0x0 is NULL
R12=0x000000000000000c is an unknown value
R13=0x0 is NULL
R14=0x000000b96b8faf70 is pointing into the stack for thread: 0x00000284396c4a00
R15=0x000000000000000a is an unknown value

Top of Stack: (sp=0x000000b96b8fad30)
0x000000b96b8fad30: 0000028439598488 00007ffb5c23625a
0x000000b96b8fad40: 000000000000000a 0000000000000000
0x000000b96b8fad50: 0000028476c97658 00007ffb5c53f48b
0x000000b96b8fad60: 0000028439598488 00000284395987a8
0x000000b96b8fad70: 0000000000000020 0000000000000050
0x000000b96b8fad80: 0000000000000000 0000028439598488
0x000000b96b8fad90: 0000028439598488 00007ffb5c7931c0
0x000000b96b8fada0: 000000008000b080 000002843959b968
0x000000b96b8fadb0: 0000028475275620 000002841b2314e0
0x000000b96b8fadc0: 000000000000000a 000002845f5ccee0
0x000000b96b8fadd0: 0000028439598488 00007ffb5c790c11
0x000000b96b8fade0: 000000000000000c 000000000000000a
0x000000b96b8fadf0: 000002845f5ccee0 0000000000000000
0x000000b96b8fae00: 0000028439598488 00000284396dbbf0
0x000000b96b8fae10: 000000b96b8faf70 0000028439709440
0x000000b96b8fae20: 000002845d2d2080 00007ffb5c537c6c
0x000000b96b8fae30: 0000028400000041 0000028476c97658
0x000000b96b8fae40: 000002845f5cd230 00007ffb0000000a
0x000000b96b8fae50: 0000028439709440 00000284395987a8
0x000000b96b8fae60: 0000028439a1ad40 00007ffb5c23625a
0x000000b96b8fae70: 0000000000000000 0000000000000000
0x000000b96b8fae80: 00000284761001f0 000002841b231530
0x000000b96b8fae90: 0000000000000004 0000000000000001
0x000000b96b8faea0: 000002847c25be78 00007ffb5c00a354
0x000000b96b8faeb0: 000002845e58e620 000002847c25be78
0x000000b96b8faec0: 000002847c25c138 00000284778fe340
0x000000b96b8faed0: 000002845f5ccee0 000002845e58e620
0x000000b96b8faee0: 0000000000000006 0000000000000000
0x000000b96b8faef0: 0000000000000001 000002847c25c138
0x000000b96b8faf00: 0000028439a1ad40 00007ffb5c24d966
0x000000b96b8faf10: 000000b96b8faf70 0000028439a1ad40
0x000000b96b8faf20: 0000028400000000 000002847c25c1a8

Instructions: (pc=0x00007ffb5c1b5c4b)
0x00007ffb5c1b5b4b: cc cc cc cc cc 48 89 5c 24 08 57 48 83 ec 20 bb
0x00007ffb5c1b5b5b: 01 00 00 00 48 8b f9 39 99 f0 01 00 00 7e 62 66
0x00007ffb5c1b5b6b: 0f 1f 44 00 00 4c 8b 87 f8 01 00 00 8d 43 ff 48
0x00007ffb5c1b5b7b: 63 d0 48 63 c3 49 8d 14 d0 49 8d 0c c0 e8 b3 79
0x00007ffb5c1b5b8b: ff ff 85 c0 78 15 ff c3 3b 9f f0 01 00 00 7c d5
0x00007ffb5c1b5b9b: 48 8b 5c 24 30 48 83 c4 20 5f c3 48 8b 8f f8 01
0x00007ffb5c1b5bab: 00 00 48 85 c9 74 1a 48 63 97 f0 01 00 00 4c 8d
0x00007ffb5c1b5bbb: 0d 80 79 ff ff 41 b8 08 00 00 00 ff 15 64 7d 67
0x00007ffb5c1b5bcb: 00 48 8b 5c 24 30 48 83 c4 20 5f c3 cc cc cc cc
0x00007ffb5c1b5bdb: cc cc cc cc cc 48 89 5c 24 08 48 63 99 a8 01 00
0x00007ffb5c1b5beb: 00 4c 8b d9 48 85 db 7e 46 33 c0 44 8b c0 0f 1f
0x00007ffb5c1b5bfb: 80 00 00 00 00 4d 8b 8b b0 01 00 00 4d 8b 14 c1
0x00007ffb5c1b5c0b: 41 8b 4a 2c 83 e1 3f 80 f9 27 75 1b 49 3b c0 74
0x00007ffb5c1b5c1b: 13 4b 8b 14 c1 4f 89 14 c1 49 8b 8b b0 01 00 00
0x00007ffb5c1b5c2b: 48 89 14 c1 49 ff c0 48 ff c0 48 3b c3 7c c6 48
0x00007ffb5c1b5c3b: 8b 5c 24 08 c3 48 83 ec 28 48 8b 91 d0 02 00 00
0x00007ffb5c1b5c4b: 48 8b 42 10 8b 4a 20 4c 8d 04 c8 49 3b c0 73 1c
0x00007ffb5c1b5c5b: 0f 1f 44 00 00 48 8b 10 8b 4a 2c 83 e1 0f 80 f9
0x00007ffb5c1b5c6b: 09 74 33 48 83 c0 08 49 3b c0 72 e9 4c 8d 0d 02
0x00007ffb5c1b5c7b: 50 72 00 41 b8 50 04 00 00 48 8d 15 15 50 72 00
0x00007ffb5c1b5c8b: b9 00 00 00 e0 e8 ab 35 02 00 e8 26 25 46 00 33
0x00007ffb5c1b5c9b: c0 48 83 c4 28 c3 48 8b c2 48 83 c4 28 c3 cc cc
0x00007ffb5c1b5cab: cc cc cc cc cc 48 89 5c 24 08 48 89 6c 24 10 48
0x00007ffb5c1b5cbb: 89 74 24 18 48 89 7c 24 20 41 56 48 83 ec 20 48
0x00007ffb5c1b5ccb: 3b 15 e7 f2 95 00 49 8b f0 48 8b fa 48 8b e9 0f
0x00007ffb5c1b5cdb: 84 1a 01 00 00 48 8b 02 48 8b ca 48 8b da 4d 8b
0x00007ffb5c1b5ceb: f0 ff 50 58 84 c0 74 0b 48 8b cb e8 95 c8 f9 ff
0x00007ffb5c1b5cfb: 48 8b d8 48 8b 16 48 8b ce ff 52 58 84 c0 74 0b
0x00007ffb5c1b5d0b: 48 8b ce e8 7d c8 f9 ff 4c 8b f0 48 8b 16 48 8b
0x00007ffb5c1b5d1b: ce ff 92 b8 00 00 00 84 c0 75 60 48 8b d7 48 8b
0x00007ffb5c1b5d2b: ce e8 6f 5c fa ff 84 c0 0f 85 c1 00 00 00 48 8b
0x00007ffb5c1b5d3b: 03 48 8b cb ff 50 48 84 c0 74 10 48 8b 03 48 8b

Stack slot to memory mapping:
stack at sp + 0 slots: 0x0000028439598488 points into unknown readable memory: 0x00007ffb5c967d68 | 68 7d 96 5c fb 7f 00 00
stack at sp + 1 slots: 0x00007ffb5c23625a jvm.dll
stack at sp + 2 slots: 0x000000000000000a is an unknown value
stack at sp + 3 slots: 0x0 is NULL
stack at sp + 4 slots: 0x0000028476c97658 points into unknown readable memory: 0x00007ffb5c937bb8 | b8 7b 93 5c fb 7f 00 00
stack at sp + 5 slots: 0x00007ffb5c53f48b jvm.dll
stack at sp + 6 slots: 0x0000028439598488 points into unknown readable memory: 0x00007ffb5c967d68 | 68 7d 96 5c fb 7f 00 00
stack at sp + 7 slots: 0x00000284395987a8 points into unknown readable memory: 0x00007ffb5c967d68 | 68 7d 96 5c fb 7f 00 00

--------------- P R O C E S S ---------------

Threads class SMR info:
\_java_thread_list=0x000002847dc3f280, length=179, elements={
0x000002841b2208c0, 0x00000284396a4d60, 0x00000284396a6840, 0x00000284396bfbe0,
0x00000284396c24c0, 0x00000284396c2d90, 0x00000284396c3660, 0x00000284396c4a00,
0x00000284396c7f70, 0x00000284396cb030, 0x00000284397caf10, 0x0000028439888d90,
0x0000028459dc5580, 0x0000028459dc5a90, 0x0000028459dc64b0, 0x0000028459dc8310,
0x0000028459dc8820, 0x0000028459dc69c0, 0x0000028459dc6ed0, 0x0000028459dc73e0,
0x0000028459dc5070, 0x0000028459dc78f0, 0x000002845acb9300, 0x000002845acb6570,
0x000002845acb7ec0, 0x000002845acb74a0, 0x000002845acb6a80, 0x000002845acb6f90,
0x000002845acb79b0, 0x000002845acb83d0, 0x000002845acb88e0, 0x000002845acb8df0,
0x000002845acb9810, 0x000002845acbac50, 0x000002845acbb160, 0x000002845acbbb80,
0x000002845acbcab0, 0x000002845acbcfc0, 0x000002845acba230, 0x000002845acbc090,
0x000002845acbd4d0, 0x000002845acba740, 0x0000028459dc5fa0, 0x0000028459029eb0,
0x0000028459029490, 0x0000028459028560, 0x000002845902bd10, 0x00000284590299a0,
0x000002845902a3c0, 0x000002845902a8d0, 0x000002845902ade0, 0x000002845902b800,
0x000002845902b2f0, 0x000002845902c220, 0x0000028459028a70, 0x000002845902c730,
0x0000028459028f80, 0x000002845902cc40, 0x000002845902d660, 0x000002845902db70,
0x000002845902fee0, 0x000002845902e080, 0x000002845902e590, 0x000002845902efb0,
0x000002845afd3630, 0x000002845afd0390, 0x000002845afcfe80, 0x000002845afd0db0,
0x000002845afd12c0, 0x000002845cd9b200, 0x000002845cd9bc20, 0x000002845cd9c640,
0x000002845cd9a7e0, 0x000002845cd9cb50, 0x000002845cd9d570, 0x000002845cd9c130,
0x000002845cd99dc0, 0x000002845cd9d060, 0x000002845cd9da80, 0x000002845cd9a2d0,
0x000002845cd9e4a0, 0x000002845cd9df90, 0x000002845cd9acf0, 0x000002845cd9e9b0,
0x000002845cd9b710, 0x000002845cd9f3d0, 0x000002845cda1230, 0x000002845cd9eec0,
0x000002845cd9f8e0, 0x000002845cd9fdf0, 0x000002845cda0300, 0x000002845cda0810,
0x000002845cda0d20, 0x000002845cda1740, 0x0000028459dc7e00, 0x000002845e499b80,
0x000002845e49afc0, 0x000002845e49a5a0, 0x000002845e49b9e0, 0x000002845e499160,
0x000002845e49a090, 0x000002845e49aab0, 0x000002845e49b4d0, 0x000002845e49bef0,
0x000002845e499670, 0x000002845e498740, 0x000002845e49c400, 0x000002845e498c50,
0x000002845e49dd50, 0x000002845e49f6a0, 0x000002845e49e260, 0x000002845e49fbb0,
0x000002845e49e770, 0x000002845e49d330, 0x000002845e4a00c0, 0x000002845e49c910,
0x000002845e49ce20, 0x000002845e49f190, 0x000002845e49ec80, 0x000002845bc32ac0,
0x000002845bc34e30, 0x000002845bc334e0, 0x000002845bc35d60, 0x000002845bc339f0,
0x000002845bc36c90, 0x000002845bc371a0, 0x000002845bc376b0, 0x000002845bc35340,
0x000002845bc33f00, 0x000002845bc37bc0, 0x000002845bc34410, 0x000002845bc39510,
0x000002845bc39f30, 0x000002845e0672d0, 0x000002845e065e90, 0x00000284646e7cc0,
0x000002846ce5c670, 0x000002845fa35820, 0x000002845fa36750, 0x0000028464e4ff60,
0x00000284649c7fb0, 0x00000284649c84c0, 0x000002846ce5c160, 0x0000028472e6af30,
0x000002846cef8800, 0x000002847256c1b0, 0x0000028474bf5f90, 0x0000028472e6a510,
0x000002845afd08a0, 0x000002845fa35d30, 0x000002846cea5af0, 0x000002845afd1ce0,
0x0000028476ee3810, 0x000002846cc9bef0, 0x000002846cc9afc0, 0x000002846cc9c400,
0x000002846cc9c910, 0x000002846cc9d330, 0x000002846cc9b9e0, 0x000002846cc9ce20,
0x0000028474bf5570, 0x000002846cea3270, 0x0000028474fca3f0, 0x000002845afd2c10,
0x000002845afd3120, 0x000002845bc34920, 0x000002845bc36270, 0x000002845bc36780,
0x0000028472e6aa20, 0x00000284760c7810, 0x00000284760c59b0, 0x0000028474fc8aa0,
0x000002845bc35850, 0x000002845acb6060, 0x0000028474fcae10, 0x000002846cea55e0,
0x000002846cea4bc0, 0x000002846cea2d60, 0x0000028472f44dd0
}

Java Threads: ( => current thread )
0x000002841b2208c0 JavaThread "main" [_thread_blocked, id=22968, stack(0x000000b96ab00000,0x000000b96ac00000)]
0x00000284396a4d60 JavaThread "Reference Handler" daemon [_thread_blocked, id=10064, stack(0x000000b96b200000,0x000000b96b300000)]
0x00000284396a6840 JavaThread "Finalizer" daemon [_thread_blocked, id=21572, stack(0x000000b96b300000,0x000000b96b400000)]
0x00000284396bfbe0 JavaThread "Signal Dispatcher" daemon [_thread_blocked, id=24032, stack(0x000000b96b400000,0x000000b96b500000)]
0x00000284396c24c0 JavaThread "Attach Listener" daemon [_thread_blocked, id=14264, stack(0x000000b96b500000,0x000000b96b600000)]
0x00000284396c2d90 JavaThread "Service Thread" daemon [_thread_blocked, id=11416, stack(0x000000b96b600000,0x000000b96b700000)]
0x00000284396c3660 JavaThread "Monitor Deflation Thread" daemon [_thread_blocked, id=25932, stack(0x000000b96b700000,0x000000b96b800000)]
=>0x00000284396c4a00 JavaThread "C2 CompilerThread0" daemon [_thread_in_native, id=9680, stack(0x000000b96b800000,0x000000b96b900000)]
0x00000284396c7f70 JavaThread "C1 CompilerThread0" daemon [_thread_blocked, id=20116, stack(0x000000b96b900000,0x000000b96ba00000)]
0x00000284396cb030 JavaThread "Sweeper thread" daemon [_thread_blocked, id=23904, stack(0x000000b96ba00000,0x000000b96bb00000)]
0x00000284397caf10 JavaThread "Common-Cleaner" daemon [_thread_blocked, id=23732, stack(0x000000b96bb00000,0x000000b96bc00000)]
0x0000028439888d90 JavaThread "Notification Thread" daemon [_thread_blocked, id=26272, stack(0x000000b96bc00000,0x000000b96bd00000)]
0x0000028459dc5580 JavaThread "Daemon health stats" [_thread_blocked, id=21536, stack(0x000000b96bf00000,0x000000b96c000000)]
0x0000028459dc5a90 JavaThread "Incoming local TCP Connector on port 50945" [_thread_in_native, id=21756, stack(0x000000b96be00000,0x000000b96bf00000)]
0x0000028459dc64b0 JavaThread "Daemon periodic checks" [_thread_blocked, id=13032, stack(0x000000b96c400000,0x000000b96c500000)]
0x0000028459dc8310 JavaThread "Daemon" [_thread_blocked, id=11736, stack(0x000000b96c500000,0x000000b96c600000)]
0x0000028459dc8820 JavaThread "Handler for socket connection from /127.0.0.1:50945 to /127.0.0.1:50947" [_thread_in_native, id=8556, stack(0x000000b96c600000,0x000000b96c700000)]
0x0000028459dc69c0 JavaThread "Cancel handler" [_thread_blocked, id=17716, stack(0x000000b96c700000,0x000000b96c800000)]
0x0000028459dc6ed0 JavaThread "Daemon worker" [_thread_blocked, id=19620, stack(0x000000b96c800000,0x000000b96c900000)]
0x0000028459dc73e0 JavaThread "Asynchronous log dispatcher for DefaultDaemonConnection: socket connection from /127.0.0.1:50945 to /127.0.0.1:50947" [_thread_blocked, id=9252, stack(0x000000b96c900000,0x000000b96ca00000)]
0x0000028459dc5070 JavaThread "Stdin handler" [_thread_blocked, id=15916, stack(0x000000b96ca00000,0x000000b96cb00000)]
0x0000028459dc78f0 JavaThread "Daemon client event forwarder" [_thread_blocked, id=23300, stack(0x000000b96cb00000,0x000000b96cc00000)]
0x000002845acb9300 JavaThread "Cache worker for journal cache (C:\Users\lauri\.gradle\caches\journal-1)" [_thread_blocked, id=5076, stack(0x000000b96cc00000,0x000000b96cd00000)]
0x000002845acb6570 JavaThread "File lock request listener" [_thread_in_native, id=3056, stack(0x000000b96cd00000,0x000000b96ce00000)]
0x000002845acb7ec0 JavaThread "Cache worker for file hash cache (C:\Users\lauri\.gradle\caches\8.10.2\fileHashes)" [_thread_blocked, id=17428, stack(0x000000b96ce00000,0x000000b96cf00000)]
0x000002845acb74a0 JavaThread "Cache worker for file hash cache (C:\Users\lauri\tarot\frontend\android\.gradle\8.10.2\fileHashes)" [_thread_blocked, id=23864, stack(0x000000b96d400000,0x000000b96d500000)]
0x000002845acb6a80 JavaThread "Cache worker for Build Output Cleanup Cache (C:\Users\lauri\tarot\frontend\android\.gradle\buildOutputCleanup)" [_thread_blocked, id=16988, stack(0x000000b96d500000,0x000000b96d600000)]
0x000002845acb6f90 JavaThread "File watcher server" daemon [_thread_in_native, id=2816, stack(0x000000b96d700000,0x000000b96d800000)]
0x000002845acb79b0 JavaThread "File watcher consumer" daemon [_thread_blocked, id=9288, stack(0x000000b96d800000,0x000000b96d900000)]
0x000002845acb83d0 JavaThread "Cache worker for checksums cache (C:\Users\lauri\tarot\frontend\android\.gradle\8.10.2\checksums)" [_thread_blocked, id=10324, stack(0x000000b96d900000,0x000000b96da00000)]
0x000002845acb88e0 JavaThread "Cache worker for file content cache (C:\Users\lauri\.gradle\caches\8.10.2\fileContent)" [_thread_blocked, id=6188, stack(0x000000b96da00000,0x000000b96db00000)]
0x000002845acb8df0 JavaThread "Cache worker for cache directory md-rule (C:\Users\lauri\.gradle\caches\8.10.2\md-rule)" [_thread_blocked, id=11272, stack(0x000000b96db00000,0x000000b96dc00000)]
0x000002845acb9810 JavaThread "Cache worker for cache directory md-supplier (C:\Users\lauri\.gradle\caches\8.10.2\md-supplier)" [_thread_blocked, id=1876, stack(0x000000b96dc00000,0x000000b96dd00000)]
0x000002845acbac50 JavaThread "jar transforms" [_thread_blocked, id=21816, stack(0x000000b96dd00000,0x000000b96de00000)]
0x000002845acbb160 JavaThread "Cache worker for Build Output Cleanup Cache (C:\Users\lauri\tarot\frontend\node_modules\@react-native\gradle-plugin\.gradle\buildOutputCleanup)" [_thread_blocked, id=352, stack(0x000000b96de00000,0x000000b96df00000)]
0x000002845acbbb80 JavaThread "Unconstrained build operations" [_thread_blocked, id=6968, stack(0x000000b96df00000,0x000000b96e000000)]
0x000002845acbcab0 JavaThread "Unconstrained build operations Thread 2" [_thread_blocked, id=15680, stack(0x000000b96e000000,0x000000b96e100000)]
0x000002845acbcfc0 JavaThread "Unconstrained build operations Thread 3" [_thread_blocked, id=8904, stack(0x000000b96e100000,0x000000b96e200000)]
0x000002845acba230 JavaThread "Unconstrained build operations Thread 4" [_thread_blocked, id=26332, stack(0x000000b96e200000,0x000000b96e300000)]
0x000002845acbc090 JavaThread "Unconstrained build operations Thread 5" [_thread_blocked, id=17424, stack(0x000000b96e300000,0x000000b96e400000)]
0x000002845acbd4d0 JavaThread "Unconstrained build operations Thread 6" [_thread_blocked, id=12468, stack(0x000000b96e400000,0x000000b96e500000)]
0x000002845acba740 JavaThread "Unconstrained build operations Thread 7" [_thread_blocked, id=16092, stack(0x000000b96e500000,0x000000b96e600000)]
0x0000028459dc5fa0 JavaThread "Unconstrained build operations Thread 8" [_thread_blocked, id=3172, stack(0x000000b96e600000,0x000000b96e700000)]
0x0000028459029eb0 JavaThread "Unconstrained build operations Thread 9" [_thread_blocked, id=9008, stack(0x000000b96e700000,0x000000b96e800000)]
0x0000028459029490 JavaThread "Unconstrained build operations Thread 10" [_thread_blocked, id=21952, stack(0x000000b96e800000,0x000000b96e900000)]
0x0000028459028560 JavaThread "Unconstrained build operations Thread 11" [_thread_blocked, id=15880, stack(0x000000b96e900000,0x000000b96ea00000)]
0x000002845902bd10 JavaThread "Unconstrained build operations Thread 12" [_thread_blocked, id=24248, stack(0x000000b96ea00000,0x000000b96eb00000)]
0x00000284590299a0 JavaThread "Unconstrained build operations Thread 13" [_thread_blocked, id=10044, stack(0x000000b96eb00000,0x000000b96ec00000)]
0x000002845902a3c0 JavaThread "Unconstrained build operations Thread 14" [_thread_blocked, id=19988, stack(0x000000b96ec00000,0x000000b96ed00000)]
0x000002845902a8d0 JavaThread "Unconstrained build operations Thread 15" [_thread_blocked, id=4748, stack(0x000000b96ed00000,0x000000b96ee00000)]
0x000002845902ade0 JavaThread "Unconstrained build operations Thread 16" [_thread_blocked, id=6888, stack(0x000000b96ee00000,0x000000b96ef00000)]
0x000002845902b800 JavaThread "Unconstrained build operations Thread 17" [_thread_blocked, id=10920, stack(0x000000b96ef00000,0x000000b96f000000)]
0x000002845902b2f0 JavaThread "Unconstrained build operations Thread 18" [_thread_blocked, id=19880, stack(0x000000b96f000000,0x000000b96f100000)]
0x000002845902c220 JavaThread "Unconstrained build operations Thread 19" [_thread_blocked, id=18104, stack(0x000000b96f100000,0x000000b96f200000)]
0x0000028459028a70 JavaThread "Unconstrained build operations Thread 20" [_thread_blocked, id=12632, stack(0x000000b96f200000,0x000000b96f300000)]
0x000002845902c730 JavaThread "Unconstrained build operations Thread 21" [_thread_blocked, id=2508, stack(0x000000b96f300000,0x000000b96f400000)]
0x0000028459028f80 JavaThread "Unconstrained build operations Thread 22" [_thread_blocked, id=4812, stack(0x000000b96f400000,0x000000b96f500000)]
0x000002845902cc40 JavaThread "Unconstrained build operations Thread 23" [_thread_blocked, id=3844, stack(0x000000b96f500000,0x000000b96f600000)]
0x000002845902d660 JavaThread "Unconstrained build operations Thread 24" [_thread_blocked, id=7184, stack(0x000000b96f600000,0x000000b96f700000)]
0x000002845902db70 JavaThread "Unconstrained build operations Thread 25" [_thread_blocked, id=16628, stack(0x000000b96f700000,0x000000b96f800000)]
0x000002845902fee0 JavaThread "Unconstrained build operations Thread 26" [_thread_blocked, id=23788, stack(0x000000b96f800000,0x000000b96f900000)]
0x000002845902e080 JavaThread "Unconstrained build operations Thread 27" [_thread_blocked, id=24280, stack(0x000000b96f900000,0x000000b96fa00000)]
0x000002845902e590 JavaThread "Memory manager" [_thread_blocked, id=13044, stack(0x000000b96fa00000,0x000000b96fb00000)]
0x000002845902efb0 JavaThread "build event listener" [_thread_blocked, id=3200, stack(0x000000b96fb00000,0x000000b96fc00000)]
0x000002845afd3630 JavaThread "Execution worker" [_thread_blocked, id=16192, stack(0x000000b970600000,0x000000b970700000)]
0x000002845afd0390 JavaThread "Execution worker Thread 2" [_thread_blocked, id=21988, stack(0x000000b970700000,0x000000b970800000)]
0x000002845afcfe80 JavaThread "Execution worker Thread 3" [_thread_blocked, id=19488, stack(0x000000b970800000,0x000000b970900000)]
0x000002845afd0db0 JavaThread "Execution worker Thread 4" [_thread_blocked, id=22248, stack(0x000000b970900000,0x000000b970a00000)]
0x000002845afd12c0 JavaThread "Execution worker Thread 5" [_thread_in_Java, id=26444, stack(0x000000b970a00000,0x000000b970b00000)]
0x000002845cd9b200 JavaThread "Execution worker Thread 6" [_thread_blocked, id=4896, stack(0x000000b970b00000,0x000000b970c00000)]
0x000002845cd9bc20 JavaThread "Execution worker Thread 7" [_thread_blocked, id=18908, stack(0x000000b970c00000,0x000000b970d00000)]
0x000002845cd9c640 JavaThread "Cache worker for execution history cache (C:\Users\lauri\tarot\frontend\node_modules\@react-native\gradle-plugin\.gradle\8.10.2\executionHistory)" [_thread_blocked, id=19304, stack(0x000000b970d00000,0x000000b970e00000)]
0x000002845cd9a7e0 JavaThread "Unconstrained build operations Thread 28" [_thread_blocked, id=20964, stack(0x000000b970e00000,0x000000b970f00000)]
0x000002845cd9cb50 JavaThread "Unconstrained build operations Thread 29" [_thread_blocked, id=25048, stack(0x000000b970f00000,0x000000b971000000)]
0x000002845cd9d570 JavaThread "Unconstrained build operations Thread 30" [_thread_blocked, id=3188, stack(0x000000b971000000,0x000000b971100000)]
0x000002845cd9c130 JavaThread "Unconstrained build operations Thread 31" [_thread_blocked, id=12940, stack(0x000000b971100000,0x000000b971200000)]
0x000002845cd99dc0 JavaThread "Unconstrained build operations Thread 32" [_thread_blocked, id=16532, stack(0x000000b971200000,0x000000b971300000)]
0x000002845cd9d060 JavaThread "Unconstrained build operations Thread 33" [_thread_blocked, id=17272, stack(0x000000b971300000,0x000000b971400000)]
0x000002845cd9da80 JavaThread "Unconstrained build operations Thread 34" [_thread_blocked, id=2408, stack(0x000000b971400000,0x000000b971500000)]
0x000002845cd9a2d0 JavaThread "Unconstrained build operations Thread 35" [_thread_blocked, id=6568, stack(0x000000b971500000,0x000000b971600000)]
0x000002845cd9e4a0 JavaThread "Unconstrained build operations Thread 36" [_thread_blocked, id=4264, stack(0x000000b971600000,0x000000b971700000)]
0x000002845cd9df90 JavaThread "Unconstrained build operations Thread 37" [_thread_blocked, id=11388, stack(0x000000b971700000,0x000000b971800000)]
0x000002845cd9acf0 JavaThread "Unconstrained build operations Thread 38" [_thread_blocked, id=15396, stack(0x000000b971800000,0x000000b971900000)]
0x000002845cd9e9b0 JavaThread "Unconstrained build operations Thread 39" [_thread_blocked, id=20376, stack(0x000000b971900000,0x000000b971a00000)]
0x000002845cd9b710 JavaThread "Unconstrained build operations Thread 40" [_thread_blocked, id=14236, stack(0x000000b971a00000,0x000000b971b00000)]
0x000002845cd9f3d0 JavaThread "Unconstrained build operations Thread 41" [_thread_blocked, id=25740, stack(0x000000b971b00000,0x000000b971c00000)]
0x000002845cda1230 JavaThread "Unconstrained build operations Thread 42" [_thread_blocked, id=2352, stack(0x000000b971c00000,0x000000b971d00000)]
0x000002845cd9eec0 JavaThread "Unconstrained build operations Thread 43" [_thread_blocked, id=17524, stack(0x000000b971d00000,0x000000b971e00000)]
0x000002845cd9f8e0 JavaThread "Unconstrained build operations Thread 44" [_thread_blocked, id=6532, stack(0x000000b96d300000,0x000000b96d400000)]
0x000002845cd9fdf0 JavaThread "Unconstrained build operations Thread 45" [_thread_blocked, id=21044, stack(0x000000b96fc00000,0x000000b96fd00000)]
0x000002845cda0300 JavaThread "Unconstrained build operations Thread 46" [_thread_blocked, id=25136, stack(0x000000b971e00000,0x000000b971f00000)]
0x000002845cda0810 JavaThread "Unconstrained build operations Thread 47" [_thread_blocked, id=21708, stack(0x000000b971f00000,0x000000b972000000)]
0x000002845cda0d20 JavaThread "Unconstrained build operations Thread 48" [_thread_blocked, id=17288, stack(0x000000b972000000,0x000000b972100000)]
0x000002845cda1740 JavaThread "Unconstrained build operations Thread 49" [_thread_blocked, id=20812, stack(0x000000b972100000,0x000000b972200000)]
0x0000028459dc7e00 JavaThread "Unconstrained build operations Thread 50" [_thread_blocked, id=15464, stack(0x000000b972200000,0x000000b972300000)]
0x000002845e499b80 JavaThread "Unconstrained build operations Thread 51" [_thread_blocked, id=25424, stack(0x000000b972300000,0x000000b972400000)]
0x000002845e49afc0 JavaThread "Unconstrained build operations Thread 52" [_thread_blocked, id=7496, stack(0x000000b972400000,0x000000b972500000)]
0x000002845e49a5a0 JavaThread "Unconstrained build operations Thread 53" [_thread_blocked, id=20996, stack(0x000000b972500000,0x000000b972600000)]
0x000002845e49b9e0 JavaThread "Unconstrained build operations Thread 54" [_thread_blocked, id=21576, stack(0x000000b972600000,0x000000b972700000)]
0x000002845e499160 JavaThread "Unconstrained build operations Thread 55" [_thread_in_Java, id=6340, stack(0x000000b972700000,0x000000b972800000)]
0x000002845e49a090 JavaThread "Unconstrained build operations Thread 56" [_thread_blocked, id=1520, stack(0x000000b972800000,0x000000b972900000)]
0x000002845e49aab0 JavaThread "Unconstrained build operations Thread 57" [_thread_blocked, id=16744, stack(0x000000b972900000,0x000000b972a00000)]
0x000002845e49b4d0 JavaThread "Unconstrained build operations Thread 58" [_thread_blocked, id=9376, stack(0x000000b972a00000,0x000000b972b00000)]
0x000002845e49bef0 JavaThread "Unconstrained build operations Thread 59" [_thread_blocked, id=9480, stack(0x000000b972b00000,0x000000b972c00000)]
0x000002845e499670 JavaThread "Unconstrained build operations Thread 60" [_thread_blocked, id=20544, stack(0x000000b972c00000,0x000000b972d00000)]
0x000002845e498740 JavaThread "Unconstrained build operations Thread 61" [_thread_blocked, id=18620, stack(0x000000b972d00000,0x000000b972e00000)]
0x000002845e49c400 JavaThread "Unconstrained build operations Thread 62" [_thread_blocked, id=12716, stack(0x000000b972e00000,0x000000b972f00000)]
0x000002845e498c50 JavaThread "Unconstrained build operations Thread 63" [_thread_blocked, id=5452, stack(0x000000b972f00000,0x000000b973000000)]
0x000002845e49dd50 JavaThread "Unconstrained build operations Thread 64" [_thread_blocked, id=4620, stack(0x000000b973000000,0x000000b973100000)]
0x000002845e49f6a0 JavaThread "Unconstrained build operations Thread 65" [_thread_blocked, id=8392, stack(0x000000b973100000,0x000000b973200000)]
0x000002845e49e260 JavaThread "Unconstrained build operations Thread 66" [_thread_blocked, id=12596, stack(0x000000b973200000,0x000000b973300000)]
0x000002845e49fbb0 JavaThread "Unconstrained build operations Thread 67" [_thread_blocked, id=4520, stack(0x000000b973300000,0x000000b973400000)]
0x000002845e49e770 JavaThread "Unconstrained build operations Thread 68" [_thread_blocked, id=21304, stack(0x000000b973400000,0x000000b973500000)]
0x000002845e49d330 JavaThread "Unconstrained build operations Thread 69" [_thread_blocked, id=16352, stack(0x000000b973500000,0x000000b973600000)]
0x000002845e4a00c0 JavaThread "Unconstrained build operations Thread 70" [_thread_blocked, id=8592, stack(0x000000b973600000,0x000000b973700000)]
0x000002845e49c910 JavaThread "Unconstrained build operations Thread 71" [_thread_blocked, id=19640, stack(0x000000b973700000,0x000000b973800000)]
0x000002845e49ce20 JavaThread "Unconstrained build operations Thread 72" [_thread_blocked, id=4052, stack(0x000000b973800000,0x000000b973900000)]
0x000002845e49f190 JavaThread "jar transforms Thread 2" [_thread_blocked, id=10576, stack(0x000000b973900000,0x000000b973a00000)]
0x000002845e49ec80 JavaThread "jar transforms Thread 3" [_thread_blocked, id=16860, stack(0x000000b973d00000,0x000000b973e00000)]
0x000002845bc32ac0 JavaThread "jar transforms Thread 4" [_thread_blocked, id=22748, stack(0x000000b973e00000,0x000000b973f00000)]
0x000002845bc34e30 JavaThread "jar transforms Thread 5" [_thread_blocked, id=14788, stack(0x000000b974300000,0x000000b974400000)]
0x000002845bc334e0 JavaThread "jar transforms Thread 6" [_thread_blocked, id=22560, stack(0x000000b973f00000,0x000000b974000000)]
0x000002845bc35d60 JavaThread "Cache worker for Build Output Cleanup Cache (C:\Users\lauri\tarot\frontend\node_modules\expo-dev-launcher\expo-dev-launcher-gradle-plugin\.gradle\buildOutputCleanup)" [_thread_blocked, id=25472, stack(0x000000b973c00000,0x000000b973d00000)]
0x000002845bc339f0 JavaThread "Kotlin DSL Writer" [_thread_blocked, id=23404, stack(0x000000b974600000,0x000000b974700000)]
0x000002845bc36c90 JavaThread "Unconstrained build operations Thread 73" [_thread_blocked, id=14040, stack(0x000000b974400000,0x000000b974500000)]
0x000002845bc371a0 JavaThread "Unconstrained build operations Thread 74" [_thread_blocked, id=2948, stack(0x000000b974500000,0x000000b974600000)]
0x000002845bc376b0 JavaThread "Unconstrained build operations Thread 75" [_thread_blocked, id=19612, stack(0x000000b974700000,0x000000b974800000)]
0x000002845bc35340 JavaThread "Unconstrained build operations Thread 76" [_thread_blocked, id=25780, stack(0x000000b974800000,0x000000b974900000)]
0x000002845bc33f00 JavaThread "Unconstrained build operations Thread 77" [_thread_blocked, id=9260, stack(0x000000b974900000,0x000000b974a00000)]
0x000002845bc37bc0 JavaThread "Unconstrained build operations Thread 78" [_thread_blocked, id=15260, stack(0x000000b974a00000,0x000000b974b00000)]
0x000002845bc34410 JavaThread "Unconstrained build operations Thread 79" [_thread_blocked, id=25124, stack(0x000000b974b00000,0x000000b974c00000)]
0x000002845bc39510 JavaThread "Unconstrained build operations Thread 80" [_thread_blocked, id=11620, stack(0x000000b974d00000,0x000000b974e00000)]
0x000002845bc39f30 JavaThread "build event listener" [_thread_blocked, id=2568, stack(0x000000b974e00000,0x000000b974f00000)]
0x000002845e0672d0 JavaThread "jar transforms Thread 7" [_thread_blocked, id=17636, stack(0x000000b96aa00000,0x000000b96ab00000)]
0x000002845e065e90 JavaThread "Cache worker for execution history cache (C:\Users\lauri\tarot\frontend\node_modules\expo-dev-launcher\expo-dev-launcher-gradle-plugin\.gradle\8.10.2\executionHistory)" [_thread_blocked, id=12756, stack(0x000000b974f00000,0x000000b975000000)]
0x00000284646e7cc0 JavaThread "WorkerExecutor Queue" [_thread_blocked, id=22108, stack(0x000000b975600000,0x000000b975700000)]
0x000002846ce5c670 JavaThread "RMI Scheduler(0)" daemon [_thread_blocked, id=7868, stack(0x000000b96a800000,0x000000b96a900000)]
0x000002845fa35820 JavaThread "RMI GC Daemon" daemon [_thread_blocked, id=4004, stack(0x000000b975700000,0x000000b975800000)]
0x000002845fa36750 JavaThread "RMI TCP Accept-0" daemon [_thread_in_native, id=4720, stack(0x000000b975800000,0x000000b975900000)]
0x0000028464e4ff60 JavaThread "RMI Reaper" [_thread_blocked, id=15460, stack(0x000000b975900000,0x000000b975a00000)]
0x00000284649c7fb0 JavaThread "jar transforms Thread 8" [_thread_blocked, id=23016, stack(0x000000b974100000,0x000000b974200000)]
0x00000284649c84c0 JavaThread "build event listener" [_thread_blocked, id=10408, stack(0x000000b96a900000,0x000000b96aa00000)]
0x000002846ce5c160 JavaThread "included builds Thread 4" [_thread_blocked, id=17352, stack(0x000000b970100000,0x000000b970200000)]
0x0000028472e6af30 JavaThread "Cache worker for execution history cache (C:\Users\lauri\tarot\frontend\android\.gradle\8.10.2\executionHistory)" [_thread_blocked, id=9696, stack(0x000000b96fd00000,0x000000b96fe00000)]
0x000002846cef8800 JavaThread "WorkerExecutor Queue Thread 2" [_thread_blocked, id=8316, stack(0x000000b970400000,0x000000b970500000)]
0x000002847256c1b0 JavaThread "WorkerExecutor Queue Thread 3" [_thread_blocked, id=26608, stack(0x000000b970500000,0x000000b970600000)]
0x0000028474bf5f90 JavaThread "WorkerExecutor Queue Thread 4" [_thread_blocked, id=17112, stack(0x000000b973a00000,0x000000b973b00000)]
0x0000028472e6a510 JavaThread "WorkerExecutor Queue Thread 6" [_thread_blocked, id=19600, stack(0x000000b973b00000,0x000000b973c00000)]
0x000002845afd08a0 JavaThread "WorkerExecutor Queue Thread 7" [_thread_blocked, id=26428, stack(0x000000b974200000,0x000000b974300000)]
0x000002845fa35d30 JavaThread "WorkerExecutor Queue Thread 8" [_thread_blocked, id=2216, stack(0x000000b974c00000,0x000000b974d00000)]
0x000002846cea5af0 JavaThread "RMI RenewClean-[127.0.0.1:17741,org.jetbrains.kotlin.daemon.common.LoopbackNetworkInterface$ClientLoopbackSocketFactory@10f56b86]" daemon [_thread_blocked, id=2900, stack(0x000000b970000000,0x000000b970100000)]
0x000002845afd1ce0 JavaThread "RMI TCP Accept-0" daemon [_thread_in_native, id=11352, stack(0x000000b975e00000,0x000000b975f00000)]
0x0000028476ee3810 JavaThread "Cache worker for Java compile cache (C:\Users\lauri\.gradle\caches\8.10.2\javaCompile)" [_thread_blocked, id=25032, stack(0x000000b976000000,0x000000b976100000)]
0x000002846cc9bef0 JavaThread "Build operations" [_thread_blocked, id=11828, stack(0x000000b976800000,0x000000b976900000)]
0x000002846cc9afc0 JavaThread "Build operations Thread 2" [_thread_blocked, id=17464, stack(0x000000b976900000,0x000000b976a00000)]
0x000002846cc9c400 JavaThread "Build operations Thread 3" [_thread_blocked, id=5180, stack(0x000000b976a00000,0x000000b976b00000)]
0x000002846cc9c910 JavaThread "Build operations Thread 4" [_thread_blocked, id=6216, stack(0x000000b976b00000,0x000000b976c00000)]
0x000002846cc9d330 JavaThread "Build operations Thread 5" [_thread_blocked, id=4368, stack(0x000000b976c00000,0x000000b976d00000)]
0x000002846cc9b9e0 JavaThread "Build operations Thread 6" [_thread_blocked, id=15404, stack(0x000000b976d00000,0x000000b976e00000)]
0x000002846cc9ce20 JavaThread "Build operations Thread 7" [_thread_blocked, id=25520, stack(0x000000b976e00000,0x000000b976f00000)]
0x0000028474bf5570 JavaThread "Build operations Thread 8" [_thread_blocked, id=2024, stack(0x000000b976100000,0x000000b976200000)]
0x000002846cea3270 JavaThread "RMI TCP Connection(idle)" daemon [_thread_blocked, id=24844, stack(0x000000b976200000,0x000000b976300000)]
0x0000028474fca3f0 JavaThread "RMI TCP Connection(53)-127.0.0.1" daemon [_thread_in_native, id=24840, stack(0x000000b976400000,0x000000b976500000)]
0x000002845afd2c10 JavaThread "RMI TCP Connection(idle)" daemon [_thread_blocked, id=9804, stack(0x000000b976600000,0x000000b976700000)]
0x000002845afd3120 JavaThread "RMI TCP Connection(56)-127.0.0.1" daemon [_thread_in_native, id=18184, stack(0x000000b976300000,0x000000b976400000)]
0x000002845bc34920 JavaThread "WorkerExecutor Queue Thread 11" [_thread_blocked, id=15240, stack(0x000000b976500000,0x000000b976600000)]
0x000002845bc36270 JavaThread "RMI TCP Connection(idle)" daemon [_thread_blocked, id=6164, stack(0x000000b977100000,0x000000b977200000)]
0x000002845bc36780 JavaThread "RMI TCP Connection(58)-127.0.0.1" daemon [_thread_in_native, id=20540, stack(0x000000b977300000,0x000000b977400000)]
0x0000028472e6aa20 JavaThread "RMI TCP Connection(idle)" daemon [_thread_blocked, id=4832, stack(0x000000b977500000,0x000000b977600000)]
0x00000284760c7810 JavaThread "RMI TCP Connection(idle)" daemon [_thread_blocked, id=18112, stack(0x000000b976700000,0x000000b976800000)]
0x00000284760c59b0 JavaThread "RMI TCP Connection(51)-127.0.0.1" daemon [_thread_in_native, id=19196, stack(0x000000b977700000,0x000000b977800000)]
0x0000028474fc8aa0 JavaThread "RMI TCP Connection(57)-127.0.0.1" daemon [_thread_in_native, id=14716, stack(0x000000b970300000,0x000000b970400000)]
0x000002845bc35850 JavaThread "RMI TCP Connection(55)-127.0.0.1" daemon [_thread_in_native, id=26372, stack(0x000000b975c00000,0x000000b975d00000)]
0x000002845acb6060 JavaThread "RMI TCP Connection(59)-127.0.0.1" daemon [_thread_in_native, id=18368, stack(0x000000b977800000,0x000000b977900000)]
0x0000028474fcae10 JavaThread "RMI TCP Connection(54)-127.0.0.1" daemon [_thread_in_native, id=18504, stack(0x000000b977a00000,0x000000b977b00000)]
0x000002846cea55e0 JavaThread "RMI TCP Connection(idle)" daemon [_thread_blocked, id=16624, stack(0x000000b977b00000,0x000000b977c00000)]
0x000002846cea4bc0 JavaThread "RMI TCP Connection(idle)" daemon [_thread_blocked, id=11428, stack(0x000000b977c00000,0x000000b977d00000)]
0x000002846cea2d60 JavaThread "RMI TCP Connection(idle)" daemon [_thread_blocked, id=5944, stack(0x000000b977d00000,0x000000b977e00000)]
0x0000028472f44dd0 JavaThread "C2 CompilerThread1" daemon [_thread_in_native, id=1572, stack(0x000000b96fe00000,0x000000b96ff00000)]

Other Threads:
0x000002843969e1c0 VMThread "VM Thread" [stack: 0x000000b96b100000,0x000000b96b200000] [id=19260]
0x000002843993fcd0 WatcherThread [stack: 0x000000b96bd00000,0x000000b96be00000] [id=6396]
0x000002841b27cf60 GCTaskThread "GC Thread#0" [stack: 0x000000b96ac00000,0x000000b96ad00000] [id=17520]
0x00000284591d64e0 GCTaskThread "GC Thread#1" [stack: 0x000000b96c000000,0x000000b96c100000] [id=10800]
0x0000028459618a30 GCTaskThread "GC Thread#2" [stack: 0x000000b96c100000,0x000000b96c200000] [id=4232]
0x000002845964ff70 GCTaskThread "GC Thread#3" [stack: 0x000000b96c200000,0x000000b96c300000] [id=1492]
0x000002845969c660 GCTaskThread "GC Thread#4" [stack: 0x000000b96c300000,0x000000b96c400000] [id=15132]
0x000002845b50e610 GCTaskThread "GC Thread#5" [stack: 0x000000b96cf00000,0x000000b96d000000] [id=25660]
0x000002845b50e8d0 GCTaskThread "GC Thread#6" [stack: 0x000000b96d000000,0x000000b96d100000] [id=3788]
0x000002845b50fc10 GCTaskThread "GC Thread#7" [stack: 0x000000b96d100000,0x000000b96d200000] [id=19536]
0x0000028418eadfe0 ConcurrentGCThread "G1 Main Marker" [stack: 0x000000b96ad00000,0x000000b96ae00000] [id=21812]
0x0000028418eae910 ConcurrentGCThread "G1 Conc#0" [stack: 0x000000b96ae00000,0x000000b96af00000] [id=21840]
0x000002845b50f110 ConcurrentGCThread "G1 Conc#1" [stack: 0x000000b96d600000,0x000000b96d700000] [id=20720]
0x000002841b2bec50 ConcurrentGCThread "G1 Refine#0" [stack: 0x000000b96af00000,0x000000b96b000000] [id=24624]
0x000002845e292b10 ConcurrentGCThread "G1 Refine#1" [stack: 0x000000b975000000,0x000000b975100000] [id=8340]
0x000002845d4aa640 ConcurrentGCThread "G1 Refine#2" [stack: 0x000000b975100000,0x000000b975200000] [id=8332]
0x000002845e5e9c20 ConcurrentGCThread "G1 Refine#3" [stack: 0x000000b975200000,0x000000b975300000] [id=10492]
0x000002845d2a2b10 ConcurrentGCThread "G1 Refine#4" [stack: 0x000000b975300000,0x000000b975400000] [id=3432]
0x00000284648920c0 ConcurrentGCThread "G1 Refine#5" [stack: 0x000000b975400000,0x000000b975500000] [id=14504]
0x00000284641fafb0 ConcurrentGCThread "G1 Refine#6" [stack: 0x000000b975500000,0x000000b975600000] [id=13272]
0x000002845df5cde0 ConcurrentGCThread "G1 Refine#7" [stack: 0x000000b975b00000,0x000000b975c00000] [id=4192]
0x0000028439549a50 ConcurrentGCThread "G1 Service" [stack: 0x000000b96b000000,0x000000b96b100000] [id=15816]

Threads with active compile tasks:
C2 CompilerThread0 888386 58387 4 org.jetbrains.org.objectweb.asm.ClassReader::readMethod (1061 bytes)
C2 CompilerThread1 888386 58390 4 org.jetbrains.org.objectweb.asm.ClassReader::accept (1381 bytes)

VM state: not at safepoint (normal execution)

VM Mutex/Monitor currently owned by a thread: None

Heap address: 0x0000000080000000, size: 2048 MB, Compressed Oops mode: 32-bit

CDS archive(s) mapped at: [0x000002843a000000-0x000002843abb0000-0x000002843abb0000), size 12255232, SharedBaseAddress: 0x000002843a000000, ArchiveRelocationMode: 1.
Compressed class space mapped at: 0x000002843b000000-0x0000028455000000, reserved size: 436207616
Narrow klass base: 0x000002843a000000, Narrow klass shift: 0, Narrow klass range: 0x100000000

GC Precious Log:
CPUs: 8 total, 8 available
Memory: 7998M
Large Page Support: Disabled
NUMA Support: Disabled
Compressed Oops: Enabled (32-bit)
Heap Region Size: 1M
Heap Min Capacity: 8M
Heap Initial Capacity: 126M
Heap Max Capacity: 2G
Pre-touch: Disabled
Parallel Workers: 8
Concurrent Workers: 2
Concurrent Refinement Workers: 8
Periodic GC: Disabled

Heap:
garbage-first heap total 1571840K, used 994632K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 67 young (68608K), 16 survivors (16384K)
Metaspace used 253505K, committed 256832K, reserved 688128K
class space used 31362K, committed 32832K, reserved 425984K

Heap Regions: E=young(eden), S=young(survivor), O=old, HS=humongous(starts), HC=humongous(continues), CS=collection set, F=free, OA=open archive, CA=closed archive, TAMS=top-at-mark-start (previous, next)
| 0|0x0000000080000000, 0x0000000080100000, 0x0000000080100000|100%| O| |TAMS 0x0000000080100000, 0x0000000080000000| Untracked
| 1|0x0000000080100000, 0x0000000080200000, 0x0000000080200000|100%| O| |TAMS 0x0000000080200000, 0x0000000080100000| Untracked
| 2|0x0000000080200000, 0x0000000080300000, 0x0000000080300000|100%|HS| |TAMS 0x0000000080300000, 0x0000000080200000| Complete
| 3|0x0000000080300000, 0x0000000080400000, 0x0000000080400000|100%|HC| |TAMS 0x0000000080400000, 0x0000000080300000| Complete
| 4|0x0000000080400000, 0x0000000080500000, 0x0000000080500000|100%|HC| |TAMS 0x0000000080500000, 0x0000000080400000| Complete
| 5|0x0000000080500000, 0x0000000080600000, 0x0000000080600000|100%|HC| |TAMS 0x0000000080600000, 0x0000000080500000| Complete
| 6|0x0000000080600000, 0x0000000080700000, 0x0000000080700000|100%| O| |TAMS 0x0000000080700000, 0x0000000080600000| Untracked
| 7|0x0000000080700000, 0x0000000080800000, 0x0000000080800000|100%|HS| |TAMS 0x0000000080800000, 0x0000000080700000| Complete
| 8|0x0000000080800000, 0x0000000080900000, 0x0000000080900000|100%| O| |TAMS 0x0000000080900000, 0x0000000080800000| Untracked
| 9|0x0000000080900000, 0x0000000080a00000, 0x0000000080a00000|100%| O| |TAMS 0x0000000080a00000, 0x0000000080900000| Untracked
| 10|0x0000000080a00000, 0x0000000080b00000, 0x0000000080b00000|100%| O| |TAMS 0x0000000080b00000, 0x0000000080a00000| Untracked
| 11|0x0000000080b00000, 0x0000000080c00000, 0x0000000080c00000|100%| O| |TAMS 0x0000000080c00000, 0x0000000080b00000| Untracked
| 12|0x0000000080c00000, 0x0000000080d00000, 0x0000000080d00000|100%| O| |TAMS 0x0000000080d00000, 0x0000000080c00000| Untracked
| 13|0x0000000080d00000, 0x0000000080e00000, 0x0000000080e00000|100%| O| |TAMS 0x0000000080e00000, 0x0000000080d00000| Untracked
| 14|0x0000000080e00000, 0x0000000080f00000, 0x0000000080f00000|100%| O| |TAMS 0x0000000080f00000, 0x0000000080e00000| Untracked
| 15|0x0000000080f00000, 0x0000000081000000, 0x0000000081000000|100%| O| |TAMS 0x0000000081000000, 0x0000000080f00000| Untracked
| 16|0x0000000081000000, 0x0000000081100000, 0x0000000081100000|100%| O| |TAMS 0x0000000081100000, 0x0000000081000000| Untracked
| 17|0x0000000081100000, 0x0000000081200000, 0x0000000081200000|100%| O| |TAMS 0x0000000081200000, 0x0000000081100000| Untracked
| 18|0x0000000081200000, 0x0000000081300000, 0x0000000081300000|100%| O| |TAMS 0x0000000081300000, 0x0000000081200000| Untracked
| 19|0x0000000081300000, 0x0000000081400000, 0x0000000081400000|100%| O| |TAMS 0x0000000081400000, 0x0000000081300000| Untracked
| 20|0x0000000081400000, 0x0000000081500000, 0x0000000081500000|100%| O| |TAMS 0x0000000081500000, 0x0000000081400000| Untracked
| 21|0x0000000081500000, 0x0000000081600000, 0x0000000081600000|100%| O| |TAMS 0x0000000081600000, 0x0000000081500000| Untracked
| 22|0x0000000081600000, 0x0000000081700000, 0x0000000081700000|100%| O| |TAMS 0x0000000081700000, 0x0000000081600000| Untracked
| 23|0x0000000081700000, 0x0000000081800000, 0x0000000081800000|100%| O| |TAMS 0x0000000081800000, 0x0000000081700000| Untracked
| 24|0x0000000081800000, 0x0000000081900000, 0x0000000081900000|100%| O| |TAMS 0x0000000081900000, 0x0000000081800000| Untracked
| 25|0x0000000081900000, 0x0000000081a00000, 0x0000000081a00000|100%| O| |TAMS 0x0000000081a00000, 0x0000000081900000| Untracked
| 26|0x0000000081a00000, 0x0000000081b00000, 0x0000000081b00000|100%| O| |TAMS 0x0000000081b00000, 0x0000000081a00000| Untracked
| 27|0x0000000081b00000, 0x0000000081c00000, 0x0000000081c00000|100%| O| |TAMS 0x0000000081c00000, 0x0000000081b00000| Untracked
| 28|0x0000000081c00000, 0x0000000081d00000, 0x0000000081d00000|100%| O| |TAMS 0x0000000081d00000, 0x0000000081c00000| Untracked
| 29|0x0000000081d00000, 0x0000000081e00000, 0x0000000081e00000|100%| O| |TAMS 0x0000000081e00000, 0x0000000081d00000| Untracked
| 30|0x0000000081e00000, 0x0000000081f00000, 0x0000000081f00000|100%| O| |TAMS 0x0000000081f00000, 0x0000000081e00000| Untracked
| 31|0x0000000081f00000, 0x0000000082000000, 0x0000000082000000|100%| O| |TAMS 0x0000000082000000, 0x0000000081f00000| Untracked
| 32|0x0000000082000000, 0x0000000082100000, 0x0000000082100000|100%| O| |TAMS 0x0000000082100000, 0x0000000082000000| Untracked
| 33|0x0000000082100000, 0x0000000082200000, 0x0000000082200000|100%| O| |TAMS 0x0000000082200000, 0x0000000082100000| Untracked
| 34|0x0000000082200000, 0x0000000082300000, 0x0000000082300000|100%| O| |TAMS 0x0000000082300000, 0x0000000082200000| Untracked
| 35|0x0000000082300000, 0x0000000082400000, 0x0000000082400000|100%| O| |TAMS 0x0000000082400000, 0x0000000082300000| Untracked
| 36|0x0000000082400000, 0x0000000082500000, 0x0000000082500000|100%| O| |TAMS 0x0000000082500000, 0x0000000082400000| Untracked
| 37|0x0000000082500000, 0x0000000082600000, 0x0000000082600000|100%| O| |TAMS 0x0000000082600000, 0x0000000082500000| Untracked
| 38|0x0000000082600000, 0x0000000082700000, 0x0000000082700000|100%| O| |TAMS 0x0000000082700000, 0x0000000082600000| Untracked
| 39|0x0000000082700000, 0x0000000082800000, 0x0000000082800000|100%| O| |TAMS 0x0000000082800000, 0x0000000082700000| Untracked
| 40|0x0000000082800000, 0x0000000082900000, 0x0000000082900000|100%| O| |TAMS 0x0000000082900000, 0x0000000082800000| Untracked
| 41|0x0000000082900000, 0x0000000082a00000, 0x0000000082a00000|100%| O| |TAMS 0x0000000082a00000, 0x0000000082900000| Untracked
| 42|0x0000000082a00000, 0x0000000082b00000, 0x0000000082b00000|100%| O| |TAMS 0x0000000082b00000, 0x0000000082a00000| Untracked
| 43|0x0000000082b00000, 0x0000000082c00000, 0x0000000082c00000|100%| O| |TAMS 0x0000000082c00000, 0x0000000082b00000| Untracked
| 44|0x0000000082c00000, 0x0000000082d00000, 0x0000000082d00000|100%| O| |TAMS 0x0000000082d00000, 0x0000000082c00000| Untracked
| 45|0x0000000082d00000, 0x0000000082e00000, 0x0000000082e00000|100%| O| |TAMS 0x0000000082e00000, 0x0000000082d00000| Untracked
| 46|0x0000000082e00000, 0x0000000082f00000, 0x0000000082f00000|100%|HS| |TAMS 0x0000000082f00000, 0x0000000082e00000| Complete
| 47|0x0000000082f00000, 0x0000000083000000, 0x0000000083000000|100%|HC| |TAMS 0x0000000083000000, 0x0000000082f00000| Complete
| 48|0x0000000083000000, 0x0000000083100000, 0x0000000083100000|100%| O| |TAMS 0x0000000083100000, 0x0000000083000000| Untracked
| 49|0x0000000083100000, 0x0000000083200000, 0x0000000083200000|100%| O| |TAMS 0x0000000083200000, 0x0000000083100000| Untracked
| 50|0x0000000083200000, 0x0000000083300000, 0x0000000083300000|100%| O| |TAMS 0x0000000083300000, 0x0000000083200000| Untracked
| 51|0x0000000083300000, 0x0000000083400000, 0x0000000083400000|100%| O| |TAMS 0x0000000083400000, 0x0000000083300000| Untracked
| 52|0x0000000083400000, 0x0000000083500000, 0x0000000083500000|100%| O| |TAMS 0x0000000083500000, 0x0000000083400000| Untracked
| 53|0x0000000083500000, 0x0000000083600000, 0x0000000083600000|100%|HS| |TAMS 0x0000000083600000, 0x0000000083500000| Complete
| 54|0x0000000083600000, 0x0000000083700000, 0x0000000083700000|100%|HC| |TAMS 0x0000000083700000, 0x0000000083600000| Complete
| 55|0x0000000083700000, 0x0000000083800000, 0x0000000083800000|100%|HS| |TAMS 0x0000000083800000, 0x0000000083700000| Complete
| 56|0x0000000083800000, 0x0000000083900000, 0x0000000083900000|100%|HC| |TAMS 0x0000000083900000, 0x0000000083800000| Complete
| 57|0x0000000083900000, 0x0000000083a00000, 0x0000000083a00000|100%|HC| |TAMS 0x0000000083a00000, 0x0000000083900000| Complete
| 58|0x0000000083a00000, 0x0000000083b00000, 0x0000000083b00000|100%|HC| |TAMS 0x0000000083b00000, 0x0000000083a00000| Complete
| 59|0x0000000083b00000, 0x0000000083c00000, 0x0000000083c00000|100%|HS| |TAMS 0x0000000083c00000, 0x0000000083b00000| Complete
| 60|0x0000000083c00000, 0x0000000083d00000, 0x0000000083d00000|100%|HC| |TAMS 0x0000000083d00000, 0x0000000083c00000| Complete
| 61|0x0000000083d00000, 0x0000000083e00000, 0x0000000083e00000|100%|HC| |TAMS 0x0000000083e00000, 0x0000000083d00000| Complete
| 62|0x0000000083e00000, 0x0000000083f00000, 0x0000000083f00000|100%|HC| |TAMS 0x0000000083f00000, 0x0000000083e00000| Complete
| 63|0x0000000083f00000, 0x0000000084000000, 0x0000000084000000|100%| O| |TAMS 0x0000000084000000, 0x0000000083f00000| Untracked
| 64|0x0000000084000000, 0x0000000084100000, 0x0000000084100000|100%| O| |TAMS 0x0000000084100000, 0x0000000084000000| Untracked
| 65|0x0000000084100000, 0x0000000084200000, 0x0000000084200000|100%| O| |TAMS 0x0000000084200000, 0x0000000084100000| Untracked
| 66|0x0000000084200000, 0x0000000084300000, 0x0000000084300000|100%| O| |TAMS 0x0000000084300000, 0x0000000084200000| Untracked
| 67|0x0000000084300000, 0x0000000084400000, 0x0000000084400000|100%| O| |TAMS 0x0000000084400000, 0x0000000084300000| Untracked
| 68|0x0000000084400000, 0x0000000084500000, 0x0000000084500000|100%| O| |TAMS 0x0000000084500000, 0x0000000084400000| Untracked
| 69|0x0000000084500000, 0x0000000084600000, 0x0000000084600000|100%| O| |TAMS 0x0000000084600000, 0x0000000084500000| Untracked
| 70|0x0000000084600000, 0x0000000084700000, 0x0000000084700000|100%| O| |TAMS 0x0000000084700000, 0x0000000084600000| Untracked
| 71|0x0000000084700000, 0x0000000084800000, 0x0000000084800000|100%| O| |TAMS 0x0000000084800000, 0x0000000084700000| Untracked
| 72|0x0000000084800000, 0x0000000084900000, 0x0000000084900000|100%| O| |TAMS 0x0000000084900000, 0x0000000084800000| Untracked
| 73|0x0000000084900000, 0x0000000084a00000, 0x0000000084a00000|100%| O| |TAMS 0x0000000084a00000, 0x0000000084900000| Untracked
| 74|0x0000000084a00000, 0x0000000084b00000, 0x0000000084b00000|100%| O| |TAMS 0x0000000084b00000, 0x0000000084a00000| Untracked
| 75|0x0000000084b00000, 0x0000000084c00000, 0x0000000084c00000|100%| O| |TAMS 0x0000000084c00000, 0x0000000084b00000| Untracked
| 76|0x0000000084c00000, 0x0000000084d00000, 0x0000000084d00000|100%| O| |TAMS 0x0000000084c00000, 0x0000000084c00000| Untracked
| 77|0x0000000084d00000, 0x0000000084e00000, 0x0000000084e00000|100%| O| |TAMS 0x0000000084e00000, 0x0000000084d00000| Untracked
| 78|0x0000000084e00000, 0x0000000084f00000, 0x0000000084f00000|100%| O| |TAMS 0x0000000084f00000, 0x0000000084e00000| Untracked
| 79|0x0000000084f00000, 0x0000000085000000, 0x0000000085000000|100%| O| |TAMS 0x0000000085000000, 0x0000000084f00000| Untracked
| 80|0x0000000085000000, 0x0000000085100000, 0x0000000085100000|100%| O| |TAMS 0x0000000085100000, 0x0000000085000000| Untracked
| 81|0x0000000085100000, 0x0000000085200000, 0x0000000085200000|100%| O| |TAMS 0x0000000085200000, 0x0000000085100000| Untracked
| 82|0x0000000085200000, 0x0000000085300000, 0x0000000085300000|100%| O| |TAMS 0x0000000085300000, 0x0000000085200000| Untracked
| 83|0x0000000085300000, 0x0000000085400000, 0x0000000085400000|100%| O| |TAMS 0x0000000085400000, 0x0000000085300000| Untracked
| 84|0x0000000085400000, 0x0000000085500000, 0x0000000085500000|100%| O| |TAMS 0x0000000085500000, 0x0000000085400000| Untracked
| 85|0x0000000085500000, 0x0000000085600000, 0x0000000085600000|100%| O| |TAMS 0x0000000085600000, 0x0000000085500000| Untracked
| 86|0x0000000085600000, 0x0000000085700000, 0x0000000085700000|100%| O| |TAMS 0x0000000085700000, 0x0000000085600000| Untracked
| 87|0x0000000085700000, 0x0000000085800000, 0x0000000085800000|100%| O| |TAMS 0x0000000085800000, 0x0000000085700000| Untracked
| 88|0x0000000085800000, 0x0000000085900000, 0x0000000085900000|100%| O| |TAMS 0x0000000085900000, 0x0000000085800000| Untracked
| 89|0x0000000085900000, 0x0000000085a00000, 0x0000000085a00000|100%| O| |TAMS 0x0000000085a00000, 0x0000000085900000| Untracked
| 90|0x0000000085a00000, 0x0000000085b00000, 0x0000000085b00000|100%| O| |TAMS 0x0000000085b00000, 0x0000000085a00000| Untracked
| 91|0x0000000085b00000, 0x0000000085c00000, 0x0000000085c00000|100%| O| |TAMS 0x0000000085c00000, 0x0000000085b00000| Untracked
| 92|0x0000000085c00000, 0x0000000085d00000, 0x0000000085d00000|100%| O| |TAMS 0x0000000085d00000, 0x0000000085c00000| Untracked
| 93|0x0000000085d00000, 0x0000000085e00000, 0x0000000085e00000|100%| O| |TAMS 0x0000000085e00000, 0x0000000085d00000| Untracked
| 94|0x0000000085e00000, 0x0000000085f00000, 0x0000000085f00000|100%| O| |TAMS 0x0000000085f00000, 0x0000000085e00000| Untracked
| 95|0x0000000085f00000, 0x0000000086000000, 0x0000000086000000|100%| O| |TAMS 0x0000000086000000, 0x0000000085f00000| Untracked
| 96|0x0000000086000000, 0x0000000086100000, 0x0000000086100000|100%| O| |TAMS 0x0000000086100000, 0x0000000086000000| Untracked
| 97|0x0000000086100000, 0x0000000086200000, 0x0000000086200000|100%| O| |TAMS 0x0000000086200000, 0x0000000086100000| Untracked
| 98|0x0000000086200000, 0x0000000086300000, 0x0000000086300000|100%| O| |TAMS 0x0000000086300000, 0x0000000086200000| Untracked
| 99|0x0000000086300000, 0x0000000086400000, 0x0000000086400000|100%| O| |TAMS 0x0000000086400000, 0x0000000086300000| Untracked
| 100|0x0000000086400000, 0x0000000086500000, 0x0000000086500000|100%| O| |TAMS 0x0000000086500000, 0x0000000086400000| Untracked
| 101|0x0000000086500000, 0x0000000086600000, 0x0000000086600000|100%| O| |TAMS 0x0000000086600000, 0x0000000086500000| Untracked
| 102|0x0000000086600000, 0x0000000086700000, 0x0000000086700000|100%| O| |TAMS 0x0000000086700000, 0x0000000086600000| Untracked
| 103|0x0000000086700000, 0x0000000086800000, 0x0000000086800000|100%| O| |TAMS 0x0000000086800000, 0x0000000086700000| Untracked
| 104|0x0000000086800000, 0x0000000086900000, 0x0000000086900000|100%| O| |TAMS 0x0000000086900000, 0x0000000086800000| Untracked
| 105|0x0000000086900000, 0x0000000086a00000, 0x0000000086a00000|100%| O| |TAMS 0x0000000086a00000, 0x0000000086900000| Untracked
| 106|0x0000000086a00000, 0x0000000086b00000, 0x0000000086b00000|100%| O| |TAMS 0x0000000086b00000, 0x0000000086a00000| Untracked
| 107|0x0000000086b00000, 0x0000000086c00000, 0x0000000086c00000|100%| O| |TAMS 0x0000000086c00000, 0x0000000086b00000| Untracked
| 108|0x0000000086c00000, 0x0000000086d00000, 0x0000000086d00000|100%| O| |TAMS 0x0000000086d00000, 0x0000000086c00000| Untracked
| 109|0x0000000086d00000, 0x0000000086e00000, 0x0000000086e00000|100%| O| |TAMS 0x0000000086e00000, 0x0000000086d00000| Untracked
| 110|0x0000000086e00000, 0x0000000086f00000, 0x0000000086f00000|100%| O| |TAMS 0x0000000086f00000, 0x0000000086e00000| Untracked
| 111|0x0000000086f00000, 0x0000000087000000, 0x0000000087000000|100%| O| |TAMS 0x0000000087000000, 0x0000000086f00000| Untracked
| 112|0x0000000087000000, 0x0000000087100000, 0x0000000087100000|100%| O| |TAMS 0x0000000087000000, 0x0000000087000000| Untracked
| 113|0x0000000087100000, 0x0000000087200000, 0x0000000087200000|100%| O| |TAMS 0x0000000087100000, 0x0000000087100000| Untracked
| 114|0x0000000087200000, 0x0000000087300000, 0x0000000087300000|100%| O| |TAMS 0x0000000087200000, 0x0000000087200000| Untracked
| 115|0x0000000087300000, 0x0000000087400000, 0x0000000087400000|100%|HS| |TAMS 0x0000000087300000, 0x0000000087300000| Complete
| 116|0x0000000087400000, 0x0000000087500000, 0x0000000087500000|100%| O| |TAMS 0x0000000087400000, 0x0000000087400000| Untracked
| 117|0x0000000087500000, 0x0000000087600000, 0x0000000087600000|100%| O| |TAMS 0x0000000087500000, 0x0000000087500000| Untracked
| 118|0x0000000087600000, 0x0000000087700000, 0x0000000087700000|100%| O| |TAMS 0x0000000087700000, 0x0000000087600000| Untracked
| 119|0x0000000087700000, 0x0000000087800000, 0x0000000087800000|100%|HS| |TAMS 0x0000000087800000, 0x0000000087700000| Complete
| 120|0x0000000087800000, 0x0000000087900000, 0x0000000087900000|100%| O| |TAMS 0x0000000087900000, 0x0000000087800000| Untracked
| 121|0x0000000087900000, 0x0000000087a00000, 0x0000000087a00000|100%| O| |TAMS 0x0000000087a00000, 0x0000000087900000| Untracked
| 122|0x0000000087a00000, 0x0000000087b00000, 0x0000000087b00000|100%| O| |TAMS 0x0000000087b00000, 0x0000000087a00000| Untracked
| 123|0x0000000087b00000, 0x0000000087c00000, 0x0000000087c00000|100%| O| |TAMS 0x0000000087b00000, 0x0000000087b00000| Untracked
| 124|0x0000000087c00000, 0x0000000087d00000, 0x0000000087d00000|100%| O| |TAMS 0x0000000087d00000, 0x0000000087c00000| Untracked
| 125|0x0000000087d00000, 0x0000000087e00000, 0x0000000087e00000|100%| O| |TAMS 0x0000000087d00000, 0x0000000087d00000| Untracked
| 126|0x0000000087e00000, 0x0000000087f00000, 0x0000000087f00000|100%| O| |TAMS 0x0000000087f00000, 0x0000000087e00000| Untracked
| 127|0x0000000087f00000, 0x0000000088000000, 0x0000000088000000|100%| O| |TAMS 0x0000000087f00000, 0x0000000087f00000| Untracked
| 128|0x0000000088000000, 0x0000000088100000, 0x0000000088100000|100%| O| |TAMS 0x0000000088000000, 0x0000000088000000| Untracked
| 129|0x0000000088100000, 0x0000000088200000, 0x0000000088200000|100%| O| |TAMS 0x0000000088100000, 0x0000000088100000| Untracked
| 130|0x0000000088200000, 0x0000000088200000, 0x0000000088300000| 0%| F| |TAMS 0x0000000088200000, 0x0000000088200000| Untracked
| 131|0x0000000088300000, 0x0000000088400000, 0x0000000088400000|100%| O| |TAMS 0x0000000088300000, 0x0000000088300000| Untracked
| 132|0x0000000088400000, 0x0000000088500000, 0x0000000088500000|100%| O| |TAMS 0x0000000088400000, 0x0000000088400000| Untracked
| 133|0x0000000088500000, 0x0000000088600000, 0x0000000088600000|100%|HS| |TAMS 0x0000000088600000, 0x0000000088500000| Complete
| 134|0x0000000088600000, 0x0000000088700000, 0x0000000088700000|100%|HS| |TAMS 0x0000000088700000, 0x0000000088600000| Complete
| 135|0x0000000088700000, 0x0000000088800000, 0x0000000088800000|100%|HC| |TAMS 0x0000000088800000, 0x0000000088700000| Complete
| 136|0x0000000088800000, 0x0000000088900000, 0x0000000088900000|100%| O| |TAMS 0x0000000088900000, 0x0000000088800000| Untracked
| 137|0x0000000088900000, 0x0000000088a00000, 0x0000000088a00000|100%| O| |TAMS 0x0000000088a00000, 0x0000000088900000| Untracked
| 138|0x0000000088a00000, 0x0000000088b00000, 0x0000000088b00000|100%|HS| |TAMS 0x0000000088a00000, 0x0000000088a00000| Complete
| 139|0x0000000088b00000, 0x0000000088c00000, 0x0000000088c00000|100%|HC| |TAMS 0x0000000088b00000, 0x0000000088b00000| Complete
| 140|0x0000000088c00000, 0x0000000088d00000, 0x0000000088d00000|100%| O| |TAMS 0x0000000088c00000, 0x0000000088c00000| Untracked
| 141|0x0000000088d00000, 0x0000000088e00000, 0x0000000088e00000|100%| O| |TAMS 0x0000000088d00000, 0x0000000088d00000| Untracked
| 142|0x0000000088e00000, 0x0000000088f00000, 0x0000000088f00000|100%| O| |TAMS 0x0000000088e00000, 0x0000000088e00000| Untracked
| 143|0x0000000088f00000, 0x0000000089000000, 0x0000000089000000|100%| O| |TAMS 0x0000000088f00000, 0x0000000088f00000| Untracked
| 144|0x0000000089000000, 0x0000000089100000, 0x0000000089100000|100%| O| |TAMS 0x0000000089000000, 0x0000000089000000| Untracked
| 145|0x0000000089100000, 0x0000000089200000, 0x0000000089200000|100%| O| |TAMS 0x0000000089100000, 0x0000000089100000| Untracked
| 146|0x0000000089200000, 0x0000000089300000, 0x0000000089300000|100%| O| |TAMS 0x0000000089200000, 0x0000000089200000| Untracked
| 147|0x0000000089300000, 0x0000000089400000, 0x0000000089400000|100%| O| |TAMS 0x0000000089300000, 0x0000000089300000| Untracked
| 148|0x0000000089400000, 0x0000000089400000, 0x0000000089500000| 0%| F| |TAMS 0x0000000089400000, 0x0000000089400000| Untracked
| 149|0x0000000089500000, 0x0000000089500000, 0x0000000089600000| 0%| F| |TAMS 0x0000000089500000, 0x0000000089500000| Untracked
| 150|0x0000000089600000, 0x0000000089700000, 0x0000000089700000|100%| O| |TAMS 0x0000000089600000, 0x0000000089600000| Untracked
| 151|0x0000000089700000, 0x0000000089800000, 0x0000000089800000|100%| O| |TAMS 0x0000000089800000, 0x0000000089700000| Untracked
| 152|0x0000000089800000, 0x0000000089800000, 0x0000000089900000| 0%| F| |TAMS 0x0000000089800000, 0x0000000089800000| Untracked
| 153|0x0000000089900000, 0x0000000089900000, 0x0000000089a00000| 0%| F| |TAMS 0x0000000089900000, 0x0000000089900000| Untracked
| 154|0x0000000089a00000, 0x0000000089b00000, 0x0000000089b00000|100%| O| |TAMS 0x0000000089b00000, 0x0000000089a00000| Untracked
| 155|0x0000000089b00000, 0x0000000089c00000, 0x0000000089c00000|100%|HS| |TAMS 0x0000000089c00000, 0x0000000089b00000| Complete
| 156|0x0000000089c00000, 0x0000000089d00000, 0x0000000089d00000|100%| O| |TAMS 0x0000000089d00000, 0x0000000089c00000| Untracked
| 157|0x0000000089d00000, 0x0000000089e00000, 0x0000000089e00000|100%| O| |TAMS 0x0000000089e00000, 0x0000000089d00000| Untracked
| 158|0x0000000089e00000, 0x0000000089f00000, 0x0000000089f00000|100%| O| |TAMS 0x0000000089f00000, 0x0000000089e00000| Untracked
| 159|0x0000000089f00000, 0x000000008a000000, 0x000000008a000000|100%| O| |TAMS 0x000000008a000000, 0x0000000089f00000| Untracked
| 160|0x000000008a000000, 0x000000008a100000, 0x000000008a100000|100%| O| |TAMS 0x000000008a100000, 0x000000008a000000| Untracked
| 161|0x000000008a100000, 0x000000008a200000, 0x000000008a200000|100%| O| |TAMS 0x000000008a200000, 0x000000008a100000| Untracked
| 162|0x000000008a200000, 0x000000008a300000, 0x000000008a300000|100%| O| |TAMS 0x000000008a200000, 0x000000008a200000| Untracked
| 163|0x000000008a300000, 0x000000008a300000, 0x000000008a400000| 0%| F| |TAMS 0x000000008a300000, 0x000000008a300000| Untracked
| 164|0x000000008a400000, 0x000000008a400000, 0x000000008a500000| 0%| F| |TAMS 0x000000008a400000, 0x000000008a400000| Untracked
| 165|0x000000008a500000, 0x000000008a600000, 0x000000008a600000|100%| O| |TAMS 0x000000008a500000, 0x000000008a500000| Untracked
| 166|0x000000008a600000, 0x000000008a700000, 0x000000008a700000|100%| O| |TAMS 0x000000008a600000, 0x000000008a600000| Untracked
| 167|0x000000008a700000, 0x000000008a700000, 0x000000008a800000| 0%| F| |TAMS 0x000000008a700000, 0x000000008a700000| Untracked
| 168|0x000000008a800000, 0x000000008a800000, 0x000000008a900000| 0%| F| |TAMS 0x000000008a800000, 0x000000008a800000| Untracked
| 169|0x000000008a900000, 0x000000008aa00000, 0x000000008aa00000|100%| O| |TAMS 0x000000008aa00000, 0x000000008a900000| Untracked
| 170|0x000000008aa00000, 0x000000008ab00000, 0x000000008ab00000|100%| O| |TAMS 0x000000008ab00000, 0x000000008aa00000| Untracked
| 171|0x000000008ab00000, 0x000000008ac00000, 0x000000008ac00000|100%| O| |TAMS 0x000000008ac00000, 0x000000008ab00000| Untracked
| 172|0x000000008ac00000, 0x000000008ad00000, 0x000000008ad00000|100%| O| |TAMS 0x000000008ad00000, 0x000000008ac00000| Untracked
| 173|0x000000008ad00000, 0x000000008ae00000, 0x000000008ae00000|100%| O| |TAMS 0x000000008ae00000, 0x000000008ad00000| Untracked
| 174|0x000000008ae00000, 0x000000008af00000, 0x000000008af00000|100%| O| |TAMS 0x000000008ae00000, 0x000000008ae00000| Untracked
| 175|0x000000008af00000, 0x000000008b000000, 0x000000008b000000|100%| O| |TAMS 0x000000008af00000, 0x000000008af00000| Untracked
| 176|0x000000008b000000, 0x000000008b100000, 0x000000008b100000|100%| O| |TAMS 0x000000008b100000, 0x000000008b000000| Untracked
| 177|0x000000008b100000, 0x000000008b200000, 0x000000008b200000|100%| O| |TAMS 0x000000008b200000, 0x000000008b100000| Untracked
| 178|0x000000008b200000, 0x000000008b300000, 0x000000008b300000|100%| O| |TAMS 0x000000008b200000, 0x000000008b200000| Untracked
| 179|0x000000008b300000, 0x000000008b400000, 0x000000008b400000|100%| O| |TAMS 0x000000008b400000, 0x000000008b300000| Untracked
| 180|0x000000008b400000, 0x000000008b500000, 0x000000008b500000|100%| O| |TAMS 0x000000008b400000, 0x000000008b400000| Untracked
| 181|0x000000008b500000, 0x000000008b600000, 0x000000008b600000|100%| O| |TAMS 0x000000008b600000, 0x000000008b500000| Untracked
| 182|0x000000008b600000, 0x000000008b700000, 0x000000008b700000|100%| O| |TAMS 0x000000008b700000, 0x000000008b600000| Untracked
| 183|0x000000008b700000, 0x000000008b800000, 0x000000008b800000|100%| O| |TAMS 0x000000008b700000, 0x000000008b700000| Untracked
| 184|0x000000008b800000, 0x000000008b900000, 0x000000008b900000|100%| O| |TAMS 0x000000008b900000, 0x000000008b800000| Untracked
| 185|0x000000008b900000, 0x000000008ba00000, 0x000000008ba00000|100%| O| |TAMS 0x000000008ba00000, 0x000000008b900000| Untracked
| 186|0x000000008ba00000, 0x000000008bb00000, 0x000000008bb00000|100%| O| |TAMS 0x000000008bb00000, 0x000000008ba00000| Untracked
| 187|0x000000008bb00000, 0x000000008bc00000, 0x000000008bc00000|100%| O| |TAMS 0x000000008bc00000, 0x000000008bb00000| Untracked
| 188|0x000000008bc00000, 0x000000008bd00000, 0x000000008bd00000|100%| O| |TAMS 0x000000008bc00000, 0x000000008bc00000| Untracked
| 189|0x000000008bd00000, 0x000000008be00000, 0x000000008be00000|100%| O| |TAMS 0x000000008bd00000, 0x000000008bd00000| Untracked
| 190|0x000000008be00000, 0x000000008bf00000, 0x000000008bf00000|100%| O| |TAMS 0x000000008bf00000, 0x000000008be00000| Untracked
| 191|0x000000008bf00000, 0x000000008c000000, 0x000000008c000000|100%| O| |TAMS 0x000000008c000000, 0x000000008bf00000| Untracked
| 192|0x000000008c000000, 0x000000008c100000, 0x000000008c100000|100%| O| |TAMS 0x000000008c100000, 0x000000008c000000| Untracked
| 193|0x000000008c100000, 0x000000008c200000, 0x000000008c200000|100%| O| |TAMS 0x000000008c200000, 0x000000008c100000| Untracked
| 194|0x000000008c200000, 0x000000008c300000, 0x000000008c300000|100%| O| |TAMS 0x000000008c300000, 0x000000008c200000| Untracked
| 195|0x000000008c300000, 0x000000008c400000, 0x000000008c400000|100%| O| |TAMS 0x000000008c400000, 0x000000008c300000| Untracked
| 196|0x000000008c400000, 0x000000008c500000, 0x000000008c500000|100%| O| |TAMS 0x000000008c400000, 0x000000008c400000| Untracked
| 197|0x000000008c500000, 0x000000008c600000, 0x000000008c600000|100%| O| |TAMS 0x000000008c600000, 0x000000008c500000| Untracked
| 198|0x000000008c600000, 0x000000008c700000, 0x000000008c700000|100%| O| |TAMS 0x000000008c600000, 0x000000008c600000| Untracked
| 199|0x000000008c700000, 0x000000008c800000, 0x000000008c800000|100%| O| |TAMS 0x000000008c700000, 0x000000008c700000| Untracked
| 200|0x000000008c800000, 0x000000008c900000, 0x000000008c900000|100%| O| |TAMS 0x000000008c900000, 0x000000008c800000| Untracked
| 201|0x000000008c900000, 0x000000008ca00000, 0x000000008ca00000|100%| O| |TAMS 0x000000008ca00000, 0x000000008c900000| Untracked
| 202|0x000000008ca00000, 0x000000008cb00000, 0x000000008cb00000|100%| O| |TAMS 0x000000008ca00000, 0x000000008ca00000| Untracked
| 203|0x000000008cb00000, 0x000000008cc00000, 0x000000008cc00000|100%| O| |TAMS 0x000000008cb00000, 0x000000008cb00000| Untracked
| 204|0x000000008cc00000, 0x000000008cd00000, 0x000000008cd00000|100%| O| |TAMS 0x000000008cc00000, 0x000000008cc00000| Untracked
| 205|0x000000008cd00000, 0x000000008ce00000, 0x000000008ce00000|100%| O| |TAMS 0x000000008cd00000, 0x000000008cd00000| Untracked
| 206|0x000000008ce00000, 0x000000008cf00000, 0x000000008cf00000|100%| O| |TAMS 0x000000008ce00000, 0x000000008ce00000| Untracked
| 207|0x000000008cf00000, 0x000000008d000000, 0x000000008d000000|100%| O| |TAMS 0x000000008cf00000, 0x000000008cf00000| Untracked
| 208|0x000000008d000000, 0x000000008d100000, 0x000000008d100000|100%| O| |TAMS 0x000000008d000000, 0x000000008d000000| Untracked
| 209|0x000000008d100000, 0x000000008d200000, 0x000000008d200000|100%| O| |TAMS 0x000000008d100000, 0x000000008d100000| Untracked
| 210|0x000000008d200000, 0x000000008d300000, 0x000000008d300000|100%| O| |TAMS 0x000000008d200000, 0x000000008d200000| Untracked
| 211|0x000000008d300000, 0x000000008d400000, 0x000000008d400000|100%| O| |TAMS 0x000000008d300000, 0x000000008d300000| Untracked
| 212|0x000000008d400000, 0x000000008d500000, 0x000000008d500000|100%| O| |TAMS 0x000000008d400000, 0x000000008d400000| Untracked
| 213|0x000000008d500000, 0x000000008d600000, 0x000000008d600000|100%| O| |TAMS 0x000000008d500000, 0x000000008d500000| Untracked
| 214|0x000000008d600000, 0x000000008d700000, 0x000000008d700000|100%| O| |TAMS 0x000000008d600000, 0x000000008d600000| Untracked
| 215|0x000000008d700000, 0x000000008d800000, 0x000000008d800000|100%| O| |TAMS 0x000000008d700000, 0x000000008d700000| Untracked
| 216|0x000000008d800000, 0x000000008d900000, 0x000000008d900000|100%| O| |TAMS 0x000000008d800000, 0x000000008d800000| Untracked
| 217|0x000000008d900000, 0x000000008da00000, 0x000000008da00000|100%| O| |TAMS 0x000000008da00000, 0x000000008d900000| Untracked
| 218|0x000000008da00000, 0x000000008db00000, 0x000000008db00000|100%| O| |TAMS 0x000000008db00000, 0x000000008da00000| Untracked
| 219|0x000000008db00000, 0x000000008dc00000, 0x000000008dc00000|100%| O| |TAMS 0x000000008dc00000, 0x000000008db00000| Untracked
| 220|0x000000008dc00000, 0x000000008dd00000, 0x000000008dd00000|100%| O| |TAMS 0x000000008dd00000, 0x000000008dc00000| Untracked
| 221|0x000000008dd00000, 0x000000008de00000, 0x000000008de00000|100%| O| |TAMS 0x000000008de00000, 0x000000008dd00000| Untracked
| 222|0x000000008de00000, 0x000000008df00000, 0x000000008df00000|100%| O| |TAMS 0x000000008df00000, 0x000000008de00000| Untracked
| 223|0x000000008df00000, 0x000000008e000000, 0x000000008e000000|100%| O| |TAMS 0x000000008e000000, 0x000000008df00000| Untracked
| 224|0x000000008e000000, 0x000000008e100000, 0x000000008e100000|100%| O| |TAMS 0x000000008e100000, 0x000000008e000000| Untracked
| 225|0x000000008e100000, 0x000000008e200000, 0x000000008e200000|100%| O| |TAMS 0x000000008e200000, 0x000000008e100000| Untracked
| 226|0x000000008e200000, 0x000000008e300000, 0x000000008e300000|100%| O| |TAMS 0x000000008e300000, 0x000000008e200000| Untracked
| 227|0x000000008e300000, 0x000000008e400000, 0x000000008e400000|100%| O| |TAMS 0x000000008e400000, 0x000000008e300000| Untracked
| 228|0x000000008e400000, 0x000000008e500000, 0x000000008e500000|100%| O| |TAMS 0x000000008e500000, 0x000000008e400000| Untracked
| 229|0x000000008e500000, 0x000000008e600000, 0x000000008e600000|100%| O| |TAMS 0x000000008e600000, 0x000000008e500000| Untracked
| 230|0x000000008e600000, 0x000000008e700000, 0x000000008e700000|100%| O| |TAMS 0x000000008e700000, 0x000000008e600000| Untracked
| 231|0x000000008e700000, 0x000000008e800000, 0x000000008e800000|100%| O| |TAMS 0x000000008e800000, 0x000000008e700000| Untracked
| 232|0x000000008e800000, 0x000000008e900000, 0x000000008e900000|100%| O| |TAMS 0x000000008e900000, 0x000000008e800000| Untracked
| 233|0x000000008e900000, 0x000000008ea00000, 0x000000008ea00000|100%| O| |TAMS 0x000000008ea00000, 0x000000008e900000| Untracked
| 234|0x000000008ea00000, 0x000000008eb00000, 0x000000008eb00000|100%| O| |TAMS 0x000000008eb00000, 0x000000008ea00000| Untracked
| 235|0x000000008eb00000, 0x000000008ec00000, 0x000000008ec00000|100%| O| |TAMS 0x000000008ec00000, 0x000000008eb00000| Untracked
| 236|0x000000008ec00000, 0x000000008ed00000, 0x000000008ed00000|100%| O| |TAMS 0x000000008ed00000, 0x000000008ec00000| Untracked
| 237|0x000000008ed00000, 0x000000008ee00000, 0x000000008ee00000|100%| O| |TAMS 0x000000008ee00000, 0x000000008ed00000| Untracked
| 238|0x000000008ee00000, 0x000000008ef00000, 0x000000008ef00000|100%| O| |TAMS 0x000000008ef00000, 0x000000008ee00000| Untracked
| 239|0x000000008ef00000, 0x000000008f000000, 0x000000008f000000|100%| O| |TAMS 0x000000008f000000, 0x000000008ef00000| Untracked
| 240|0x000000008f000000, 0x000000008f100000, 0x000000008f100000|100%| O| |TAMS 0x000000008f000000, 0x000000008f000000| Untracked
| 241|0x000000008f100000, 0x000000008f200000, 0x000000008f200000|100%| O| |TAMS 0x000000008f100000, 0x000000008f100000| Untracked
| 242|0x000000008f200000, 0x000000008f300000, 0x000000008f300000|100%| O| |TAMS 0x000000008f300000, 0x000000008f200000| Untracked
| 243|0x000000008f300000, 0x000000008f400000, 0x000000008f400000|100%| O| |TAMS 0x000000008f400000, 0x000000008f300000| Untracked
| 244|0x000000008f400000, 0x000000008f500000, 0x000000008f500000|100%| O| |TAMS 0x000000008f500000, 0x000000008f400000| Untracked
| 245|0x000000008f500000, 0x000000008f600000, 0x000000008f600000|100%| O| |TAMS 0x000000008f600000, 0x000000008f500000| Untracked
| 246|0x000000008f600000, 0x000000008f700000, 0x000000008f700000|100%| O| |TAMS 0x000000008f700000, 0x000000008f600000| Untracked
| 247|0x000000008f700000, 0x000000008f800000, 0x000000008f800000|100%| O| |TAMS 0x000000008f800000, 0x000000008f700000| Untracked
| 248|0x000000008f800000, 0x000000008f900000, 0x000000008f900000|100%| O| |TAMS 0x000000008f800000, 0x000000008f800000| Untracked
| 249|0x000000008f900000, 0x000000008fa00000, 0x000000008fa00000|100%|HS| |TAMS 0x000000008fa00000, 0x000000008f900000| Complete
| 250|0x000000008fa00000, 0x000000008fb00000, 0x000000008fb00000|100%|HS| |TAMS 0x000000008fb00000, 0x000000008fa00000| Complete
| 251|0x000000008fb00000, 0x000000008fc00000, 0x000000008fc00000|100%| O| |TAMS 0x000000008fc00000, 0x000000008fb00000| Untracked
| 252|0x000000008fc00000, 0x000000008fd00000, 0x000000008fd00000|100%| O| |TAMS 0x000000008fd00000, 0x000000008fc00000| Untracked
| 253|0x000000008fd00000, 0x000000008fe00000, 0x000000008fe00000|100%|HS| |TAMS 0x000000008fe00000, 0x000000008fd00000| Complete
| 254|0x000000008fe00000, 0x000000008ff00000, 0x000000008ff00000|100%| O| |TAMS 0x000000008fe00000, 0x000000008fe00000| Untracked
| 255|0x000000008ff00000, 0x0000000090000000, 0x0000000090000000|100%| O| |TAMS 0x0000000090000000, 0x000000008ff00000| Untracked
| 256|0x0000000090000000, 0x0000000090100000, 0x0000000090100000|100%| O| |TAMS 0x0000000090000000, 0x0000000090000000| Untracked
| 257|0x0000000090100000, 0x0000000090200000, 0x0000000090200000|100%| O| |TAMS 0x0000000090200000, 0x0000000090100000| Untracked
| 258|0x0000000090200000, 0x0000000090300000, 0x0000000090300000|100%| O| |TAMS 0x0000000090200000, 0x0000000090200000| Untracked
| 259|0x0000000090300000, 0x0000000090400000, 0x0000000090400000|100%|HS| |TAMS 0x0000000090400000, 0x0000000090300000| Complete
| 260|0x0000000090400000, 0x0000000090500000, 0x0000000090500000|100%|HS| |TAMS 0x0000000090500000, 0x0000000090400000| Complete
| 261|0x0000000090500000, 0x0000000090600000, 0x0000000090600000|100%| O| |TAMS 0x0000000090600000, 0x0000000090500000| Untracked
| 262|0x0000000090600000, 0x0000000090700000, 0x0000000090700000|100%| O| |TAMS 0x0000000090700000, 0x0000000090600000| Untracked
| 263|0x0000000090700000, 0x0000000090800000, 0x0000000090800000|100%| O| |TAMS 0x0000000090800000, 0x0000000090700000| Untracked
| 264|0x0000000090800000, 0x0000000090900000, 0x0000000090900000|100%| O| |TAMS 0x0000000090900000, 0x0000000090800000| Untracked
| 265|0x0000000090900000, 0x0000000090a00000, 0x0000000090a00000|100%| O| |TAMS 0x0000000090a00000, 0x0000000090900000| Untracked
| 266|0x0000000090a00000, 0x0000000090b00000, 0x0000000090b00000|100%| O| |TAMS 0x0000000090b00000, 0x0000000090a00000| Untracked
| 267|0x0000000090b00000, 0x0000000090c00000, 0x0000000090c00000|100%| O| |TAMS 0x0000000090c00000, 0x0000000090b00000| Untracked
| 268|0x0000000090c00000, 0x0000000090d00000, 0x0000000090d00000|100%| O| |TAMS 0x0000000090d00000, 0x0000000090c00000| Untracked
| 269|0x0000000090d00000, 0x0000000090e00000, 0x0000000090e00000|100%| O| |TAMS 0x0000000090e00000, 0x0000000090d00000| Untracked
| 270|0x0000000090e00000, 0x0000000090f00000, 0x0000000090f00000|100%| O| |TAMS 0x0000000090f00000, 0x0000000090e00000| Untracked
| 271|0x0000000090f00000, 0x0000000091000000, 0x0000000091000000|100%| O| |TAMS 0x0000000091000000, 0x0000000090f00000| Untracked
| 272|0x0000000091000000, 0x0000000091100000, 0x0000000091100000|100%| O| |TAMS 0x0000000091100000, 0x0000000091000000| Untracked
| 273|0x0000000091100000, 0x0000000091200000, 0x0000000091200000|100%| O| |TAMS 0x0000000091200000, 0x0000000091100000| Untracked
| 274|0x0000000091200000, 0x0000000091300000, 0x0000000091300000|100%| O| |TAMS 0x0000000091300000, 0x0000000091200000| Untracked
| 275|0x0000000091300000, 0x0000000091400000, 0x0000000091400000|100%| O| |TAMS 0x0000000091400000, 0x0000000091300000| Untracked
| 276|0x0000000091400000, 0x0000000091500000, 0x0000000091500000|100%| O| |TAMS 0x0000000091500000, 0x0000000091400000| Untracked
| 277|0x0000000091500000, 0x0000000091600000, 0x0000000091600000|100%| O| |TAMS 0x0000000091500000, 0x0000000091500000| Untracked
| 278|0x0000000091600000, 0x0000000091700000, 0x0000000091700000|100%| O| |TAMS 0x0000000091700000, 0x0000000091600000| Untracked
| 279|0x0000000091700000, 0x0000000091800000, 0x0000000091800000|100%| O| |TAMS 0x0000000091700000, 0x0000000091700000| Untracked
| 280|0x0000000091800000, 0x0000000091900000, 0x0000000091900000|100%| O| |TAMS 0x0000000091800000, 0x0000000091800000| Untracked
| 281|0x0000000091900000, 0x0000000091a00000, 0x0000000091a00000|100%| O| |TAMS 0x0000000091900000, 0x0000000091900000| Untracked
| 282|0x0000000091a00000, 0x0000000091b00000, 0x0000000091b00000|100%| O| |TAMS 0x0000000091b00000, 0x0000000091a00000| Untracked
| 283|0x0000000091b00000, 0x0000000091c00000, 0x0000000091c00000|100%| O| |TAMS 0x0000000091c00000, 0x0000000091b00000| Untracked
| 284|0x0000000091c00000, 0x0000000091d00000, 0x0000000091d00000|100%| O| |TAMS 0x0000000091d00000, 0x0000000091c00000| Untracked
| 285|0x0000000091d00000, 0x0000000091e00000, 0x0000000091e00000|100%| O| |TAMS 0x0000000091d00000, 0x0000000091d00000| Untracked
| 286|0x0000000091e00000, 0x0000000091f00000, 0x0000000091f00000|100%| O| |TAMS 0x0000000091e00000, 0x0000000091e00000| Untracked
| 287|0x0000000091f00000, 0x0000000092000000, 0x0000000092000000|100%| O| |TAMS 0x0000000091f00000, 0x0000000091f00000| Untracked
| 288|0x0000000092000000, 0x0000000092100000, 0x0000000092100000|100%| O| |TAMS 0x0000000092000000, 0x0000000092000000| Untracked
| 289|0x0000000092100000, 0x0000000092200000, 0x0000000092200000|100%| O| |TAMS 0x0000000092100000, 0x0000000092100000| Untracked
| 290|0x0000000092200000, 0x0000000092300000, 0x0000000092300000|100%| O| |TAMS 0x0000000092300000, 0x0000000092200000| Untracked
| 291|0x0000000092300000, 0x0000000092400000, 0x0000000092400000|100%| O| |TAMS 0x0000000092400000, 0x0000000092300000| Untracked
| 292|0x0000000092400000, 0x0000000092500000, 0x0000000092500000|100%| O| |TAMS 0x0000000092400000, 0x0000000092400000| Untracked
| 293|0x0000000092500000, 0x0000000092600000, 0x0000000092600000|100%| O| |TAMS 0x0000000092600000, 0x0000000092500000| Untracked
| 294|0x0000000092600000, 0x0000000092700000, 0x0000000092700000|100%| O| |TAMS 0x0000000092700000, 0x0000000092600000| Untracked
| 295|0x0000000092700000, 0x0000000092800000, 0x0000000092800000|100%| O| |TAMS 0x0000000092800000, 0x0000000092700000| Untracked
| 296|0x0000000092800000, 0x0000000092900000, 0x0000000092900000|100%| O| |TAMS 0x0000000092900000, 0x0000000092800000| Untracked
| 297|0x0000000092900000, 0x0000000092a00000, 0x0000000092a00000|100%| O| |TAMS 0x0000000092a00000, 0x0000000092900000| Untracked
| 298|0x0000000092a00000, 0x0000000092b00000, 0x0000000092b00000|100%| O| |TAMS 0x0000000092b00000, 0x0000000092a00000| Untracked
| 299|0x0000000092b00000, 0x0000000092c00000, 0x0000000092c00000|100%| O| |TAMS 0x0000000092c00000, 0x0000000092b00000| Untracked
| 300|0x0000000092c00000, 0x0000000092d00000, 0x0000000092d00000|100%| O| |TAMS 0x0000000092d00000, 0x0000000092c00000| Untracked
| 301|0x0000000092d00000, 0x0000000092e00000, 0x0000000092e00000|100%| O| |TAMS 0x0000000092e00000, 0x0000000092d00000| Untracked
| 302|0x0000000092e00000, 0x0000000092f00000, 0x0000000092f00000|100%| O| |TAMS 0x0000000092f00000, 0x0000000092e00000| Untracked
| 303|0x0000000092f00000, 0x0000000092f00000, 0x0000000093000000| 0%| F| |TAMS 0x0000000092f00000, 0x0000000092f00000| Untracked
| 304|0x0000000093000000, 0x0000000093000000, 0x0000000093100000| 0%| F| |TAMS 0x0000000093000000, 0x0000000093000000| Untracked
| 305|0x0000000093100000, 0x0000000093200000, 0x0000000093200000|100%| O| |TAMS 0x0000000093100000, 0x0000000093100000| Untracked
| 306|0x0000000093200000, 0x0000000093300000, 0x0000000093300000|100%| O| |TAMS 0x0000000093200000, 0x0000000093200000| Untracked
| 307|0x0000000093300000, 0x0000000093400000, 0x0000000093400000|100%| O| |TAMS 0x0000000093300000, 0x0000000093300000| Untracked
| 308|0x0000000093400000, 0x0000000093500000, 0x0000000093500000|100%| O| |TAMS 0x0000000093500000, 0x0000000093400000| Untracked
| 309|0x0000000093500000, 0x0000000093600000, 0x0000000093600000|100%| O| |TAMS 0x0000000093600000, 0x0000000093500000| Untracked
| 310|0x0000000093600000, 0x0000000093700000, 0x0000000093700000|100%| O| |TAMS 0x0000000093700000, 0x0000000093600000| Untracked
| 311|0x0000000093700000, 0x0000000093800000, 0x0000000093800000|100%| O| |TAMS 0x0000000093700000, 0x0000000093700000| Untracked
| 312|0x0000000093800000, 0x0000000093900000, 0x0000000093900000|100%| O| |TAMS 0x0000000093800000, 0x0000000093800000| Untracked
| 313|0x0000000093900000, 0x0000000093a00000, 0x0000000093a00000|100%| O| |TAMS 0x0000000093a00000, 0x0000000093900000| Untracked
| 314|0x0000000093a00000, 0x0000000093b00000, 0x0000000093b00000|100%| O| |TAMS 0x0000000093b00000, 0x0000000093a00000| Untracked
| 315|0x0000000093b00000, 0x0000000093c00000, 0x0000000093c00000|100%| O| |TAMS 0x0000000093c00000, 0x0000000093b00000| Untracked
| 316|0x0000000093c00000, 0x0000000093d00000, 0x0000000093d00000|100%| O| |TAMS 0x0000000093d00000, 0x0000000093c00000| Untracked
| 317|0x0000000093d00000, 0x0000000093e00000, 0x0000000093e00000|100%| O| |TAMS 0x0000000093e00000, 0x0000000093d00000| Untracked
| 318|0x0000000093e00000, 0x0000000093f00000, 0x0000000093f00000|100%| O| |TAMS 0x0000000093f00000, 0x0000000093e00000| Untracked
| 319|0x0000000093f00000, 0x0000000094000000, 0x0000000094000000|100%| O| |TAMS 0x0000000094000000, 0x0000000093f00000| Untracked
| 320|0x0000000094000000, 0x0000000094100000, 0x0000000094100000|100%| O| |TAMS 0x0000000094100000, 0x0000000094000000| Untracked
| 321|0x0000000094100000, 0x0000000094200000, 0x0000000094200000|100%| O| |TAMS 0x0000000094200000, 0x0000000094100000| Untracked
| 322|0x0000000094200000, 0x0000000094300000, 0x0000000094300000|100%| O| |TAMS 0x0000000094300000, 0x0000000094200000| Untracked
| 323|0x0000000094300000, 0x0000000094400000, 0x0000000094400000|100%| O| |TAMS 0x0000000094400000, 0x0000000094300000| Untracked
| 324|0x0000000094400000, 0x0000000094500000, 0x0000000094500000|100%| O| |TAMS 0x0000000094500000, 0x0000000094400000| Untracked
| 325|0x0000000094500000, 0x0000000094600000, 0x0000000094600000|100%| O| |TAMS 0x0000000094600000, 0x0000000094500000| Untracked
| 326|0x0000000094600000, 0x0000000094700000, 0x0000000094700000|100%| O| |TAMS 0x0000000094700000, 0x0000000094600000| Untracked
| 327|0x0000000094700000, 0x0000000094800000, 0x0000000094800000|100%| O| |TAMS 0x0000000094800000, 0x0000000094700000| Untracked
| 328|0x0000000094800000, 0x0000000094900000, 0x0000000094900000|100%| O| |TAMS 0x0000000094900000, 0x0000000094800000| Untracked
| 329|0x0000000094900000, 0x0000000094a00000, 0x0000000094a00000|100%| O| |TAMS 0x0000000094a00000, 0x0000000094900000| Untracked
| 330|0x0000000094a00000, 0x0000000094b00000, 0x0000000094b00000|100%| O| |TAMS 0x0000000094b00000, 0x0000000094a00000| Untracked
| 331|0x0000000094b00000, 0x0000000094c00000, 0x0000000094c00000|100%| O| |TAMS 0x0000000094c00000, 0x0000000094b00000| Untracked
| 332|0x0000000094c00000, 0x0000000094d00000, 0x0000000094d00000|100%| O| |TAMS 0x0000000094d00000, 0x0000000094c00000| Untracked
| 333|0x0000000094d00000, 0x0000000094e00000, 0x0000000094e00000|100%| O| |TAMS 0x0000000094e00000, 0x0000000094d00000| Untracked
| 334|0x0000000094e00000, 0x0000000094f00000, 0x0000000094f00000|100%| O| |TAMS 0x0000000094f00000, 0x0000000094e00000| Untracked
| 335|0x0000000094f00000, 0x0000000094f00000, 0x0000000095000000| 0%| F| |TAMS 0x0000000094f00000, 0x0000000094f00000| Untracked
| 336|0x0000000095000000, 0x0000000095000000, 0x0000000095100000| 0%| F| |TAMS 0x0000000095000000, 0x0000000095000000| Untracked
| 337|0x0000000095100000, 0x0000000095200000, 0x0000000095200000|100%| O| |TAMS 0x0000000095200000, 0x0000000095100000| Untracked
| 338|0x0000000095200000, 0x0000000095300000, 0x0000000095300000|100%| O| |TAMS 0x0000000095300000, 0x0000000095200000| Untracked
| 339|0x0000000095300000, 0x0000000095400000, 0x0000000095400000|100%| O| |TAMS 0x0000000095400000, 0x0000000095300000| Untracked
| 340|0x0000000095400000, 0x0000000095500000, 0x0000000095500000|100%| O| |TAMS 0x0000000095500000, 0x0000000095400000| Untracked
| 341|0x0000000095500000, 0x0000000095600000, 0x0000000095600000|100%| O| |TAMS 0x0000000095500000, 0x0000000095500000| Untracked
| 342|0x0000000095600000, 0x0000000095700000, 0x0000000095700000|100%| O| |TAMS 0x0000000095600000, 0x0000000095600000| Untracked
| 343|0x0000000095700000, 0x0000000095800000, 0x0000000095800000|100%| O| |TAMS 0x0000000095800000, 0x0000000095700000| Untracked
| 344|0x0000000095800000, 0x0000000095900000, 0x0000000095900000|100%| O| |TAMS 0x0000000095900000, 0x0000000095800000| Untracked
| 345|0x0000000095900000, 0x0000000095a00000, 0x0000000095a00000|100%| O| |TAMS 0x0000000095a00000, 0x0000000095900000| Untracked
| 346|0x0000000095a00000, 0x0000000095b00000, 0x0000000095b00000|100%| O| |TAMS 0x0000000095b00000, 0x0000000095a00000| Untracked
| 347|0x0000000095b00000, 0x0000000095c00000, 0x0000000095c00000|100%| O| |TAMS 0x0000000095c00000, 0x0000000095b00000| Untracked
| 348|0x0000000095c00000, 0x0000000095d00000, 0x0000000095d00000|100%| O| |TAMS 0x0000000095d00000, 0x0000000095c00000| Untracked
| 349|0x0000000095d00000, 0x0000000095e00000, 0x0000000095e00000|100%| O| |TAMS 0x0000000095e00000, 0x0000000095d00000| Untracked
| 350|0x0000000095e00000, 0x0000000095f00000, 0x0000000095f00000|100%| O| |TAMS 0x0000000095f00000, 0x0000000095e00000| Untracked
| 351|0x0000000095f00000, 0x0000000096000000, 0x0000000096000000|100%| O| |TAMS 0x0000000096000000, 0x0000000095f00000| Untracked
| 352|0x0000000096000000, 0x0000000096100000, 0x0000000096100000|100%| O| |TAMS 0x0000000096100000, 0x0000000096000000| Untracked
| 353|0x0000000096100000, 0x0000000096200000, 0x0000000096200000|100%| O| |TAMS 0x0000000096200000, 0x0000000096100000| Untracked
| 354|0x0000000096200000, 0x0000000096300000, 0x0000000096300000|100%| O| |TAMS 0x0000000096300000, 0x0000000096200000| Untracked
| 355|0x0000000096300000, 0x0000000096400000, 0x0000000096400000|100%| O| |TAMS 0x0000000096400000, 0x0000000096300000| Untracked
| 356|0x0000000096400000, 0x0000000096500000, 0x0000000096500000|100%| O| |TAMS 0x0000000096500000, 0x0000000096400000| Untracked
| 357|0x0000000096500000, 0x0000000096600000, 0x0000000096600000|100%| O| |TAMS 0x0000000096600000, 0x0000000096500000| Untracked
| 358|0x0000000096600000, 0x0000000096700000, 0x0000000096700000|100%| O| |TAMS 0x0000000096700000, 0x0000000096600000| Untracked
| 359|0x0000000096700000, 0x0000000096800000, 0x0000000096800000|100%| O| |TAMS 0x0000000096800000, 0x0000000096700000| Untracked
| 360|0x0000000096800000, 0x0000000096900000, 0x0000000096900000|100%| O| |TAMS 0x0000000096900000, 0x0000000096800000| Untracked
| 361|0x0000000096900000, 0x0000000096a00000, 0x0000000096a00000|100%| O| |TAMS 0x0000000096a00000, 0x0000000096900000| Untracked
| 362|0x0000000096a00000, 0x0000000096b00000, 0x0000000096b00000|100%| O| |TAMS 0x0000000096b00000, 0x0000000096a00000| Untracked
| 363|0x0000000096b00000, 0x0000000096c00000, 0x0000000096c00000|100%| O| |TAMS 0x0000000096c00000, 0x0000000096b00000| Untracked
| 364|0x0000000096c00000, 0x0000000096d00000, 0x0000000096d00000|100%| O| |TAMS 0x0000000096d00000, 0x0000000096c00000| Untracked
| 365|0x0000000096d00000, 0x0000000096e00000, 0x0000000096e00000|100%| O| |TAMS 0x0000000096e00000, 0x0000000096d00000| Untracked
| 366|0x0000000096e00000, 0x0000000096f00000, 0x0000000096f00000|100%| O| |TAMS 0x0000000096f00000, 0x0000000096e00000| Untracked
| 367|0x0000000096f00000, 0x0000000097000000, 0x0000000097000000|100%| O| |TAMS 0x0000000097000000, 0x0000000096f00000| Untracked
| 368|0x0000000097000000, 0x0000000097100000, 0x0000000097100000|100%| O| |TAMS 0x0000000097100000, 0x0000000097000000| Untracked
| 369|0x0000000097100000, 0x0000000097200000, 0x0000000097200000|100%| O| |TAMS 0x0000000097200000, 0x0000000097100000| Untracked
| 370|0x0000000097200000, 0x0000000097300000, 0x0000000097300000|100%| O| |TAMS 0x0000000097300000, 0x0000000097200000| Untracked
| 371|0x0000000097300000, 0x0000000097400000, 0x0000000097400000|100%| O| |TAMS 0x0000000097400000, 0x0000000097300000| Untracked
| 372|0x0000000097400000, 0x0000000097500000, 0x0000000097500000|100%| O| |TAMS 0x0000000097500000, 0x0000000097400000| Untracked
| 373|0x0000000097500000, 0x0000000097600000, 0x0000000097600000|100%| O| |TAMS 0x0000000097600000, 0x0000000097500000| Untracked
| 374|0x0000000097600000, 0x0000000097700000, 0x0000000097700000|100%| O| |TAMS 0x0000000097700000, 0x0000000097600000| Untracked
| 375|0x0000000097700000, 0x0000000097800000, 0x0000000097800000|100%| O| |TAMS 0x0000000097800000, 0x0000000097700000| Untracked
| 376|0x0000000097800000, 0x0000000097900000, 0x0000000097900000|100%| O| |TAMS 0x0000000097900000, 0x0000000097800000| Untracked
| 377|0x0000000097900000, 0x0000000097a00000, 0x0000000097a00000|100%| O| |TAMS 0x0000000097a00000, 0x0000000097900000| Untracked
| 378|0x0000000097a00000, 0x0000000097b00000, 0x0000000097b00000|100%| O| |TAMS 0x0000000097b00000, 0x0000000097a00000| Untracked
| 379|0x0000000097b00000, 0x0000000097c00000, 0x0000000097c00000|100%| O| |TAMS 0x0000000097c00000, 0x0000000097b00000| Untracked
| 380|0x0000000097c00000, 0x0000000097d00000, 0x0000000097d00000|100%| O| |TAMS 0x0000000097d00000, 0x0000000097c00000| Untracked
| 381|0x0000000097d00000, 0x0000000097e00000, 0x0000000097e00000|100%| O| |TAMS 0x0000000097e00000, 0x0000000097d00000| Untracked
| 382|0x0000000097e00000, 0x0000000097f00000, 0x0000000097f00000|100%| O| |TAMS 0x0000000097f00000, 0x0000000097e00000| Untracked
| 383|0x0000000097f00000, 0x0000000098000000, 0x0000000098000000|100%| O| |TAMS 0x0000000098000000, 0x0000000097f00000| Untracked
| 384|0x0000000098000000, 0x0000000098100000, 0x0000000098100000|100%| O| |TAMS 0x0000000098100000, 0x0000000098000000| Untracked
| 385|0x0000000098100000, 0x0000000098200000, 0x0000000098200000|100%| O| |TAMS 0x0000000098200000, 0x0000000098100000| Untracked
| 386|0x0000000098200000, 0x0000000098300000, 0x0000000098300000|100%| O| |TAMS 0x0000000098300000, 0x0000000098200000| Untracked
| 387|0x0000000098300000, 0x0000000098400000, 0x0000000098400000|100%| O| |TAMS 0x0000000098400000, 0x0000000098300000| Untracked
| 388|0x0000000098400000, 0x0000000098500000, 0x0000000098500000|100%| O| |TAMS 0x0000000098500000, 0x0000000098400000| Untracked
| 389|0x0000000098500000, 0x0000000098600000, 0x0000000098600000|100%| O| |TAMS 0x0000000098600000, 0x0000000098500000| Untracked
| 390|0x0000000098600000, 0x0000000098700000, 0x0000000098700000|100%| O| |TAMS 0x0000000098700000, 0x0000000098600000| Untracked
| 391|0x0000000098700000, 0x0000000098800000, 0x0000000098800000|100%| O| |TAMS 0x0000000098800000, 0x0000000098700000| Untracked
| 392|0x0000000098800000, 0x0000000098900000, 0x0000000098900000|100%| O| |TAMS 0x0000000098900000, 0x0000000098800000| Untracked
| 393|0x0000000098900000, 0x0000000098a00000, 0x0000000098a00000|100%| O| |TAMS 0x0000000098a00000, 0x0000000098900000| Untracked
| 394|0x0000000098a00000, 0x0000000098b00000, 0x0000000098b00000|100%| O| |TAMS 0x0000000098a00000, 0x0000000098a00000| Untracked
| 395|0x0000000098b00000, 0x0000000098c00000, 0x0000000098c00000|100%| O| |TAMS 0x0000000098c00000, 0x0000000098b00000| Untracked
| 396|0x0000000098c00000, 0x0000000098d00000, 0x0000000098d00000|100%| O| |TAMS 0x0000000098d00000, 0x0000000098c00000| Untracked
| 397|0x0000000098d00000, 0x0000000098e00000, 0x0000000098e00000|100%| O| |TAMS 0x0000000098e00000, 0x0000000098d00000| Untracked
| 398|0x0000000098e00000, 0x0000000098f00000, 0x0000000098f00000|100%| O| |TAMS 0x0000000098f00000, 0x0000000098e00000| Untracked
| 399|0x0000000098f00000, 0x0000000099000000, 0x0000000099000000|100%| O| |TAMS 0x0000000099000000, 0x0000000098f00000| Untracked
| 400|0x0000000099000000, 0x0000000099100000, 0x0000000099100000|100%|HS| |TAMS 0x0000000099100000, 0x0000000099000000| Complete
| 401|0x0000000099100000, 0x0000000099200000, 0x0000000099200000|100%|HS| |TAMS 0x0000000099200000, 0x0000000099100000| Complete
| 402|0x0000000099200000, 0x0000000099300000, 0x0000000099300000|100%|HS| |TAMS 0x0000000099300000, 0x0000000099200000| Complete
| 403|0x0000000099300000, 0x0000000099400000, 0x0000000099400000|100%| O| |TAMS 0x0000000099400000, 0x0000000099300000| Untracked
| 404|0x0000000099400000, 0x0000000099500000, 0x0000000099500000|100%| O| |TAMS 0x0000000099500000, 0x0000000099400000| Untracked
| 405|0x0000000099500000, 0x0000000099600000, 0x0000000099600000|100%| O| |TAMS 0x0000000099600000, 0x0000000099500000| Untracked
| 406|0x0000000099600000, 0x0000000099700000, 0x0000000099700000|100%| O| |TAMS 0x0000000099700000, 0x0000000099600000| Untracked
| 407|0x0000000099700000, 0x0000000099800000, 0x0000000099800000|100%| O| |TAMS 0x0000000099800000, 0x0000000099700000| Untracked
| 408|0x0000000099800000, 0x0000000099900000, 0x0000000099900000|100%| O| |TAMS 0x0000000099900000, 0x0000000099800000| Untracked
| 409|0x0000000099900000, 0x0000000099a00000, 0x0000000099a00000|100%| O| |TAMS 0x0000000099a00000, 0x0000000099900000| Untracked
| 410|0x0000000099a00000, 0x0000000099b00000, 0x0000000099b00000|100%|HS| |TAMS 0x0000000099b00000, 0x0000000099a00000| Complete
| 411|0x0000000099b00000, 0x0000000099c00000, 0x0000000099c00000|100%|HC| |TAMS 0x0000000099c00000, 0x0000000099b00000| Complete
| 412|0x0000000099c00000, 0x0000000099d00000, 0x0000000099d00000|100%| O| |TAMS 0x0000000099d00000, 0x0000000099c00000| Untracked
| 413|0x0000000099d00000, 0x0000000099e00000, 0x0000000099e00000|100%| O| |TAMS 0x0000000099e00000, 0x0000000099d00000| Untracked
| 414|0x0000000099e00000, 0x0000000099f00000, 0x0000000099f00000|100%| O| |TAMS 0x0000000099f00000, 0x0000000099e00000| Untracked
| 415|0x0000000099f00000, 0x000000009a000000, 0x000000009a000000|100%| O| |TAMS 0x000000009a000000, 0x0000000099f00000| Untracked
| 416|0x000000009a000000, 0x000000009a100000, 0x000000009a100000|100%| O| |TAMS 0x000000009a100000, 0x000000009a000000| Untracked
| 417|0x000000009a100000, 0x000000009a200000, 0x000000009a200000|100%| O| |TAMS 0x000000009a200000, 0x000000009a100000| Untracked
| 418|0x000000009a200000, 0x000000009a300000, 0x000000009a300000|100%| O| |TAMS 0x000000009a300000, 0x000000009a200000| Untracked
| 419|0x000000009a300000, 0x000000009a400000, 0x000000009a400000|100%| O| |TAMS 0x000000009a400000, 0x000000009a300000| Untracked
| 420|0x000000009a400000, 0x000000009a500000, 0x000000009a500000|100%| O| |TAMS 0x000000009a500000, 0x000000009a400000| Untracked
| 421|0x000000009a500000, 0x000000009a600000, 0x000000009a600000|100%| O| |TAMS 0x000000009a600000, 0x000000009a500000| Untracked
| 422|0x000000009a600000, 0x000000009a700000, 0x000000009a700000|100%| O| |TAMS 0x000000009a700000, 0x000000009a600000| Untracked
| 423|0x000000009a700000, 0x000000009a800000, 0x000000009a800000|100%| O| |TAMS 0x000000009a800000, 0x000000009a700000| Untracked
| 424|0x000000009a800000, 0x000000009a900000, 0x000000009a900000|100%| O| |TAMS 0x000000009a900000, 0x000000009a800000| Untracked
| 425|0x000000009a900000, 0x000000009aa00000, 0x000000009aa00000|100%| O| |TAMS 0x000000009aa00000, 0x000000009a900000| Untracked
| 426|0x000000009aa00000, 0x000000009ab00000, 0x000000009ab00000|100%| O| |TAMS 0x000000009ab00000, 0x000000009aa00000| Untracked
| 427|0x000000009ab00000, 0x000000009ac00000, 0x000000009ac00000|100%| O| |TAMS 0x000000009ac00000, 0x000000009ab00000| Untracked
| 428|0x000000009ac00000, 0x000000009ad00000, 0x000000009ad00000|100%| O| |TAMS 0x000000009ad00000, 0x000000009ac00000| Untracked
| 429|0x000000009ad00000, 0x000000009ae00000, 0x000000009ae00000|100%| O| |TAMS 0x000000009ae00000, 0x000000009ad00000| Untracked
| 430|0x000000009ae00000, 0x000000009af00000, 0x000000009af00000|100%| O| |TAMS 0x000000009af00000, 0x000000009ae00000| Untracked
| 431|0x000000009af00000, 0x000000009b000000, 0x000000009b000000|100%| O| |TAMS 0x000000009b000000, 0x000000009af00000| Untracked
| 432|0x000000009b000000, 0x000000009b100000, 0x000000009b100000|100%| O| |TAMS 0x000000009b100000, 0x000000009b000000| Untracked
| 433|0x000000009b100000, 0x000000009b200000, 0x000000009b200000|100%| O| |TAMS 0x000000009b200000, 0x000000009b100000| Untracked
| 434|0x000000009b200000, 0x000000009b300000, 0x000000009b300000|100%| O| |TAMS 0x000000009b300000, 0x000000009b200000| Untracked
| 435|0x000000009b300000, 0x000000009b400000, 0x000000009b400000|100%| O| |TAMS 0x000000009b400000, 0x000000009b300000| Untracked
| 436|0x000000009b400000, 0x000000009b500000, 0x000000009b500000|100%| O| |TAMS 0x000000009b500000, 0x000000009b400000| Untracked
| 437|0x000000009b500000, 0x000000009b600000, 0x000000009b600000|100%| O| |TAMS 0x000000009b600000, 0x000000009b500000| Untracked
| 438|0x000000009b600000, 0x000000009b700000, 0x000000009b700000|100%| O| |TAMS 0x000000009b600000, 0x000000009b600000| Untracked
| 439|0x000000009b700000, 0x000000009b800000, 0x000000009b800000|100%| O| |TAMS 0x000000009b800000, 0x000000009b700000| Untracked
| 440|0x000000009b800000, 0x000000009b900000, 0x000000009b900000|100%| O| |TAMS 0x000000009b900000, 0x000000009b800000| Untracked
| 441|0x000000009b900000, 0x000000009ba00000, 0x000000009ba00000|100%| O| |TAMS 0x000000009ba00000, 0x000000009b900000| Untracked
| 442|0x000000009ba00000, 0x000000009bb00000, 0x000000009bb00000|100%| O| |TAMS 0x000000009bb00000, 0x000000009ba00000| Untracked
| 443|0x000000009bb00000, 0x000000009bc00000, 0x000000009bc00000|100%| O| |TAMS 0x000000009bb00000, 0x000000009bb00000| Untracked
| 444|0x000000009bc00000, 0x000000009bd00000, 0x000000009bd00000|100%| O| |TAMS 0x000000009bd00000, 0x000000009bc00000| Untracked
| 445|0x000000009bd00000, 0x000000009be00000, 0x000000009be00000|100%| O| |TAMS 0x000000009be00000, 0x000000009bd00000| Untracked
| 446|0x000000009be00000, 0x000000009bf00000, 0x000000009bf00000|100%| O| |TAMS 0x000000009bf00000, 0x000000009be00000| Untracked
| 447|0x000000009bf00000, 0x000000009c000000, 0x000000009c000000|100%| O| |TAMS 0x000000009c000000, 0x000000009bf00000| Untracked
| 448|0x000000009c000000, 0x000000009c100000, 0x000000009c100000|100%| O| |TAMS 0x000000009c100000, 0x000000009c000000| Untracked
| 449|0x000000009c100000, 0x000000009c200000, 0x000000009c200000|100%| O| |TAMS 0x000000009c200000, 0x000000009c100000| Untracked
| 450|0x000000009c200000, 0x000000009c300000, 0x000000009c300000|100%| O| |TAMS 0x000000009c300000, 0x000000009c200000| Untracked
| 451|0x000000009c300000, 0x000000009c400000, 0x000000009c400000|100%| O| |TAMS 0x000000009c400000, 0x000000009c300000| Untracked
| 452|0x000000009c400000, 0x000000009c500000, 0x000000009c500000|100%| O| |TAMS 0x000000009c500000, 0x000000009c400000| Untracked
| 453|0x000000009c500000, 0x000000009c600000, 0x000000009c600000|100%| O| |TAMS 0x000000009c600000, 0x000000009c500000| Untracked
| 454|0x000000009c600000, 0x000000009c700000, 0x000000009c700000|100%| O| |TAMS 0x000000009c700000, 0x000000009c600000| Untracked
| 455|0x000000009c700000, 0x000000009c800000, 0x000000009c800000|100%| O| |TAMS 0x000000009c800000, 0x000000009c700000| Untracked
| 456|0x000000009c800000, 0x000000009c900000, 0x000000009c900000|100%| O| |TAMS 0x000000009c900000, 0x000000009c800000| Untracked
| 457|0x000000009c900000, 0x000000009ca00000, 0x000000009ca00000|100%| O| |TAMS 0x000000009ca00000, 0x000000009c900000| Untracked
| 458|0x000000009ca00000, 0x000000009cb00000, 0x000000009cb00000|100%| O| |TAMS 0x000000009cb00000, 0x000000009ca00000| Untracked
| 459|0x000000009cb00000, 0x000000009cc00000, 0x000000009cc00000|100%| O| |TAMS 0x000000009cc00000, 0x000000009cb00000| Untracked
| 460|0x000000009cc00000, 0x000000009cd00000, 0x000000009cd00000|100%| O| |TAMS 0x000000009cd00000, 0x000000009cc00000| Untracked
| 461|0x000000009cd00000, 0x000000009ce00000, 0x000000009ce00000|100%| O| |TAMS 0x000000009ce00000, 0x000000009cd00000| Untracked
| 462|0x000000009ce00000, 0x000000009cf00000, 0x000000009cf00000|100%| O| |TAMS 0x000000009cf00000, 0x000000009ce00000| Untracked
| 463|0x000000009cf00000, 0x000000009d000000, 0x000000009d000000|100%| O| |TAMS 0x000000009d000000, 0x000000009cf00000| Untracked
| 464|0x000000009d000000, 0x000000009d100000, 0x000000009d100000|100%| O| |TAMS 0x000000009d000000, 0x000000009d000000| Untracked
| 465|0x000000009d100000, 0x000000009d200000, 0x000000009d200000|100%| O| |TAMS 0x000000009d200000, 0x000000009d100000| Untracked
| 466|0x000000009d200000, 0x000000009d300000, 0x000000009d300000|100%| O| |TAMS 0x000000009d300000, 0x000000009d200000| Untracked
| 467|0x000000009d300000, 0x000000009d400000, 0x000000009d400000|100%| O| |TAMS 0x000000009d300000, 0x000000009d300000| Untracked
| 468|0x000000009d400000, 0x000000009d500000, 0x000000009d500000|100%| O| |TAMS 0x000000009d500000, 0x000000009d400000| Untracked
| 469|0x000000009d500000, 0x000000009d600000, 0x000000009d600000|100%| O| |TAMS 0x000000009d600000, 0x000000009d500000| Untracked
| 470|0x000000009d600000, 0x000000009d700000, 0x000000009d700000|100%| O| |TAMS 0x000000009d700000, 0x000000009d600000| Untracked
| 471|0x000000009d700000, 0x000000009d800000, 0x000000009d800000|100%| O| |TAMS 0x000000009d800000, 0x000000009d700000| Untracked
| 472|0x000000009d800000, 0x000000009d900000, 0x000000009d900000|100%| O| |TAMS 0x000000009d900000, 0x000000009d800000| Untracked
| 473|0x000000009d900000, 0x000000009da00000, 0x000000009da00000|100%| O| |TAMS 0x000000009da00000, 0x000000009d900000| Untracked
| 474|0x000000009da00000, 0x000000009db00000, 0x000000009db00000|100%| O| |TAMS 0x000000009db00000, 0x000000009da00000| Untracked
| 475|0x000000009db00000, 0x000000009dc00000, 0x000000009dc00000|100%| O| |TAMS 0x000000009dc00000, 0x000000009db00000| Untracked
| 476|0x000000009dc00000, 0x000000009dd00000, 0x000000009dd00000|100%| O| |TAMS 0x000000009dd00000, 0x000000009dc00000| Untracked
| 477|0x000000009dd00000, 0x000000009de00000, 0x000000009de00000|100%| O| |TAMS 0x000000009de00000, 0x000000009dd00000| Untracked
| 478|0x000000009de00000, 0x000000009df00000, 0x000000009df00000|100%| O| |TAMS 0x000000009df00000, 0x000000009de00000| Untracked
| 479|0x000000009df00000, 0x000000009e000000, 0x000000009e000000|100%| O| |TAMS 0x000000009df00000, 0x000000009df00000| Untracked
| 480|0x000000009e000000, 0x000000009e100000, 0x000000009e100000|100%| O| |TAMS 0x000000009e100000, 0x000000009e000000| Untracked
| 481|0x000000009e100000, 0x000000009e200000, 0x000000009e200000|100%| O| |TAMS 0x000000009e200000, 0x000000009e100000| Untracked
| 482|0x000000009e200000, 0x000000009e300000, 0x000000009e300000|100%| O| |TAMS 0x000000009e300000, 0x000000009e200000| Untracked
| 483|0x000000009e300000, 0x000000009e400000, 0x000000009e400000|100%| O| |TAMS 0x000000009e400000, 0x000000009e300000| Untracked
| 484|0x000000009e400000, 0x000000009e500000, 0x000000009e500000|100%| O| |TAMS 0x000000009e500000, 0x000000009e400000| Untracked
| 485|0x000000009e500000, 0x000000009e600000, 0x000000009e600000|100%| O| |TAMS 0x000000009e600000, 0x000000009e500000| Untracked
| 486|0x000000009e600000, 0x000000009e700000, 0x000000009e700000|100%| O| |TAMS 0x000000009e700000, 0x000000009e600000| Untracked
| 487|0x000000009e700000, 0x000000009e800000, 0x000000009e800000|100%| O| |TAMS 0x000000009e800000, 0x000000009e700000| Untracked
| 488|0x000000009e800000, 0x000000009e900000, 0x000000009e900000|100%|HS| |TAMS 0x000000009e900000, 0x000000009e800000| Complete
| 489|0x000000009e900000, 0x000000009ea00000, 0x000000009ea00000|100%| O| |TAMS 0x000000009ea00000, 0x000000009e900000| Untracked
| 490|0x000000009ea00000, 0x000000009eb00000, 0x000000009eb00000|100%| O| |TAMS 0x000000009eb00000, 0x000000009ea00000| Untracked
| 491|0x000000009eb00000, 0x000000009ec00000, 0x000000009ec00000|100%| O| |TAMS 0x000000009ec00000, 0x000000009eb00000| Untracked
| 492|0x000000009ec00000, 0x000000009ed00000, 0x000000009ed00000|100%| O| |TAMS 0x000000009ec00000, 0x000000009ec00000| Untracked
| 493|0x000000009ed00000, 0x000000009ee00000, 0x000000009ee00000|100%| O| |TAMS 0x000000009ee00000, 0x000000009ed00000| Untracked
| 494|0x000000009ee00000, 0x000000009ef00000, 0x000000009ef00000|100%| O| |TAMS 0x000000009ef00000, 0x000000009ee00000| Untracked
| 495|0x000000009ef00000, 0x000000009f000000, 0x000000009f000000|100%| O| |TAMS 0x000000009f000000, 0x000000009ef00000| Untracked
| 496|0x000000009f000000, 0x000000009f100000, 0x000000009f100000|100%| O| |TAMS 0x000000009f100000, 0x000000009f000000| Untracked
| 497|0x000000009f100000, 0x000000009f200000, 0x000000009f200000|100%| O| |TAMS 0x000000009f200000, 0x000000009f100000| Untracked
| 498|0x000000009f200000, 0x000000009f300000, 0x000000009f300000|100%| O| |TAMS 0x000000009f300000, 0x000000009f200000| Untracked
| 499|0x000000009f300000, 0x000000009f400000, 0x000000009f400000|100%| O| |TAMS 0x000000009f400000, 0x000000009f300000| Untracked
| 500|0x000000009f400000, 0x000000009f500000, 0x000000009f500000|100%| O| |TAMS 0x000000009f400000, 0x000000009f400000| Untracked
| 501|0x000000009f500000, 0x000000009f600000, 0x000000009f600000|100%| O| |TAMS 0x000000009f600000, 0x000000009f500000| Untracked
| 502|0x000000009f600000, 0x000000009f700000, 0x000000009f700000|100%| O| |TAMS 0x000000009f700000, 0x000000009f600000| Untracked
| 503|0x000000009f700000, 0x000000009f800000, 0x000000009f800000|100%| O| |TAMS 0x000000009f800000, 0x000000009f700000| Untracked
| 504|0x000000009f800000, 0x000000009f900000, 0x000000009f900000|100%| O| |TAMS 0x000000009f900000, 0x000000009f800000| Untracked
| 505|0x000000009f900000, 0x000000009fa00000, 0x000000009fa00000|100%| O| |TAMS 0x000000009fa00000, 0x000000009f900000| Untracked
| 506|0x000000009fa00000, 0x000000009fb00000, 0x000000009fb00000|100%| O| |TAMS 0x000000009fb00000, 0x000000009fa00000| Untracked
| 507|0x000000009fb00000, 0x000000009fc00000, 0x000000009fc00000|100%| O| |TAMS 0x000000009fc00000, 0x000000009fb00000| Untracked
| 508|0x000000009fc00000, 0x000000009fd00000, 0x000000009fd00000|100%| O| |TAMS 0x000000009fd00000, 0x000000009fc00000| Untracked
| 509|0x000000009fd00000, 0x000000009fe00000, 0x000000009fe00000|100%| O| |TAMS 0x000000009fe00000, 0x000000009fd00000| Untracked
| 510|0x000000009fe00000, 0x000000009ff00000, 0x000000009ff00000|100%| O| |TAMS 0x000000009ff00000, 0x000000009fe00000| Untracked
| 511|0x000000009ff00000, 0x00000000a0000000, 0x00000000a0000000|100%| O| |TAMS 0x00000000a0000000, 0x000000009ff00000| Untracked
| 512|0x00000000a0000000, 0x00000000a0100000, 0x00000000a0100000|100%| O| |TAMS 0x00000000a0100000, 0x00000000a0000000| Untracked
| 513|0x00000000a0100000, 0x00000000a0200000, 0x00000000a0200000|100%| O| |TAMS 0x00000000a0200000, 0x00000000a0100000| Untracked
| 514|0x00000000a0200000, 0x00000000a0300000, 0x00000000a0300000|100%| O| |TAMS 0x00000000a0300000, 0x00000000a0200000| Untracked
| 515|0x00000000a0300000, 0x00000000a0400000, 0x00000000a0400000|100%| O| |TAMS 0x00000000a0400000, 0x00000000a0300000| Untracked
| 516|0x00000000a0400000, 0x00000000a0500000, 0x00000000a0500000|100%| O| |TAMS 0x00000000a0500000, 0x00000000a0400000| Untracked
| 517|0x00000000a0500000, 0x00000000a0600000, 0x00000000a0600000|100%| O| |TAMS 0x00000000a0600000, 0x00000000a0500000| Untracked
| 518|0x00000000a0600000, 0x00000000a0700000, 0x00000000a0700000|100%| O| |TAMS 0x00000000a0600000, 0x00000000a0600000| Untracked
| 519|0x00000000a0700000, 0x00000000a0800000, 0x00000000a0800000|100%| O| |TAMS 0x00000000a0700000, 0x00000000a0700000| Untracked
| 520|0x00000000a0800000, 0x00000000a0900000, 0x00000000a0900000|100%| O| |TAMS 0x00000000a0900000, 0x00000000a0800000| Untracked
| 521|0x00000000a0900000, 0x00000000a0a00000, 0x00000000a0a00000|100%| O| |TAMS 0x00000000a0a00000, 0x00000000a0900000| Untracked
| 522|0x00000000a0a00000, 0x00000000a0b00000, 0x00000000a0b00000|100%| O| |TAMS 0x00000000a0b00000, 0x00000000a0a00000| Untracked
| 523|0x00000000a0b00000, 0x00000000a0c00000, 0x00000000a0c00000|100%| O| |TAMS 0x00000000a0c00000, 0x00000000a0b00000| Untracked
| 524|0x00000000a0c00000, 0x00000000a0d00000, 0x00000000a0d00000|100%| O| |TAMS 0x00000000a0d00000, 0x00000000a0c00000| Untracked
| 525|0x00000000a0d00000, 0x00000000a0e00000, 0x00000000a0e00000|100%| O| |TAMS 0x00000000a0e00000, 0x00000000a0d00000| Untracked
| 526|0x00000000a0e00000, 0x00000000a0f00000, 0x00000000a0f00000|100%| O| |TAMS 0x00000000a0e00000, 0x00000000a0e00000| Untracked
| 527|0x00000000a0f00000, 0x00000000a1000000, 0x00000000a1000000|100%| O| |TAMS 0x00000000a1000000, 0x00000000a0f00000| Untracked
| 528|0x00000000a1000000, 0x00000000a1100000, 0x00000000a1100000|100%| O| |TAMS 0x00000000a1100000, 0x00000000a1000000| Untracked
| 529|0x00000000a1100000, 0x00000000a1200000, 0x00000000a1200000|100%| O| |TAMS 0x00000000a1200000, 0x00000000a1100000| Untracked
| 530|0x00000000a1200000, 0x00000000a1300000, 0x00000000a1300000|100%| O| |TAMS 0x00000000a1300000, 0x00000000a1200000| Untracked
| 531|0x00000000a1300000, 0x00000000a1400000, 0x00000000a1400000|100%| O| |TAMS 0x00000000a1400000, 0x00000000a1300000| Untracked
| 532|0x00000000a1400000, 0x00000000a1500000, 0x00000000a1500000|100%| O| |TAMS 0x00000000a1500000, 0x00000000a1400000| Untracked
| 533|0x00000000a1500000, 0x00000000a1600000, 0x00000000a1600000|100%| O| |TAMS 0x00000000a1600000, 0x00000000a1500000| Untracked
| 534|0x00000000a1600000, 0x00000000a1700000, 0x00000000a1700000|100%| O| |TAMS 0x00000000a1700000, 0x00000000a1600000| Untracked
| 535|0x00000000a1700000, 0x00000000a1800000, 0x00000000a1800000|100%| O| |TAMS 0x00000000a1800000, 0x00000000a1700000| Untracked
| 536|0x00000000a1800000, 0x00000000a1900000, 0x00000000a1900000|100%| O| |TAMS 0x00000000a1900000, 0x00000000a1800000| Untracked
| 537|0x00000000a1900000, 0x00000000a1a00000, 0x00000000a1a00000|100%| O| |TAMS 0x00000000a1a00000, 0x00000000a1900000| Untracked
| 538|0x00000000a1a00000, 0x00000000a1b00000, 0x00000000a1b00000|100%| O| |TAMS 0x00000000a1b00000, 0x00000000a1a00000| Untracked
| 539|0x00000000a1b00000, 0x00000000a1c00000, 0x00000000a1c00000|100%| O| |TAMS 0x00000000a1c00000, 0x00000000a1b00000| Untracked
| 540|0x00000000a1c00000, 0x00000000a1c52000, 0x00000000a1d00000| 32%| O| |TAMS 0x00000000a1c00000, 0x00000000a1c00000| Untracked
| 541|0x00000000a1d00000, 0x00000000a1d00000, 0x00000000a1e00000| 0%| F| |TAMS 0x00000000a1d00000, 0x00000000a1d00000| Untracked
| 542|0x00000000a1e00000, 0x00000000a1f00000, 0x00000000a1f00000|100%| O| |TAMS 0x00000000a1f00000, 0x00000000a1e00000| Untracked
| 543|0x00000000a1f00000, 0x00000000a2000000, 0x00000000a2000000|100%|HS| |TAMS 0x00000000a2000000, 0x00000000a1f00000| Complete
| 544|0x00000000a2000000, 0x00000000a2100000, 0x00000000a2100000|100%| O| |TAMS 0x00000000a2100000, 0x00000000a2000000| Untracked
| 545|0x00000000a2100000, 0x00000000a2200000, 0x00000000a2200000|100%| O| |TAMS 0x00000000a2200000, 0x00000000a2100000| Untracked
| 546|0x00000000a2200000, 0x00000000a2300000, 0x00000000a2300000|100%| O| |TAMS 0x00000000a2300000, 0x00000000a2200000| Untracked
| 547|0x00000000a2300000, 0x00000000a2400000, 0x00000000a2400000|100%| O| |TAMS 0x00000000a2400000, 0x00000000a2300000| Untracked
| 548|0x00000000a2400000, 0x00000000a2500000, 0x00000000a2500000|100%| O| |TAMS 0x00000000a2500000, 0x00000000a2400000| Untracked
| 549|0x00000000a2500000, 0x00000000a2600000, 0x00000000a2600000|100%| O| |TAMS 0x00000000a2600000, 0x00000000a2500000| Untracked
| 550|0x00000000a2600000, 0x00000000a2600000, 0x00000000a2700000| 0%| F| |TAMS 0x00000000a2600000, 0x00000000a2600000| Untracked
| 551|0x00000000a2700000, 0x00000000a2800000, 0x00000000a2800000|100%| O| |TAMS 0x00000000a2800000, 0x00000000a2700000| Untracked
| 552|0x00000000a2800000, 0x00000000a2900000, 0x00000000a2900000|100%| O| |TAMS 0x00000000a2800000, 0x00000000a2800000| Untracked
| 553|0x00000000a2900000, 0x00000000a2a00000, 0x00000000a2a00000|100%| O| |TAMS 0x00000000a2a00000, 0x00000000a2900000| Untracked
| 554|0x00000000a2a00000, 0x00000000a2b00000, 0x00000000a2b00000|100%| O| |TAMS 0x00000000a2b00000, 0x00000000a2a00000| Untracked
| 555|0x00000000a2b00000, 0x00000000a2b00000, 0x00000000a2c00000| 0%| F| |TAMS 0x00000000a2b00000, 0x00000000a2b00000| Untracked
| 556|0x00000000a2c00000, 0x00000000a2d00000, 0x00000000a2d00000|100%| O| |TAMS 0x00000000a2d00000, 0x00000000a2c00000| Untracked
| 557|0x00000000a2d00000, 0x00000000a2d00000, 0x00000000a2e00000| 0%| F| |TAMS 0x00000000a2d00000, 0x00000000a2d00000| Untracked
| 558|0x00000000a2e00000, 0x00000000a2f00000, 0x00000000a2f00000|100%| O| |TAMS 0x00000000a2f00000, 0x00000000a2e00000| Untracked
| 559|0x00000000a2f00000, 0x00000000a3000000, 0x00000000a3000000|100%|HS| |TAMS 0x00000000a3000000, 0x00000000a2f00000| Complete
| 560|0x00000000a3000000, 0x00000000a3100000, 0x00000000a3100000|100%|HC| |TAMS 0x00000000a3100000, 0x00000000a3000000| Complete
| 561|0x00000000a3100000, 0x00000000a3200000, 0x00000000a3200000|100%| O| |TAMS 0x00000000a3200000, 0x00000000a3100000| Untracked
| 562|0x00000000a3200000, 0x00000000a3300000, 0x00000000a3300000|100%| O| |TAMS 0x00000000a3300000, 0x00000000a3200000| Untracked
| 563|0x00000000a3300000, 0x00000000a3400000, 0x00000000a3400000|100%| O| |TAMS 0x00000000a3400000, 0x00000000a3300000| Untracked
| 564|0x00000000a3400000, 0x00000000a3500000, 0x00000000a3500000|100%| O| |TAMS 0x00000000a3500000, 0x00000000a3400000| Untracked
| 565|0x00000000a3500000, 0x00000000a3600000, 0x00000000a3600000|100%| O| |TAMS 0x00000000a3600000, 0x00000000a3500000| Untracked
| 566|0x00000000a3600000, 0x00000000a3700000, 0x00000000a3700000|100%| O| |TAMS 0x00000000a3700000, 0x00000000a3600000| Untracked
| 567|0x00000000a3700000, 0x00000000a3800000, 0x00000000a3800000|100%| O| |TAMS 0x00000000a3800000, 0x00000000a3700000| Untracked
| 568|0x00000000a3800000, 0x00000000a3900000, 0x00000000a3900000|100%| O| |TAMS 0x00000000a3900000, 0x00000000a3800000| Untracked
| 569|0x00000000a3900000, 0x00000000a3a00000, 0x00000000a3a00000|100%| O| |TAMS 0x00000000a3a00000, 0x00000000a3900000| Untracked
| 570|0x00000000a3a00000, 0x00000000a3b00000, 0x00000000a3b00000|100%| O| |TAMS 0x00000000a3b00000, 0x00000000a3a00000| Untracked
| 571|0x00000000a3b00000, 0x00000000a3c00000, 0x00000000a3c00000|100%| O| |TAMS 0x00000000a3c00000, 0x00000000a3b00000| Untracked
| 572|0x00000000a3c00000, 0x00000000a3d00000, 0x00000000a3d00000|100%| O| |TAMS 0x00000000a3d00000, 0x00000000a3c00000| Untracked
| 573|0x00000000a3d00000, 0x00000000a3e00000, 0x00000000a3e00000|100%| O| |TAMS 0x00000000a3e00000, 0x00000000a3d00000| Untracked
| 574|0x00000000a3e00000, 0x00000000a3f00000, 0x00000000a3f00000|100%| O| |TAMS 0x00000000a3f00000, 0x00000000a3e00000| Untracked
| 575|0x00000000a3f00000, 0x00000000a4000000, 0x00000000a4000000|100%| O| |TAMS 0x00000000a4000000, 0x00000000a3f00000| Untracked
| 576|0x00000000a4000000, 0x00000000a4100000, 0x00000000a4100000|100%| O| |TAMS 0x00000000a4100000, 0x00000000a4000000| Untracked
| 577|0x00000000a4100000, 0x00000000a4200000, 0x00000000a4200000|100%| O| |TAMS 0x00000000a4200000, 0x00000000a4100000| Untracked
| 578|0x00000000a4200000, 0x00000000a4300000, 0x00000000a4300000|100%| O| |TAMS 0x00000000a4300000, 0x00000000a4200000| Untracked
| 579|0x00000000a4300000, 0x00000000a4400000, 0x00000000a4400000|100%| O| |TAMS 0x00000000a4400000, 0x00000000a4300000| Untracked
| 580|0x00000000a4400000, 0x00000000a4500000, 0x00000000a4500000|100%| O| |TAMS 0x00000000a4500000, 0x00000000a4400000| Untracked
| 581|0x00000000a4500000, 0x00000000a4600000, 0x00000000a4600000|100%| O| |TAMS 0x00000000a4600000, 0x00000000a4500000| Untracked
| 582|0x00000000a4600000, 0x00000000a4700000, 0x00000000a4700000|100%| O| |TAMS 0x00000000a4700000, 0x00000000a4600000| Untracked
| 583|0x00000000a4700000, 0x00000000a4800000, 0x00000000a4800000|100%| O| |TAMS 0x00000000a4800000, 0x00000000a4700000| Untracked
| 584|0x00000000a4800000, 0x00000000a4900000, 0x00000000a4900000|100%| O| |TAMS 0x00000000a4900000, 0x00000000a4800000| Untracked
| 585|0x00000000a4900000, 0x00000000a4a00000, 0x00000000a4a00000|100%| O| |TAMS 0x00000000a4a00000, 0x00000000a4900000| Untracked
| 586|0x00000000a4a00000, 0x00000000a4b00000, 0x00000000a4b00000|100%| O| |TAMS 0x00000000a4b00000, 0x00000000a4a00000| Untracked
| 587|0x00000000a4b00000, 0x00000000a4c00000, 0x00000000a4c00000|100%| O| |TAMS 0x00000000a4c00000, 0x00000000a4b00000| Untracked
| 588|0x00000000a4c00000, 0x00000000a4d00000, 0x00000000a4d00000|100%| O| |TAMS 0x00000000a4d00000, 0x00000000a4c00000| Untracked
| 589|0x00000000a4d00000, 0x00000000a4e00000, 0x00000000a4e00000|100%| O| |TAMS 0x00000000a4e00000, 0x00000000a4d00000| Untracked
| 590|0x00000000a4e00000, 0x00000000a4f00000, 0x00000000a4f00000|100%| O| |TAMS 0x00000000a4f00000, 0x00000000a4e00000| Untracked
| 591|0x00000000a4f00000, 0x00000000a5000000, 0x00000000a5000000|100%| O| |TAMS 0x00000000a5000000, 0x00000000a4f00000| Untracked
| 592|0x00000000a5000000, 0x00000000a5100000, 0x00000000a5100000|100%| O| |TAMS 0x00000000a5100000, 0x00000000a5000000| Untracked
| 593|0x00000000a5100000, 0x00000000a5200000, 0x00000000a5200000|100%| O| |TAMS 0x00000000a5200000, 0x00000000a5100000| Untracked
| 594|0x00000000a5200000, 0x00000000a5300000, 0x00000000a5300000|100%| O| |TAMS 0x00000000a5300000, 0x00000000a5200000| Untracked
| 595|0x00000000a5300000, 0x00000000a5400000, 0x00000000a5400000|100%| O| |TAMS 0x00000000a5400000, 0x00000000a5300000| Untracked
| 596|0x00000000a5400000, 0x00000000a5500000, 0x00000000a5500000|100%| O| |TAMS 0x00000000a5500000, 0x00000000a5400000| Untracked
| 597|0x00000000a5500000, 0x00000000a5600000, 0x00000000a5600000|100%| O| |TAMS 0x00000000a5600000, 0x00000000a5500000| Untracked
| 598|0x00000000a5600000, 0x00000000a5700000, 0x00000000a5700000|100%| O| |TAMS 0x00000000a5700000, 0x00000000a5600000| Untracked
| 599|0x00000000a5700000, 0x00000000a5700000, 0x00000000a5800000| 0%| F| |TAMS 0x00000000a5700000, 0x00000000a5700000| Untracked
| 600|0x00000000a5800000, 0x00000000a5900000, 0x00000000a5900000|100%| O| |TAMS 0x00000000a5900000, 0x00000000a5800000| Untracked
| 601|0x00000000a5900000, 0x00000000a5a00000, 0x00000000a5a00000|100%| O| |TAMS 0x00000000a5a00000, 0x00000000a5900000| Untracked
| 602|0x00000000a5a00000, 0x00000000a5b00000, 0x00000000a5b00000|100%| O| |TAMS 0x00000000a5b00000, 0x00000000a5a00000| Untracked
| 603|0x00000000a5b00000, 0x00000000a5c00000, 0x00000000a5c00000|100%| O| |TAMS 0x00000000a5c00000, 0x00000000a5b00000| Untracked
| 604|0x00000000a5c00000, 0x00000000a5d00000, 0x00000000a5d00000|100%| O| |TAMS 0x00000000a5d00000, 0x00000000a5c00000| Untracked
| 605|0x00000000a5d00000, 0x00000000a5e00000, 0x00000000a5e00000|100%| O| |TAMS 0x00000000a5e00000, 0x00000000a5d00000| Untracked
| 606|0x00000000a5e00000, 0x00000000a5f00000, 0x00000000a5f00000|100%| O| |TAMS 0x00000000a5f00000, 0x00000000a5e00000| Untracked
| 607|0x00000000a5f00000, 0x00000000a6000000, 0x00000000a6000000|100%| O| |TAMS 0x00000000a6000000, 0x00000000a5f00000| Untracked
| 608|0x00000000a6000000, 0x00000000a6100000, 0x00000000a6100000|100%| O| |TAMS 0x00000000a6100000, 0x00000000a6000000| Untracked
| 609|0x00000000a6100000, 0x00000000a6200000, 0x00000000a6200000|100%| O| |TAMS 0x00000000a6200000, 0x00000000a6100000| Untracked
| 610|0x00000000a6200000, 0x00000000a6300000, 0x00000000a6300000|100%| O| |TAMS 0x00000000a6300000, 0x00000000a6200000| Untracked
| 611|0x00000000a6300000, 0x00000000a6400000, 0x00000000a6400000|100%| O| |TAMS 0x00000000a6400000, 0x00000000a6300000| Untracked
| 612|0x00000000a6400000, 0x00000000a6500000, 0x00000000a6500000|100%| O| |TAMS 0x00000000a6500000, 0x00000000a6400000| Untracked
| 613|0x00000000a6500000, 0x00000000a6600000, 0x00000000a6600000|100%| O| |TAMS 0x00000000a6600000, 0x00000000a6500000| Untracked
| 614|0x00000000a6600000, 0x00000000a6700000, 0x00000000a6700000|100%| O| |TAMS 0x00000000a6700000, 0x00000000a6600000| Untracked
| 615|0x00000000a6700000, 0x00000000a6800000, 0x00000000a6800000|100%| O| |TAMS 0x00000000a6800000, 0x00000000a6700000| Untracked
| 616|0x00000000a6800000, 0x00000000a6900000, 0x00000000a6900000|100%| O| |TAMS 0x00000000a6900000, 0x00000000a6800000| Untracked
| 617|0x00000000a6900000, 0x00000000a6900000, 0x00000000a6a00000| 0%| F| |TAMS 0x00000000a6900000, 0x00000000a6900000| Untracked
| 618|0x00000000a6a00000, 0x00000000a6a00000, 0x00000000a6b00000| 0%| F| |TAMS 0x00000000a6a00000, 0x00000000a6a00000| Untracked
| 619|0x00000000a6b00000, 0x00000000a6b00000, 0x00000000a6c00000| 0%| F| |TAMS 0x00000000a6b00000, 0x00000000a6b00000| Untracked
| 620|0x00000000a6c00000, 0x00000000a6d00000, 0x00000000a6d00000|100%| O| |TAMS 0x00000000a6d00000, 0x00000000a6c00000| Untracked
| 621|0x00000000a6d00000, 0x00000000a6e00000, 0x00000000a6e00000|100%| O| |TAMS 0x00000000a6e00000, 0x00000000a6d00000| Untracked
| 622|0x00000000a6e00000, 0x00000000a6f00000, 0x00000000a6f00000|100%|HS| |TAMS 0x00000000a6f00000, 0x00000000a6e00000| Complete
| 623|0x00000000a6f00000, 0x00000000a6f00000, 0x00000000a7000000| 0%| F| |TAMS 0x00000000a6f00000, 0x00000000a6f00000| Untracked
| 624|0x00000000a7000000, 0x00000000a7100000, 0x00000000a7100000|100%| O| |TAMS 0x00000000a7100000, 0x00000000a7000000| Untracked
| 625|0x00000000a7100000, 0x00000000a7100000, 0x00000000a7200000| 0%| F| |TAMS 0x00000000a7100000, 0x00000000a7100000| Untracked
| 626|0x00000000a7200000, 0x00000000a7300000, 0x00000000a7300000|100%|HS| |TAMS 0x00000000a7300000, 0x00000000a7200000| Complete
| 627|0x00000000a7300000, 0x00000000a7400000, 0x00000000a7400000|100%|HS| |TAMS 0x00000000a7400000, 0x00000000a7300000| Complete
| 628|0x00000000a7400000, 0x00000000a7500000, 0x00000000a7500000|100%| O| |TAMS 0x00000000a7500000, 0x00000000a7400000| Untracked
| 629|0x00000000a7500000, 0x00000000a7600000, 0x00000000a7600000|100%|HS| |TAMS 0x00000000a7600000, 0x00000000a7500000| Complete
| 630|0x00000000a7600000, 0x00000000a7700000, 0x00000000a7700000|100%| O| |TAMS 0x00000000a7700000, 0x00000000a7600000| Untracked
| 631|0x00000000a7700000, 0x00000000a7800000, 0x00000000a7800000|100%| O| |TAMS 0x00000000a7800000, 0x00000000a7700000| Untracked
| 632|0x00000000a7800000, 0x00000000a7900000, 0x00000000a7900000|100%| O| |TAMS 0x00000000a7900000, 0x00000000a7800000| Untracked
| 633|0x00000000a7900000, 0x00000000a7a00000, 0x00000000a7a00000|100%| O| |TAMS 0x00000000a7a00000, 0x00000000a7900000| Untracked
| 634|0x00000000a7a00000, 0x00000000a7b00000, 0x00000000a7b00000|100%| O| |TAMS 0x00000000a7b00000, 0x00000000a7a00000| Untracked
| 635|0x00000000a7b00000, 0x00000000a7c00000, 0x00000000a7c00000|100%| O| |TAMS 0x00000000a7c00000, 0x00000000a7b00000| Untracked
| 636|0x00000000a7c00000, 0x00000000a7d00000, 0x00000000a7d00000|100%| O| |TAMS 0x00000000a7d00000, 0x00000000a7c00000| Untracked
| 637|0x00000000a7d00000, 0x00000000a7e00000, 0x00000000a7e00000|100%| O| |TAMS 0x00000000a7e00000, 0x00000000a7d00000| Untracked
| 638|0x00000000a7e00000, 0x00000000a7f00000, 0x00000000a7f00000|100%| O| |TAMS 0x00000000a7f00000, 0x00000000a7e00000| Untracked
| 639|0x00000000a7f00000, 0x00000000a8000000, 0x00000000a8000000|100%| O| |TAMS 0x00000000a8000000, 0x00000000a7f00000| Untracked
| 640|0x00000000a8000000, 0x00000000a8100000, 0x00000000a8100000|100%| O| |TAMS 0x00000000a8100000, 0x00000000a8000000| Untracked
| 641|0x00000000a8100000, 0x00000000a8200000, 0x00000000a8200000|100%| O| |TAMS 0x00000000a8200000, 0x00000000a8100000| Untracked
| 642|0x00000000a8200000, 0x00000000a8300000, 0x00000000a8300000|100%| O| |TAMS 0x00000000a8300000, 0x00000000a8200000| Untracked
| 643|0x00000000a8300000, 0x00000000a8400000, 0x00000000a8400000|100%| O| |TAMS 0x00000000a8400000, 0x00000000a8300000| Untracked
| 644|0x00000000a8400000, 0x00000000a8500000, 0x00000000a8500000|100%| O| |TAMS 0x00000000a8500000, 0x00000000a8400000| Untracked
| 645|0x00000000a8500000, 0x00000000a8600000, 0x00000000a8600000|100%| O| |TAMS 0x00000000a8600000, 0x00000000a8500000| Untracked
| 646|0x00000000a8600000, 0x00000000a8700000, 0x00000000a8700000|100%| O| |TAMS 0x00000000a8700000, 0x00000000a8600000| Untracked
| 647|0x00000000a8700000, 0x00000000a8800000, 0x00000000a8800000|100%| O| |TAMS 0x00000000a8800000, 0x00000000a8700000| Untracked
| 648|0x00000000a8800000, 0x00000000a8900000, 0x00000000a8900000|100%| O| |TAMS 0x00000000a8900000, 0x00000000a8800000| Untracked
| 649|0x00000000a8900000, 0x00000000a8a00000, 0x00000000a8a00000|100%| O| |TAMS 0x00000000a8a00000, 0x00000000a8900000| Untracked
| 650|0x00000000a8a00000, 0x00000000a8b00000, 0x00000000a8b00000|100%| O| |TAMS 0x00000000a8b00000, 0x00000000a8a00000| Untracked
| 651|0x00000000a8b00000, 0x00000000a8c00000, 0x00000000a8c00000|100%| O| |TAMS 0x00000000a8c00000, 0x00000000a8b00000| Untracked
| 652|0x00000000a8c00000, 0x00000000a8d00000, 0x00000000a8d00000|100%| O| |TAMS 0x00000000a8d00000, 0x00000000a8c00000| Untracked
| 653|0x00000000a8d00000, 0x00000000a8e00000, 0x00000000a8e00000|100%| O| |TAMS 0x00000000a8d00000, 0x00000000a8d00000| Untracked
| 654|0x00000000a8e00000, 0x00000000a8f00000, 0x00000000a8f00000|100%| O| |TAMS 0x00000000a8f00000, 0x00000000a8e00000| Untracked
| 655|0x00000000a8f00000, 0x00000000a9000000, 0x00000000a9000000|100%| O| |TAMS 0x00000000a9000000, 0x00000000a8f00000| Untracked
| 656|0x00000000a9000000, 0x00000000a9100000, 0x00000000a9100000|100%| O| |TAMS 0x00000000a9100000, 0x00000000a9000000| Untracked
| 657|0x00000000a9100000, 0x00000000a9200000, 0x00000000a9200000|100%| O| |TAMS 0x00000000a9200000, 0x00000000a9100000| Untracked
| 658|0x00000000a9200000, 0x00000000a9300000, 0x00000000a9300000|100%| O| |TAMS 0x00000000a9300000, 0x00000000a9200000| Untracked
| 659|0x00000000a9300000, 0x00000000a9400000, 0x00000000a9400000|100%| O| |TAMS 0x00000000a9400000, 0x00000000a9300000| Untracked
| 660|0x00000000a9400000, 0x00000000a9500000, 0x00000000a9500000|100%| O| |TAMS 0x00000000a9500000, 0x00000000a9400000| Untracked
| 661|0x00000000a9500000, 0x00000000a9600000, 0x00000000a9600000|100%| O| |TAMS 0x00000000a9600000, 0x00000000a9500000| Untracked
| 662|0x00000000a9600000, 0x00000000a9700000, 0x00000000a9700000|100%| O| |TAMS 0x00000000a9700000, 0x00000000a9600000| Untracked
| 663|0x00000000a9700000, 0x00000000a9700000, 0x00000000a9800000| 0%| F| |TAMS 0x00000000a9700000, 0x00000000a9700000| Untracked
| 664|0x00000000a9800000, 0x00000000a9900000, 0x00000000a9900000|100%| O| |TAMS 0x00000000a9900000, 0x00000000a9800000| Untracked
| 665|0x00000000a9900000, 0x00000000a9a00000, 0x00000000a9a00000|100%| O| |TAMS 0x00000000a9a00000, 0x00000000a9900000| Untracked
| 666|0x00000000a9a00000, 0x00000000a9b00000, 0x00000000a9b00000|100%| O| |TAMS 0x00000000a9b00000, 0x00000000a9a00000| Untracked
| 667|0x00000000a9b00000, 0x00000000a9c00000, 0x00000000a9c00000|100%| O| |TAMS 0x00000000a9c00000, 0x00000000a9b00000| Untracked
| 668|0x00000000a9c00000, 0x00000000a9d00000, 0x00000000a9d00000|100%| O| |TAMS 0x00000000a9d00000, 0x00000000a9c00000| Untracked
| 669|0x00000000a9d00000, 0x00000000a9e00000, 0x00000000a9e00000|100%| O| |TAMS 0x00000000a9e00000, 0x00000000a9d00000| Untracked
| 670|0x00000000a9e00000, 0x00000000a9f00000, 0x00000000a9f00000|100%| O| |TAMS 0x00000000a9f00000, 0x00000000a9e00000| Untracked
| 671|0x00000000a9f00000, 0x00000000aa000000, 0x00000000aa000000|100%| O| |TAMS 0x00000000aa000000, 0x00000000a9f00000| Untracked
| 672|0x00000000aa000000, 0x00000000aa100000, 0x00000000aa100000|100%| O| |TAMS 0x00000000aa100000, 0x00000000aa000000| Untracked
| 673|0x00000000aa100000, 0x00000000aa200000, 0x00000000aa200000|100%| O| |TAMS 0x00000000aa200000, 0x00000000aa100000| Untracked
| 674|0x00000000aa200000, 0x00000000aa300000, 0x00000000aa300000|100%| O| |TAMS 0x00000000aa300000, 0x00000000aa200000| Untracked
| 675|0x00000000aa300000, 0x00000000aa400000, 0x00000000aa400000|100%| O| |TAMS 0x00000000aa400000, 0x00000000aa300000| Untracked
| 676|0x00000000aa400000, 0x00000000aa400000, 0x00000000aa500000| 0%| F| |TAMS 0x00000000aa400000, 0x00000000aa400000| Untracked
| 677|0x00000000aa500000, 0x00000000aa600000, 0x00000000aa600000|100%| O| |TAMS 0x00000000aa600000, 0x00000000aa500000| Untracked
| 678|0x00000000aa600000, 0x00000000aa700000, 0x00000000aa700000|100%| O| |TAMS 0x00000000aa700000, 0x00000000aa600000| Untracked
| 679|0x00000000aa700000, 0x00000000aa800000, 0x00000000aa800000|100%| O| |TAMS 0x00000000aa800000, 0x00000000aa700000| Untracked
| 680|0x00000000aa800000, 0x00000000aa900000, 0x00000000aa900000|100%| O| |TAMS 0x00000000aa900000, 0x00000000aa800000| Untracked
| 681|0x00000000aa900000, 0x00000000aaa00000, 0x00000000aaa00000|100%| O| |TAMS 0x00000000aaa00000, 0x00000000aa900000| Untracked
| 682|0x00000000aaa00000, 0x00000000aab00000, 0x00000000aab00000|100%| O| |TAMS 0x00000000aab00000, 0x00000000aaa00000| Untracked
| 683|0x00000000aab00000, 0x00000000aac00000, 0x00000000aac00000|100%| O| |TAMS 0x00000000aab00000, 0x00000000aab00000| Untracked
| 684|0x00000000aac00000, 0x00000000aad00000, 0x00000000aad00000|100%| O| |TAMS 0x00000000aad00000, 0x00000000aac00000| Untracked
| 685|0x00000000aad00000, 0x00000000aae00000, 0x00000000aae00000|100%| O| |TAMS 0x00000000aae00000, 0x00000000aad00000| Untracked
| 686|0x00000000aae00000, 0x00000000aaf00000, 0x00000000aaf00000|100%| O| |TAMS 0x00000000aaf00000, 0x00000000aae00000| Untracked
| 687|0x00000000aaf00000, 0x00000000ab000000, 0x00000000ab000000|100%| O| |TAMS 0x00000000ab000000, 0x00000000aaf00000| Untracked
| 688|0x00000000ab000000, 0x00000000ab100000, 0x00000000ab100000|100%| O| |TAMS 0x00000000ab100000, 0x00000000ab000000| Untracked
| 689|0x00000000ab100000, 0x00000000ab200000, 0x00000000ab200000|100%| O| |TAMS 0x00000000ab200000, 0x00000000ab100000| Untracked
| 690|0x00000000ab200000, 0x00000000ab300000, 0x00000000ab300000|100%| O| |TAMS 0x00000000ab300000, 0x00000000ab200000| Untracked
| 691|0x00000000ab300000, 0x00000000ab400000, 0x00000000ab400000|100%| O| |TAMS 0x00000000ab400000, 0x00000000ab300000| Untracked
| 692|0x00000000ab400000, 0x00000000ab500000, 0x00000000ab500000|100%| O| |TAMS 0x00000000ab500000, 0x00000000ab400000| Untracked
| 693|0x00000000ab500000, 0x00000000ab500000, 0x00000000ab600000| 0%| F| |TAMS 0x00000000ab500000, 0x00000000ab500000| Untracked
| 694|0x00000000ab600000, 0x00000000ab600000, 0x00000000ab700000| 0%| F| |TAMS 0x00000000ab600000, 0x00000000ab600000| Untracked
| 695|0x00000000ab700000, 0x00000000ab700000, 0x00000000ab800000| 0%| F| |TAMS 0x00000000ab700000, 0x00000000ab700000| Untracked
| 696|0x00000000ab800000, 0x00000000ab800000, 0x00000000ab900000| 0%| F| |TAMS 0x00000000ab800000, 0x00000000ab800000| Untracked
| 697|0x00000000ab900000, 0x00000000ab900000, 0x00000000aba00000| 0%| F| |TAMS 0x00000000ab900000, 0x00000000ab900000| Untracked
| 698|0x00000000aba00000, 0x00000000abb00000, 0x00000000abb00000|100%| O| |TAMS 0x00000000abb00000, 0x00000000aba00000| Untracked
| 699|0x00000000abb00000, 0x00000000abc00000, 0x00000000abc00000|100%| O| |TAMS 0x00000000abc00000, 0x00000000abb00000| Untracked
| 700|0x00000000abc00000, 0x00000000abc00000, 0x00000000abd00000| 0%| F| |TAMS 0x00000000abc00000, 0x00000000abc00000| Untracked
| 701|0x00000000abd00000, 0x00000000abe00000, 0x00000000abe00000|100%| O| |TAMS 0x00000000abe00000, 0x00000000abd00000| Untracked
| 702|0x00000000abe00000, 0x00000000abf00000, 0x00000000abf00000|100%| O| |TAMS 0x00000000abf00000, 0x00000000abe00000| Untracked
| 703|0x00000000abf00000, 0x00000000abf00000, 0x00000000ac000000| 0%| F| |TAMS 0x00000000abf00000, 0x00000000abf00000| Untracked
| 704|0x00000000ac000000, 0x00000000ac000000, 0x00000000ac100000| 0%| F| |TAMS 0x00000000ac000000, 0x00000000ac000000| Untracked
| 705|0x00000000ac100000, 0x00000000ac100000, 0x00000000ac200000| 0%| F| |TAMS 0x00000000ac100000, 0x00000000ac100000| Untracked
| 706|0x00000000ac200000, 0x00000000ac200000, 0x00000000ac300000| 0%| F| |TAMS 0x00000000ac200000, 0x00000000ac200000| Untracked
| 707|0x00000000ac300000, 0x00000000ac300000, 0x00000000ac400000| 0%| F| |TAMS 0x00000000ac300000, 0x00000000ac300000| Untracked
| 708|0x00000000ac400000, 0x00000000ac400000, 0x00000000ac500000| 0%| F| |TAMS 0x00000000ac400000, 0x00000000ac400000| Untracked
| 709|0x00000000ac500000, 0x00000000ac600000, 0x00000000ac600000|100%| O| |TAMS 0x00000000ac600000, 0x00000000ac500000| Untracked
| 710|0x00000000ac600000, 0x00000000ac700000, 0x00000000ac700000|100%|HS| |TAMS 0x00000000ac700000, 0x00000000ac600000| Complete
| 711|0x00000000ac700000, 0x00000000ac800000, 0x00000000ac800000|100%|HC| |TAMS 0x00000000ac800000, 0x00000000ac700000| Complete
| 712|0x00000000ac800000, 0x00000000ac900000, 0x00000000ac900000|100%| O| |TAMS 0x00000000ac900000, 0x00000000ac800000| Untracked
| 713|0x00000000ac900000, 0x00000000aca00000, 0x00000000aca00000|100%|HS| |TAMS 0x00000000aca00000, 0x00000000ac900000| Complete
| 714|0x00000000aca00000, 0x00000000acb00000, 0x00000000acb00000|100%|HS| |TAMS 0x00000000acb00000, 0x00000000aca00000| Complete
| 715|0x00000000acb00000, 0x00000000acc00000, 0x00000000acc00000|100%| O| |TAMS 0x00000000acc00000, 0x00000000acb00000| Untracked
| 716|0x00000000acc00000, 0x00000000acd00000, 0x00000000acd00000|100%| O| |TAMS 0x00000000acd00000, 0x00000000acc00000| Untracked
| 717|0x00000000acd00000, 0x00000000ace00000, 0x00000000ace00000|100%| O| |TAMS 0x00000000ace00000, 0x00000000acd00000| Untracked
| 718|0x00000000ace00000, 0x00000000ace00000, 0x00000000acf00000| 0%| F| |TAMS 0x00000000ace00000, 0x00000000ace00000| Untracked
| 719|0x00000000acf00000, 0x00000000ad000000, 0x00000000ad000000|100%| O| |TAMS 0x00000000ad000000, 0x00000000acf00000| Untracked
| 720|0x00000000ad000000, 0x00000000ad100000, 0x00000000ad100000|100%| O| |TAMS 0x00000000ad100000, 0x00000000ad000000| Untracked
| 721|0x00000000ad100000, 0x00000000ad200000, 0x00000000ad200000|100%| O| |TAMS 0x00000000ad200000, 0x00000000ad100000| Untracked
| 722|0x00000000ad200000, 0x00000000ad300000, 0x00000000ad300000|100%| O| |TAMS 0x00000000ad300000, 0x00000000ad200000| Untracked
| 723|0x00000000ad300000, 0x00000000ad400000, 0x00000000ad400000|100%| O| |TAMS 0x00000000ad400000, 0x00000000ad300000| Untracked
| 724|0x00000000ad400000, 0x00000000ad500000, 0x00000000ad500000|100%| O| |TAMS 0x00000000ad500000, 0x00000000ad400000| Untracked
| 725|0x00000000ad500000, 0x00000000ad600000, 0x00000000ad600000|100%| O| |TAMS 0x00000000ad600000, 0x00000000ad500000| Untracked
| 726|0x00000000ad600000, 0x00000000ad700000, 0x00000000ad700000|100%| O| |TAMS 0x00000000ad600000, 0x00000000ad600000| Untracked
| 727|0x00000000ad700000, 0x00000000ad800000, 0x00000000ad800000|100%| O| |TAMS 0x00000000ad800000, 0x00000000ad700000| Untracked
| 728|0x00000000ad800000, 0x00000000ad900000, 0x00000000ad900000|100%| O| |TAMS 0x00000000ad900000, 0x00000000ad800000| Untracked
| 729|0x00000000ad900000, 0x00000000ad900000, 0x00000000ada00000| 0%| F| |TAMS 0x00000000ad900000, 0x00000000ad900000| Untracked
| 730|0x00000000ada00000, 0x00000000ada00000, 0x00000000adb00000| 0%| F| |TAMS 0x00000000ada00000, 0x00000000ada00000| Untracked
| 731|0x00000000adb00000, 0x00000000adc00000, 0x00000000adc00000|100%| O| |TAMS 0x00000000adc00000, 0x00000000adb00000| Untracked
| 732|0x00000000adc00000, 0x00000000add00000, 0x00000000add00000|100%| O| |TAMS 0x00000000add00000, 0x00000000adc00000| Untracked
| 733|0x00000000add00000, 0x00000000ade00000, 0x00000000ade00000|100%| O| |TAMS 0x00000000ade00000, 0x00000000add00000| Untracked
| 734|0x00000000ade00000, 0x00000000adf00000, 0x00000000adf00000|100%| O| |TAMS 0x00000000adf00000, 0x00000000ade00000| Untracked
| 735|0x00000000adf00000, 0x00000000ae000000, 0x00000000ae000000|100%| O| |TAMS 0x00000000ae000000, 0x00000000adf00000| Untracked
| 736|0x00000000ae000000, 0x00000000ae100000, 0x00000000ae100000|100%| O| |TAMS 0x00000000ae100000, 0x00000000ae000000| Untracked
| 737|0x00000000ae100000, 0x00000000ae100000, 0x00000000ae200000| 0%| F| |TAMS 0x00000000ae100000, 0x00000000ae100000| Untracked
| 738|0x00000000ae200000, 0x00000000ae300000, 0x00000000ae300000|100%| O| |TAMS 0x00000000ae300000, 0x00000000ae200000| Untracked
| 739|0x00000000ae300000, 0x00000000ae400000, 0x00000000ae400000|100%| O| |TAMS 0x00000000ae400000, 0x00000000ae300000| Untracked
| 740|0x00000000ae400000, 0x00000000ae400000, 0x00000000ae500000| 0%| F| |TAMS 0x00000000ae400000, 0x00000000ae400000| Untracked
| 741|0x00000000ae500000, 0x00000000ae600000, 0x00000000ae600000|100%| O| |TAMS 0x00000000ae600000, 0x00000000ae500000| Untracked
| 742|0x00000000ae600000, 0x00000000ae700000, 0x00000000ae700000|100%| O| |TAMS 0x00000000ae700000, 0x00000000ae600000| Untracked
| 743|0x00000000ae700000, 0x00000000ae800000, 0x00000000ae800000|100%| O| |TAMS 0x00000000ae800000, 0x00000000ae700000| Untracked
| 744|0x00000000ae800000, 0x00000000ae900000, 0x00000000ae900000|100%| O| |TAMS 0x00000000ae900000, 0x00000000ae800000| Untracked
| 745|0x00000000ae900000, 0x00000000aea00000, 0x00000000aea00000|100%|HS| |TAMS 0x00000000aea00000, 0x00000000ae900000| Complete
| 746|0x00000000aea00000, 0x00000000aeb00000, 0x00000000aeb00000|100%| O| |TAMS 0x00000000aeb00000, 0x00000000aea00000| Untracked
| 747|0x00000000aeb00000, 0x00000000aeb00000, 0x00000000aec00000| 0%| F| |TAMS 0x00000000aeb00000, 0x00000000aeb00000| Untracked
| 748|0x00000000aec00000, 0x00000000aed00000, 0x00000000aed00000|100%| O| |TAMS 0x00000000aed00000, 0x00000000aec00000| Untracked
| 749|0x00000000aed00000, 0x00000000aee00000, 0x00000000aee00000|100%| O| |TAMS 0x00000000aee00000, 0x00000000aed00000| Untracked
| 750|0x00000000aee00000, 0x00000000aef00000, 0x00000000aef00000|100%| O| |TAMS 0x00000000aef00000, 0x00000000aee00000| Untracked
| 751|0x00000000aef00000, 0x00000000af000000, 0x00000000af000000|100%| O| |TAMS 0x00000000af000000, 0x00000000aef00000| Untracked
| 752|0x00000000af000000, 0x00000000af100000, 0x00000000af100000|100%| O| |TAMS 0x00000000af100000, 0x00000000af000000| Untracked
| 753|0x00000000af100000, 0x00000000af200000, 0x00000000af200000|100%| O| |TAMS 0x00000000af200000, 0x00000000af100000| Untracked
| 754|0x00000000af200000, 0x00000000af200000, 0x00000000af300000| 0%| F| |TAMS 0x00000000af200000, 0x00000000af200000| Untracked
| 755|0x00000000af300000, 0x00000000af300000, 0x00000000af400000| 0%| F| |TAMS 0x00000000af300000, 0x00000000af300000| Untracked
| 756|0x00000000af400000, 0x00000000af400000, 0x00000000af500000| 0%| F| |TAMS 0x00000000af400000, 0x00000000af400000| Untracked
| 757|0x00000000af500000, 0x00000000af600000, 0x00000000af600000|100%| O| |TAMS 0x00000000af600000, 0x00000000af500000| Untracked
| 758|0x00000000af600000, 0x00000000af700000, 0x00000000af700000|100%| O| |TAMS 0x00000000af700000, 0x00000000af600000| Untracked
| 759|0x00000000af700000, 0x00000000af800000, 0x00000000af800000|100%| O| |TAMS 0x00000000af800000, 0x00000000af700000| Untracked
| 760|0x00000000af800000, 0x00000000af900000, 0x00000000af900000|100%| O| |TAMS 0x00000000af900000, 0x00000000af800000| Untracked
| 761|0x00000000af900000, 0x00000000afa00000, 0x00000000afa00000|100%| O| |TAMS 0x00000000afa00000, 0x00000000af900000| Untracked
| 762|0x00000000afa00000, 0x00000000afb00000, 0x00000000afb00000|100%| O| |TAMS 0x00000000afb00000, 0x00000000afa00000| Untracked
| 763|0x00000000afb00000, 0x00000000afc00000, 0x00000000afc00000|100%| O| |TAMS 0x00000000afc00000, 0x00000000afb00000| Untracked
| 764|0x00000000afc00000, 0x00000000afd00000, 0x00000000afd00000|100%| O| |TAMS 0x00000000afd00000, 0x00000000afc00000| Untracked
| 765|0x00000000afd00000, 0x00000000afe00000, 0x00000000afe00000|100%|HS| |TAMS 0x00000000afe00000, 0x00000000afd00000| Complete
| 766|0x00000000afe00000, 0x00000000aff00000, 0x00000000aff00000|100%| O| |TAMS 0x00000000aff00000, 0x00000000afe00000| Untracked
| 767|0x00000000aff00000, 0x00000000b0000000, 0x00000000b0000000|100%| O| |TAMS 0x00000000b0000000, 0x00000000aff00000| Untracked
| 768|0x00000000b0000000, 0x00000000b0100000, 0x00000000b0100000|100%| O| |TAMS 0x00000000b0100000, 0x00000000b0000000| Untracked
| 769|0x00000000b0100000, 0x00000000b0100000, 0x00000000b0200000| 0%| F| |TAMS 0x00000000b0100000, 0x00000000b0100000| Untracked
| 770|0x00000000b0200000, 0x00000000b0300000, 0x00000000b0300000|100%| O| |TAMS 0x00000000b0300000, 0x00000000b0200000| Untracked
| 771|0x00000000b0300000, 0x00000000b0400000, 0x00000000b0400000|100%| O| |TAMS 0x00000000b0400000, 0x00000000b0300000| Untracked
| 772|0x00000000b0400000, 0x00000000b0500000, 0x00000000b0500000|100%| O| |TAMS 0x00000000b0500000, 0x00000000b0400000| Untracked
| 773|0x00000000b0500000, 0x00000000b0600000, 0x00000000b0600000|100%| O| |TAMS 0x00000000b0600000, 0x00000000b0500000| Untracked
| 774|0x00000000b0600000, 0x00000000b0700000, 0x00000000b0700000|100%| O| |TAMS 0x00000000b0700000, 0x00000000b0600000| Untracked
| 775|0x00000000b0700000, 0x00000000b0800000, 0x00000000b0800000|100%| O| |TAMS 0x00000000b0800000, 0x00000000b0700000| Untracked
| 776|0x00000000b0800000, 0x00000000b0900000, 0x00000000b0900000|100%| O| |TAMS 0x00000000b0900000, 0x00000000b0800000| Untracked
| 777|0x00000000b0900000, 0x00000000b0a00000, 0x00000000b0a00000|100%| O| |TAMS 0x00000000b0a00000, 0x00000000b0900000| Untracked
| 778|0x00000000b0a00000, 0x00000000b0b00000, 0x00000000b0b00000|100%| O| |TAMS 0x00000000b0a00000, 0x00000000b0a00000| Untracked
| 779|0x00000000b0b00000, 0x00000000b0c00000, 0x00000000b0c00000|100%| O| |TAMS 0x00000000b0c00000, 0x00000000b0b00000| Untracked
| 780|0x00000000b0c00000, 0x00000000b0d00000, 0x00000000b0d00000|100%| O| |TAMS 0x00000000b0d00000, 0x00000000b0c00000| Untracked
| 781|0x00000000b0d00000, 0x00000000b0e00000, 0x00000000b0e00000|100%| O| |TAMS 0x00000000b0e00000, 0x00000000b0d00000| Untracked
| 782|0x00000000b0e00000, 0x00000000b0f00000, 0x00000000b0f00000|100%| O| |TAMS 0x00000000b0f00000, 0x00000000b0e00000| Untracked
| 783|0x00000000b0f00000, 0x00000000b1000000, 0x00000000b1000000|100%| O| |TAMS 0x00000000b1000000, 0x00000000b0f00000| Untracked
| 784|0x00000000b1000000, 0x00000000b1100000, 0x00000000b1100000|100%| O| |TAMS 0x00000000b1100000, 0x00000000b1000000| Untracked
| 785|0x00000000b1100000, 0x00000000b1200000, 0x00000000b1200000|100%| O| |TAMS 0x00000000b1200000, 0x00000000b1100000| Untracked
| 786|0x00000000b1200000, 0x00000000b1300000, 0x00000000b1300000|100%| O| |TAMS 0x00000000b1300000, 0x00000000b1200000| Untracked
| 787|0x00000000b1300000, 0x00000000b1300000, 0x00000000b1400000| 0%| F| |TAMS 0x00000000b1300000, 0x00000000b1300000| Untracked
| 788|0x00000000b1400000, 0x00000000b1500000, 0x00000000b1500000|100%| O| |TAMS 0x00000000b1500000, 0x00000000b1400000| Untracked
| 789|0x00000000b1500000, 0x00000000b1600000, 0x00000000b1600000|100%| O| |TAMS 0x00000000b1600000, 0x00000000b1500000| Untracked
| 790|0x00000000b1600000, 0x00000000b1700000, 0x00000000b1700000|100%| O| |TAMS 0x00000000b1700000, 0x00000000b1600000| Untracked
| 791|0x00000000b1700000, 0x00000000b1800000, 0x00000000b1800000|100%| O| |TAMS 0x00000000b1800000, 0x00000000b1700000| Untracked
| 792|0x00000000b1800000, 0x00000000b1900000, 0x00000000b1900000|100%| O| |TAMS 0x00000000b1900000, 0x00000000b1800000| Untracked
| 793|0x00000000b1900000, 0x00000000b1a00000, 0x00000000b1a00000|100%| O| |TAMS 0x00000000b1a00000, 0x00000000b1900000| Untracked
| 794|0x00000000b1a00000, 0x00000000b1b00000, 0x00000000b1b00000|100%| O| |TAMS 0x00000000b1b00000, 0x00000000b1a00000| Untracked
| 795|0x00000000b1b00000, 0x00000000b1c00000, 0x00000000b1c00000|100%| O| |TAMS 0x00000000b1c00000, 0x00000000b1b00000| Untracked
| 796|0x00000000b1c00000, 0x00000000b1d00000, 0x00000000b1d00000|100%| O| |TAMS 0x00000000b1d00000, 0x00000000b1c00000| Untracked
| 797|0x00000000b1d00000, 0x00000000b1e00000, 0x00000000b1e00000|100%|HS| |TAMS 0x00000000b1e00000, 0x00000000b1d00000| Complete
| 798|0x00000000b1e00000, 0x00000000b1f00000, 0x00000000b1f00000|100%|HS| |TAMS 0x00000000b1f00000, 0x00000000b1e00000| Complete
| 799|0x00000000b1f00000, 0x00000000b2000000, 0x00000000b2000000|100%| O| |TAMS 0x00000000b2000000, 0x00000000b1f00000| Untracked
| 800|0x00000000b2000000, 0x00000000b2100000, 0x00000000b2100000|100%| O| |TAMS 0x00000000b2100000, 0x00000000b2000000| Untracked
| 801|0x00000000b2100000, 0x00000000b2200000, 0x00000000b2200000|100%| O| |TAMS 0x00000000b2200000, 0x00000000b2100000| Untracked
| 802|0x00000000b2200000, 0x00000000b2300000, 0x00000000b2300000|100%| O| |TAMS 0x00000000b2300000, 0x00000000b2200000| Untracked
| 803|0x00000000b2300000, 0x00000000b2400000, 0x00000000b2400000|100%| O| |TAMS 0x00000000b2400000, 0x00000000b2300000| Untracked
| 804|0x00000000b2400000, 0x00000000b2500000, 0x00000000b2500000|100%| O| |TAMS 0x00000000b2500000, 0x00000000b2400000| Untracked
| 805|0x00000000b2500000, 0x00000000b2600000, 0x00000000b2600000|100%| O| |TAMS 0x00000000b2600000, 0x00000000b2500000| Untracked
| 806|0x00000000b2600000, 0x00000000b2600000, 0x00000000b2700000| 0%| F| |TAMS 0x00000000b2600000, 0x00000000b2600000| Untracked
| 807|0x00000000b2700000, 0x00000000b2700000, 0x00000000b2800000| 0%| F| |TAMS 0x00000000b2700000, 0x00000000b2700000| Untracked
| 808|0x00000000b2800000, 0x00000000b2800000, 0x00000000b2900000| 0%| F| |TAMS 0x00000000b2800000, 0x00000000b2800000| Untracked
| 809|0x00000000b2900000, 0x00000000b2900000, 0x00000000b2a00000| 0%| F| |TAMS 0x00000000b2900000, 0x00000000b2900000| Untracked
| 810|0x00000000b2a00000, 0x00000000b2b00000, 0x00000000b2b00000|100%| O| |TAMS 0x00000000b2b00000, 0x00000000b2a00000| Untracked
| 811|0x00000000b2b00000, 0x00000000b2c00000, 0x00000000b2c00000|100%| O| |TAMS 0x00000000b2c00000, 0x00000000b2b00000| Untracked
| 812|0x00000000b2c00000, 0x00000000b2d00000, 0x00000000b2d00000|100%| O| |TAMS 0x00000000b2d00000, 0x00000000b2c00000| Untracked
| 813|0x00000000b2d00000, 0x00000000b2e00000, 0x00000000b2e00000|100%|HS| |TAMS 0x00000000b2e00000, 0x00000000b2d00000| Complete
| 814|0x00000000b2e00000, 0x00000000b2f00000, 0x00000000b2f00000|100%| O| |TAMS 0x00000000b2f00000, 0x00000000b2e00000| Untracked
| 815|0x00000000b2f00000, 0x00000000b3000000, 0x00000000b3000000|100%|HS| |TAMS 0x00000000b3000000, 0x00000000b2f00000| Complete
| 816|0x00000000b3000000, 0x00000000b3100000, 0x00000000b3100000|100%|HS| |TAMS 0x00000000b3100000, 0x00000000b3000000| Complete
| 817|0x00000000b3100000, 0x00000000b3200000, 0x00000000b3200000|100%| O| |TAMS 0x00000000b3200000, 0x00000000b3100000| Untracked
| 818|0x00000000b3200000, 0x00000000b3300000, 0x00000000b3300000|100%|HS| |TAMS 0x00000000b3300000, 0x00000000b3200000| Complete
| 819|0x00000000b3300000, 0x00000000b3400000, 0x00000000b3400000|100%| O| |TAMS 0x00000000b3400000, 0x00000000b3300000| Untracked
| 820|0x00000000b3400000, 0x00000000b3500000, 0x00000000b3500000|100%|HS| |TAMS 0x00000000b3500000, 0x00000000b3400000| Complete
| 821|0x00000000b3500000, 0x00000000b3600000, 0x00000000b3600000|100%| O| |TAMS 0x00000000b3600000, 0x00000000b3500000| Untracked
| 822|0x00000000b3600000, 0x00000000b3700000, 0x00000000b3700000|100%| O| |TAMS 0x00000000b3700000, 0x00000000b3600000| Untracked
| 823|0x00000000b3700000, 0x00000000b3800000, 0x00000000b3800000|100%| O| |TAMS 0x00000000b3800000, 0x00000000b3700000| Untracked
| 824|0x00000000b3800000, 0x00000000b3900000, 0x00000000b3900000|100%| O| |TAMS 0x00000000b3900000, 0x00000000b3800000| Untracked
| 825|0x00000000b3900000, 0x00000000b3a00000, 0x00000000b3a00000|100%| O| |TAMS 0x00000000b3a00000, 0x00000000b3900000| Untracked
| 826|0x00000000b3a00000, 0x00000000b3b00000, 0x00000000b3b00000|100%| O| |TAMS 0x00000000b3b00000, 0x00000000b3a00000| Untracked
| 827|0x00000000b3b00000, 0x00000000b3c00000, 0x00000000b3c00000|100%| O| |TAMS 0x00000000b3c00000, 0x00000000b3b00000| Untracked
| 828|0x00000000b3c00000, 0x00000000b3d00000, 0x00000000b3d00000|100%| O| |TAMS 0x00000000b3d00000, 0x00000000b3c00000| Untracked
| 829|0x00000000b3d00000, 0x00000000b3e00000, 0x00000000b3e00000|100%| O| |TAMS 0x00000000b3e00000, 0x00000000b3d00000| Untracked
| 830|0x00000000b3e00000, 0x00000000b3f00000, 0x00000000b3f00000|100%| O| |TAMS 0x00000000b3f00000, 0x00000000b3e00000| Untracked
| 831|0x00000000b3f00000, 0x00000000b4000000, 0x00000000b4000000|100%| O| |TAMS 0x00000000b4000000, 0x00000000b3f00000| Untracked
| 832|0x00000000b4000000, 0x00000000b4100000, 0x00000000b4100000|100%| O| |TAMS 0x00000000b4100000, 0x00000000b4000000| Untracked
| 833|0x00000000b4100000, 0x00000000b4200000, 0x00000000b4200000|100%| O| |TAMS 0x00000000b4200000, 0x00000000b4100000| Untracked
| 834|0x00000000b4200000, 0x00000000b4300000, 0x00000000b4300000|100%| O| |TAMS 0x00000000b4300000, 0x00000000b4200000| Untracked
| 835|0x00000000b4300000, 0x00000000b4400000, 0x00000000b4400000|100%| O| |TAMS 0x00000000b4400000, 0x00000000b4300000| Untracked
| 836|0x00000000b4400000, 0x00000000b4500000, 0x00000000b4500000|100%| O| |TAMS 0x00000000b4500000, 0x00000000b4400000| Untracked
| 837|0x00000000b4500000, 0x00000000b4600000, 0x00000000b4600000|100%| O| |TAMS 0x00000000b4600000, 0x00000000b4500000| Untracked
| 838|0x00000000b4600000, 0x00000000b4700000, 0x00000000b4700000|100%| O| |TAMS 0x00000000b4700000, 0x00000000b4600000| Untracked
| 839|0x00000000b4700000, 0x00000000b4800000, 0x00000000b4800000|100%| O| |TAMS 0x00000000b4800000, 0x00000000b4700000| Untracked
| 840|0x00000000b4800000, 0x00000000b4900000, 0x00000000b4900000|100%| O| |TAMS 0x00000000b4900000, 0x00000000b4800000| Untracked
| 841|0x00000000b4900000, 0x00000000b4a00000, 0x00000000b4a00000|100%| O| |TAMS 0x00000000b4a00000, 0x00000000b4900000| Untracked
| 842|0x00000000b4a00000, 0x00000000b4b00000, 0x00000000b4b00000|100%| O| |TAMS 0x00000000b4b00000, 0x00000000b4a00000| Untracked
| 843|0x00000000b4b00000, 0x00000000b4c00000, 0x00000000b4c00000|100%| O| |TAMS 0x00000000b4c00000, 0x00000000b4b00000| Untracked
| 844|0x00000000b4c00000, 0x00000000b4d00000, 0x00000000b4d00000|100%| O| |TAMS 0x00000000b4d00000, 0x00000000b4c00000| Untracked
| 845|0x00000000b4d00000, 0x00000000b4e00000, 0x00000000b4e00000|100%| O| |TAMS 0x00000000b4e00000, 0x00000000b4d00000| Untracked
| 846|0x00000000b4e00000, 0x00000000b4f00000, 0x00000000b4f00000|100%| O| |TAMS 0x00000000b4f00000, 0x00000000b4e00000| Untracked
| 847|0x00000000b4f00000, 0x00000000b5000000, 0x00000000b5000000|100%| O| |TAMS 0x00000000b5000000, 0x00000000b4f00000| Untracked
| 848|0x00000000b5000000, 0x00000000b5100000, 0x00000000b5100000|100%| O| |TAMS 0x00000000b5100000, 0x00000000b5000000| Untracked
| 849|0x00000000b5100000, 0x00000000b5200000, 0x00000000b5200000|100%| O| |TAMS 0x00000000b5200000, 0x00000000b5100000| Untracked
| 850|0x00000000b5200000, 0x00000000b5300000, 0x00000000b5300000|100%| O| |TAMS 0x00000000b5300000, 0x00000000b5200000| Untracked
| 851|0x00000000b5300000, 0x00000000b5400000, 0x00000000b5400000|100%| O| |TAMS 0x00000000b5400000, 0x00000000b5300000| Untracked
| 852|0x00000000b5400000, 0x00000000b5500000, 0x00000000b5500000|100%| O| |TAMS 0x00000000b5500000, 0x00000000b5400000| Untracked
| 853|0x00000000b5500000, 0x00000000b5600000, 0x00000000b5600000|100%| O| |TAMS 0x00000000b5600000, 0x00000000b5500000| Untracked
| 854|0x00000000b5600000, 0x00000000b5700000, 0x00000000b5700000|100%| O| |TAMS 0x00000000b5700000, 0x00000000b5600000| Untracked
| 855|0x00000000b5700000, 0x00000000b5700000, 0x00000000b5800000| 0%| F| |TAMS 0x00000000b5700000, 0x00000000b5700000| Untracked
| 856|0x00000000b5800000, 0x00000000b5800000, 0x00000000b5900000| 0%| F| |TAMS 0x00000000b5800000, 0x00000000b5800000| Untracked
| 857|0x00000000b5900000, 0x00000000b5a00000, 0x00000000b5a00000|100%| O| |TAMS 0x00000000b5a00000, 0x00000000b5900000| Untracked
| 858|0x00000000b5a00000, 0x00000000b5b00000, 0x00000000b5b00000|100%| O| |TAMS 0x00000000b5b00000, 0x00000000b5a00000| Untracked
| 859|0x00000000b5b00000, 0x00000000b5c00000, 0x00000000b5c00000|100%| O| |TAMS 0x00000000b5c00000, 0x00000000b5b00000| Untracked
| 860|0x00000000b5c00000, 0x00000000b5d00000, 0x00000000b5d00000|100%| O| |TAMS 0x00000000b5d00000, 0x00000000b5c00000| Untracked
| 861|0x00000000b5d00000, 0x00000000b5e00000, 0x00000000b5e00000|100%| O| |TAMS 0x00000000b5e00000, 0x00000000b5d00000| Untracked
| 862|0x00000000b5e00000, 0x00000000b5f00000, 0x00000000b5f00000|100%| O| |TAMS 0x00000000b5f00000, 0x00000000b5e00000| Untracked
| 863|0x00000000b5f00000, 0x00000000b6000000, 0x00000000b6000000|100%| O| |TAMS 0x00000000b6000000, 0x00000000b5f00000| Untracked
| 864|0x00000000b6000000, 0x00000000b6000000, 0x00000000b6100000| 0%| F| |TAMS 0x00000000b6000000, 0x00000000b6000000| Untracked
| 865|0x00000000b6100000, 0x00000000b6200000, 0x00000000b6200000|100%| O| |TAMS 0x00000000b6200000, 0x00000000b6100000| Untracked
| 866|0x00000000b6200000, 0x00000000b6300000, 0x00000000b6300000|100%| O| |TAMS 0x00000000b6300000, 0x00000000b6200000| Untracked
| 867|0x00000000b6300000, 0x00000000b6400000, 0x00000000b6400000|100%| O| |TAMS 0x00000000b6400000, 0x00000000b6300000| Untracked
| 868|0x00000000b6400000, 0x00000000b6500000, 0x00000000b6500000|100%| O| |TAMS 0x00000000b6500000, 0x00000000b6400000| Untracked
| 869|0x00000000b6500000, 0x00000000b6600000, 0x00000000b6600000|100%| O| |TAMS 0x00000000b6600000, 0x00000000b6500000| Untracked
| 870|0x00000000b6600000, 0x00000000b6700000, 0x00000000b6700000|100%| O| |TAMS 0x00000000b6700000, 0x00000000b6600000| Untracked
| 871|0x00000000b6700000, 0x00000000b6800000, 0x00000000b6800000|100%| O| |TAMS 0x00000000b6800000, 0x00000000b6700000| Untracked
| 872|0x00000000b6800000, 0x00000000b6900000, 0x00000000b6900000|100%| O| |TAMS 0x00000000b6900000, 0x00000000b6800000| Untracked
| 873|0x00000000b6900000, 0x00000000b6a00000, 0x00000000b6a00000|100%| O| |TAMS 0x00000000b6a00000, 0x00000000b6900000| Untracked
| 874|0x00000000b6a00000, 0x00000000b6a00000, 0x00000000b6b00000| 0%| F| |TAMS 0x00000000b6a00000, 0x00000000b6a00000| Untracked
| 875|0x00000000b6b00000, 0x00000000b6b00000, 0x00000000b6c00000| 0%| F| |TAMS 0x00000000b6b00000, 0x00000000b6b00000| Untracked
| 876|0x00000000b6c00000, 0x00000000b6c00000, 0x00000000b6d00000| 0%| F| |TAMS 0x00000000b6c00000, 0x00000000b6c00000| Untracked
| 877|0x00000000b6d00000, 0x00000000b6d00000, 0x00000000b6e00000| 0%| F| |TAMS 0x00000000b6d00000, 0x00000000b6d00000| Untracked
| 878|0x00000000b6e00000, 0x00000000b6f00000, 0x00000000b6f00000|100%| O| |TAMS 0x00000000b6f00000, 0x00000000b6e00000| Untracked
| 879|0x00000000b6f00000, 0x00000000b7000000, 0x00000000b7000000|100%| O| |TAMS 0x00000000b7000000, 0x00000000b6f00000| Untracked
| 880|0x00000000b7000000, 0x00000000b7000000, 0x00000000b7100000| 0%| F| |TAMS 0x00000000b7000000, 0x00000000b7000000| Untracked
| 881|0x00000000b7100000, 0x00000000b7100000, 0x00000000b7200000| 0%| F| |TAMS 0x00000000b7100000, 0x00000000b7100000| Untracked
| 882|0x00000000b7200000, 0x00000000b7300000, 0x00000000b7300000|100%| O| |TAMS 0x00000000b7300000, 0x00000000b7200000| Untracked
| 883|0x00000000b7300000, 0x00000000b7400000, 0x00000000b7400000|100%| O| |TAMS 0x00000000b7400000, 0x00000000b7300000| Untracked
| 884|0x00000000b7400000, 0x00000000b7500000, 0x00000000b7500000|100%| O| |TAMS 0x00000000b7500000, 0x00000000b7400000| Untracked
| 885|0x00000000b7500000, 0x00000000b7500000, 0x00000000b7600000| 0%| F| |TAMS 0x00000000b7500000, 0x00000000b7500000| Untracked
| 886|0x00000000b7600000, 0x00000000b7600000, 0x00000000b7700000| 0%| F| |TAMS 0x00000000b7600000, 0x00000000b7600000| Untracked
| 887|0x00000000b7700000, 0x00000000b7800000, 0x00000000b7800000|100%| O| |TAMS 0x00000000b7800000, 0x00000000b7700000| Untracked
| 888|0x00000000b7800000, 0x00000000b7900000, 0x00000000b7900000|100%| O| |TAMS 0x00000000b7900000, 0x00000000b7800000| Untracked
| 889|0x00000000b7900000, 0x00000000b7900000, 0x00000000b7a00000| 0%| F| |TAMS 0x00000000b7900000, 0x00000000b7900000| Untracked
| 890|0x00000000b7a00000, 0x00000000b7b00000, 0x00000000b7b00000|100%| O| |TAMS 0x00000000b7a00000, 0x00000000b7a00000| Untracked
| 891|0x00000000b7b00000, 0x00000000b7c00000, 0x00000000b7c00000|100%| O| |TAMS 0x00000000b7c00000, 0x00000000b7b00000| Untracked
| 892|0x00000000b7c00000, 0x00000000b7d00000, 0x00000000b7d00000|100%| O| |TAMS 0x00000000b7d00000, 0x00000000b7c00000| Untracked
| 893|0x00000000b7d00000, 0x00000000b7e00000, 0x00000000b7e00000|100%| O| |TAMS 0x00000000b7e00000, 0x00000000b7d00000| Untracked
| 894|0x00000000b7e00000, 0x00000000b7e00000, 0x00000000b7f00000| 0%| F| |TAMS 0x00000000b7e00000, 0x00000000b7e00000| Untracked
| 895|0x00000000b7f00000, 0x00000000b7f00000, 0x00000000b8000000| 0%| F| |TAMS 0x00000000b7f00000, 0x00000000b7f00000| Untracked
| 896|0x00000000b8000000, 0x00000000b8100000, 0x00000000b8100000|100%| O| |TAMS 0x00000000b8100000, 0x00000000b8000000| Untracked
| 897|0x00000000b8100000, 0x00000000b8200000, 0x00000000b8200000|100%| O| |TAMS 0x00000000b8200000, 0x00000000b8100000| Untracked
| 898|0x00000000b8200000, 0x00000000b8200000, 0x00000000b8300000| 0%| F| |TAMS 0x00000000b8200000, 0x00000000b8200000| Untracked
| 899|0x00000000b8300000, 0x00000000b8400000, 0x00000000b8400000|100%| O| |TAMS 0x00000000b8400000, 0x00000000b8300000| Untracked
| 900|0x00000000b8400000, 0x00000000b8500000, 0x00000000b8500000|100%| O| |TAMS 0x00000000b8500000, 0x00000000b8400000| Untracked
| 901|0x00000000b8500000, 0x00000000b8600000, 0x00000000b8600000|100%| O| |TAMS 0x00000000b8600000, 0x00000000b8500000| Untracked
| 902|0x00000000b8600000, 0x00000000b8700000, 0x00000000b8700000|100%| O| |TAMS 0x00000000b8700000, 0x00000000b8600000| Untracked
| 903|0x00000000b8700000, 0x00000000b8800000, 0x00000000b8800000|100%| O| |TAMS 0x00000000b8800000, 0x00000000b8700000| Untracked
| 904|0x00000000b8800000, 0x00000000b8900000, 0x00000000b8900000|100%| O| |TAMS 0x00000000b8900000, 0x00000000b8800000| Untracked
| 905|0x00000000b8900000, 0x00000000b8a00000, 0x00000000b8a00000|100%| O| |TAMS 0x00000000b8a00000, 0x00000000b8900000| Untracked
| 906|0x00000000b8a00000, 0x00000000b8b00000, 0x00000000b8b00000|100%| O| |TAMS 0x00000000b8b00000, 0x00000000b8a00000| Untracked
| 907|0x00000000b8b00000, 0x00000000b8c00000, 0x00000000b8c00000|100%| O| |TAMS 0x00000000b8c00000, 0x00000000b8b00000| Untracked
| 908|0x00000000b8c00000, 0x00000000b8d00000, 0x00000000b8d00000|100%| O| |TAMS 0x00000000b8d00000, 0x00000000b8c00000| Untracked
| 909|0x00000000b8d00000, 0x00000000b8d00000, 0x00000000b8e00000| 0%| F| |TAMS 0x00000000b8d00000, 0x00000000b8d00000| Untracked
| 910|0x00000000b8e00000, 0x00000000b8e00000, 0x00000000b8f00000| 0%| F| |TAMS 0x00000000b8e00000, 0x00000000b8e00000| Untracked
| 911|0x00000000b8f00000, 0x00000000b9000000, 0x00000000b9000000|100%| O| |TAMS 0x00000000b9000000, 0x00000000b8f00000| Untracked
| 912|0x00000000b9000000, 0x00000000b9000000, 0x00000000b9100000| 0%| F| |TAMS 0x00000000b9000000, 0x00000000b9000000| Untracked
| 913|0x00000000b9100000, 0x00000000b9200000, 0x00000000b9200000|100%| O| |TAMS 0x00000000b9200000, 0x00000000b9100000| Untracked
| 914|0x00000000b9200000, 0x00000000b9300000, 0x00000000b9300000|100%| O| |TAMS 0x00000000b9300000, 0x00000000b9200000| Untracked
| 915|0x00000000b9300000, 0x00000000b9400000, 0x00000000b9400000|100%| O| |TAMS 0x00000000b9400000, 0x00000000b9300000| Untracked
| 916|0x00000000b9400000, 0x00000000b9500000, 0x00000000b9500000|100%| O| |TAMS 0x00000000b9500000, 0x00000000b9400000| Untracked
| 917|0x00000000b9500000, 0x00000000b9600000, 0x00000000b9600000|100%| O| |TAMS 0x00000000b9600000, 0x00000000b9500000| Untracked
| 918|0x00000000b9600000, 0x00000000b9600000, 0x00000000b9700000| 0%| F| |TAMS 0x00000000b9600000, 0x00000000b9600000| Untracked
| 919|0x00000000b9700000, 0x00000000b9800000, 0x00000000b9800000|100%| O| |TAMS 0x00000000b9800000, 0x00000000b9700000| Untracked
| 920|0x00000000b9800000, 0x00000000b9800000, 0x00000000b9900000| 0%| F| |TAMS 0x00000000b9800000, 0x00000000b9800000| Untracked
| 921|0x00000000b9900000, 0x00000000b9a00000, 0x00000000b9a00000|100%| O| |TAMS 0x00000000b9a00000, 0x00000000b9900000| Untracked
| 922|0x00000000b9a00000, 0x00000000b9b00000, 0x00000000b9b00000|100%| O| |TAMS 0x00000000b9b00000, 0x00000000b9a00000| Untracked
| 923|0x00000000b9b00000, 0x00000000b9c00000, 0x00000000b9c00000|100%| O| |TAMS 0x00000000b9c00000, 0x00000000b9b00000| Untracked
| 924|0x00000000b9c00000, 0x00000000b9d00000, 0x00000000b9d00000|100%| O| |TAMS 0x00000000b9d00000, 0x00000000b9c00000| Untracked
| 925|0x00000000b9d00000, 0x00000000b9e00000, 0x00000000b9e00000|100%| O| |TAMS 0x00000000b9e00000, 0x00000000b9d00000| Untracked
| 926|0x00000000b9e00000, 0x00000000b9f00000, 0x00000000b9f00000|100%| O| |TAMS 0x00000000b9f00000, 0x00000000b9e00000| Untracked
| 927|0x00000000b9f00000, 0x00000000ba000000, 0x00000000ba000000|100%| O| |TAMS 0x00000000ba000000, 0x00000000b9f00000| Untracked
| 928|0x00000000ba000000, 0x00000000ba100000, 0x00000000ba100000|100%| O| |TAMS 0x00000000ba100000, 0x00000000ba000000| Untracked
| 929|0x00000000ba100000, 0x00000000ba200000, 0x00000000ba200000|100%| O| |TAMS 0x00000000ba200000, 0x00000000ba100000| Untracked
| 930|0x00000000ba200000, 0x00000000ba300000, 0x00000000ba300000|100%| O| |TAMS 0x00000000ba300000, 0x00000000ba200000| Untracked
| 931|0x00000000ba300000, 0x00000000ba400000, 0x00000000ba400000|100%| O| |TAMS 0x00000000ba400000, 0x00000000ba300000| Untracked
| 932|0x00000000ba400000, 0x00000000ba500000, 0x00000000ba500000|100%| O| |TAMS 0x00000000ba500000, 0x00000000ba400000| Untracked
| 933|0x00000000ba500000, 0x00000000ba600000, 0x00000000ba600000|100%| O| |TAMS 0x00000000ba600000, 0x00000000ba500000| Untracked
| 934|0x00000000ba600000, 0x00000000ba700000, 0x00000000ba700000|100%| O| |TAMS 0x00000000ba6d0600, 0x00000000ba600000| Untracked
| 935|0x00000000ba700000, 0x00000000ba800000, 0x00000000ba800000|100%| O| |TAMS 0x00000000ba700000, 0x00000000ba700000| Untracked
| 936|0x00000000ba800000, 0x00000000ba900000, 0x00000000ba900000|100%| O| |TAMS 0x00000000ba800000, 0x00000000ba800000| Untracked
| 937|0x00000000ba900000, 0x00000000baa00000, 0x00000000baa00000|100%| O| |TAMS 0x00000000ba900000, 0x00000000ba900000| Untracked
| 938|0x00000000baa00000, 0x00000000bab00000, 0x00000000bab00000|100%| O| |TAMS 0x00000000baa00000, 0x00000000baa00000| Untracked
| 939|0x00000000bab00000, 0x00000000bac00000, 0x00000000bac00000|100%| O| |TAMS 0x00000000bab00000, 0x00000000bab00000| Untracked
| 940|0x00000000bac00000, 0x00000000bad00000, 0x00000000bad00000|100%| O| |TAMS 0x00000000bac00000, 0x00000000bac00000| Untracked
| 941|0x00000000bad00000, 0x00000000bae00000, 0x00000000bae00000|100%| O| |TAMS 0x00000000bad00000, 0x00000000bad00000| Untracked
| 942|0x00000000bae00000, 0x00000000baf00000, 0x00000000baf00000|100%| O| |TAMS 0x00000000bae00000, 0x00000000bae00000| Untracked
| 943|0x00000000baf00000, 0x00000000bb000000, 0x00000000bb000000|100%| O| |TAMS 0x00000000baf00000, 0x00000000baf00000| Untracked
| 944|0x00000000bb000000, 0x00000000bb100000, 0x00000000bb100000|100%| O| |TAMS 0x00000000bb000000, 0x00000000bb000000| Untracked
| 945|0x00000000bb100000, 0x00000000bb200000, 0x00000000bb200000|100%| O| |TAMS 0x00000000bb100000, 0x00000000bb100000| Untracked
| 946|0x00000000bb200000, 0x00000000bb300000, 0x00000000bb300000|100%| O| |TAMS 0x00000000bb200000, 0x00000000bb200000| Untracked
| 947|0x00000000bb300000, 0x00000000bb400000, 0x00000000bb400000|100%| O| |TAMS 0x00000000bb300000, 0x00000000bb300000| Untracked
| 948|0x00000000bb400000, 0x00000000bb500000, 0x00000000bb500000|100%| O| |TAMS 0x00000000bb400000, 0x00000000bb400000| Untracked
| 949|0x00000000bb500000, 0x00000000bb600000, 0x00000000bb600000|100%| O| |TAMS 0x00000000bb500000, 0x00000000bb500000| Untracked
| 950|0x00000000bb600000, 0x00000000bb700000, 0x00000000bb700000|100%| O| |TAMS 0x00000000bb600000, 0x00000000bb600000| Untracked
| 951|0x00000000bb700000, 0x00000000bb800000, 0x00000000bb800000|100%| O| |TAMS 0x00000000bb700000, 0x00000000bb700000| Untracked
| 952|0x00000000bb800000, 0x00000000bb900000, 0x00000000bb900000|100%| O| |TAMS 0x00000000bb800000, 0x00000000bb800000| Untracked
| 953|0x00000000bb900000, 0x00000000bba00000, 0x00000000bba00000|100%| O| |TAMS 0x00000000bb900000, 0x00000000bb900000| Untracked
| 954|0x00000000bba00000, 0x00000000bbb00000, 0x00000000bbb00000|100%| O| |TAMS 0x00000000bba00000, 0x00000000bba00000| Untracked
| 955|0x00000000bbb00000, 0x00000000bbc00000, 0x00000000bbc00000|100%| O| |TAMS 0x00000000bbb00000, 0x00000000bbb00000| Untracked
| 956|0x00000000bbc00000, 0x00000000bbd00000, 0x00000000bbd00000|100%| O| |TAMS 0x00000000bbc00000, 0x00000000bbc00000| Untracked
| 957|0x00000000bbd00000, 0x00000000bbe00000, 0x00000000bbe00000|100%| O| |TAMS 0x00000000bbd00000, 0x00000000bbd00000| Untracked
| 958|0x00000000bbe00000, 0x00000000bbf00000, 0x00000000bbf00000|100%| O| |TAMS 0x00000000bbe00000, 0x00000000bbe00000| Untracked
| 959|0x00000000bbf00000, 0x00000000bc000000, 0x00000000bc000000|100%| O| |TAMS 0x00000000bbf00000, 0x00000000bbf00000| Untracked
| 960|0x00000000bc000000, 0x00000000bc100000, 0x00000000bc100000|100%| O| |TAMS 0x00000000bc000000, 0x00000000bc000000| Untracked
| 961|0x00000000bc100000, 0x00000000bc200000, 0x00000000bc200000|100%| O| |TAMS 0x00000000bc100000, 0x00000000bc100000| Untracked
| 962|0x00000000bc200000, 0x00000000bc300000, 0x00000000bc300000|100%| O| |TAMS 0x00000000bc200000, 0x00000000bc200000| Untracked
| 963|0x00000000bc300000, 0x00000000bc400000, 0x00000000bc400000|100%| O| |TAMS 0x00000000bc300000, 0x00000000bc300000| Untracked
| 964|0x00000000bc400000, 0x00000000bc500000, 0x00000000bc500000|100%| O| |TAMS 0x00000000bc400000, 0x00000000bc400000| Untracked
| 965|0x00000000bc500000, 0x00000000bc600000, 0x00000000bc600000|100%| O| |TAMS 0x00000000bc500000, 0x00000000bc500000| Untracked
| 966|0x00000000bc600000, 0x00000000bc700000, 0x00000000bc700000|100%| O| |TAMS 0x00000000bc600000, 0x00000000bc600000| Untracked
| 967|0x00000000bc700000, 0x00000000bc800000, 0x00000000bc800000|100%| O| |TAMS 0x00000000bc700000, 0x00000000bc700000| Untracked
| 968|0x00000000bc800000, 0x00000000bc900000, 0x00000000bc900000|100%| O| |TAMS 0x00000000bc800000, 0x00000000bc800000| Untracked
| 969|0x00000000bc900000, 0x00000000bca00000, 0x00000000bca00000|100%| O| |TAMS 0x00000000bc900000, 0x00000000bc900000| Untracked
| 970|0x00000000bca00000, 0x00000000bcb00000, 0x00000000bcb00000|100%| O| |TAMS 0x00000000bca00000, 0x00000000bca00000| Untracked
| 971|0x00000000bcb00000, 0x00000000bcc00000, 0x00000000bcc00000|100%| O| |TAMS 0x00000000bcb00000, 0x00000000bcb00000| Untracked
| 972|0x00000000bcc00000, 0x00000000bcd00000, 0x00000000bcd00000|100%| O| |TAMS 0x00000000bcc00000, 0x00000000bcc00000| Untracked
| 973|0x00000000bcd00000, 0x00000000bce00000, 0x00000000bce00000|100%| O| |TAMS 0x00000000bcd00000, 0x00000000bcd00000| Untracked
| 974|0x00000000bce00000, 0x00000000bcf00000, 0x00000000bcf00000|100%| O| |TAMS 0x00000000bce00000, 0x00000000bce00000| Untracked
| 975|0x00000000bcf00000, 0x00000000bd000000, 0x00000000bd000000|100%| O| |TAMS 0x00000000bcf00000, 0x00000000bcf00000| Untracked
| 976|0x00000000bd000000, 0x00000000bd100000, 0x00000000bd100000|100%| O| |TAMS 0x00000000bd000000, 0x00000000bd000000| Untracked
| 977|0x00000000bd100000, 0x00000000bd200000, 0x00000000bd200000|100%| O| |TAMS 0x00000000bd100000, 0x00000000bd100000| Untracked
| 978|0x00000000bd200000, 0x00000000bd300000, 0x00000000bd300000|100%| O| |TAMS 0x00000000bd200000, 0x00000000bd200000| Untracked
| 979|0x00000000bd300000, 0x00000000bd300000, 0x00000000bd400000| 0%| F| |TAMS 0x00000000bd300000, 0x00000000bd300000| Untracked
| 980|0x00000000bd400000, 0x00000000bd400000, 0x00000000bd500000| 0%| F| |TAMS 0x00000000bd400000, 0x00000000bd400000| Untracked
| 981|0x00000000bd500000, 0x00000000bd500000, 0x00000000bd600000| 0%| F| |TAMS 0x00000000bd500000, 0x00000000bd500000| Untracked
| 982|0x00000000bd600000, 0x00000000bd600000, 0x00000000bd700000| 0%| F| |TAMS 0x00000000bd600000, 0x00000000bd600000| Untracked
| 983|0x00000000bd700000, 0x00000000bd700000, 0x00000000bd800000| 0%| F| |TAMS 0x00000000bd700000, 0x00000000bd700000| Untracked
| 984|0x00000000bd800000, 0x00000000bd800000, 0x00000000bd900000| 0%| F| |TAMS 0x00000000bd800000, 0x00000000bd800000| Untracked
| 985|0x00000000bd900000, 0x00000000bd900000, 0x00000000bda00000| 0%| F| |TAMS 0x00000000bd900000, 0x00000000bd900000| Untracked
| 986|0x00000000bda00000, 0x00000000bda00000, 0x00000000bdb00000| 0%| F| |TAMS 0x00000000bda00000, 0x00000000bda00000| Untracked
| 987|0x00000000bdb00000, 0x00000000bdb00000, 0x00000000bdc00000| 0%| F| |TAMS 0x00000000bdb00000, 0x00000000bdb00000| Untracked
| 988|0x00000000bdc00000, 0x00000000bdc00000, 0x00000000bdd00000| 0%| F| |TAMS 0x00000000bdc00000, 0x00000000bdc00000| Untracked
| 989|0x00000000bdd00000, 0x00000000bdd00000, 0x00000000bde00000| 0%| F| |TAMS 0x00000000bdd00000, 0x00000000bdd00000| Untracked
| 990|0x00000000bde00000, 0x00000000bde00000, 0x00000000bdf00000| 0%| F| |TAMS 0x00000000bde00000, 0x00000000bde00000| Untracked
| 991|0x00000000bdf00000, 0x00000000bdf00000, 0x00000000be000000| 0%| F| |TAMS 0x00000000bdf00000, 0x00000000bdf00000| Untracked
| 992|0x00000000be000000, 0x00000000be000000, 0x00000000be100000| 0%| F| |TAMS 0x00000000be000000, 0x00000000be000000| Untracked
| 993|0x00000000be100000, 0x00000000be100000, 0x00000000be200000| 0%| F| |TAMS 0x00000000be100000, 0x00000000be100000| Untracked
| 994|0x00000000be200000, 0x00000000be200000, 0x00000000be300000| 0%| F| |TAMS 0x00000000be200000, 0x00000000be200000| Untracked
| 995|0x00000000be300000, 0x00000000be300000, 0x00000000be400000| 0%| F| |TAMS 0x00000000be300000, 0x00000000be300000| Untracked
| 996|0x00000000be400000, 0x00000000be400000, 0x00000000be500000| 0%| F| |TAMS 0x00000000be400000, 0x00000000be400000| Untracked
| 997|0x00000000be500000, 0x00000000be500000, 0x00000000be600000| 0%| F| |TAMS 0x00000000be500000, 0x00000000be500000| Untracked
| 998|0x00000000be600000, 0x00000000be600000, 0x00000000be700000| 0%| F| |TAMS 0x00000000be600000, 0x00000000be600000| Untracked
| 999|0x00000000be700000, 0x00000000be700000, 0x00000000be800000| 0%| F| |TAMS 0x00000000be700000, 0x00000000be700000| Untracked
|1000|0x00000000be800000, 0x00000000be800000, 0x00000000be900000| 0%| F| |TAMS 0x00000000be800000, 0x00000000be800000| Untracked
|1001|0x00000000be900000, 0x00000000be900000, 0x00000000bea00000| 0%| F| |TAMS 0x00000000be900000, 0x00000000be900000| Untracked
|1002|0x00000000bea00000, 0x00000000bea00000, 0x00000000beb00000| 0%| F| |TAMS 0x00000000bea00000, 0x00000000bea00000| Untracked
|1003|0x00000000beb00000, 0x00000000beb00000, 0x00000000bec00000| 0%| F| |TAMS 0x00000000beb00000, 0x00000000beb00000| Untracked
|1004|0x00000000bec00000, 0x00000000bec00000, 0x00000000bed00000| 0%| F| |TAMS 0x00000000bec00000, 0x00000000bec00000| Untracked
|1005|0x00000000bed00000, 0x00000000bed00000, 0x00000000bee00000| 0%| F| |TAMS 0x00000000bed00000, 0x00000000bed00000| Untracked
|1006|0x00000000bee00000, 0x00000000bee00000, 0x00000000bef00000| 0%| F| |TAMS 0x00000000bee00000, 0x00000000bee00000| Untracked
|1007|0x00000000bef00000, 0x00000000bef00000, 0x00000000bf000000| 0%| F| |TAMS 0x00000000bef00000, 0x00000000bef00000| Untracked
|1008|0x00000000bf000000, 0x00000000bf000000, 0x00000000bf100000| 0%| F| |TAMS 0x00000000bf000000, 0x00000000bf000000| Untracked
|1009|0x00000000bf100000, 0x00000000bf100000, 0x00000000bf200000| 0%| F| |TAMS 0x00000000bf100000, 0x00000000bf100000| Untracked
|1010|0x00000000bf200000, 0x00000000bf200000, 0x00000000bf300000| 0%| F| |TAMS 0x00000000bf200000, 0x00000000bf200000| Untracked
|1011|0x00000000bf300000, 0x00000000bf300000, 0x00000000bf400000| 0%| F| |TAMS 0x00000000bf300000, 0x00000000bf300000| Untracked
|1012|0x00000000bf400000, 0x00000000bf400000, 0x00000000bf500000| 0%| F| |TAMS 0x00000000bf400000, 0x00000000bf400000| Untracked
|1013|0x00000000bf500000, 0x00000000bf500000, 0x00000000bf600000| 0%| F| |TAMS 0x00000000bf500000, 0x00000000bf500000| Untracked
|1014|0x00000000bf600000, 0x00000000bf600000, 0x00000000bf700000| 0%| F| |TAMS 0x00000000bf600000, 0x00000000bf600000| Untracked
|1015|0x00000000bf700000, 0x00000000bf700000, 0x00000000bf800000| 0%| F| |TAMS 0x00000000bf700000, 0x00000000bf700000| Untracked
|1016|0x00000000bf800000, 0x00000000bf800000, 0x00000000bf900000| 0%| F| |TAMS 0x00000000bf800000, 0x00000000bf800000| Untracked
|1017|0x00000000bf900000, 0x00000000bf900000, 0x00000000bfa00000| 0%| F| |TAMS 0x00000000bf900000, 0x00000000bf900000| Untracked
|1018|0x00000000bfa00000, 0x00000000bfa00000, 0x00000000bfb00000| 0%| F| |TAMS 0x00000000bfa00000, 0x00000000bfa00000| Untracked
|1019|0x00000000bfb00000, 0x00000000bfb00000, 0x00000000bfc00000| 0%| F| |TAMS 0x00000000bfb00000, 0x00000000bfb00000| Untracked
|1020|0x00000000bfc00000, 0x00000000bfc00000, 0x00000000bfd00000| 0%| F| |TAMS 0x00000000bfc00000, 0x00000000bfc00000| Untracked
|1021|0x00000000bfd00000, 0x00000000bfd00000, 0x00000000bfe00000| 0%| F| |TAMS 0x00000000bfd00000, 0x00000000bfd00000| Untracked
|1022|0x00000000bfe00000, 0x00000000bfe00000, 0x00000000bff00000| 0%| F| |TAMS 0x00000000bfe00000, 0x00000000bfe00000| Untracked
|1023|0x00000000bff00000, 0x00000000bff00000, 0x00000000c0000000| 0%| F| |TAMS 0x00000000bff00000, 0x00000000bff00000| Untracked
|1024|0x00000000c0000000, 0x00000000c0000000, 0x00000000c0100000| 0%| F| |TAMS 0x00000000c0000000, 0x00000000c0000000| Untracked
|1025|0x00000000c0100000, 0x00000000c0100000, 0x00000000c0200000| 0%| F| |TAMS 0x00000000c0100000, 0x00000000c0100000| Untracked
|1026|0x00000000c0200000, 0x00000000c0200000, 0x00000000c0300000| 0%| F| |TAMS 0x00000000c0200000, 0x00000000c0200000| Untracked
|1027|0x00000000c0300000, 0x00000000c0300000, 0x00000000c0400000| 0%| F| |TAMS 0x00000000c0300000, 0x00000000c0300000| Untracked
|1028|0x00000000c0400000, 0x00000000c0400000, 0x00000000c0500000| 0%| F| |TAMS 0x00000000c0400000, 0x00000000c0400000| Untracked
|1029|0x00000000c0500000, 0x00000000c0500000, 0x00000000c0600000| 0%| F| |TAMS 0x00000000c0500000, 0x00000000c0500000| Untracked
|1030|0x00000000c0600000, 0x00000000c0600000, 0x00000000c0700000| 0%| F| |TAMS 0x00000000c0600000, 0x00000000c0600000| Untracked
|1031|0x00000000c0700000, 0x00000000c0700000, 0x00000000c0800000| 0%| F| |TAMS 0x00000000c0700000, 0x00000000c0700000| Untracked
|1032|0x00000000c0800000, 0x00000000c0800000, 0x00000000c0900000| 0%| F| |TAMS 0x00000000c0800000, 0x00000000c0800000| Untracked
|1033|0x00000000c0900000, 0x00000000c0900000, 0x00000000c0a00000| 0%| F| |TAMS 0x00000000c0900000, 0x00000000c0900000| Untracked
|1034|0x00000000c0a00000, 0x00000000c0a00000, 0x00000000c0b00000| 0%| F| |TAMS 0x00000000c0a00000, 0x00000000c0a00000| Untracked
|1035|0x00000000c0b00000, 0x00000000c0b00000, 0x00000000c0c00000| 0%| F| |TAMS 0x00000000c0b00000, 0x00000000c0b00000| Untracked
|1036|0x00000000c0c00000, 0x00000000c0c00000, 0x00000000c0d00000| 0%| F| |TAMS 0x00000000c0c00000, 0x00000000c0c00000| Untracked
|1037|0x00000000c0d00000, 0x00000000c0d00000, 0x00000000c0e00000| 0%| F| |TAMS 0x00000000c0d00000, 0x00000000c0d00000| Untracked
|1038|0x00000000c0e00000, 0x00000000c0e00000, 0x00000000c0f00000| 0%| F| |TAMS 0x00000000c0e00000, 0x00000000c0e00000| Untracked
|1039|0x00000000c0f00000, 0x00000000c0f00000, 0x00000000c1000000| 0%| F| |TAMS 0x00000000c0f00000, 0x00000000c0f00000| Untracked
|1040|0x00000000c1000000, 0x00000000c1000000, 0x00000000c1100000| 0%| F| |TAMS 0x00000000c1000000, 0x00000000c1000000| Untracked
|1041|0x00000000c1100000, 0x00000000c1100000, 0x00000000c1200000| 0%| F| |TAMS 0x00000000c1100000, 0x00000000c1100000| Untracked
|1042|0x00000000c1200000, 0x00000000c1200000, 0x00000000c1300000| 0%| F| |TAMS 0x00000000c1200000, 0x00000000c1200000| Untracked
|1043|0x00000000c1300000, 0x00000000c1300000, 0x00000000c1400000| 0%| F| |TAMS 0x00000000c1300000, 0x00000000c1300000| Untracked
|1044|0x00000000c1400000, 0x00000000c1400000, 0x00000000c1500000| 0%| F| |TAMS 0x00000000c1400000, 0x00000000c1400000| Untracked
|1045|0x00000000c1500000, 0x00000000c1500000, 0x00000000c1600000| 0%| F| |TAMS 0x00000000c1500000, 0x00000000c1500000| Untracked
|1046|0x00000000c1600000, 0x00000000c1600000, 0x00000000c1700000| 0%| F| |TAMS 0x00000000c1600000, 0x00000000c1600000| Untracked
|1047|0x00000000c1700000, 0x00000000c1700000, 0x00000000c1800000| 0%| F| |TAMS 0x00000000c1700000, 0x00000000c1700000| Untracked
|1048|0x00000000c1800000, 0x00000000c1800000, 0x00000000c1900000| 0%| F| |TAMS 0x00000000c1800000, 0x00000000c1800000| Untracked
|1049|0x00000000c1900000, 0x00000000c1900000, 0x00000000c1a00000| 0%| F| |TAMS 0x00000000c1900000, 0x00000000c1900000| Untracked
|1050|0x00000000c1a00000, 0x00000000c1a00000, 0x00000000c1b00000| 0%| F| |TAMS 0x00000000c1a00000, 0x00000000c1a00000| Untracked
|1051|0x00000000c1b00000, 0x00000000c1b00000, 0x00000000c1c00000| 0%| F| |TAMS 0x00000000c1b00000, 0x00000000c1b00000| Untracked
|1052|0x00000000c1c00000, 0x00000000c1c00000, 0x00000000c1d00000| 0%| F| |TAMS 0x00000000c1c00000, 0x00000000c1c00000| Untracked
|1053|0x00000000c1d00000, 0x00000000c1d00000, 0x00000000c1e00000| 0%| F| |TAMS 0x00000000c1d00000, 0x00000000c1d00000| Untracked
|1054|0x00000000c1e00000, 0x00000000c1e00000, 0x00000000c1f00000| 0%| F| |TAMS 0x00000000c1e00000, 0x00000000c1e00000| Untracked
|1055|0x00000000c1f00000, 0x00000000c1f00000, 0x00000000c2000000| 0%| F| |TAMS 0x00000000c1f00000, 0x00000000c1f00000| Untracked
|1056|0x00000000c2000000, 0x00000000c2000000, 0x00000000c2100000| 0%| F| |TAMS 0x00000000c2000000, 0x00000000c2000000| Untracked
|1057|0x00000000c2100000, 0x00000000c2100000, 0x00000000c2200000| 0%| F| |TAMS 0x00000000c2100000, 0x00000000c2100000| Untracked
|1058|0x00000000c2200000, 0x00000000c2200000, 0x00000000c2300000| 0%| F| |TAMS 0x00000000c2200000, 0x00000000c2200000| Untracked
|1059|0x00000000c2300000, 0x00000000c2300000, 0x00000000c2400000| 0%| F| |TAMS 0x00000000c2300000, 0x00000000c2300000| Untracked
|1060|0x00000000c2400000, 0x00000000c2400000, 0x00000000c2500000| 0%| F| |TAMS 0x00000000c2400000, 0x00000000c2400000| Untracked
|1061|0x00000000c2500000, 0x00000000c2500000, 0x00000000c2600000| 0%| F| |TAMS 0x00000000c2500000, 0x00000000c2500000| Untracked
|1062|0x00000000c2600000, 0x00000000c2600000, 0x00000000c2700000| 0%| F| |TAMS 0x00000000c2600000, 0x00000000c2600000| Untracked
|1063|0x00000000c2700000, 0x00000000c2700000, 0x00000000c2800000| 0%| F| |TAMS 0x00000000c2700000, 0x00000000c2700000| Untracked
|1064|0x00000000c2800000, 0x00000000c2800000, 0x00000000c2900000| 0%| F| |TAMS 0x00000000c2800000, 0x00000000c2800000| Untracked
|1065|0x00000000c2900000, 0x00000000c2900000, 0x00000000c2a00000| 0%| F| |TAMS 0x00000000c2900000, 0x00000000c2900000| Untracked
|1066|0x00000000c2a00000, 0x00000000c2a00000, 0x00000000c2b00000| 0%| F| |TAMS 0x00000000c2a00000, 0x00000000c2a00000| Untracked
|1067|0x00000000c2b00000, 0x00000000c2b00000, 0x00000000c2c00000| 0%| F| |TAMS 0x00000000c2b00000, 0x00000000c2b00000| Untracked
|1068|0x00000000c2c00000, 0x00000000c2c00000, 0x00000000c2d00000| 0%| F| |TAMS 0x00000000c2c00000, 0x00000000c2c00000| Untracked
|1069|0x00000000c2d00000, 0x00000000c2d00000, 0x00000000c2e00000| 0%| F| |TAMS 0x00000000c2d00000, 0x00000000c2d00000| Untracked
|1070|0x00000000c2e00000, 0x00000000c2e00000, 0x00000000c2f00000| 0%| F| |TAMS 0x00000000c2e00000, 0x00000000c2e00000| Untracked
|1071|0x00000000c2f00000, 0x00000000c2f00000, 0x00000000c3000000| 0%| F| |TAMS 0x00000000c2f00000, 0x00000000c2f00000| Untracked
|1072|0x00000000c3000000, 0x00000000c3000000, 0x00000000c3100000| 0%| F| |TAMS 0x00000000c3000000, 0x00000000c3000000| Untracked
|1073|0x00000000c3100000, 0x00000000c3100000, 0x00000000c3200000| 0%| F| |TAMS 0x00000000c3100000, 0x00000000c3100000| Untracked
|1074|0x00000000c3200000, 0x00000000c3200000, 0x00000000c3300000| 0%| F| |TAMS 0x00000000c3200000, 0x00000000c3200000| Untracked
|1075|0x00000000c3300000, 0x00000000c3300000, 0x00000000c3400000| 0%| F| |TAMS 0x00000000c3300000, 0x00000000c3300000| Untracked
|1076|0x00000000c3400000, 0x00000000c3400000, 0x00000000c3500000| 0%| F| |TAMS 0x00000000c3400000, 0x00000000c3400000| Untracked
|1077|0x00000000c3500000, 0x00000000c3500000, 0x00000000c3600000| 0%| F| |TAMS 0x00000000c3500000, 0x00000000c3500000| Untracked
|1078|0x00000000c3600000, 0x00000000c3600000, 0x00000000c3700000| 0%| F| |TAMS 0x00000000c3600000, 0x00000000c3600000| Untracked
|1079|0x00000000c3700000, 0x00000000c3700000, 0x00000000c3800000| 0%| F| |TAMS 0x00000000c3700000, 0x00000000c3700000| Untracked
|1080|0x00000000c3800000, 0x00000000c3800000, 0x00000000c3900000| 0%| F| |TAMS 0x00000000c3800000, 0x00000000c3800000| Untracked
|1081|0x00000000c3900000, 0x00000000c3900000, 0x00000000c3a00000| 0%| F| |TAMS 0x00000000c3900000, 0x00000000c3900000| Untracked
|1082|0x00000000c3a00000, 0x00000000c3a00000, 0x00000000c3b00000| 0%| F| |TAMS 0x00000000c3a00000, 0x00000000c3a00000| Untracked
|1083|0x00000000c3b00000, 0x00000000c3b00000, 0x00000000c3c00000| 0%| F| |TAMS 0x00000000c3b00000, 0x00000000c3b00000| Untracked
|1084|0x00000000c3c00000, 0x00000000c3c00000, 0x00000000c3d00000| 0%| F| |TAMS 0x00000000c3c00000, 0x00000000c3c00000| Untracked
|1085|0x00000000c3d00000, 0x00000000c3d00000, 0x00000000c3e00000| 0%| F| |TAMS 0x00000000c3d00000, 0x00000000c3d00000| Untracked
|1086|0x00000000c3e00000, 0x00000000c3e00000, 0x00000000c3f00000| 0%| F| |TAMS 0x00000000c3e00000, 0x00000000c3e00000| Untracked
|1087|0x00000000c3f00000, 0x00000000c3f00000, 0x00000000c4000000| 0%| F| |TAMS 0x00000000c3f00000, 0x00000000c3f00000| Untracked
|1088|0x00000000c4000000, 0x00000000c4000000, 0x00000000c4100000| 0%| F| |TAMS 0x00000000c4000000, 0x00000000c4000000| Untracked
|1089|0x00000000c4100000, 0x00000000c4100000, 0x00000000c4200000| 0%| F| |TAMS 0x00000000c4100000, 0x00000000c4100000| Untracked
|1090|0x00000000c4200000, 0x00000000c4200000, 0x00000000c4300000| 0%| F| |TAMS 0x00000000c4200000, 0x00000000c4200000| Untracked
|1091|0x00000000c4300000, 0x00000000c4300000, 0x00000000c4400000| 0%| F| |TAMS 0x00000000c4300000, 0x00000000c4300000| Untracked
|1092|0x00000000c4400000, 0x00000000c4400000, 0x00000000c4500000| 0%| F| |TAMS 0x00000000c4400000, 0x00000000c4400000| Untracked
|1093|0x00000000c4500000, 0x00000000c4600000, 0x00000000c4600000|100%| S|CS|TAMS 0x00000000c4500000, 0x00000000c4500000| Complete
|1094|0x00000000c4600000, 0x00000000c4700000, 0x00000000c4700000|100%| S|CS|TAMS 0x00000000c4600000, 0x00000000c4600000| Complete
|1095|0x00000000c4700000, 0x00000000c4800000, 0x00000000c4800000|100%| S|CS|TAMS 0x00000000c4700000, 0x00000000c4700000| Complete
|1096|0x00000000c4800000, 0x00000000c4900000, 0x00000000c4900000|100%| S|CS|TAMS 0x00000000c4800000, 0x00000000c4800000| Complete
|1097|0x00000000c4900000, 0x00000000c4a00000, 0x00000000c4a00000|100%| S|CS|TAMS 0x00000000c4900000, 0x00000000c4900000| Complete
|1098|0x00000000c4a00000, 0x00000000c4b00000, 0x00000000c4b00000|100%| S|CS|TAMS 0x00000000c4a00000, 0x00000000c4a00000| Complete
|1099|0x00000000c4b00000, 0x00000000c4c00000, 0x00000000c4c00000|100%| S|CS|TAMS 0x00000000c4b00000, 0x00000000c4b00000| Complete
|1100|0x00000000c4c00000, 0x00000000c4d00000, 0x00000000c4d00000|100%| S|CS|TAMS 0x00000000c4c00000, 0x00000000c4c00000| Complete
|1101|0x00000000c4d00000, 0x00000000c4e00000, 0x00000000c4e00000|100%| S|CS|TAMS 0x00000000c4d00000, 0x00000000c4d00000| Complete
|1102|0x00000000c4e00000, 0x00000000c4f00000, 0x00000000c4f00000|100%| S|CS|TAMS 0x00000000c4e00000, 0x00000000c4e00000| Complete
|1103|0x00000000c4f00000, 0x00000000c5000000, 0x00000000c5000000|100%| S|CS|TAMS 0x00000000c4f00000, 0x00000000c4f00000| Complete
|1104|0x00000000c5000000, 0x00000000c5100000, 0x00000000c5100000|100%| S|CS|TAMS 0x00000000c5000000, 0x00000000c5000000| Complete
|1105|0x00000000c5100000, 0x00000000c5200000, 0x00000000c5200000|100%| S|CS|TAMS 0x00000000c5100000, 0x00000000c5100000| Complete
|1106|0x00000000c5200000, 0x00000000c5300000, 0x00000000c5300000|100%| S|CS|TAMS 0x00000000c5200000, 0x00000000c5200000| Complete
|1107|0x00000000c5300000, 0x00000000c5400000, 0x00000000c5400000|100%| S|CS|TAMS 0x00000000c5300000, 0x00000000c5300000| Complete
|1108|0x00000000c5400000, 0x00000000c5500000, 0x00000000c5500000|100%| S|CS|TAMS 0x00000000c5400000, 0x00000000c5400000| Complete
|1109|0x00000000c5500000, 0x00000000c5500000, 0x00000000c5600000| 0%| F| |TAMS 0x00000000c5500000, 0x00000000c5500000| Untracked
|1110|0x00000000c5600000, 0x00000000c5600000, 0x00000000c5700000| 0%| F| |TAMS 0x00000000c5600000, 0x00000000c5600000| Untracked
|1111|0x00000000c5700000, 0x00000000c5700000, 0x00000000c5800000| 0%| F| |TAMS 0x00000000c5700000, 0x00000000c5700000| Untracked
|1112|0x00000000c5800000, 0x00000000c5800000, 0x00000000c5900000| 0%| F| |TAMS 0x00000000c5800000, 0x00000000c5800000| Untracked
|1113|0x00000000c5900000, 0x00000000c5900000, 0x00000000c5a00000| 0%| F| |TAMS 0x00000000c5900000, 0x00000000c5900000| Untracked
|1114|0x00000000c5a00000, 0x00000000c5a00000, 0x00000000c5b00000| 0%| F| |TAMS 0x00000000c5a00000, 0x00000000c5a00000| Untracked
|1115|0x00000000c5b00000, 0x00000000c5b00000, 0x00000000c5c00000| 0%| F| |TAMS 0x00000000c5b00000, 0x00000000c5b00000| Untracked
|1116|0x00000000c5c00000, 0x00000000c5c00000, 0x00000000c5d00000| 0%| F| |TAMS 0x00000000c5c00000, 0x00000000c5c00000| Untracked
|1117|0x00000000c5d00000, 0x00000000c5d00000, 0x00000000c5e00000| 0%| F| |TAMS 0x00000000c5d00000, 0x00000000c5d00000| Untracked
|1118|0x00000000c5e00000, 0x00000000c5e00000, 0x00000000c5f00000| 0%| F| |TAMS 0x00000000c5e00000, 0x00000000c5e00000| Untracked
|1119|0x00000000c5f00000, 0x00000000c5f00000, 0x00000000c6000000| 0%| F| |TAMS 0x00000000c5f00000, 0x00000000c5f00000| Untracked
|1120|0x00000000c6000000, 0x00000000c6000000, 0x00000000c6100000| 0%| F| |TAMS 0x00000000c6000000, 0x00000000c6000000| Untracked
|1121|0x00000000c6100000, 0x00000000c6100000, 0x00000000c6200000| 0%| F| |TAMS 0x00000000c6100000, 0x00000000c6100000| Untracked
|1122|0x00000000c6200000, 0x00000000c6200000, 0x00000000c6300000| 0%| F| |TAMS 0x00000000c6200000, 0x00000000c6200000| Untracked
|1123|0x00000000c6300000, 0x00000000c6300000, 0x00000000c6400000| 0%| F| |TAMS 0x00000000c6300000, 0x00000000c6300000| Untracked
|1124|0x00000000c6400000, 0x00000000c6400000, 0x00000000c6500000| 0%| F| |TAMS 0x00000000c6400000, 0x00000000c6400000| Untracked
|1125|0x00000000c6500000, 0x00000000c6500000, 0x00000000c6600000| 0%| F| |TAMS 0x00000000c6500000, 0x00000000c6500000| Untracked
|1126|0x00000000c6600000, 0x00000000c6600000, 0x00000000c6700000| 0%| F| |TAMS 0x00000000c6600000, 0x00000000c6600000| Untracked
|1127|0x00000000c6700000, 0x00000000c6700000, 0x00000000c6800000| 0%| F| |TAMS 0x00000000c6700000, 0x00000000c6700000| Untracked
|1128|0x00000000c6800000, 0x00000000c6800000, 0x00000000c6900000| 0%| F| |TAMS 0x00000000c6800000, 0x00000000c6800000| Untracked
|1129|0x00000000c6900000, 0x00000000c6900000, 0x00000000c6a00000| 0%| F| |TAMS 0x00000000c6900000, 0x00000000c6900000| Untracked
|1130|0x00000000c6a00000, 0x00000000c6a00000, 0x00000000c6b00000| 0%| F| |TAMS 0x00000000c6a00000, 0x00000000c6a00000| Untracked
|1131|0x00000000c6b00000, 0x00000000c6b00000, 0x00000000c6c00000| 0%| F| |TAMS 0x00000000c6b00000, 0x00000000c6b00000| Untracked
|1132|0x00000000c6c00000, 0x00000000c6c00000, 0x00000000c6d00000| 0%| F| |TAMS 0x00000000c6c00000, 0x00000000c6c00000| Untracked
|1133|0x00000000c6d00000, 0x00000000c6d00000, 0x00000000c6e00000| 0%| F| |TAMS 0x00000000c6d00000, 0x00000000c6d00000| Untracked
|1134|0x00000000c6e00000, 0x00000000c6e00000, 0x00000000c6f00000| 0%| F| |TAMS 0x00000000c6e00000, 0x00000000c6e00000| Untracked
|1135|0x00000000c6f00000, 0x00000000c6f00000, 0x00000000c7000000| 0%| F| |TAMS 0x00000000c6f00000, 0x00000000c6f00000| Untracked
|1136|0x00000000c7000000, 0x00000000c7000000, 0x00000000c7100000| 0%| F| |TAMS 0x00000000c7000000, 0x00000000c7000000| Untracked
|1137|0x00000000c7100000, 0x00000000c7100000, 0x00000000c7200000| 0%| F| |TAMS 0x00000000c7100000, 0x00000000c7100000| Untracked
|1138|0x00000000c7200000, 0x00000000c7200000, 0x00000000c7300000| 0%| F| |TAMS 0x00000000c7200000, 0x00000000c7200000| Untracked
|1139|0x00000000c7300000, 0x00000000c7300000, 0x00000000c7400000| 0%| F| |TAMS 0x00000000c7300000, 0x00000000c7300000| Untracked
|1140|0x00000000c7400000, 0x00000000c7400000, 0x00000000c7500000| 0%| F| |TAMS 0x00000000c7400000, 0x00000000c7400000| Untracked
|1141|0x00000000c7500000, 0x00000000c7500000, 0x00000000c7600000| 0%| F| |TAMS 0x00000000c7500000, 0x00000000c7500000| Untracked
|1142|0x00000000c7600000, 0x00000000c7600000, 0x00000000c7700000| 0%| F| |TAMS 0x00000000c7600000, 0x00000000c7600000| Untracked
|1143|0x00000000c7700000, 0x00000000c7700000, 0x00000000c7800000| 0%| F| |TAMS 0x00000000c7700000, 0x00000000c7700000| Untracked
|1144|0x00000000c7800000, 0x00000000c7800000, 0x00000000c7900000| 0%| F| |TAMS 0x00000000c7800000, 0x00000000c7800000| Untracked
|1145|0x00000000c7900000, 0x00000000c7900000, 0x00000000c7a00000| 0%| F| |TAMS 0x00000000c7900000, 0x00000000c7900000| Untracked
|1146|0x00000000c7a00000, 0x00000000c7a00000, 0x00000000c7b00000| 0%| F| |TAMS 0x00000000c7a00000, 0x00000000c7a00000| Untracked
|1147|0x00000000c7b00000, 0x00000000c7b00000, 0x00000000c7c00000| 0%| F| |TAMS 0x00000000c7b00000, 0x00000000c7b00000| Untracked
|1148|0x00000000c7c00000, 0x00000000c7c00000, 0x00000000c7d00000| 0%| F| |TAMS 0x00000000c7c00000, 0x00000000c7c00000| Untracked
|1149|0x00000000c7d00000, 0x00000000c7d00000, 0x00000000c7e00000| 0%| F| |TAMS 0x00000000c7d00000, 0x00000000c7d00000| Untracked
|1150|0x00000000c7e00000, 0x00000000c7e00000, 0x00000000c7f00000| 0%| F| |TAMS 0x00000000c7e00000, 0x00000000c7e00000| Untracked
|1151|0x00000000c7f00000, 0x00000000c7f00000, 0x00000000c8000000| 0%| F| |TAMS 0x00000000c7f00000, 0x00000000c7f00000| Untracked
|1152|0x00000000c8000000, 0x00000000c8000000, 0x00000000c8100000| 0%| F| |TAMS 0x00000000c8000000, 0x00000000c8000000| Untracked
|1153|0x00000000c8100000, 0x00000000c8100000, 0x00000000c8200000| 0%| F| |TAMS 0x00000000c8100000, 0x00000000c8100000| Untracked
|1154|0x00000000c8200000, 0x00000000c8200000, 0x00000000c8300000| 0%| F| |TAMS 0x00000000c8200000, 0x00000000c8200000| Untracked
|1155|0x00000000c8300000, 0x00000000c8300000, 0x00000000c8400000| 0%| F| |TAMS 0x00000000c8300000, 0x00000000c8300000| Untracked
|1156|0x00000000c8400000, 0x00000000c8400000, 0x00000000c8500000| 0%| F| |TAMS 0x00000000c8400000, 0x00000000c8400000| Untracked
|1157|0x00000000c8500000, 0x00000000c8500000, 0x00000000c8600000| 0%| F| |TAMS 0x00000000c8500000, 0x00000000c8500000| Untracked
|1158|0x00000000c8600000, 0x00000000c8600000, 0x00000000c8700000| 0%| F| |TAMS 0x00000000c8600000, 0x00000000c8600000| Untracked
|1159|0x00000000c8700000, 0x00000000c8700000, 0x00000000c8800000| 0%| F| |TAMS 0x00000000c8700000, 0x00000000c8700000| Untracked
|1160|0x00000000c8800000, 0x00000000c8800000, 0x00000000c8900000| 0%| F| |TAMS 0x00000000c8800000, 0x00000000c8800000| Untracked
|1161|0x00000000c8900000, 0x00000000c8900000, 0x00000000c8a00000| 0%| F| |TAMS 0x00000000c8900000, 0x00000000c8900000| Untracked
|1162|0x00000000c8a00000, 0x00000000c8a00000, 0x00000000c8b00000| 0%| F| |TAMS 0x00000000c8a00000, 0x00000000c8a00000| Untracked
|1163|0x00000000c8b00000, 0x00000000c8b00000, 0x00000000c8c00000| 0%| F| |TAMS 0x00000000c8b00000, 0x00000000c8b00000| Untracked
|1164|0x00000000c8c00000, 0x00000000c8c00000, 0x00000000c8d00000| 0%| F| |TAMS 0x00000000c8c00000, 0x00000000c8c00000| Untracked
|1165|0x00000000c8d00000, 0x00000000c8d00000, 0x00000000c8e00000| 0%| F| |TAMS 0x00000000c8d00000, 0x00000000c8d00000| Untracked
|1166|0x00000000c8e00000, 0x00000000c8e00000, 0x00000000c8f00000| 0%| F| |TAMS 0x00000000c8e00000, 0x00000000c8e00000| Untracked
|1167|0x00000000c8f00000, 0x00000000c8f00000, 0x00000000c9000000| 0%| F| |TAMS 0x00000000c8f00000, 0x00000000c8f00000| Untracked
|1168|0x00000000c9000000, 0x00000000c9000000, 0x00000000c9100000| 0%| F| |TAMS 0x00000000c9000000, 0x00000000c9000000| Untracked
|1169|0x00000000c9100000, 0x00000000c9100000, 0x00000000c9200000| 0%| F| |TAMS 0x00000000c9100000, 0x00000000c9100000| Untracked
|1170|0x00000000c9200000, 0x00000000c9200000, 0x00000000c9300000| 0%| F| |TAMS 0x00000000c9200000, 0x00000000c9200000| Untracked
|1171|0x00000000c9300000, 0x00000000c9300000, 0x00000000c9400000| 0%| F| |TAMS 0x00000000c9300000, 0x00000000c9300000| Untracked
|1172|0x00000000c9400000, 0x00000000c9400000, 0x00000000c9500000| 0%| F| |TAMS 0x00000000c9400000, 0x00000000c9400000| Untracked
|1173|0x00000000c9500000, 0x00000000c9500000, 0x00000000c9600000| 0%| F| |TAMS 0x00000000c9500000, 0x00000000c9500000| Untracked
|1174|0x00000000c9600000, 0x00000000c9600000, 0x00000000c9700000| 0%| F| |TAMS 0x00000000c9600000, 0x00000000c9600000| Untracked
|1175|0x00000000c9700000, 0x00000000c9700000, 0x00000000c9800000| 0%| F| |TAMS 0x00000000c9700000, 0x00000000c9700000| Untracked
|1176|0x00000000c9800000, 0x00000000c9800000, 0x00000000c9900000| 0%| F| |TAMS 0x00000000c9800000, 0x00000000c9800000| Untracked
|1177|0x00000000c9900000, 0x00000000c9900000, 0x00000000c9a00000| 0%| F| |TAMS 0x00000000c9900000, 0x00000000c9900000| Untracked
|1178|0x00000000c9a00000, 0x00000000c9a00000, 0x00000000c9b00000| 0%| F| |TAMS 0x00000000c9a00000, 0x00000000c9a00000| Untracked
|1179|0x00000000c9b00000, 0x00000000c9b00000, 0x00000000c9c00000| 0%| F| |TAMS 0x00000000c9b00000, 0x00000000c9b00000| Untracked
|1180|0x00000000c9c00000, 0x00000000c9c00000, 0x00000000c9d00000| 0%| F| |TAMS 0x00000000c9c00000, 0x00000000c9c00000| Untracked
|1181|0x00000000c9d00000, 0x00000000c9d00000, 0x00000000c9e00000| 0%| F| |TAMS 0x00000000c9d00000, 0x00000000c9d00000| Untracked
|1182|0x00000000c9e00000, 0x00000000c9e00000, 0x00000000c9f00000| 0%| F| |TAMS 0x00000000c9e00000, 0x00000000c9e00000| Untracked
|1183|0x00000000c9f00000, 0x00000000c9f00000, 0x00000000ca000000| 0%| F| |TAMS 0x00000000c9f00000, 0x00000000c9f00000| Untracked
|1184|0x00000000ca000000, 0x00000000ca000000, 0x00000000ca100000| 0%| F| |TAMS 0x00000000ca000000, 0x00000000ca000000| Untracked
|1185|0x00000000ca100000, 0x00000000ca100000, 0x00000000ca200000| 0%| F| |TAMS 0x00000000ca100000, 0x00000000ca100000| Untracked
|1186|0x00000000ca200000, 0x00000000ca200000, 0x00000000ca300000| 0%| F| |TAMS 0x00000000ca200000, 0x00000000ca200000| Untracked
|1187|0x00000000ca300000, 0x00000000ca300000, 0x00000000ca400000| 0%| F| |TAMS 0x00000000ca300000, 0x00000000ca300000| Untracked
|1188|0x00000000ca400000, 0x00000000ca400000, 0x00000000ca500000| 0%| F| |TAMS 0x00000000ca400000, 0x00000000ca400000| Untracked
|1189|0x00000000ca500000, 0x00000000ca500000, 0x00000000ca600000| 0%| F| |TAMS 0x00000000ca500000, 0x00000000ca500000| Untracked
|1190|0x00000000ca600000, 0x00000000ca600000, 0x00000000ca700000| 0%| F| |TAMS 0x00000000ca600000, 0x00000000ca600000| Untracked
|1191|0x00000000ca700000, 0x00000000ca700000, 0x00000000ca800000| 0%| F| |TAMS 0x00000000ca700000, 0x00000000ca700000| Untracked
|1192|0x00000000ca800000, 0x00000000ca800000, 0x00000000ca900000| 0%| F| |TAMS 0x00000000ca800000, 0x00000000ca800000| Untracked
|1193|0x00000000ca900000, 0x00000000ca900000, 0x00000000caa00000| 0%| F| |TAMS 0x00000000ca900000, 0x00000000ca900000| Untracked
|1194|0x00000000caa00000, 0x00000000caa00000, 0x00000000cab00000| 0%| F| |TAMS 0x00000000caa00000, 0x00000000caa00000| Untracked
|1195|0x00000000cab00000, 0x00000000cab00000, 0x00000000cac00000| 0%| F| |TAMS 0x00000000cab00000, 0x00000000cab00000| Untracked
|1196|0x00000000cac00000, 0x00000000cac00000, 0x00000000cad00000| 0%| F| |TAMS 0x00000000cac00000, 0x00000000cac00000| Untracked
|1197|0x00000000cad00000, 0x00000000cad00000, 0x00000000cae00000| 0%| F| |TAMS 0x00000000cad00000, 0x00000000cad00000| Untracked
|1198|0x00000000cae00000, 0x00000000cae00000, 0x00000000caf00000| 0%| F| |TAMS 0x00000000cae00000, 0x00000000cae00000| Untracked
|1199|0x00000000caf00000, 0x00000000caf00000, 0x00000000cb000000| 0%| F| |TAMS 0x00000000caf00000, 0x00000000caf00000| Untracked
|1200|0x00000000cb000000, 0x00000000cb000000, 0x00000000cb100000| 0%| F| |TAMS 0x00000000cb000000, 0x00000000cb000000| Untracked
|1201|0x00000000cb100000, 0x00000000cb100000, 0x00000000cb200000| 0%| F| |TAMS 0x00000000cb100000, 0x00000000cb100000| Untracked
|1202|0x00000000cb200000, 0x00000000cb200000, 0x00000000cb300000| 0%| F| |TAMS 0x00000000cb200000, 0x00000000cb200000| Untracked
|1203|0x00000000cb300000, 0x00000000cb300000, 0x00000000cb400000| 0%| F| |TAMS 0x00000000cb300000, 0x00000000cb300000| Untracked
|1204|0x00000000cb400000, 0x00000000cb400000, 0x00000000cb500000| 0%| F| |TAMS 0x00000000cb400000, 0x00000000cb400000| Untracked
|1205|0x00000000cb500000, 0x00000000cb500000, 0x00000000cb600000| 0%| F| |TAMS 0x00000000cb500000, 0x00000000cb500000| Untracked
|1206|0x00000000cb600000, 0x00000000cb600000, 0x00000000cb700000| 0%| F| |TAMS 0x00000000cb600000, 0x00000000cb600000| Untracked
|1207|0x00000000cb700000, 0x00000000cb700000, 0x00000000cb800000| 0%| F| |TAMS 0x00000000cb700000, 0x00000000cb700000| Untracked
|1208|0x00000000cb800000, 0x00000000cb800000, 0x00000000cb900000| 0%| F| |TAMS 0x00000000cb800000, 0x00000000cb800000| Untracked
|1209|0x00000000cb900000, 0x00000000cb900000, 0x00000000cba00000| 0%| F| |TAMS 0x00000000cb900000, 0x00000000cb900000| Untracked
|1210|0x00000000cba00000, 0x00000000cba00000, 0x00000000cbb00000| 0%| F| |TAMS 0x00000000cba00000, 0x00000000cba00000| Untracked
|1211|0x00000000cbb00000, 0x00000000cbb00000, 0x00000000cbc00000| 0%| F| |TAMS 0x00000000cbb00000, 0x00000000cbb00000| Untracked
|1212|0x00000000cbc00000, 0x00000000cbc00000, 0x00000000cbd00000| 0%| F| |TAMS 0x00000000cbc00000, 0x00000000cbc00000| Untracked
|1213|0x00000000cbd00000, 0x00000000cbd00000, 0x00000000cbe00000| 0%| F| |TAMS 0x00000000cbd00000, 0x00000000cbd00000| Untracked
|1214|0x00000000cbe00000, 0x00000000cbe00000, 0x00000000cbf00000| 0%| F| |TAMS 0x00000000cbe00000, 0x00000000cbe00000| Untracked
|1215|0x00000000cbf00000, 0x00000000cbf00000, 0x00000000cc000000| 0%| F| |TAMS 0x00000000cbf00000, 0x00000000cbf00000| Untracked
|1216|0x00000000cc000000, 0x00000000cc000000, 0x00000000cc100000| 0%| F| |TAMS 0x00000000cc000000, 0x00000000cc000000| Untracked
|1217|0x00000000cc100000, 0x00000000cc100000, 0x00000000cc200000| 0%| F| |TAMS 0x00000000cc100000, 0x00000000cc100000| Untracked
|1218|0x00000000cc200000, 0x00000000cc200000, 0x00000000cc300000| 0%| F| |TAMS 0x00000000cc200000, 0x00000000cc200000| Untracked
|1219|0x00000000cc300000, 0x00000000cc300000, 0x00000000cc400000| 0%| F| |TAMS 0x00000000cc300000, 0x00000000cc300000| Untracked
|1220|0x00000000cc400000, 0x00000000cc400000, 0x00000000cc500000| 0%| F| |TAMS 0x00000000cc400000, 0x00000000cc400000| Untracked
|1221|0x00000000cc500000, 0x00000000cc500000, 0x00000000cc600000| 0%| F| |TAMS 0x00000000cc500000, 0x00000000cc500000| Untracked
|1222|0x00000000cc600000, 0x00000000cc600000, 0x00000000cc700000| 0%| F| |TAMS 0x00000000cc600000, 0x00000000cc600000| Untracked
|1223|0x00000000cc700000, 0x00000000cc700000, 0x00000000cc800000| 0%| F| |TAMS 0x00000000cc700000, 0x00000000cc700000| Untracked
|1224|0x00000000cc800000, 0x00000000cc800000, 0x00000000cc900000| 0%| F| |TAMS 0x00000000cc800000, 0x00000000cc800000| Untracked
|1225|0x00000000cc900000, 0x00000000cc900000, 0x00000000cca00000| 0%| F| |TAMS 0x00000000cc900000, 0x00000000cc900000| Untracked
|1226|0x00000000cca00000, 0x00000000cca00000, 0x00000000ccb00000| 0%| F| |TAMS 0x00000000cca00000, 0x00000000cca00000| Untracked
|1227|0x00000000ccb00000, 0x00000000ccb00000, 0x00000000ccc00000| 0%| F| |TAMS 0x00000000ccb00000, 0x00000000ccb00000| Untracked
|1228|0x00000000ccc00000, 0x00000000ccc00000, 0x00000000ccd00000| 0%| F| |TAMS 0x00000000ccc00000, 0x00000000ccc00000| Untracked
|1229|0x00000000ccd00000, 0x00000000ccd00000, 0x00000000cce00000| 0%| F| |TAMS 0x00000000ccd00000, 0x00000000ccd00000| Untracked
|1230|0x00000000cce00000, 0x00000000cce00000, 0x00000000ccf00000| 0%| F| |TAMS 0x00000000cce00000, 0x00000000cce00000| Untracked
|1231|0x00000000ccf00000, 0x00000000ccf00000, 0x00000000cd000000| 0%| F| |TAMS 0x00000000ccf00000, 0x00000000ccf00000| Untracked
|1232|0x00000000cd000000, 0x00000000cd000000, 0x00000000cd100000| 0%| F| |TAMS 0x00000000cd000000, 0x00000000cd000000| Untracked
|1233|0x00000000cd100000, 0x00000000cd100000, 0x00000000cd200000| 0%| F| |TAMS 0x00000000cd100000, 0x00000000cd100000| Untracked
|1234|0x00000000cd200000, 0x00000000cd200000, 0x00000000cd300000| 0%| F| |TAMS 0x00000000cd200000, 0x00000000cd200000| Untracked
|1235|0x00000000cd300000, 0x00000000cd300000, 0x00000000cd400000| 0%| F| |TAMS 0x00000000cd300000, 0x00000000cd300000| Untracked
|1236|0x00000000cd400000, 0x00000000cd400000, 0x00000000cd500000| 0%| F| |TAMS 0x00000000cd400000, 0x00000000cd400000| Untracked
|1237|0x00000000cd500000, 0x00000000cd500000, 0x00000000cd600000| 0%| F| |TAMS 0x00000000cd500000, 0x00000000cd500000| Untracked
|1238|0x00000000cd600000, 0x00000000cd600000, 0x00000000cd700000| 0%| F| |TAMS 0x00000000cd600000, 0x00000000cd600000| Untracked
|1239|0x00000000cd700000, 0x00000000cd700000, 0x00000000cd800000| 0%| F| |TAMS 0x00000000cd700000, 0x00000000cd700000| Untracked
|1240|0x00000000cd800000, 0x00000000cd800000, 0x00000000cd900000| 0%| F| |TAMS 0x00000000cd800000, 0x00000000cd800000| Untracked
|1241|0x00000000cd900000, 0x00000000cd900000, 0x00000000cda00000| 0%| F| |TAMS 0x00000000cd900000, 0x00000000cd900000| Untracked
|1242|0x00000000cda00000, 0x00000000cda00000, 0x00000000cdb00000| 0%| F| |TAMS 0x00000000cda00000, 0x00000000cda00000| Untracked
|1243|0x00000000cdb00000, 0x00000000cdb00000, 0x00000000cdc00000| 0%| F| |TAMS 0x00000000cdb00000, 0x00000000cdb00000| Untracked
|1244|0x00000000cdc00000, 0x00000000cdc00000, 0x00000000cdd00000| 0%| F| |TAMS 0x00000000cdc00000, 0x00000000cdc00000| Untracked
|1245|0x00000000cdd00000, 0x00000000cdd00000, 0x00000000cde00000| 0%| F| |TAMS 0x00000000cdd00000, 0x00000000cdd00000| Untracked
|1246|0x00000000cde00000, 0x00000000cde00000, 0x00000000cdf00000| 0%| F| |TAMS 0x00000000cde00000, 0x00000000cde00000| Untracked
|1247|0x00000000cdf00000, 0x00000000cdf00000, 0x00000000ce000000| 0%| F| |TAMS 0x00000000cdf00000, 0x00000000cdf00000| Untracked
|1248|0x00000000ce000000, 0x00000000ce000000, 0x00000000ce100000| 0%| F| |TAMS 0x00000000ce000000, 0x00000000ce000000| Untracked
|1249|0x00000000ce100000, 0x00000000ce100000, 0x00000000ce200000| 0%| F| |TAMS 0x00000000ce100000, 0x00000000ce100000| Untracked
|1250|0x00000000ce200000, 0x00000000ce200000, 0x00000000ce300000| 0%| F| |TAMS 0x00000000ce200000, 0x00000000ce200000| Untracked
|1251|0x00000000ce300000, 0x00000000ce300000, 0x00000000ce400000| 0%| F| |TAMS 0x00000000ce300000, 0x00000000ce300000| Untracked
|1252|0x00000000ce400000, 0x00000000ce400000, 0x00000000ce500000| 0%| F| |TAMS 0x00000000ce400000, 0x00000000ce400000| Untracked
|1253|0x00000000ce500000, 0x00000000ce500000, 0x00000000ce600000| 0%| F| |TAMS 0x00000000ce500000, 0x00000000ce500000| Untracked
|1254|0x00000000ce600000, 0x00000000ce600000, 0x00000000ce700000| 0%| F| |TAMS 0x00000000ce600000, 0x00000000ce600000| Untracked
|1255|0x00000000ce700000, 0x00000000ce700000, 0x00000000ce800000| 0%| F| |TAMS 0x00000000ce700000, 0x00000000ce700000| Untracked
|1256|0x00000000ce800000, 0x00000000ce800000, 0x00000000ce900000| 0%| F| |TAMS 0x00000000ce800000, 0x00000000ce800000| Untracked
|1257|0x00000000ce900000, 0x00000000ce900000, 0x00000000cea00000| 0%| F| |TAMS 0x00000000ce900000, 0x00000000ce900000| Untracked
|1258|0x00000000cea00000, 0x00000000cea00000, 0x00000000ceb00000| 0%| F| |TAMS 0x00000000cea00000, 0x00000000cea00000| Untracked
|1259|0x00000000ceb00000, 0x00000000ceb00000, 0x00000000cec00000| 0%| F| |TAMS 0x00000000ceb00000, 0x00000000ceb00000| Untracked
|1260|0x00000000cec00000, 0x00000000cec00000, 0x00000000ced00000| 0%| F| |TAMS 0x00000000cec00000, 0x00000000cec00000| Untracked
|1261|0x00000000ced00000, 0x00000000ced00000, 0x00000000cee00000| 0%| F| |TAMS 0x00000000ced00000, 0x00000000ced00000| Untracked
|1262|0x00000000cee00000, 0x00000000cee00000, 0x00000000cef00000| 0%| F| |TAMS 0x00000000cee00000, 0x00000000cee00000| Untracked
|1263|0x00000000cef00000, 0x00000000cef00000, 0x00000000cf000000| 0%| F| |TAMS 0x00000000cef00000, 0x00000000cef00000| Untracked
|1264|0x00000000cf000000, 0x00000000cf000000, 0x00000000cf100000| 0%| F| |TAMS 0x00000000cf000000, 0x00000000cf000000| Untracked
|1265|0x00000000cf100000, 0x00000000cf100000, 0x00000000cf200000| 0%| F| |TAMS 0x00000000cf100000, 0x00000000cf100000| Untracked
|1266|0x00000000cf200000, 0x00000000cf200000, 0x00000000cf300000| 0%| F| |TAMS 0x00000000cf200000, 0x00000000cf200000| Untracked
|1267|0x00000000cf300000, 0x00000000cf300000, 0x00000000cf400000| 0%| F| |TAMS 0x00000000cf300000, 0x00000000cf300000| Untracked
|1268|0x00000000cf400000, 0x00000000cf400000, 0x00000000cf500000| 0%| F| |TAMS 0x00000000cf400000, 0x00000000cf400000| Untracked
|1269|0x00000000cf500000, 0x00000000cf500000, 0x00000000cf600000| 0%| F| |TAMS 0x00000000cf500000, 0x00000000cf500000| Untracked
|1270|0x00000000cf600000, 0x00000000cf600000, 0x00000000cf700000| 0%| F| |TAMS 0x00000000cf600000, 0x00000000cf600000| Untracked
|1271|0x00000000cf700000, 0x00000000cf700000, 0x00000000cf800000| 0%| F| |TAMS 0x00000000cf700000, 0x00000000cf700000| Untracked
|1272|0x00000000cf800000, 0x00000000cf800000, 0x00000000cf900000| 0%| F| |TAMS 0x00000000cf800000, 0x00000000cf800000| Untracked
|1273|0x00000000cf900000, 0x00000000cf900000, 0x00000000cfa00000| 0%| F| |TAMS 0x00000000cf900000, 0x00000000cf900000| Untracked
|1274|0x00000000cfa00000, 0x00000000cfa00000, 0x00000000cfb00000| 0%| F| |TAMS 0x00000000cfa00000, 0x00000000cfa00000| Untracked
|1275|0x00000000cfb00000, 0x00000000cfb00000, 0x00000000cfc00000| 0%| F| |TAMS 0x00000000cfb00000, 0x00000000cfb00000| Untracked
|1276|0x00000000cfc00000, 0x00000000cfc00000, 0x00000000cfd00000| 0%| F| |TAMS 0x00000000cfc00000, 0x00000000cfc00000| Untracked
|1277|0x00000000cfd00000, 0x00000000cfd00000, 0x00000000cfe00000| 0%| F| |TAMS 0x00000000cfd00000, 0x00000000cfd00000| Untracked
|1278|0x00000000cfe00000, 0x00000000cfe00000, 0x00000000cff00000| 0%| F| |TAMS 0x00000000cfe00000, 0x00000000cfe00000| Untracked
|1279|0x00000000cff00000, 0x00000000cff00000, 0x00000000d0000000| 0%| F| |TAMS 0x00000000cff00000, 0x00000000cff00000| Untracked
|1280|0x00000000d0000000, 0x00000000d0000000, 0x00000000d0100000| 0%| F| |TAMS 0x00000000d0000000, 0x00000000d0000000| Untracked
|1281|0x00000000d0100000, 0x00000000d0100000, 0x00000000d0200000| 0%| F| |TAMS 0x00000000d0100000, 0x00000000d0100000| Untracked
|1282|0x00000000d0200000, 0x00000000d0200000, 0x00000000d0300000| 0%| F| |TAMS 0x00000000d0200000, 0x00000000d0200000| Untracked
|1283|0x00000000d0300000, 0x00000000d0300000, 0x00000000d0400000| 0%| F| |TAMS 0x00000000d0300000, 0x00000000d0300000| Untracked
|1284|0x00000000d0400000, 0x00000000d0400000, 0x00000000d0500000| 0%| F| |TAMS 0x00000000d0400000, 0x00000000d0400000| Untracked
|1285|0x00000000d0500000, 0x00000000d0500000, 0x00000000d0600000| 0%| F| |TAMS 0x00000000d0500000, 0x00000000d0500000| Untracked
|1286|0x00000000d0600000, 0x00000000d0600000, 0x00000000d0700000| 0%| F| |TAMS 0x00000000d0600000, 0x00000000d0600000| Untracked
|1287|0x00000000d0700000, 0x00000000d0700000, 0x00000000d0800000| 0%| F| |TAMS 0x00000000d0700000, 0x00000000d0700000| Untracked
|1288|0x00000000d0800000, 0x00000000d0800000, 0x00000000d0900000| 0%| F| |TAMS 0x00000000d0800000, 0x00000000d0800000| Untracked
|1289|0x00000000d0900000, 0x00000000d0900000, 0x00000000d0a00000| 0%| F| |TAMS 0x00000000d0900000, 0x00000000d0900000| Untracked
|1290|0x00000000d0a00000, 0x00000000d0a00000, 0x00000000d0b00000| 0%| F| |TAMS 0x00000000d0a00000, 0x00000000d0a00000| Untracked
|1291|0x00000000d0b00000, 0x00000000d0b00000, 0x00000000d0c00000| 0%| F| |TAMS 0x00000000d0b00000, 0x00000000d0b00000| Untracked
|1292|0x00000000d0c00000, 0x00000000d0c00000, 0x00000000d0d00000| 0%| F| |TAMS 0x00000000d0c00000, 0x00000000d0c00000| Untracked
|1293|0x00000000d0d00000, 0x00000000d0d00000, 0x00000000d0e00000| 0%| F| |TAMS 0x00000000d0d00000, 0x00000000d0d00000| Untracked
|1294|0x00000000d0e00000, 0x00000000d0e00000, 0x00000000d0f00000| 0%| F| |TAMS 0x00000000d0e00000, 0x00000000d0e00000| Untracked
|1295|0x00000000d0f00000, 0x00000000d0f00000, 0x00000000d1000000| 0%| F| |TAMS 0x00000000d0f00000, 0x00000000d0f00000| Untracked
|1296|0x00000000d1000000, 0x00000000d1000000, 0x00000000d1100000| 0%| F| |TAMS 0x00000000d1000000, 0x00000000d1000000| Untracked
|1297|0x00000000d1100000, 0x00000000d1100000, 0x00000000d1200000| 0%| F| |TAMS 0x00000000d1100000, 0x00000000d1100000| Untracked
|1298|0x00000000d1200000, 0x00000000d1200000, 0x00000000d1300000| 0%| F| |TAMS 0x00000000d1200000, 0x00000000d1200000| Untracked
|1299|0x00000000d1300000, 0x00000000d1300000, 0x00000000d1400000| 0%| F| |TAMS 0x00000000d1300000, 0x00000000d1300000| Untracked
|1300|0x00000000d1400000, 0x00000000d1400000, 0x00000000d1500000| 0%| F| |TAMS 0x00000000d1400000, 0x00000000d1400000| Untracked
|1301|0x00000000d1500000, 0x00000000d1500000, 0x00000000d1600000| 0%| F| |TAMS 0x00000000d1500000, 0x00000000d1500000| Untracked
|1302|0x00000000d1600000, 0x00000000d1600000, 0x00000000d1700000| 0%| F| |TAMS 0x00000000d1600000, 0x00000000d1600000| Untracked
|1303|0x00000000d1700000, 0x00000000d1700000, 0x00000000d1800000| 0%| F| |TAMS 0x00000000d1700000, 0x00000000d1700000| Untracked
|1304|0x00000000d1800000, 0x00000000d1800000, 0x00000000d1900000| 0%| F| |TAMS 0x00000000d1800000, 0x00000000d1800000| Untracked
|1305|0x00000000d1900000, 0x00000000d1900000, 0x00000000d1a00000| 0%| F| |TAMS 0x00000000d1900000, 0x00000000d1900000| Untracked
|1306|0x00000000d1a00000, 0x00000000d1a00000, 0x00000000d1b00000| 0%| F| |TAMS 0x00000000d1a00000, 0x00000000d1a00000| Untracked
|1307|0x00000000d1b00000, 0x00000000d1b00000, 0x00000000d1c00000| 0%| F| |TAMS 0x00000000d1b00000, 0x00000000d1b00000| Untracked
|1308|0x00000000d1c00000, 0x00000000d1c00000, 0x00000000d1d00000| 0%| F| |TAMS 0x00000000d1c00000, 0x00000000d1c00000| Untracked
|1309|0x00000000d1d00000, 0x00000000d1d00000, 0x00000000d1e00000| 0%| F| |TAMS 0x00000000d1d00000, 0x00000000d1d00000| Untracked
|1310|0x00000000d1e00000, 0x00000000d1e00000, 0x00000000d1f00000| 0%| F| |TAMS 0x00000000d1e00000, 0x00000000d1e00000| Untracked
|1311|0x00000000d1f00000, 0x00000000d1f00000, 0x00000000d2000000| 0%| F| |TAMS 0x00000000d1f00000, 0x00000000d1f00000| Untracked
|1312|0x00000000d2000000, 0x00000000d2000000, 0x00000000d2100000| 0%| F| |TAMS 0x00000000d2000000, 0x00000000d2000000| Untracked
|1313|0x00000000d2100000, 0x00000000d2100000, 0x00000000d2200000| 0%| F| |TAMS 0x00000000d2100000, 0x00000000d2100000| Untracked
|1314|0x00000000d2200000, 0x00000000d2200000, 0x00000000d2300000| 0%| F| |TAMS 0x00000000d2200000, 0x00000000d2200000| Untracked
|1315|0x00000000d2300000, 0x00000000d2300000, 0x00000000d2400000| 0%| F| |TAMS 0x00000000d2300000, 0x00000000d2300000| Untracked
|1316|0x00000000d2400000, 0x00000000d2400000, 0x00000000d2500000| 0%| F| |TAMS 0x00000000d2400000, 0x00000000d2400000| Untracked
|1317|0x00000000d2500000, 0x00000000d2500000, 0x00000000d2600000| 0%| F| |TAMS 0x00000000d2500000, 0x00000000d2500000| Untracked
|1318|0x00000000d2600000, 0x00000000d2600000, 0x00000000d2700000| 0%| F| |TAMS 0x00000000d2600000, 0x00000000d2600000| Untracked
|1319|0x00000000d2700000, 0x00000000d2700000, 0x00000000d2800000| 0%| F| |TAMS 0x00000000d2700000, 0x00000000d2700000| Untracked
|1320|0x00000000d2800000, 0x00000000d2800000, 0x00000000d2900000| 0%| F| |TAMS 0x00000000d2800000, 0x00000000d2800000| Untracked
|1321|0x00000000d2900000, 0x00000000d2900000, 0x00000000d2a00000| 0%| F| |TAMS 0x00000000d2900000, 0x00000000d2900000| Untracked
|1322|0x00000000d2a00000, 0x00000000d2a00000, 0x00000000d2b00000| 0%| F| |TAMS 0x00000000d2a00000, 0x00000000d2a00000| Untracked
|1323|0x00000000d2b00000, 0x00000000d2b00000, 0x00000000d2c00000| 0%| F| |TAMS 0x00000000d2b00000, 0x00000000d2b00000| Untracked
|1324|0x00000000d2c00000, 0x00000000d2c00000, 0x00000000d2d00000| 0%| F| |TAMS 0x00000000d2c00000, 0x00000000d2c00000| Untracked
|1325|0x00000000d2d00000, 0x00000000d2d00000, 0x00000000d2e00000| 0%| F| |TAMS 0x00000000d2d00000, 0x00000000d2d00000| Untracked
|1326|0x00000000d2e00000, 0x00000000d2e00000, 0x00000000d2f00000| 0%| F| |TAMS 0x00000000d2e00000, 0x00000000d2e00000| Untracked
|1327|0x00000000d2f00000, 0x00000000d2f00000, 0x00000000d3000000| 0%| F| |TAMS 0x00000000d2f00000, 0x00000000d2f00000| Untracked
|1328|0x00000000d3000000, 0x00000000d3000000, 0x00000000d3100000| 0%| F| |TAMS 0x00000000d3000000, 0x00000000d3000000| Untracked
|1329|0x00000000d3100000, 0x00000000d3100000, 0x00000000d3200000| 0%| F| |TAMS 0x00000000d3100000, 0x00000000d3100000| Untracked
|1330|0x00000000d3200000, 0x00000000d3200000, 0x00000000d3300000| 0%| F| |TAMS 0x00000000d3200000, 0x00000000d3200000| Untracked
|1331|0x00000000d3300000, 0x00000000d3300000, 0x00000000d3400000| 0%| F| |TAMS 0x00000000d3300000, 0x00000000d3300000| Untracked
|1332|0x00000000d3400000, 0x00000000d3400000, 0x00000000d3500000| 0%| F| |TAMS 0x00000000d3400000, 0x00000000d3400000| Untracked
|1333|0x00000000d3500000, 0x00000000d3500000, 0x00000000d3600000| 0%| F| |TAMS 0x00000000d3500000, 0x00000000d3500000| Untracked
|1334|0x00000000d3600000, 0x00000000d3600000, 0x00000000d3700000| 0%| F| |TAMS 0x00000000d3600000, 0x00000000d3600000| Untracked
|1335|0x00000000d3700000, 0x00000000d3700000, 0x00000000d3800000| 0%| F| |TAMS 0x00000000d3700000, 0x00000000d3700000| Untracked
|1336|0x00000000d3800000, 0x00000000d3800000, 0x00000000d3900000| 0%| F| |TAMS 0x00000000d3800000, 0x00000000d3800000| Untracked
|1337|0x00000000d3900000, 0x00000000d3900000, 0x00000000d3a00000| 0%| F| |TAMS 0x00000000d3900000, 0x00000000d3900000| Untracked
|1338|0x00000000d3a00000, 0x00000000d3a00000, 0x00000000d3b00000| 0%| F| |TAMS 0x00000000d3a00000, 0x00000000d3a00000| Untracked
|1339|0x00000000d3b00000, 0x00000000d3b00000, 0x00000000d3c00000| 0%| F| |TAMS 0x00000000d3b00000, 0x00000000d3b00000| Untracked
|1340|0x00000000d3c00000, 0x00000000d3c00000, 0x00000000d3d00000| 0%| F| |TAMS 0x00000000d3c00000, 0x00000000d3c00000| Untracked
|1341|0x00000000d3d00000, 0x00000000d3d00000, 0x00000000d3e00000| 0%| F| |TAMS 0x00000000d3d00000, 0x00000000d3d00000| Untracked
|1342|0x00000000d3e00000, 0x00000000d3e00000, 0x00000000d3f00000| 0%| F| |TAMS 0x00000000d3e00000, 0x00000000d3e00000| Untracked
|1343|0x00000000d3f00000, 0x00000000d3f00000, 0x00000000d4000000| 0%| F| |TAMS 0x00000000d3f00000, 0x00000000d3f00000| Untracked
|1344|0x00000000d4000000, 0x00000000d4000000, 0x00000000d4100000| 0%| F| |TAMS 0x00000000d4000000, 0x00000000d4000000| Untracked
|1345|0x00000000d4100000, 0x00000000d4100000, 0x00000000d4200000| 0%| F| |TAMS 0x00000000d4100000, 0x00000000d4100000| Untracked
|1346|0x00000000d4200000, 0x00000000d4200000, 0x00000000d4300000| 0%| F| |TAMS 0x00000000d4200000, 0x00000000d4200000| Untracked
|1347|0x00000000d4300000, 0x00000000d4300000, 0x00000000d4400000| 0%| F| |TAMS 0x00000000d4300000, 0x00000000d4300000| Untracked
|1348|0x00000000d4400000, 0x00000000d4400000, 0x00000000d4500000| 0%| F| |TAMS 0x00000000d4400000, 0x00000000d4400000| Untracked
|1349|0x00000000d4500000, 0x00000000d4500000, 0x00000000d4600000| 0%| F| |TAMS 0x00000000d4500000, 0x00000000d4500000| Untracked
|1350|0x00000000d4600000, 0x00000000d4600000, 0x00000000d4700000| 0%| F| |TAMS 0x00000000d4600000, 0x00000000d4600000| Untracked
|1351|0x00000000d4700000, 0x00000000d4700000, 0x00000000d4800000| 0%| F| |TAMS 0x00000000d4700000, 0x00000000d4700000| Untracked
|1352|0x00000000d4800000, 0x00000000d4800000, 0x00000000d4900000| 0%| F| |TAMS 0x00000000d4800000, 0x00000000d4800000| Untracked
|1353|0x00000000d4900000, 0x00000000d4900000, 0x00000000d4a00000| 0%| F| |TAMS 0x00000000d4900000, 0x00000000d4900000| Untracked
|1354|0x00000000d4a00000, 0x00000000d4a00000, 0x00000000d4b00000| 0%| F| |TAMS 0x00000000d4a00000, 0x00000000d4a00000| Untracked
|1355|0x00000000d4b00000, 0x00000000d4b00000, 0x00000000d4c00000| 0%| F| |TAMS 0x00000000d4b00000, 0x00000000d4b00000| Untracked
|1356|0x00000000d4c00000, 0x00000000d4c00000, 0x00000000d4d00000| 0%| F| |TAMS 0x00000000d4c00000, 0x00000000d4c00000| Untracked
|1357|0x00000000d4d00000, 0x00000000d4d00000, 0x00000000d4e00000| 0%| F| |TAMS 0x00000000d4d00000, 0x00000000d4d00000| Untracked
|1358|0x00000000d4e00000, 0x00000000d4e00000, 0x00000000d4f00000| 0%| F| |TAMS 0x00000000d4e00000, 0x00000000d4e00000| Untracked
|1359|0x00000000d4f00000, 0x00000000d4f00000, 0x00000000d5000000| 0%| F| |TAMS 0x00000000d4f00000, 0x00000000d4f00000| Untracked
|1360|0x00000000d5000000, 0x00000000d5000000, 0x00000000d5100000| 0%| F| |TAMS 0x00000000d5000000, 0x00000000d5000000| Untracked
|1361|0x00000000d5100000, 0x00000000d5100000, 0x00000000d5200000| 0%| F| |TAMS 0x00000000d5100000, 0x00000000d5100000| Untracked
|1362|0x00000000d5200000, 0x00000000d5200000, 0x00000000d5300000| 0%| F| |TAMS 0x00000000d5200000, 0x00000000d5200000| Untracked
|1363|0x00000000d5300000, 0x00000000d5300000, 0x00000000d5400000| 0%| F| |TAMS 0x00000000d5300000, 0x00000000d5300000| Untracked
|1364|0x00000000d5400000, 0x00000000d5400000, 0x00000000d5500000| 0%| F| |TAMS 0x00000000d5400000, 0x00000000d5400000| Untracked
|1365|0x00000000d5500000, 0x00000000d5500000, 0x00000000d5600000| 0%| F| |TAMS 0x00000000d5500000, 0x00000000d5500000| Untracked
|1366|0x00000000d5600000, 0x00000000d5600000, 0x00000000d5700000| 0%| F| |TAMS 0x00000000d5600000, 0x00000000d5600000| Untracked
|1367|0x00000000d5700000, 0x00000000d5700000, 0x00000000d5800000| 0%| F| |TAMS 0x00000000d5700000, 0x00000000d5700000| Untracked
|1368|0x00000000d5800000, 0x00000000d5800000, 0x00000000d5900000| 0%| F| |TAMS 0x00000000d5800000, 0x00000000d5800000| Untracked
|1369|0x00000000d5900000, 0x00000000d5900000, 0x00000000d5a00000| 0%| F| |TAMS 0x00000000d5900000, 0x00000000d5900000| Untracked
|1370|0x00000000d5a00000, 0x00000000d5a00000, 0x00000000d5b00000| 0%| F| |TAMS 0x00000000d5a00000, 0x00000000d5a00000| Untracked
|1371|0x00000000d5b00000, 0x00000000d5b00000, 0x00000000d5c00000| 0%| F| |TAMS 0x00000000d5b00000, 0x00000000d5b00000| Untracked
|1372|0x00000000d5c00000, 0x00000000d5c00000, 0x00000000d5d00000| 0%| F| |TAMS 0x00000000d5c00000, 0x00000000d5c00000| Untracked
|1373|0x00000000d5d00000, 0x00000000d5d00000, 0x00000000d5e00000| 0%| F| |TAMS 0x00000000d5d00000, 0x00000000d5d00000| Untracked
|1374|0x00000000d5e00000, 0x00000000d5e00000, 0x00000000d5f00000| 0%| F| |TAMS 0x00000000d5e00000, 0x00000000d5e00000| Untracked
|1375|0x00000000d5f00000, 0x00000000d5f00000, 0x00000000d6000000| 0%| F| |TAMS 0x00000000d5f00000, 0x00000000d5f00000| Untracked
|1376|0x00000000d6000000, 0x00000000d6000000, 0x00000000d6100000| 0%| F| |TAMS 0x00000000d6000000, 0x00000000d6000000| Untracked
|1377|0x00000000d6100000, 0x00000000d6100000, 0x00000000d6200000| 0%| F| |TAMS 0x00000000d6100000, 0x00000000d6100000| Untracked
|1378|0x00000000d6200000, 0x00000000d6200000, 0x00000000d6300000| 0%| F| |TAMS 0x00000000d6200000, 0x00000000d6200000| Untracked
|1379|0x00000000d6300000, 0x00000000d6300000, 0x00000000d6400000| 0%| F| |TAMS 0x00000000d6300000, 0x00000000d6300000| Untracked
|1380|0x00000000d6400000, 0x00000000d6400000, 0x00000000d6500000| 0%| F| |TAMS 0x00000000d6400000, 0x00000000d6400000| Untracked
|1381|0x00000000d6500000, 0x00000000d6500000, 0x00000000d6600000| 0%| F| |TAMS 0x00000000d6500000, 0x00000000d6500000| Untracked
|1382|0x00000000d6600000, 0x00000000d6600000, 0x00000000d6700000| 0%| F| |TAMS 0x00000000d6600000, 0x00000000d6600000| Untracked
|1383|0x00000000d6700000, 0x00000000d6700000, 0x00000000d6800000| 0%| F| |TAMS 0x00000000d6700000, 0x00000000d6700000| Untracked
|1384|0x00000000d6800000, 0x00000000d6800000, 0x00000000d6900000| 0%| F| |TAMS 0x00000000d6800000, 0x00000000d6800000| Untracked
|1385|0x00000000d6900000, 0x00000000d6900000, 0x00000000d6a00000| 0%| F| |TAMS 0x00000000d6900000, 0x00000000d6900000| Untracked
|1386|0x00000000d6a00000, 0x00000000d6a00000, 0x00000000d6b00000| 0%| F| |TAMS 0x00000000d6a00000, 0x00000000d6a00000| Untracked
|1387|0x00000000d6b00000, 0x00000000d6b00000, 0x00000000d6c00000| 0%| F| |TAMS 0x00000000d6b00000, 0x00000000d6b00000| Untracked
|1388|0x00000000d6c00000, 0x00000000d6c00000, 0x00000000d6d00000| 0%| F| |TAMS 0x00000000d6c00000, 0x00000000d6c00000| Untracked
|1389|0x00000000d6d00000, 0x00000000d6d00000, 0x00000000d6e00000| 0%| F| |TAMS 0x00000000d6d00000, 0x00000000d6d00000| Untracked
|1390|0x00000000d6e00000, 0x00000000d6e00000, 0x00000000d6f00000| 0%| F| |TAMS 0x00000000d6e00000, 0x00000000d6e00000| Untracked
|1391|0x00000000d6f00000, 0x00000000d6f00000, 0x00000000d7000000| 0%| F| |TAMS 0x00000000d6f00000, 0x00000000d6f00000| Untracked
|1392|0x00000000d7000000, 0x00000000d7000000, 0x00000000d7100000| 0%| F| |TAMS 0x00000000d7000000, 0x00000000d7000000| Untracked
|1393|0x00000000d7100000, 0x00000000d7100000, 0x00000000d7200000| 0%| F| |TAMS 0x00000000d7100000, 0x00000000d7100000| Untracked
|1394|0x00000000d7200000, 0x00000000d7200000, 0x00000000d7300000| 0%| F| |TAMS 0x00000000d7200000, 0x00000000d7200000| Untracked
|1395|0x00000000d7300000, 0x00000000d7300000, 0x00000000d7400000| 0%| F| |TAMS 0x00000000d7300000, 0x00000000d7300000| Untracked
|1396|0x00000000d7400000, 0x00000000d7400000, 0x00000000d7500000| 0%| F| |TAMS 0x00000000d7400000, 0x00000000d7400000| Untracked
|1397|0x00000000d7500000, 0x00000000d7500000, 0x00000000d7600000| 0%| F| |TAMS 0x00000000d7500000, 0x00000000d7500000| Untracked
|1398|0x00000000d7600000, 0x00000000d7600000, 0x00000000d7700000| 0%| F| |TAMS 0x00000000d7600000, 0x00000000d7600000| Untracked
|1399|0x00000000d7700000, 0x00000000d7700000, 0x00000000d7800000| 0%| F| |TAMS 0x00000000d7700000, 0x00000000d7700000| Untracked
|1400|0x00000000d7800000, 0x00000000d7800000, 0x00000000d7900000| 0%| F| |TAMS 0x00000000d7800000, 0x00000000d7800000| Untracked
|1401|0x00000000d7900000, 0x00000000d7900000, 0x00000000d7a00000| 0%| F| |TAMS 0x00000000d7900000, 0x00000000d7900000| Untracked
|1402|0x00000000d7a00000, 0x00000000d7a00000, 0x00000000d7b00000| 0%| F| |TAMS 0x00000000d7a00000, 0x00000000d7a00000| Untracked
|1403|0x00000000d7b00000, 0x00000000d7b00000, 0x00000000d7c00000| 0%| F| |TAMS 0x00000000d7b00000, 0x00000000d7b00000| Untracked
|1404|0x00000000d7c00000, 0x00000000d7c00000, 0x00000000d7d00000| 0%| F| |TAMS 0x00000000d7c00000, 0x00000000d7c00000| Untracked
|1405|0x00000000d7d00000, 0x00000000d7d00000, 0x00000000d7e00000| 0%| F| |TAMS 0x00000000d7d00000, 0x00000000d7d00000| Untracked
|1406|0x00000000d7e00000, 0x00000000d7e00000, 0x00000000d7f00000| 0%| F| |TAMS 0x00000000d7e00000, 0x00000000d7e00000| Untracked
|1407|0x00000000d7f00000, 0x00000000d7f00000, 0x00000000d8000000| 0%| F| |TAMS 0x00000000d7f00000, 0x00000000d7f00000| Untracked
|1408|0x00000000d8000000, 0x00000000d8000000, 0x00000000d8100000| 0%| F| |TAMS 0x00000000d8000000, 0x00000000d8000000| Untracked
|1409|0x00000000d8100000, 0x00000000d8100000, 0x00000000d8200000| 0%| F| |TAMS 0x00000000d8100000, 0x00000000d8100000| Untracked
|1410|0x00000000d8200000, 0x00000000d8200000, 0x00000000d8300000| 0%| F| |TAMS 0x00000000d8200000, 0x00000000d8200000| Untracked
|1411|0x00000000d8300000, 0x00000000d8300000, 0x00000000d8400000| 0%| F| |TAMS 0x00000000d8300000, 0x00000000d8300000| Untracked
|1412|0x00000000d8400000, 0x00000000d8400000, 0x00000000d8500000| 0%| F| |TAMS 0x00000000d8400000, 0x00000000d8400000| Untracked
|1413|0x00000000d8500000, 0x00000000d8500000, 0x00000000d8600000| 0%| F| |TAMS 0x00000000d8500000, 0x00000000d8500000| Untracked
|1414|0x00000000d8600000, 0x00000000d8600000, 0x00000000d8700000| 0%| F| |TAMS 0x00000000d8600000, 0x00000000d8600000| Untracked
|1415|0x00000000d8700000, 0x00000000d8700000, 0x00000000d8800000| 0%| F| |TAMS 0x00000000d8700000, 0x00000000d8700000| Untracked
|1416|0x00000000d8800000, 0x00000000d8800000, 0x00000000d8900000| 0%| F| |TAMS 0x00000000d8800000, 0x00000000d8800000| Untracked
|1417|0x00000000d8900000, 0x00000000d8900000, 0x00000000d8a00000| 0%| F| |TAMS 0x00000000d8900000, 0x00000000d8900000| Untracked
|1418|0x00000000d8a00000, 0x00000000d8a00000, 0x00000000d8b00000| 0%| F| |TAMS 0x00000000d8a00000, 0x00000000d8a00000| Untracked
|1419|0x00000000d8b00000, 0x00000000d8b00000, 0x00000000d8c00000| 0%| F| |TAMS 0x00000000d8b00000, 0x00000000d8b00000| Untracked
|1420|0x00000000d8c00000, 0x00000000d8c00000, 0x00000000d8d00000| 0%| F| |TAMS 0x00000000d8c00000, 0x00000000d8c00000| Untracked
|1421|0x00000000d8d00000, 0x00000000d8d00000, 0x00000000d8e00000| 0%| F| |TAMS 0x00000000d8d00000, 0x00000000d8d00000| Untracked
|1422|0x00000000d8e00000, 0x00000000d8e00000, 0x00000000d8f00000| 0%| F| |TAMS 0x00000000d8e00000, 0x00000000d8e00000| Untracked
|1423|0x00000000d8f00000, 0x00000000d8f00000, 0x00000000d9000000| 0%| F| |TAMS 0x00000000d8f00000, 0x00000000d8f00000| Untracked
|1424|0x00000000d9000000, 0x00000000d9000000, 0x00000000d9100000| 0%| F| |TAMS 0x00000000d9000000, 0x00000000d9000000| Untracked
|1425|0x00000000d9100000, 0x00000000d9100000, 0x00000000d9200000| 0%| F| |TAMS 0x00000000d9100000, 0x00000000d9100000| Untracked
|1426|0x00000000d9200000, 0x00000000d9200000, 0x00000000d9300000| 0%| F| |TAMS 0x00000000d9200000, 0x00000000d9200000| Untracked
|1427|0x00000000d9300000, 0x00000000d9300000, 0x00000000d9400000| 0%| F| |TAMS 0x00000000d9300000, 0x00000000d9300000| Untracked
|1428|0x00000000d9400000, 0x00000000d9400000, 0x00000000d9500000| 0%| F| |TAMS 0x00000000d9400000, 0x00000000d9400000| Untracked
|1429|0x00000000d9500000, 0x00000000d9500000, 0x00000000d9600000| 0%| F| |TAMS 0x00000000d9500000, 0x00000000d9500000| Untracked
|1430|0x00000000d9600000, 0x00000000d9600000, 0x00000000d9700000| 0%| F| |TAMS 0x00000000d9600000, 0x00000000d9600000| Untracked
|1431|0x00000000d9700000, 0x00000000d9700000, 0x00000000d9800000| 0%| F| |TAMS 0x00000000d9700000, 0x00000000d9700000| Untracked
|1432|0x00000000d9800000, 0x00000000d9800000, 0x00000000d9900000| 0%| F| |TAMS 0x00000000d9800000, 0x00000000d9800000| Untracked
|1433|0x00000000d9900000, 0x00000000d9900000, 0x00000000d9a00000| 0%| F| |TAMS 0x00000000d9900000, 0x00000000d9900000| Untracked
|1434|0x00000000d9a00000, 0x00000000d9a00000, 0x00000000d9b00000| 0%| F| |TAMS 0x00000000d9a00000, 0x00000000d9a00000| Untracked
|1435|0x00000000d9b00000, 0x00000000d9b00000, 0x00000000d9c00000| 0%| F| |TAMS 0x00000000d9b00000, 0x00000000d9b00000| Untracked
|1436|0x00000000d9c00000, 0x00000000d9c00000, 0x00000000d9d00000| 0%| F| |TAMS 0x00000000d9c00000, 0x00000000d9c00000| Untracked
|1437|0x00000000d9d00000, 0x00000000d9d00000, 0x00000000d9e00000| 0%| F| |TAMS 0x00000000d9d00000, 0x00000000d9d00000| Untracked
|1438|0x00000000d9e00000, 0x00000000d9e00000, 0x00000000d9f00000| 0%| F| |TAMS 0x00000000d9e00000, 0x00000000d9e00000| Untracked
|1439|0x00000000d9f00000, 0x00000000d9f00000, 0x00000000da000000| 0%| F| |TAMS 0x00000000d9f00000, 0x00000000d9f00000| Untracked
|1440|0x00000000da000000, 0x00000000da000000, 0x00000000da100000| 0%| F| |TAMS 0x00000000da000000, 0x00000000da000000| Untracked
|1441|0x00000000da100000, 0x00000000da100000, 0x00000000da200000| 0%| F| |TAMS 0x00000000da100000, 0x00000000da100000| Untracked
|1442|0x00000000da200000, 0x00000000da200000, 0x00000000da300000| 0%| F| |TAMS 0x00000000da200000, 0x00000000da200000| Untracked
|1443|0x00000000da300000, 0x00000000da300000, 0x00000000da400000| 0%| F| |TAMS 0x00000000da300000, 0x00000000da300000| Untracked
|1444|0x00000000da400000, 0x00000000da400000, 0x00000000da500000| 0%| F| |TAMS 0x00000000da400000, 0x00000000da400000| Untracked
|1445|0x00000000da500000, 0x00000000da500000, 0x00000000da600000| 0%| F| |TAMS 0x00000000da500000, 0x00000000da500000| Untracked
|1446|0x00000000da600000, 0x00000000da600000, 0x00000000da700000| 0%| F| |TAMS 0x00000000da600000, 0x00000000da600000| Untracked
|1447|0x00000000da700000, 0x00000000da700000, 0x00000000da800000| 0%| F| |TAMS 0x00000000da700000, 0x00000000da700000| Untracked
|1448|0x00000000da800000, 0x00000000da800000, 0x00000000da900000| 0%| F| |TAMS 0x00000000da800000, 0x00000000da800000| Untracked
|1449|0x00000000da900000, 0x00000000da900000, 0x00000000daa00000| 0%| F| |TAMS 0x00000000da900000, 0x00000000da900000| Untracked
|1450|0x00000000daa00000, 0x00000000daa00000, 0x00000000dab00000| 0%| F| |TAMS 0x00000000daa00000, 0x00000000daa00000| Untracked
|1451|0x00000000dab00000, 0x00000000dab00000, 0x00000000dac00000| 0%| F| |TAMS 0x00000000dab00000, 0x00000000dab00000| Untracked
|1452|0x00000000dac00000, 0x00000000dac00000, 0x00000000dad00000| 0%| F| |TAMS 0x00000000dac00000, 0x00000000dac00000| Untracked
|1453|0x00000000dad00000, 0x00000000dad00000, 0x00000000dae00000| 0%| F| |TAMS 0x00000000dad00000, 0x00000000dad00000| Untracked
|1454|0x00000000dae00000, 0x00000000dae00000, 0x00000000daf00000| 0%| F| |TAMS 0x00000000dae00000, 0x00000000dae00000| Untracked
|1455|0x00000000daf00000, 0x00000000daf00000, 0x00000000db000000| 0%| F| |TAMS 0x00000000daf00000, 0x00000000daf00000| Untracked
|1456|0x00000000db000000, 0x00000000db000000, 0x00000000db100000| 0%| F| |TAMS 0x00000000db000000, 0x00000000db000000| Untracked
|1457|0x00000000db100000, 0x00000000db100000, 0x00000000db200000| 0%| F| |TAMS 0x00000000db100000, 0x00000000db100000| Untracked
|1458|0x00000000db200000, 0x00000000db200000, 0x00000000db300000| 0%| F| |TAMS 0x00000000db200000, 0x00000000db200000| Untracked
|1459|0x00000000db300000, 0x00000000db300000, 0x00000000db400000| 0%| F| |TAMS 0x00000000db300000, 0x00000000db300000| Untracked
|1460|0x00000000db400000, 0x00000000db400000, 0x00000000db500000| 0%| F| |TAMS 0x00000000db400000, 0x00000000db400000| Untracked
|1461|0x00000000db500000, 0x00000000db500000, 0x00000000db600000| 0%| F| |TAMS 0x00000000db500000, 0x00000000db500000| Untracked
|1462|0x00000000db600000, 0x00000000db600000, 0x00000000db700000| 0%| F| |TAMS 0x00000000db600000, 0x00000000db600000| Untracked
|1463|0x00000000db700000, 0x00000000db700000, 0x00000000db800000| 0%| F| |TAMS 0x00000000db700000, 0x00000000db700000| Untracked
|1464|0x00000000db800000, 0x00000000db900000, 0x00000000db900000|100%| E| |TAMS 0x00000000db800000, 0x00000000db800000| Complete
|1465|0x00000000db900000, 0x00000000dba00000, 0x00000000dba00000|100%| E|CS|TAMS 0x00000000db900000, 0x00000000db900000| Complete
|1466|0x00000000dba00000, 0x00000000dbb00000, 0x00000000dbb00000|100%| E|CS|TAMS 0x00000000dba00000, 0x00000000dba00000| Complete
|1467|0x00000000dbb00000, 0x00000000dbc00000, 0x00000000dbc00000|100%| E|CS|TAMS 0x00000000dbb00000, 0x00000000dbb00000| Complete
|1468|0x00000000dbc00000, 0x00000000dbd00000, 0x00000000dbd00000|100%| E|CS|TAMS 0x00000000dbc00000, 0x00000000dbc00000| Complete
|1469|0x00000000dbd00000, 0x00000000dbe00000, 0x00000000dbe00000|100%| E|CS|TAMS 0x00000000dbd00000, 0x00000000dbd00000| Complete
|1470|0x00000000dbe00000, 0x00000000dbf00000, 0x00000000dbf00000|100%| E|CS|TAMS 0x00000000dbe00000, 0x00000000dbe00000| Complete
|1471|0x00000000dbf00000, 0x00000000dc000000, 0x00000000dc000000|100%| E|CS|TAMS 0x00000000dbf00000, 0x00000000dbf00000| Complete
|1472|0x00000000dc000000, 0x00000000dc100000, 0x00000000dc100000|100%| E|CS|TAMS 0x00000000dc000000, 0x00000000dc000000| Complete
|1473|0x00000000dc100000, 0x00000000dc200000, 0x00000000dc200000|100%| E|CS|TAMS 0x00000000dc100000, 0x00000000dc100000| Complete
|1474|0x00000000dc200000, 0x00000000dc300000, 0x00000000dc300000|100%| E|CS|TAMS 0x00000000dc200000, 0x00000000dc200000| Complete
|1475|0x00000000dc300000, 0x00000000dc400000, 0x00000000dc400000|100%| E|CS|TAMS 0x00000000dc300000, 0x00000000dc300000| Complete
|1476|0x00000000dc400000, 0x00000000dc500000, 0x00000000dc500000|100%| E|CS|TAMS 0x00000000dc400000, 0x00000000dc400000| Complete
|1477|0x00000000dc500000, 0x00000000dc600000, 0x00000000dc600000|100%| E|CS|TAMS 0x00000000dc500000, 0x00000000dc500000| Complete
|1478|0x00000000dc600000, 0x00000000dc700000, 0x00000000dc700000|100%| E|CS|TAMS 0x00000000dc600000, 0x00000000dc600000| Complete
|1479|0x00000000dc700000, 0x00000000dc800000, 0x00000000dc800000|100%| E|CS|TAMS 0x00000000dc700000, 0x00000000dc700000| Complete
|1480|0x00000000dc800000, 0x00000000dc900000, 0x00000000dc900000|100%| E|CS|TAMS 0x00000000dc800000, 0x00000000dc800000| Complete
|1481|0x00000000dc900000, 0x00000000dca00000, 0x00000000dca00000|100%| E|CS|TAMS 0x00000000dc900000, 0x00000000dc900000| Complete
|1482|0x00000000dca00000, 0x00000000dcb00000, 0x00000000dcb00000|100%| E|CS|TAMS 0x00000000dca00000, 0x00000000dca00000| Complete
|1483|0x00000000dcb00000, 0x00000000dcc00000, 0x00000000dcc00000|100%| E|CS|TAMS 0x00000000dcb00000, 0x00000000dcb00000| Complete
|1484|0x00000000dcc00000, 0x00000000dcd00000, 0x00000000dcd00000|100%| E|CS|TAMS 0x00000000dcc00000, 0x00000000dcc00000| Complete
|1485|0x00000000dcd00000, 0x00000000dce00000, 0x00000000dce00000|100%| E|CS|TAMS 0x00000000dcd00000, 0x00000000dcd00000| Complete
|1486|0x00000000dce00000, 0x00000000dcf00000, 0x00000000dcf00000|100%| E|CS|TAMS 0x00000000dce00000, 0x00000000dce00000| Complete
|1487|0x00000000dcf00000, 0x00000000dd000000, 0x00000000dd000000|100%| E|CS|TAMS 0x00000000dcf00000, 0x00000000dcf00000| Complete
|1488|0x00000000dd000000, 0x00000000dd100000, 0x00000000dd100000|100%| E|CS|TAMS 0x00000000dd000000, 0x00000000dd000000| Complete
|1489|0x00000000dd100000, 0x00000000dd200000, 0x00000000dd200000|100%| E|CS|TAMS 0x00000000dd100000, 0x00000000dd100000| Complete
|1490|0x00000000dd200000, 0x00000000dd300000, 0x00000000dd300000|100%| E|CS|TAMS 0x00000000dd200000, 0x00000000dd200000| Complete
|1491|0x00000000dd300000, 0x00000000dd400000, 0x00000000dd400000|100%| E|CS|TAMS 0x00000000dd300000, 0x00000000dd300000| Complete
|1492|0x00000000dd400000, 0x00000000dd500000, 0x00000000dd500000|100%| E|CS|TAMS 0x00000000dd400000, 0x00000000dd400000| Complete
|1493|0x00000000dd500000, 0x00000000dd600000, 0x00000000dd600000|100%| E|CS|TAMS 0x00000000dd500000, 0x00000000dd500000| Complete
|1494|0x00000000dd600000, 0x00000000dd700000, 0x00000000dd700000|100%| E|CS|TAMS 0x00000000dd600000, 0x00000000dd600000| Complete
|1495|0x00000000dd700000, 0x00000000dd800000, 0x00000000dd800000|100%| E|CS|TAMS 0x00000000dd700000, 0x00000000dd700000| Complete
|1496|0x00000000dd800000, 0x00000000dd900000, 0x00000000dd900000|100%| E|CS|TAMS 0x00000000dd800000, 0x00000000dd800000| Complete
|1497|0x00000000dd900000, 0x00000000dda00000, 0x00000000dda00000|100%| E|CS|TAMS 0x00000000dd900000, 0x00000000dd900000| Complete
|1498|0x00000000dda00000, 0x00000000ddb00000, 0x00000000ddb00000|100%| E|CS|TAMS 0x00000000dda00000, 0x00000000dda00000| Complete
|1499|0x00000000ddb00000, 0x00000000ddc00000, 0x00000000ddc00000|100%| E|CS|TAMS 0x00000000ddb00000, 0x00000000ddb00000| Complete
|1500|0x00000000ddc00000, 0x00000000ddd00000, 0x00000000ddd00000|100%| E|CS|TAMS 0x00000000ddc00000, 0x00000000ddc00000| Complete
|1501|0x00000000ddd00000, 0x00000000dde00000, 0x00000000dde00000|100%| E|CS|TAMS 0x00000000ddd00000, 0x00000000ddd00000| Complete
|1502|0x00000000dde00000, 0x00000000ddf00000, 0x00000000ddf00000|100%| E|CS|TAMS 0x00000000dde00000, 0x00000000dde00000| Complete
|1503|0x00000000ddf00000, 0x00000000de000000, 0x00000000de000000|100%| E|CS|TAMS 0x00000000ddf00000, 0x00000000ddf00000| Complete
|1504|0x00000000de000000, 0x00000000de100000, 0x00000000de100000|100%| E|CS|TAMS 0x00000000de000000, 0x00000000de000000| Complete
|1505|0x00000000de100000, 0x00000000de200000, 0x00000000de200000|100%| E|CS|TAMS 0x00000000de100000, 0x00000000de100000| Complete
|1506|0x00000000de200000, 0x00000000de300000, 0x00000000de300000|100%| E|CS|TAMS 0x00000000de200000, 0x00000000de200000| Complete
|1507|0x00000000de300000, 0x00000000de400000, 0x00000000de400000|100%| E|CS|TAMS 0x00000000de300000, 0x00000000de300000| Complete
|1508|0x00000000de400000, 0x00000000de500000, 0x00000000de500000|100%| E|CS|TAMS 0x00000000de400000, 0x00000000de400000| Complete
|1509|0x00000000de500000, 0x00000000de600000, 0x00000000de600000|100%| E|CS|TAMS 0x00000000de500000, 0x00000000de500000| Complete
|1510|0x00000000de600000, 0x00000000de700000, 0x00000000de700000|100%| E|CS|TAMS 0x00000000de600000, 0x00000000de600000| Complete
|1511|0x00000000de700000, 0x00000000de800000, 0x00000000de800000|100%| E|CS|TAMS 0x00000000de700000, 0x00000000de700000| Complete
|1512|0x00000000de800000, 0x00000000de900000, 0x00000000de900000|100%| E|CS|TAMS 0x00000000de800000, 0x00000000de800000| Complete
|1513|0x00000000de900000, 0x00000000dea00000, 0x00000000dea00000|100%| E|CS|TAMS 0x00000000de900000, 0x00000000de900000| Complete
|1514|0x00000000dea00000, 0x00000000deb00000, 0x00000000deb00000|100%| E|CS|TAMS 0x00000000dea00000, 0x00000000dea00000| Complete
|1515|0x00000000deb00000, 0x00000000dec00000, 0x00000000dec00000|100%| E|CS|TAMS 0x00000000deb00000, 0x00000000deb00000| Complete
|1516|0x00000000dec00000, 0x00000000ded00000, 0x00000000ded00000|100%| E|CS|TAMS 0x00000000dec00000, 0x00000000dec00000| Complete
|1517|0x00000000ded00000, 0x00000000dee00000, 0x00000000dee00000|100%| E|CS|TAMS 0x00000000ded00000, 0x00000000ded00000| Complete
|1518|0x00000000dee00000, 0x00000000def00000, 0x00000000def00000|100%| E|CS|TAMS 0x00000000dee00000, 0x00000000dee00000| Complete
|1519|0x00000000def00000, 0x00000000df000000, 0x00000000df000000|100%| E|CS|TAMS 0x00000000def00000, 0x00000000def00000| Complete
|1520|0x00000000df000000, 0x00000000df100000, 0x00000000df100000|100%| E|CS|TAMS 0x00000000df000000, 0x00000000df000000| Complete
|1521|0x00000000df100000, 0x00000000df200000, 0x00000000df200000|100%| E|CS|TAMS 0x00000000df100000, 0x00000000df100000| Complete
|1522|0x00000000df200000, 0x00000000df300000, 0x00000000df300000|100%| E|CS|TAMS 0x00000000df200000, 0x00000000df200000| Complete
|1523|0x00000000df300000, 0x00000000df400000, 0x00000000df400000|100%| E|CS|TAMS 0x00000000df300000, 0x00000000df300000| Complete
|1524|0x00000000df400000, 0x00000000df500000, 0x00000000df500000|100%| E|CS|TAMS 0x00000000df400000, 0x00000000df400000| Complete
|1525|0x00000000df500000, 0x00000000df600000, 0x00000000df600000|100%| E|CS|TAMS 0x00000000df500000, 0x00000000df500000| Complete
|1526|0x00000000df600000, 0x00000000df700000, 0x00000000df700000|100%| E|CS|TAMS 0x00000000df600000, 0x00000000df600000| Complete
|1527|0x00000000df700000, 0x00000000df800000, 0x00000000df800000|100%| E|CS|TAMS 0x00000000df700000, 0x00000000df700000| Complete
|1528|0x00000000df800000, 0x00000000df900000, 0x00000000df900000|100%| E|CS|TAMS 0x00000000df800000, 0x00000000df800000| Complete
|1529|0x00000000df900000, 0x00000000dfa00000, 0x00000000dfa00000|100%| E|CS|TAMS 0x00000000df900000, 0x00000000df900000| Complete
|1530|0x00000000dfa00000, 0x00000000dfb00000, 0x00000000dfb00000|100%| E|CS|TAMS 0x00000000dfa00000, 0x00000000dfa00000| Complete
|1531|0x00000000dfb00000, 0x00000000dfc00000, 0x00000000dfc00000|100%| E|CS|TAMS 0x00000000dfb00000, 0x00000000dfb00000| Complete
|1532|0x00000000dfc00000, 0x00000000dfd00000, 0x00000000dfd00000|100%| E|CS|TAMS 0x00000000dfc00000, 0x00000000dfc00000| Complete
|1533|0x00000000dfd00000, 0x00000000dfe00000, 0x00000000dfe00000|100%| E| |TAMS 0x00000000dfd00000, 0x00000000dfd00000| Complete
|1534|0x00000000dfe00000, 0x00000000dff00000, 0x00000000dff00000|100%| E|CS|TAMS 0x00000000dfe00000, 0x00000000dfe00000| Complete

Card table byte_map: [0x0000028432470000,0x0000028432870000] \_byte_map_base: 0x0000028432070000

Marking Bits (Prev, Next): (CMBitMap*) 0x000002841b27d490, (CMBitMap*) 0x000002841b27d4d0
Prev Bits: [0x0000028432c70000, 0x0000028434c70000)
Next Bits: [0x0000028434c70000, 0x0000028436c70000)

Polling page: 0x000002841a9c0000

Metaspace:

Usage:
Non-class: 216.94 MB used.
Class: 30.63 MB used.
Both: 247.56 MB used.

Virtual space:
Non-class space: 256.00 MB reserved, 218.75 MB ( 85%) committed, 4 nodes.
Class space: 416.00 MB reserved, 32.06 MB ( 8%) committed, 1 nodes.
Both: 672.00 MB reserved, 250.81 MB ( 37%) committed.

Chunk freelists:
Non-Class: 4.88 MB
Class: 15.88 MB
Both: 20.75 MB

MaxMetaspaceSize: 512.00 MB
CompressedClassSpaceSize: 416.00 MB
Initial GC threshold: 21.00 MB
Current GC threshold: 375.25 MB
CDS: on
MetaspaceReclaimPolicy: balanced

- commit_granule_bytes: 65536.
- commit_granule_words: 8192.
- virtual_space_node_default_size: 8388608.
- enlarge_chunks_in_place: 1.
- new_chunks_are_fully_committed: 0.
- uncommit_free_chunks: 1.
- use_allocation_guard: 0.
- handle_deallocations: 1.

Internal statistics:

num_allocs_failed_limit: 12.
num_arena_births: 4540.
num_arena_deaths: 130.
num_vsnodes_births: 5.
num_vsnodes_deaths: 0.
num_space_committed: 4011.
num_space_uncommitted: 2.
num_chunks_returned_to_freelist: 378.
num_chunks_taken_from_freelist: 16362.
num_chunk_merges: 50.
num_chunk_splits: 10621.
num_chunks_enlarged: 6852.
num_inconsistent_stats: 0.

CodeHeap 'non-profiled nmethods': size=120000Kb used=52456Kb max_used=52456Kb free=67543Kb
bounds [0x000002842a810000, 0x000002842db50000, 0x0000028431d40000]
CodeHeap 'profiled nmethods': size=120000Kb used=89387Kb max_used=89387Kb free=30613Kb
bounds [0x0000028422d40000, 0x00000284284a0000, 0x000002842a270000]
CodeHeap 'non-nmethods': size=5760Kb used=2725Kb max_used=2869Kb free=3034Kb
bounds [0x000002842a270000, 0x000002842a550000, 0x000002842a810000]
total_blobs=45028 nmethods=43717 adapters=1220
compilation: enabled
stopped_count=0, restarted_count=0
full_count=0

Compilation events (20 events):
Event: 887.349 Thread 0x00000284396c7f70 58389 % 2 org.jetbrains.org.objectweb.asm.ClassReader::accept @ 1321 (1381 bytes)
Event: 887.361 Thread 0x00000284396c7f70 nmethod 58389% 0x0000028428459c90 code [0x000002842845a4a0, 0x000002842845e2b8]
Event: 887.388 Thread 0x00000284396c7f70 58391 3 org.jetbrains.kotlin.gradle.internal.kapt.incremental.AnnotationTypeExtractorVisitor::visitEnum (42 bytes)
Event: 887.389 Thread 0x00000284396c7f70 nmethod 58391 0x0000028428460d90 code [0x0000028428460fc0, 0x00000284284616a8]
Event: 887.440 Thread 0x00000284396c7f70 58393 % 3 org.jetbrains.kotlin.gradle.internal.kapt.incremental.ClasspathEntryData::writeObject @ 343 (1063 bytes)
Event: 887.456 Thread 0x00000284396c7f70 nmethod 58393% 0x0000028428461990 code [0x0000028428462920, 0x000002842846df28]
Event: 887.472 Thread 0x00000284396c7f70 58394 % 3 org.jetbrains.kotlin.gradle.internal.kapt.incremental.ClasspathEntryData::writeObject @ 65 (1063 bytes)
Event: 887.484 Thread 0x00000284396c7f70 nmethod 58394% 0x0000028428471490 code [0x0000028428472420, 0x000002842847d828]
Event: 887.485 Thread 0x00000284396c7f70 58396 3 org.jetbrains.kotlin.gradle.internal.kapt.incremental.ClasspathEntryData::writeObject (1063 bytes)
Event: 887.498 Thread 0x00000284396c7f70 nmethod 58396 0x0000028428480d10 code [0x0000028428481c00, 0x000002842848c5b8]
Event: 887.568 Thread 0x00000284396c7f70 58399 2 org.jetbrains.kotlin.gradle.internal.kapt.incremental.AnnotationTypeExtractorVisitor::visitAnnotation (39 bytes)
Event: 887.568 Thread 0x00000284396c7f70 nmethod 58399 0x000002842848f990 code [0x000002842848fb60, 0x000002842848fde8]
Event: 887.672 Thread 0x00000284396c7f70 58400 3 org.jetbrains.org.objectweb.asm.ClassWriter::visitOuterClass (37 bytes)
Event: 887.672 Thread 0x00000284396c7f70 nmethod 58400 0x0000028428490010 code [0x00000284284901c0, 0x0000028428490458]
Event: 887.759 Thread 0x00000284396c7f70 58401 2 org.jetbrains.org.objectweb.asm.Type::getClassName (173 bytes)
Event: 887.762 Thread 0x00000284396c7f70 nmethod 58401 0x0000028428490610 code [0x00000284284908e0, 0x0000028428491268]
Event: 887.904 Thread 0x00000284396c7f70 58403 2 java.io.ObjectOutputStream$BlockDataOutputStream::write (9 bytes)
Event: 887.904 Thread 0x00000284396c7f70 nmethod 58403 0x0000028428491710 code [0x00000284284918a0, 0x00000284284919c8]
Event: 887.936 Thread 0x00000284396c4a00 nmethod 58381 0x000002842db2dd90 code [0x000002842db2e480, 0x000002842db39c00]
Event: 887.937 Thread 0x00000284396c4a00 58387 4 org.jetbrains.org.objectweb.asm.ClassReader::readMethod (1061 bytes)

GC Heap History (20 events):
Event: 669.580 GC heap before
{Heap before GC invocations=465 (full 0):
garbage-first heap total 1571840K, used 1375809K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 458 young (468992K), 20 survivors (20480K)
Metaspace used 244863K, committed 247744K, reserved 688128K
class space used 30673K, committed 31936K, reserved 425984K
}
Event: 669.606 GC heap after
{Heap after GC invocations=466 (full 0):
garbage-first heap total 1571840K, used 920641K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 23 young (23552K), 23 survivors (23552K)
Metaspace used 244863K, committed 247744K, reserved 688128K
class space used 30673K, committed 31936K, reserved 425984K
}
Event: 691.642 GC heap before
{Heap before GC invocations=466 (full 0):
garbage-first heap total 1571840K, used 1385537K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 466 young (477184K), 23 survivors (23552K)
Metaspace used 245882K, committed 248768K, reserved 688128K
class space used 30740K, committed 32000K, reserved 425984K
}
Event: 691.712 GC heap after
{Heap after GC invocations=467 (full 0):
garbage-first heap total 1571840K, used 925761K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 26 young (26624K), 26 survivors (26624K)
Metaspace used 245882K, committed 248768K, reserved 688128K
class space used 30740K, committed 32000K, reserved 425984K
}
Event: 715.729 GC heap before
{Heap before GC invocations=467 (full 0):
garbage-first heap total 1571840K, used 1384513K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 465 young (476160K), 26 survivors (26624K)
Metaspace used 246385K, committed 249344K, reserved 688128K
class space used 30772K, committed 32064K, reserved 425984K
}
Event: 715.787 GC heap after
{Heap after GC invocations=468 (full 0):
garbage-first heap total 1571840K, used 925339K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 26 young (26624K), 26 survivors (26624K)
Metaspace used 246385K, committed 249344K, reserved 688128K
class space used 30772K, committed 32064K, reserved 425984K
}
Event: 738.053 GC heap before
{Heap before GC invocations=468 (full 0):
garbage-first heap total 1571840K, used 1377947K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 467 young (478208K), 26 survivors (26624K)
Metaspace used 246719K, committed 249664K, reserved 688128K
class space used 30798K, committed 32128K, reserved 425984K
}
Event: 738.198 GC heap after
{Heap after GC invocations=469 (full 0):
garbage-first heap total 1571840K, used 924225K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 26 young (26624K), 26 survivors (26624K)
Metaspace used 246719K, committed 249664K, reserved 688128K
class space used 30798K, committed 32128K, reserved 425984K
}
Event: 775.910 GC heap before
{Heap before GC invocations=469 (full 0):
garbage-first heap total 1571840K, used 1391169K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 471 young (482304K), 26 survivors (26624K)
Metaspace used 247648K, committed 250688K, reserved 688128K
class space used 30841K, committed 32192K, reserved 425984K
}
Event: 775.971 GC heap after
{Heap after GC invocations=470 (full 0):
garbage-first heap total 1571840K, used 927979K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 28 young (28672K), 28 survivors (28672K)
Metaspace used 247648K, committed 250688K, reserved 688128K
class space used 30841K, committed 32192K, reserved 425984K
}
Event: 802.726 GC heap before
{Heap before GC invocations=470 (full 0):
garbage-first heap total 1571840K, used 1399019K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 471 young (482304K), 28 survivors (28672K)
Metaspace used 249124K, committed 252224K, reserved 688128K
class space used 31006K, committed 32384K, reserved 425984K
}
Event: 802.870 GC heap after
{Heap after GC invocations=471 (full 0):
garbage-first heap total 1571840K, used 940609K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 38 young (38912K), 38 survivors (38912K)
Metaspace used 249124K, committed 252224K, reserved 688128K
class space used 31006K, committed 32384K, reserved 425984K
}
Event: 836.803 GC heap before
{Heap before GC invocations=471 (full 0):
garbage-first heap total 1571840K, used 1416769K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 462 young (473088K), 38 survivors (38912K)
Metaspace used 251133K, committed 254336K, reserved 688128K
class space used 31178K, committed 32640K, reserved 425984K
}
Event: 837.148 GC heap after
{Heap after GC invocations=472 (full 0):
garbage-first heap total 1571840K, used 955682K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 35 young (35840K), 35 survivors (35840K)
Metaspace used 251133K, committed 254336K, reserved 688128K
class space used 31178K, committed 32640K, reserved 425984K
}
Event: 847.557 GC heap before
{Heap before GC invocations=472 (full 0):
garbage-first heap total 1571840K, used 1202466K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 270 young (276480K), 35 survivors (35840K)
Metaspace used 251436K, committed 254656K, reserved 688128K
class space used 31206K, committed 32640K, reserved 425984K
}
Event: 847.614 GC heap after
{Heap after GC invocations=473 (full 0):
garbage-first heap total 1571840K, used 942920K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 13 young (13312K), 13 survivors (13312K)
Metaspace used 251436K, committed 254656K, reserved 688128K
class space used 31206K, committed 32640K, reserved 425984K
}
Event: 883.422 GC heap before
{Heap before GC invocations=473 (full 0):
garbage-first heap total 1571840K, used 1403720K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 428 young (438272K), 13 survivors (13312K)
Metaspace used 253041K, committed 256448K, reserved 688128K
class space used 31326K, committed 32832K, reserved 425984K
}
Event: 883.458 GC heap after
{Heap after GC invocations=474 (full 0):
garbage-first heap total 1571840K, used 964094K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 22 young (22528K), 22 survivors (22528K)
Metaspace used 253041K, committed 256448K, reserved 688128K
class space used 31326K, committed 32832K, reserved 425984K
}
Event: 886.867 GC heap before
{Heap before GC invocations=474 (full 0):
garbage-first heap total 1571840K, used 1371646K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 415 young (424960K), 22 survivors (22528K)
Metaspace used 253486K, committed 256832K, reserved 688128K
class space used 31361K, committed 32832K, reserved 425984K
}
Event: 886.897 GC heap after
{Heap after GC invocations=475 (full 0):
garbage-first heap total 1571840K, used 951592K [0x0000000080000000, 0x0000000100000000)
region size 1024K, 21 young (21504K), 21 survivors (21504K)
Metaspace used 253486K, committed 256832K, reserved 688128K
class space used 31361K, committed 32832K, reserved 425984K
}

Dll operation events (17 events):
Event: 0.012 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\java.dll
Event: 0.030 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\jsvml.dll
Event: 0.070 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\zip.dll
Event: 0.072 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\instrument.dll
Event: 0.076 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\net.dll
Event: 0.078 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\nio.dll
Event: 0.080 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\zip.dll
Event: 0.298 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\jimage.dll
Event: 0.489 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\verify.dll
Event: 0.673 Loaded shared library C:\Users\lauri\.gradle\native\c067742578af261105cb4f569cf0c3c89f3d7b1fecec35dd04571415982c5e48\windows-amd64\native-platform.dll
Event: 0.689 Loaded shared library C:\Users\lauri\.gradle\native\100fb08df4bc3b14c8652ba06237920a3bd2aa13389f12d3474272988ae205f9\windows-amd64\native-platform-file-events.dll
Event: 2.000 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\management.dll
Event: 2.002 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\management_ext.dll
Event: 2.198 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\extnet.dll
Event: 2.481 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\sunmscapi.dll
Event: 80.092 Loaded shared library C:\Users\lauri\AppData\Local\Temp\native-platform10016721535674038388dir\native-platform.dll
Event: 80.912 Loaded shared library C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\rmi.dll

Deoptimization events (20 events):
Event: 887.269 Thread 0x000002845e499160 Uncommon trap: trap_request=0xffffffde fr.pc=0x000002842db19558 relative=0x00000000000078b8
Event: 887.269 Thread 0x000002845e499160 Uncommon trap: reason=class_check action=maybe_recompile pc=0x000002842db19558 method=org.jetbrains.org.objectweb.asm.ClassReader.readMethod(Lorg/jetbrains/org/objectweb/asm/ClassVisitor;Lorg/jetbrains/org/objectweb/asm/Context;I)I @ 663 c2
Event: 887.269 Thread 0x000002845e499160 DEOPT PACKING pc=0x000002842db19558 sp=0x000000b9727fc6d0
Event: 887.269 Thread 0x000002845e499160 DEOPT UNPACKING pc=0x000002842a2c69a3 sp=0x000000b9727fc688 mode 2
Event: 887.269 Thread 0x000002845e499160 Uncommon trap: trap_request=0xffffffde fr.pc=0x000002842db19558 relative=0x00000000000078b8
Event: 887.269 Thread 0x000002845e499160 Uncommon trap: reason=class_check action=maybe_recompile pc=0x000002842db19558 method=org.jetbrains.org.objectweb.asm.ClassReader.readMethod(Lorg/jetbrains/org/objectweb/asm/ClassVisitor;Lorg/jetbrains/org/objectweb/asm/Context;I)I @ 663 c2
Event: 887.269 Thread 0x000002845e499160 DEOPT PACKING pc=0x000002842db19558 sp=0x000000b9727fc6d0
Event: 887.269 Thread 0x000002845e499160 DEOPT UNPACKING pc=0x000002842a2c69a3 sp=0x000000b9727fc688 mode 2
Event: 887.269 Thread 0x000002845e499160 Uncommon trap: trap_request=0xffffffde fr.pc=0x000002842db19558 relative=0x00000000000078b8
Event: 887.269 Thread 0x000002845e499160 Uncommon trap: reason=class_check action=maybe_recompile pc=0x000002842db19558 method=org.jetbrains.org.objectweb.asm.ClassReader.readMethod(Lorg/jetbrains/org/objectweb/asm/ClassVisitor;Lorg/jetbrains/org/objectweb/asm/Context;I)I @ 663 c2
Event: 887.269 Thread 0x000002845e499160 DEOPT PACKING pc=0x000002842db19558 sp=0x000000b9727fc6d0
Event: 887.269 Thread 0x000002845e499160 DEOPT UNPACKING pc=0x000002842a2c69a3 sp=0x000000b9727fc688 mode 2
Event: 887.343 Thread 0x000002845cda1230 Uncommon trap: trap_request=0xffffffc6 fr.pc=0x000002842db27d98 relative=0x00000000000075f8
Event: 887.343 Thread 0x000002845cda1230 Uncommon trap: reason=bimorphic_or_optimized_type_check action=maybe_recompile pc=0x000002842db27d98 method=org.jetbrains.org.objectweb.asm.ClassReader.accept(Lorg/jetbrains/org/objectweb/asm/ClassVisitor;[Lorg/jetbrains/org/objectweb/asm/Attribute;I)V @
Event: 887.343 Thread 0x000002845cda1230 DEOPT PACKING pc=0x000002842db27d98 sp=0x000000b971cfcb10
Event: 887.343 Thread 0x000002845cda1230 DEOPT UNPACKING pc=0x000002842a2c69a3 sp=0x000000b971cfcb00 mode 2
Event: 887.344 Thread 0x000002845cda1230 Uncommon trap: trap_request=0xffffff76 fr.pc=0x000002842db27dd8 relative=0x0000000000007638
Event: 887.344 Thread 0x000002845cda1230 Uncommon trap: reason=predicate action=maybe_recompile pc=0x000002842db27dd8 method=org.jetbrains.org.objectweb.asm.ClassReader.accept(Lorg/jetbrains/org/objectweb/asm/ClassVisitor;[Lorg/jetbrains/org/objectweb/asm/Attribute;I)V @ 1132 c2
Event: 887.344 Thread 0x000002845cda1230 DEOPT PACKING pc=0x000002842db27dd8 sp=0x000000b971cfcb10
Event: 887.344 Thread 0x000002845cda1230 DEOPT UNPACKING pc=0x000002842a2c69a3 sp=0x000000b971cfcb08 mode 2

Classes loaded (20 events):
Event: 601.623 Loading class java/rmi/server/Unreferenced
Event: 601.624 Loading class java/rmi/server/Unreferenced done
Event: 601.734 Loading class java/util/Collections$UnmodifiableList$1
Event: 601.735 Loading class java/util/Collections$UnmodifiableList$1 done
Event: 619.763 Loading class java/nio/file/Files$2
Event: 619.764 Loading class java/nio/file/Files$2 done
Event: 622.188 Loading class java/util/regex/Pattern$Bound
Event: 622.189 Loading class java/util/regex/Pattern$Bound done
Event: 623.517 Loading class java/util/ImmutableCollections$Access
Event: 623.523 Loading class java/util/ImmutableCollections$Access done
Event: 623.523 Loading class java/util/ImmutableCollections$Access$1
Event: 623.524 Loading class jdk/internal/access/JavaUtilCollectionAccess
Event: 623.524 Loading class jdk/internal/access/JavaUtilCollectionAccess done
Event: 623.524 Loading class java/util/ImmutableCollections$Access$1 done
Event: 626.982 Loading class java/text/BreakIterator
Event: 626.983 Loading class java/text/BreakIterator done
Event: 629.476 Loading class java/text/FieldPosition$Delegate
Event: 629.477 Loading class java/text/FieldPosition$Delegate done
Event: 886.291 Loading class jdk/internal/reflect/UnsafeQualifiedStaticIntegerFieldAccessorImpl
Event: 886.295 Loading class jdk/internal/reflect/UnsafeQualifiedStaticIntegerFieldAccessorImpl done

Classes unloaded (20 events):
Event: 541.548 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d7770 '_BuildScript_$_run_closure3$_closure14'
Event: 541.548 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d7388 '\_BuildScript_$_run_closure3'
Event: 541.548 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d6fa0 '_BuildScript_$_run_closure2$\_closure9'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d6bb8 '\_BuildScript_$_run_closure2$_closure8$\_closure13'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d67d0 '\_BuildScript_$_run_closure2$_closure8'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d63e8 '\_BuildScript_$_run_closure2$_closure7$\_closure12'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d6000 '\_BuildScript_$_run_closure2$_closure7$\_closure11'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d5bb8 '\_BuildScript_$_run_closure2$_closure7'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d57d0 '\_BuildScript_$_run_closure2$_closure6$\_closure10'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d53e8 '\_BuildScript_$_run_closure2$_closure6'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d5000 '\_BuildScript_$_run_closure2$_closure5'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d4920 '\_BuildScript_$_run_closure2'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d4538 '_BuildScript_$_run_closure1'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5d4000 '\_BuildScript_'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5ccfa0 '_BuildScript_$_run_closure1$_closure2$\_closure5'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5ccbb8 '\_BuildScript_$_run_closure1$_closure2$\_closure4'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5cc7d0 '\_BuildScript_$_run_closure1$_closure2$\_closure3'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5cc3e8 '\_BuildScript_$_run_closure1$_closure2'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5cc000 '\_BuildScript_$_run_closure1'
Event: 541.549 Thread 0x000002843969e1c0 Unloading class 0x000002843c5c4000 '\_BuildScript_'

Classes redefined (0 events):
No events

Internal exceptions (20 events):
Event: 885.963 Thread 0x000002845cd9b200 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d3aa4068}> (0x00000000d3aa4068)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.971 Thread 0x000002845cd9b200 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d3ae8648}> (0x00000000d3ae8648)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.972 Thread 0x000002845cd9b200 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d3ae9540}> (0x00000000d3ae9540)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.972 Thread 0x000002845cd9b200 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d3ae9700}> (0x00000000d3ae9700)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.974 Thread 0x000002847256c1b0 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d3935a88}> (0x00000000d3935a88)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.974 Thread 0x000002847256c1b0 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d3935d00}> (0x00000000d3935d00)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.974 Thread 0x000002847256c1b0 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d3935ef0}> (0x00000000d3935ef0)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.974 Thread 0x000002845afcfe80 Exception <a 'sun/nio/fs/WindowsException'{0x00000000df609318}> (0x00000000df609318)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.986 Thread 0x000002845afcfe80 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d39d0280}> (0x00000000d39d0280)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.986 Thread 0x000002845afcfe80 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d39d1178}> (0x00000000d39d1178)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.986 Thread 0x000002845afcfe80 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d39d1338}> (0x00000000d39d1338)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.988 Thread 0x0000028474bf5f90 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d393cea0}> (0x00000000d393cea0)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.988 Thread 0x0000028474bf5f90 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d393d118}> (0x00000000d393d118)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 885.988 Thread 0x0000028474bf5f90 Exception <a 'sun/nio/fs/WindowsException'{0x00000000d393d308}> (0x00000000d393d308)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 886.011 Thread 0x000002845afd12c0 Exception <a 'sun/nio/fs/WindowsException'{0x00000000df562f78}> (0x00000000df562f78)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 886.012 Thread 0x000002845afd12c0 Exception <a 'sun/nio/fs/WindowsException'{0x00000000df564d58}> (0x00000000df564d58)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 886.012 Thread 0x000002845afd12c0 Exception <a 'sun/nio/fs/WindowsException'{0x00000000df566b70}> (0x00000000df566b70)
thrown [s\src\hotspot\share\prims\jni.cpp, line 516]
Event: 886.345 Thread 0x000002845afd12c0 Implicit null exception at 0x000002842d00dd00 to 0x000002842d00e4f5
Event: 886.366 Thread 0x000002845afd12c0 Exception <a 'java/lang/NoSuchMethodError'{0x00000000d2ffaa88}: static Lorg/jetbrains/kotlin/gradle/internal/kapt/incremental/ClasspathEntryData;.<clinit>()V> (0x00000000d2ffaa88)
thrown [s\src\hotspot\share\prims\jni.cpp, line 1112]
Event: 886.366 Thread 0x000002845e499160 Exception <a 'java/lang/NoSuchMethodError'{0x00000000d2c9e798}: static Lorg/jetbrains/kotlin/gradle/internal/kapt/incremental/ClasspathEntryData;.<clinit>()V> (0x00000000d2c9e798)
thrown [s\src\hotspot\share\prims\jni.cpp, line 1112]

VM Operations (20 events):
Event: 875.304 Executing VM operation: Cleanup
Event: 875.304 Executing VM operation: Cleanup done
Event: 879.309 Executing VM operation: Cleanup
Event: 879.312 Executing VM operation: Cleanup done
Event: 880.313 Executing VM operation: Cleanup
Event: 880.319 Executing VM operation: Cleanup done
Event: 881.319 Executing VM operation: Cleanup
Event: 881.319 Executing VM operation: Cleanup done
Event: 882.319 Executing VM operation: Cleanup
Event: 882.320 Executing VM operation: Cleanup done
Event: 883.422 Executing VM operation: G1CollectForAllocation
Event: 883.458 Executing VM operation: G1CollectForAllocation done
Event: 885.458 Executing VM operation: Cleanup
Event: 885.458 Executing VM operation: Cleanup done
Event: 886.459 Executing VM operation: Cleanup
Event: 886.465 Executing VM operation: Cleanup done
Event: 886.855 Executing VM operation: G1CollectForAllocation
Event: 886.897 Executing VM operation: G1CollectForAllocation done
Event: 887.898 Executing VM operation: Cleanup
Event: 887.899 Executing VM operation: Cleanup done

Memory protections (0 events):
No events

Nmethod flushes (20 events):
Event: 846.531 Thread 0x00000284396cb030 flushing nmethod 0x00000284272f0d90
Event: 846.539 Thread 0x00000284396cb030 flushing nmethod 0x0000028427354c90
Event: 846.558 Thread 0x00000284396cb030 flushing nmethod 0x00000284273df390
Event: 846.560 Thread 0x00000284396cb030 flushing nmethod 0x0000028427406710
Event: 846.560 Thread 0x00000284396cb030 flushing nmethod 0x0000028427406e10
Event: 846.560 Thread 0x00000284396cb030 flushing nmethod 0x0000028427407610
Event: 846.560 Thread 0x00000284396cb030 flushing nmethod 0x0000028427408790
Event: 846.560 Thread 0x00000284396cb030 flushing nmethod 0x000002842740d190
Event: 846.648 Thread 0x00000284396cb030 flushing nmethod 0x000002842781ff10
Event: 846.693 Thread 0x00000284396cb030 flushing nmethod 0x00000284279d4590
Event: 846.701 Thread 0x00000284396cb030 flushing nmethod 0x0000028427a69990
Event: 846.710 Thread 0x00000284396cb030 flushing nmethod 0x0000028427aacb10
Event: 846.759 Thread 0x00000284396cb030 flushing nmethod 0x0000028427dad310
Event: 846.760 Thread 0x00000284396cb030 flushing nmethod 0x0000028427dd1090
Event: 846.779 Thread 0x00000284396cb030 flushing nmethod 0x0000028427f5c010
Event: 846.799 Thread 0x00000284396cb030 flushing nmethod 0x0000028428102a90
Event: 846.807 Thread 0x00000284396cb030 flushing nmethod 0x0000028428202b90
Event: 846.816 Thread 0x00000284396cb030 flushing nmethod 0x00000284282b6c10
Event: 846.822 Thread 0x00000284396cb030 flushing nmethod 0x0000028428331910
Event: 846.822 Thread 0x00000284396cb030 flushing nmethod 0x0000028428352e10

Events (20 events):
Event: 844.622 Thread 0x000002845afd08a0 Thread added: 0x0000028474fcb320
Event: 847.624 Thread 0x0000028474bf73d0 Thread exited: 0x0000028474bf73d0
Event: 847.624 Thread 0x000002846cea2850 Thread exited: 0x000002846cea2850
Event: 847.630 Thread 0x000002846cc9dd50 Thread exited: 0x000002846cc9dd50
Event: 847.632 Thread 0x000002846cea41a0 Thread exited: 0x000002846cea41a0
Event: 851.068 Thread 0x00000284646e7cc0 Thread added: 0x00000284753c5390
Event: 863.899 Thread 0x000002847256c1b0 Thread added: 0x000002845acb9d20
Event: 865.279 Thread 0x000002845fa35d30 Thread added: 0x00000284753c5db0
Event: 867.338 Thread 0x000002845bc34920 Thread added: 0x00000284760c6df0
Event: 870.187 Thread 0x0000028472e6a510 Thread added: 0x00000284760c4570
Event: 871.117 Thread 0x000002846cef8800 Thread added: 0x00000284753c67d0
Event: 883.462 Thread 0x00000284753c5390 Thread exited: 0x00000284753c5390
Event: 883.462 Thread 0x00000284753c5db0 Thread exited: 0x00000284753c5db0
Event: 883.463 Thread 0x000002845acb9d20 Thread exited: 0x000002845acb9d20
Event: 883.463 Thread 0x00000284760c6df0 Thread exited: 0x00000284760c6df0
Event: 883.463 Thread 0x0000028474fcb320 Thread exited: 0x0000028474fcb320
Event: 883.463 Thread 0x00000284753c67d0 Thread exited: 0x00000284753c67d0
Event: 883.466 Thread 0x00000284760c4570 Thread exited: 0x00000284760c4570
Event: 883.468 Thread 0x000002846cea46b0 Thread exited: 0x000002846cea46b0
Event: 886.350 Thread 0x00000284396c7f70 Thread added: 0x0000028472f44dd0

Dynamic libraries:
0x00007ff6e3d00000 - 0x00007ff6e3d0e000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\java.exe
0x00007ffb8b660000 - 0x00007ffb8b8c3000 C:\WINDOWS\SYSTEM32\ntdll.dll
0x00007ffb897d0000 - 0x00007ffb89898000 C:\WINDOWS\System32\KERNEL32.DLL
0x00007ffb88e90000 - 0x00007ffb89242000 C:\WINDOWS\System32\KERNELBASE.dll
0x00007ffb88b90000 - 0x00007ffb88cdb000 C:\WINDOWS\System32\ucrtbase.dll
0x00007ffb82c30000 - 0x00007ffb82c47000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\jli.dll
0x00007ffb89b40000 - 0x00007ffb89d08000 C:\WINDOWS\System32\USER32.dll
0x00007ffb88ce0000 - 0x00007ffb88d07000 C:\WINDOWS\System32\win32u.dll
0x00007ffb89b10000 - 0x00007ffb89b3a000 C:\WINDOWS\System32\GDI32.dll
0x00007ffb89390000 - 0x00007ffb894bb000 C:\WINDOWS\System32\gdi32full.dll
0x00007ffb892e0000 - 0x00007ffb89383000 C:\WINDOWS\System32\msvcp_win.dll
0x00007ffb7d120000 - 0x00007ffb7d13d000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\VCRUNTIME140.dll
0x00007ffb63410000 - 0x00007ffb636a0000 C:\WINDOWS\WinSxS\amd64_microsoft.windows.common-controls_6595b64144ccf1df_6.0.26100.2454_none_3e0b68a2e331ad60\COMCTL32.dll
0x00007ffb89d20000 - 0x00007ffb89dc9000 C:\WINDOWS\System32\msvcrt.dll
0x00007ffb8ac80000 - 0x00007ffb8acaf000 C:\WINDOWS\System32\IMM32.DLL
0x00007ffb85be0000 - 0x00007ffb85bec000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\vcruntime140_1.dll
0x00007ffb68960000 - 0x00007ffb689ed000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\msvcp140.dll
0x00007ffb5bf90000 - 0x00007ffb5cc02000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\server\jvm.dll
0x00007ffb89540000 - 0x00007ffb895f4000 C:\WINDOWS\System32\ADVAPI32.dll
0x00007ffb89600000 - 0x00007ffb896a6000 C:\WINDOWS\System32\sechost.dll
0x00007ffb896b0000 - 0x00007ffb897c6000 C:\WINDOWS\System32\RPCRT4.dll
0x00007ffb8a4e0000 - 0x00007ffb8a554000 C:\WINDOWS\System32\WS2_32.dll
0x00007ffb888c0000 - 0x00007ffb8890e000 C:\WINDOWS\SYSTEM32\POWRPROF.dll
0x00007ffb732f0000 - 0x00007ffb73326000 C:\WINDOWS\SYSTEM32\WINMM.dll
0x00007ffb78010000 - 0x00007ffb7801b000 C:\WINDOWS\SYSTEM32\VERSION.dll
0x00007ffb888a0000 - 0x00007ffb888b4000 C:\WINDOWS\SYSTEM32\UMPDC.dll
0x00007ffb87830000 - 0x00007ffb8784a000 C:\WINDOWS\SYSTEM32\kernel.appcore.dll
0x00007ffb82af0000 - 0x00007ffb82afa000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\jimage.dll
0x00007ffb860b0000 - 0x00007ffb862f1000 C:\WINDOWS\SYSTEM32\DBGHELP.DLL
0x00007ffb8b290000 - 0x00007ffb8b60e000 C:\WINDOWS\System32\combase.dll
0x00007ffb8b1a0000 - 0x00007ffb8b276000 C:\WINDOWS\System32\OLEAUT32.dll
0x00007ffb456d0000 - 0x00007ffb45709000 C:\WINDOWS\SYSTEM32\dbgcore.DLL
0x00007ffb88af0000 - 0x00007ffb88b89000 C:\WINDOWS\System32\bcryptPrimitives.dll
0x00007ffb6fda0000 - 0x00007ffb6fdae000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\instrument.dll
0x00007ffb7a100000 - 0x00007ffb7a125000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\java.dll
0x00007ffb43b30000 - 0x00007ffb43c07000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\jsvml.dll
0x00007ffb89dd0000 - 0x00007ffb8a4d1000 C:\WINDOWS\System32\SHELL32.dll
0x00007ffb86720000 - 0x00007ffb86f51000 C:\WINDOWS\SYSTEM32\windows.storage.dll
0x00007ffb8b0c0000 - 0x00007ffb8b19a000 C:\WINDOWS\System32\SHCORE.dll
0x00007ffb8ac20000 - 0x00007ffb8ac7d000 C:\WINDOWS\System32\shlwapi.dll
0x00007ffb88940000 - 0x00007ffb8896e000 C:\WINDOWS\SYSTEM32\profapi.dll
0x00007ffb752a0000 - 0x00007ffb752b8000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\zip.dll
0x00007ffb7d100000 - 0x00007ffb7d11a000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\net.dll
0x00007ffb7eb50000 - 0x00007ffb7ec76000 C:\WINDOWS\SYSTEM32\WINHTTP.dll
0x00007ffb87d10000 - 0x00007ffb87d78000 C:\WINDOWS\system32\mswsock.dll
0x00007ffb7cdb0000 - 0x00007ffb7cdc6000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\nio.dll
0x00007ffb85c10000 - 0x00007ffb85c20000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\verify.dll
0x00007ffb603d0000 - 0x00007ffb603f7000 C:\Users\lauri\.gradle\native\c067742578af261105cb4f569cf0c3c89f3d7b1fecec35dd04571415982c5e48\windows-amd64\native-platform.dll
0x00007ffb46330000 - 0x00007ffb46474000 C:\Users\lauri\.gradle\native\100fb08df4bc3b14c8652ba06237920a3bd2aa13389f12d3474272988ae205f9\windows-amd64\native-platform-file-events.dll
0x00007ffb82ab0000 - 0x00007ffb82aba000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\management.dll
0x00007ffb80fa0000 - 0x00007ffb80fab000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\management_ext.dll
0x00007ffb89d10000 - 0x00007ffb89d18000 C:\WINDOWS\System32\PSAPI.DLL
0x00007ffb88050000 - 0x00007ffb8806c000 C:\WINDOWS\SYSTEM32\CRYPTSP.dll
0x00007ffb87790000 - 0x00007ffb877c8000 C:\WINDOWS\system32\rsaenh.dll
0x00007ffb87db0000 - 0x00007ffb87ddb000 C:\WINDOWS\SYSTEM32\USERENV.dll
0x00007ffb881e0000 - 0x00007ffb88206000 C:\WINDOWS\SYSTEM32\bcrypt.dll
0x00007ffb87f40000 - 0x00007ffb87f4c000 C:\WINDOWS\SYSTEM32\CRYPTBASE.dll
0x00007ffb872a0000 - 0x00007ffb872d2000 C:\WINDOWS\SYSTEM32\IPHLPAPI.DLL
0x00007ffb898a0000 - 0x00007ffb898aa000 C:\WINDOWS\System32\NSI.dll
0x00007ffb7f190000 - 0x00007ffb7f1ae000 C:\WINDOWS\SYSTEM32\dhcpcsvc6.DLL
0x00007ffb7ed30000 - 0x00007ffb7ed55000 C:\WINDOWS\SYSTEM32\dhcpcsvc.DLL
0x00007ffb87340000 - 0x00007ffb87465000 C:\WINDOWS\SYSTEM32\DNSAPI.dll
0x00007ffb7c9a0000 - 0x00007ffb7c9a9000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\extnet.dll
0x00007ffb7d040000 - 0x00007ffb7d04e000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\sunmscapi.dll
0x00007ffb88d10000 - 0x00007ffb88e86000 C:\WINDOWS\System32\CRYPT32.dll
0x00007ffb881a0000 - 0x00007ffb881d0000 C:\WINDOWS\SYSTEM32\ncrypt.dll
0x00007ffb88150000 - 0x00007ffb8818f000 C:\WINDOWS\SYSTEM32\NTASN1.dll
0x00007ffb79870000 - 0x00007ffb79878000 C:\WINDOWS\system32\wshunix.dll
0x00007ffb80f80000 - 0x00007ffb80f8b000 C:\Windows\System32\rasadhlp.dll
0x00007ffb7ec80000 - 0x00007ffb7ed05000 C:\WINDOWS\System32\fwpuclnt.dll
0x00007ffb19a70000 - 0x00007ffb19a88000 C:\WINDOWS\system32\napinsp.dll
0x00007ffb19a90000 - 0x00007ffb19aa2000 C:\WINDOWS\System32\winrnr.dll
0x00007ffb3fc40000 - 0x00007ffb3fc62000 C:\WINDOWS\system32\nlansp_c.dll
0x00007ffb7b120000 - 0x00007ffb7b136000 C:\WINDOWS\system32\wshbth.dll
0x00007ffb6e1a0000 - 0x00007ffb6e1be000 C:\Users\lauri\AppData\Local\Temp\native-platform10016721535674038388dir\native-platform.dll
0x00007ffb6eeb0000 - 0x00007ffb6eeb7000 C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\rmi.dll
0x00007ffb87950000 - 0x00007ffb87985000 C:\WINDOWS\SYSTEM32\ntmarta.dll
0x00007ffb85330000 - 0x00007ffb853cc000 C:\WINDOWS\system32\apphelp.dll

dbghelp: loaded successfully - version: 4.0.5 - missing functions: none
symbol engine: initialized successfully - sym options: 0x614 - pdb path: .;C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin;C:\WINDOWS\SYSTEM32;C:\WINDOWS\WinSxS\amd64_microsoft.windows.common-controls_6595b64144ccf1df_6.0.26100.2454_none_3e0b68a2e331ad60;C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin\server;C:\Users\lauri\.gradle\native\c067742578af261105cb4f569cf0c3c89f3d7b1fecec35dd04571415982c5e48\windows-amd64;C:\Users\lauri\.gradle\native\100fb08df4bc3b14c8652ba06237920a3bd2aa13389f12d3474272988ae205f9\windows-amd64;C:\Users\lauri\AppData\Local\Temp\native-platform10016721535674038388dir

VM Arguments:
jvm_args: -XX:MaxMetaspaceSize=512m --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.lang.invoke=ALL-UNNAMED --add-opens=java.prefs/java.util.prefs=ALL-UNNAMED --add-exports=jdk.compiler/com.sun.tools.javac.api=ALL-UNNAMED --add-exports=jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED --add-opens=java.base/java.nio.charset=ALL-UNNAMED --add-opens=java.base/java.net=ALL-UNNAMED --add-opens=java.base/java.util.concurrent.atomic=ALL-UNNAMED -Xmx2048m -Dfile.encoding=windows-1252 -Duser.country=DE -Duser.language=de -Duser.variant -javaagent:C:\Users\lauri\.gradle\wrapper\dists\gradle-8.10.2-all\7iv73wktx1xtkvlq19urqw1wm\gradle-8.10.2\lib\agents\gradle-instrumentation-agent-8.10.2.jar
java_command: org.gradle.launcher.daemon.bootstrap.GradleDaemon 8.10.2
java_class_path (initial): C:\Users\lauri\.gradle\wrapper\dists\gradle-8.10.2-all\7iv73wktx1xtkvlq19urqw1wm\gradle-8.10.2\lib\gradle-daemon-main-8.10.2.jar
Launcher Type: SUN_STANDARD

[Global flags]
intx CICompilerCount = 4 {product} {ergonomic}
size_t CompressedClassSpaceSize = 436207616 {product} {ergonomic}
uint ConcGCThreads = 2 {product} {ergonomic}
uint G1ConcRefinementThreads = 8 {product} {ergonomic}
size_t G1HeapRegionSize = 1048576 {product} {ergonomic}
uintx GCDrainStackTargetSize = 64 {product} {ergonomic}
size_t InitialHeapSize = 132120576 {product} {ergonomic}
size_t MarkStackSize = 4194304 {product} {ergonomic}
size_t MaxHeapSize = 2147483648 {product} {command line}
size_t MaxMetaspaceSize = 536870912 {product} {command line}
size_t MaxNewSize = 1287651328 {product} {ergonomic}
size_t MinHeapDeltaBytes = 1048576 {product} {ergonomic}
size_t MinHeapSize = 8388608 {product} {ergonomic}
uintx NonNMethodCodeHeapSize = 5839372 {pd product} {ergonomic}
uintx NonProfiledCodeHeapSize = 122909434 {pd product} {ergonomic}
uintx ProfiledCodeHeapSize = 122909434 {pd product} {ergonomic}
uintx ReservedCodeCacheSize = 251658240 {pd product} {ergonomic}
bool SegmentedCodeCache = true {product} {ergonomic}
size_t SoftMaxHeapSize = 2147483648 {manageable} {ergonomic}
bool UseCompressedClassPointers = true {product lp64_product} {ergonomic}
bool UseCompressedOops = true {product lp64_product} {ergonomic}
bool UseG1GC = true {product} {ergonomic}
bool UseLargePagesIndividualAllocation = false {pd product} {ergonomic}

Logging:
Log output configuration:
#0: stdout all=warning uptime,level,tags
#1: stderr all=off uptime,level,tags

Environment Variables:
JAVA_HOME=C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\
CLASSPATH=C:\Users\lauri\tarot\frontend\android\\gradle\wrapper\gradle-wrapper.jar
PATH=C:\Users\lauri\tarot\frontend\node_modules\.bin;C:\Users\lauri\tarot\frontend\node_modules\.bin;C:\Users\lauri\tarot\node_modules\.bin;C:\Users\lauri\node_modules\.bin;C:\Users\node_modules\.bin;C:\node_modules\.bin;C:\Users\lauri\.nvm\versions\node\v18.18.0\bin\node_modules\npm\node_modules\@npmcli\run-script\lib\node-gyp-bin;C:\Users\lauri\.nvm\versions\node\v18.18.0\bin;C:\Users\lauri\bin;C:\Program Files\Git\mingw64\bin;C:\Program Files\Git\usr\local\bin;C:\Program Files\Git\usr\bin;C:\Program Files\Git\usr\bin;C:\Program Files\Git\mingw64\bin;C:\Program Files\Git\usr\bin;C:\Users\lauri\bin;C:\Program Files\WindowsApps\Microsoft.PowerShell_7.5.0.0_x64**8wekyb3d8bbwe;C:\Windows;C:\Windows\System32;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0;C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin;%PATH%;C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin;C:\ProgramData\chocolatey\bin;C:\Program Files\nodejs;C:\Users\Lauri\AppData\Local\Android\Sdk\platform-tools;C:\Users\Lauri\AppData\Local\Android\Sdk\tools;C:\Users\Lauri\AppData\Local\Android\Sdk\tools\bin;C:\Program Files\dotnet;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0;C:\WINDOWS\System32\OpenSSH;C:\Program Files\WindowsApps\Microsoft.PowerShell_7.5.0.0_x64**8wekyb3d8bbwe;C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin;C:\Windows;C:\Windows\System32;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0;C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin;%PATH%;C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin;C:\ProgramData\chocolatey\bin;C:\Program Files\nodejs;C:\Users\Lauri\AppData\Local\Android\Sdk\platform-tools;C:\Users\Lauri\AppData\Local\Android\Sdk\tools;C:\Users\Lauri\AppData\Local\Android\Sdk\tools\bin;C:\Program Files\dotnet;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0;C:\WINDOWS\System32\OpenSSH;C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\bin;C:\ProgramData\chocolatey\bin;C:\Program Files\nodejs;C:\Users\lauri\AppData\Local\Programs\Python\Python313\Scripts;C:\Users\lauri\AppData\Local\Programs\Python\Python313;C:\Users\lauri\AppData\Local\Microsoft\WindowsApps;C:\Users\lauri\AppData\Local\GitHubDesktop\bin;C:\Users\lauri\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\lauri\AppData\Roaming\npm;C:\Users\lauri\AppData\Local\Android\Sdk\platform-tools;C:\Users\lauri\AppData\Local\Android\Sdk\cmdline-tools\latest\bin;C:\Users\lauri\AppData\Local\Microsoft\WindowsApps;C:\Users\lauri\AppData\Roaming\Code\User\globalStorage\github.copilot-chat\debugCommand;C:\Users\lauri\.vscode\extensions\ms-python.debugpy-2025.0.0-win32-x64\bundled\scripts\noConfigScripts;C:\Program Files\Git\usr\bin\vendor_perl;C:\Program Files\Git\usr\bin\core_perl
USERNAME=lauri
SHELL=C:\Program Files\Git\usr\bin\bash.exe
DISPLAY=needs-to-be-defined
LANG=en_US.UTF-8
TERM=xterm-256color
TMPDIR=C:\Users\lauri\AppData\Local\Temp
OS=Windows_NT
PROCESSOR_IDENTIFIER=Intel64 Family 6 Model 142 Stepping 12, GenuineIntel
TMP=C:\Users\lauri\AppData\Local\Temp
TEMP=C:\Users\lauri\AppData\Local\Temp

Periodic native trim disabled

--------------- S Y S T E M ---------------

OS:
Windows 11 , 64 bit Build 26100 (10.0.26100.2454)
OS uptime: 15 days 3:45 hours
Hyper-V role detected

CPU: total 8 (initial active 8) (4 cores per cpu, 2 threads per core) family 6 model 142 stepping 12 microcode 0xfc, cx8, cmov, fxsr, ht, mmx, 3dnowpref, sse, sse2, sse3, ssse3, sse4.1, sse4.2, popcnt, lzcnt, tsc, tscinvbit, avx, avx2, aes, erms, clmul, bmi1, bmi2, adx, fma, vzeroupper, clflush, clflushopt, hv
Processor Information for the first 8 processors :
Max Mhz: 1896, Current Mhz: 1596, Mhz Limit: 1592

Memory: 4k page, system-wide physical 7998M (500M free)
TotalPageFile size 32453M (AvailPageFile size 11670M)
current process WorkingSet (physical memory assigned to process): 800M, peak: 1295M
current process commit charge ("private bytes"): 2329M, peak: 2335M

vm_info: OpenJDK 64-Bit Server VM (17.0.14+7-LTS) for windows-amd64 JRE (17.0.14+7-LTS), built on Jan 8 2025 23:39:28 by "MicrosoftCorporation" with unknown MS VC++:1939

END.
