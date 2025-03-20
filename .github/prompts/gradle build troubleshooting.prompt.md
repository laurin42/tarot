lauri@WINDOWS-MMO3SPS MINGW64 ~/tarot/app (main)
$ cd android

lauri@WINDOWS-MMO3SPS MINGW64 ~/tarot/app/android (main)
$ ./gradlew clean

> Configure project :app
> ?? Applying gradle plugin 'expo-dev-launcher-gradle-plugin' (expo-dev-launcher@5.0.29)

> Configure project :expo

Using expo modules

- expo-application (6.0.2)
- expo-asset (11.0.4)
- expo-blur (14.0.3)
- expo-constants (17.0.7)
- expo-crypto (14.0.2)
- expo-dev-client (5.0.12)
- expo-dev-launcher (5.0.29)
- expo-dev-menu (6.0.19)
- expo-file-system (18.0.11)
- expo-font (13.0.4)
- expo-haptics (14.0.1)
- expo-json-utils (0.14.0)
- expo-keep-awake (14.0.3)
- expo-linking (7.0.5)
- expo-manifests (0.15.7)
- expo-modules-core (2.2.2)
- expo-random (14.0.1)
- expo-secure-store (14.0.1)
- expo-splash-screen (0.29.22)
- expo-system-ui (4.0.8)
- expo-web-browser (14.0.2)

> Configure project :react-native-firebase_analytics
> :react-native-firebase_analytics package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\analytics\package.json
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_analytics:firebase.bom using default value: 33.9.0
> :react-native-firebase_analytics package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\analytics\package.json
> :react-native-firebase_analytics:version set from package.json: 21.12.0 (21,12,0 - 21012000)
> :react-native-firebase_analytics:android.compileSdk using custom value: 35
> :react-native-firebase_analytics:android.targetSdk using custom value: 34
> :react-native-firebase_analytics:android.minSdk using custom value: 24
> :react-native-firebase_analytics:reactNativeAndroidDir C:\Users\lauri\tarot\app\node_modules\react-native\android

> Configure project :react-native-firebase_app
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_app:firebase.bom using default value: 33.9.0
> :react-native-firebase_app:play.play-services-auth using default value: 21.3.0
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_app:version set from package.json: 21.12.0 (21,12,0 - 21012000)
> :react-native-firebase_app:android.compileSdk using custom value: 35
> :react-native-firebase_app:android.targetSdk using custom value: 34
> :react-native-firebase_app:android.minSdk using custom value: 24
> :react-native-firebase_app:reactNativeAndroidDir C:\Users\lauri\tarot\app\node_modules\react-native\android

> Configure project :react-native-firebase_auth
> :react-native-firebase_auth package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\auth\package.json
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_auth:firebase.bom using default value: 33.9.0
> :react-native-firebase_auth package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\auth\package.json
> :react-native-firebase_auth:version set from package.json: 21.12.0 (21,12,0 - 21012000)
> :react-native-firebase_auth:android.compileSdk using custom value: 35
> :react-native-firebase_auth:android.targetSdk using custom value: 34
> :react-native-firebase_auth:android.minSdk using custom value: 24
> :react-native-firebase_auth:reactNativeAndroidDir C:\Users\lauri\tarot\app\node_modules\react-native\android

> Configure project :react-native-firebase_crashlytics
> :react-native-firebase_crashlytics package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\crashlytics\package.json
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_crashlytics:firebase.bom using default value: 33.9.0
> :react-native-firebase_crashlytics package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\crashlytics\package.json
> :react-native-firebase_crashlytics:version set from package.json: 21.12.0 (21,12,0 - 21012000)
> :react-native-firebase_crashlytics:android.compileSdk using custom value: 35
> :react-native-firebase_crashlytics:android.targetSdk using custom value: 34
> :react-native-firebase_crashlytics:android.minSdk using custom value: 24
> :react-native-firebase_crashlytics:reactNativeAndroidDir C:\Users\lauri\tarot\app\node_modules\react-native\android

> Configure project :react-native-reanimated
> Android gradle plugin: 8.6.0
> Gradle: 8.13

[Incubating] Problems report is available at: file:///C:/Users/lauri/tarot/app/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.13/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 3m 28s
64 actionable tasks: 50 executed, 14 up-to-date

lauri@WINDOWS-MMO3SPS MINGW64 ~/tarot/app/android (main)
$ rm -rf .gradle

lauri@WINDOWS-MMO3SPS MINGW64 ~/tarot/app/android (main)
$ rm -rf build

lauri@WINDOWS-MMO3SPS MINGW64 ~/tarot/app/android (main)
$ cd ..

lauri@WINDOWS-MMO3SPS MINGW64 ~/tarot/app (main)
$ npx expo run:android
env: load .env.local .env
env: export EXPO_PUBLIC_API_URL EXPO_PUBLIC_ANDROID_CLIENT_ID EXPO_PUBLIC_IOS_CLIENT_ID EXPO_PUBLIC_WEB_CLIENT_ID EXPO_PUBLIC_FIREBASE_API_KEY EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN EXPO_PUBLIC_FIREBASE_PROJECT_ID EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID EXPO_PUBLIC_FIREBASE_APP_ID EXPO_PUBLIC_SENTRY_DSN EXPO_PUBLIC_ENVIRONMENT
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
Failed to resolve the Android SDK path. ANDROID_HOME is set to a non-existing path: Sdk
› Building app...
Configuration on demand is an incubating feature.

> Configure project :app
> ?? Applying gradle plugin 'expo-dev-launcher-gradle-plugin' (expo-dev-launcher@5.0.29)

> Configure project :react-native-firebase_analytics
> :react-native-firebase_analytics package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\analytics\package.json
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_analytics:firebase.bom using default value: 33.9.0
> :react-native-firebase_analytics package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\analytics\package.json
> :react-native-firebase_analytics:version set from package.json: 21.12.0 (21,12,0 - 21012000)
> :react-native-firebase_analytics:android.compileSdk using custom value: 35
> :react-native-firebase_analytics:android.targetSdk using custom value: 34
> :react-native-firebase_analytics:android.minSdk using custom value: 24
> :react-native-firebase_analytics:reactNativeAndroidDir C:\Users\lauri\tarot\app\node_modules\react-native\android

> Configure project :react-native-firebase_app
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_app:firebase.bom using default value: 33.9.0
> :react-native-firebase_app:play.play-services-auth using default value: 21.3.0
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_app:version set from package.json: 21.12.0 (21,12,0 - 21012000)
> :react-native-firebase_app:android.compileSdk using custom value: 35
> :react-native-firebase_app:android.targetSdk using custom value: 34
> :react-native-firebase_app:android.minSdk using custom value: 24
> :react-native-firebase_app:reactNativeAndroidDir C:\Users\lauri\tarot\app\node_modules\react-native\android

> Configure project :react-native-firebase_auth
> :react-native-firebase_auth package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\auth\package.json
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_auth:firebase.bom using default value: 33.9.0
> :react-native-firebase_auth package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\auth\package.json
> :react-native-firebase_auth:version set from package.json: 21.12.0 (21,12,0 - 21012000)
> :react-native-firebase_auth:android.compileSdk using custom value: 35
> :react-native-firebase_auth:android.targetSdk using custom value: 34
> :react-native-firebase_auth:android.minSdk using custom value: 24
> :react-native-firebase_auth:reactNativeAndroidDir C:\Users\lauri\tarot\app\node_modules\react-native\android

> Configure project :react-native-firebase_crashlytics
> :react-native-firebase_crashlytics package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\crashlytics\package.json
> :react-native-firebase_app package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\app\package.json
> :react-native-firebase_crashlytics:firebase.bom using default value: 33.9.0
> :react-native-firebase_crashlytics package.json found at C:\Users\lauri\tarot\app\node_modules\@react-native-firebase\crashlytics\package.json
> :react-native-firebase_crashlytics:version set from package.json: 21.12.0 (21,12,0 - 21012000)
> :react-native-firebase_crashlytics:android.compileSdk using custom value: 35
> :react-native-firebase_crashlytics:android.targetSdk using custom value: 34
> :react-native-firebase_crashlytics:android.minSdk using custom value: 24
> :react-native-firebase_crashlytics:reactNativeAndroidDir C:\Users\lauri\tarot\app\node_modules\react-native\android

> Configure project :expo

Using expo modules

- expo-application (6.0.2)
- expo-asset (11.0.4)
- expo-blur (14.0.3)
- expo-constants (17.0.7)
- expo-crypto (14.0.2)
- expo-dev-client (5.0.12)
- expo-dev-launcher (5.0.29)
- expo-dev-menu (6.0.19)
- expo-file-system (18.0.11)
- expo-font (13.0.4)
- expo-haptics (14.0.1)
- expo-json-utils (0.14.0)
- expo-keep-awake (14.0.3)
- expo-linking (7.0.5)
- expo-manifests (0.15.7)
- expo-modules-core (2.2.2)
- expo-random (14.0.1)
- expo-secure-store (14.0.1)
- expo-splash-screen (0.29.22)
- expo-system-ui (4.0.8)
- expo-web-browser (14.0.2)

> Configure project :react-native-reanimated
> Android gradle plugin: 8.6.0
> Gradle: 8.13

[Incubating] Problems report is available at: file:///C:/Users/lauri/tarot/app/android/build/reports/problems/problems-report.html

FAILURE: Build failed with an exception.

- Where:
  Build file 'C:\Users\lauri\tarot\app\android\build.gradle' line: 56

- What went wrong:
  Could not determine the dependencies of task ':expo:compileDebugJavaWithJavac'.

  > Could not resolve all dependencies for configuration ':expo:debugCompileClasspath'.
  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.7.20.

       Required by:
           project :expo
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib:1.9.25.

       Required by:
           project :expo > com.facebook.react:react-android:0.76.7
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.8.20.

       Required by:
           project :expo > org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3
           project :expo > org.jetbrains.kotlinx:kotlinx-coroutines-core-jvm:1.7.3
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib:1.8.22.

       Required by:
           project :expo > androidx.core:core-ktx:1.13.1
           project :expo > androidx.core:core:1.13.1
           project :expo > androidx.lifecycle:lifecycle-livedata:2.8.3
           project :expo > androidx.lifecycle:lifecycle-process:2.8.3
           project :expo > androidx.lifecycle:lifecycle-service:2.8.3
           project :expo > androidx.lifecycle:lifecycle-viewmodel-savedstate:2.8.3
           project :expo > androidx.lifecycle:lifecycle-livedata-core:2.8.3
           project :expo > androidx.lifecycle:lifecycle-runtime-android:2.8.3
           project :expo > androidx.lifecycle:lifecycle-common-jvm:2.8.3
           project :expo > androidx.lifecycle:lifecycle-livedata-core-ktx:2.8.3
           project :expo > androidx.lifecycle:lifecycle-viewmodel-android:2.8.3
           project :expo > androidx.collection:collection-jvm:1.4.4
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib:1.4.10.

       Required by:
           project :expo > com.squareup.okhttp3:okhttp:4.9.2
           project :expo > com.squareup.okio:okio:2.9.0
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.4.10.

       Required by:
           project :expo > com.squareup.okhttp3:okhttp-urlconnection:4.9.2
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib-common:1.4.10.

       Required by:
           project :expo > com.squareup.okio:okio:2.9.0
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.8.21.

       Required by:
           project :expo > com.facebook.fresco:fresco:3.2.0
           project :expo > com.facebook.fresco:imagepipeline-okhttp3:3.2.0
           project :expo > com.facebook.fresco:middleware:3.2.0
           project :expo > com.facebook.fresco:ui-common:3.2.0
           project :expo > com.facebook.fresco:fbcore:3.2.0
           project :expo > com.facebook.fresco:imagepipeline-base:3.2.0
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-annotations-jvm:1.3.72.

       Required by:
           project :expo > com.facebook.infer.annotation:infer-annotation:0.18.0
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib-common:1.8.20.

       Required by:
           project :expo > org.jetbrains.kotlinx:kotlinx-coroutines-core-jvm:1.7.3
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib:1.7.10.

       Required by:
           project :expo > androidx.annotation:annotation-jvm:1.8.1
           project :expo > androidx.annotation:annotation-experimental:1.4.1
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib:1.8.10.

       Required by:
           project :expo > androidx.activity:activity:1.7.0
           project :expo > androidx.savedstate:savedstate:1.2.1
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib:1.6.21.

       Required by:
           project :expo > androidx.fragment:fragment:1.5.4
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.8.10.

       Required by:
           project :expo > io.insert-koin:koin-core-jvm:3.4.0
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

  > Could not resolve org.jetbrains.kotlin:kotlin-stdlib-common:1.8.10.

       Required by:
           project :expo > io.insert-koin:koin-core-jvm:3.4.0
        > No signature of method: org.gradle.api.internal.artifacts.ivyservice.dependencysubstitution.DefaultDependencyResolveDetails.useVersion() is applicable for argument types: (KotlinExpoModulesCorePlugin$_apply_closure3$_closure4) values: [KotlinExpoModulesCorePlugin$_apply_closure3$_closure4@5bb7c3c6]
          Possible solutions: useVersion(java.lang.String)

- Try:
  > Run with --stacktrace option to get the stack trace.
  > Run with --info or --debug option to get more log output.
  > Run with --scan to get full insights.
  > Get more help at https://help.gradle.org.

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.13/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD FAILED in 2m 8s
18 actionable tasks: 4 executed, 14 up-to-date
Error: C:\Users\lauri\tarot\app\android\gradlew.bat app:assembleDebug -x lint -x test --configure-on-demand --build-cache -PreactNativeDevServerPort=8081 -PreactNativeArchitectures=x86_64 exited with non-zero code: 1
Error: C:\Users\lauri\tarot\app\android\gradlew.bat app:assembleDebug -x lint -x test --configure-on-demand --build-cache -PreactNativeDevServerPort=8081 -PreactNativeArchitectures=x86_64 exited with non-zero code: 1
at ChildProcess.completionListener (C:\Users\lauri\tarot\app\node_modules\@expo\spawn-async\src\spawnAsync.ts:67:13)
at Object.onceWrapper (node:events:632:26)
at ChildProcess.emit (node:events:517:28)
at ChildProcess.cp.emit (C:\Users\lauri\tarot\app\node_modules\cross-spawn\lib\enoent.js:34:29)
at maybeClose (node:internal/child_process:1098:16)
at Process.ChildProcess.\_handle.onexit (node:internal/child_process:303:5)
...
at spawnAsync (C:\Users\lauri\tarot\app\node_modules\@expo\spawn-async\src\spawnAsync.ts:28:21)
at spawnGradleAsync (C:\Users\lauri\tarot\app\node_modules\@expo\cli\src\start\platforms\android\gradle.ts:134:28)
at assembleAsync (C:\Users\lauri\tarot\app\node_modules\@expo\cli\src\start\platforms\android\gradle.ts:83:16)
at runAndroidAsync (C:\Users\lauri\tarot\app\node_modules\@expo\cli\src\run\android\runAndroidAsync.ts:48:24)

lauri@WINDOWS-MMO3SPS MINGW64 ~/tarot/app (main)
