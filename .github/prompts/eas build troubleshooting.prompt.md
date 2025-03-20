Add prompt contents..Running 'gradlew :app:assembleDebug' in /home/expo/workingdir/build/app/android
Downloading https://services.gradle.org/distributions/gradle-8.13-all.zip
10%.
20%.
30%.
40%
50%.
60%
70%
80
%.
90
%.
100%
Welcome to Gradle 8.13!
Here are the highlights of this release:

- Daemon JVM auto-provisioning
- Enhancements for Scala plugin and JUnit testing
- Improvements for build authors and plugin developers
  For more details see https://docs.gradle.org/8.13/release-notes.html
  To honour the JVM settings for this build a single-use Daemon process will be forked. For more on this, please refer to https://docs.gradle.org/8.13/userguide/gradle_daemon.html#sec:disabling_the_daemon in the Gradle documentation.
  Daemon will be stopped at the end of the build
  > Task :gradle-plugin:shared:checkKotlinGradlePluginConfigurationErrors
  > Task :gradle-plugin:settings-plugin:checkKotlinGradlePluginConfigurationErrors
  > Task :gradle-plugin:settings-plugin:pluginDescriptors
  > Task :gradle-plugin:settings-plugin:processResources
  > Task :gradle-plugin:shared:processResources
  > NO-SOURCE
  > Task :gradle-plugin:shared:compileKotlin
  > Task :gradle-plugin:shared:compileJava NO-SOURCE
  > Task :gradle-plugin:shared:classes UP-TO-DATE
  > Task :gradle-plugin:shared:jar
  > Task :gradle-plugin:settings-plugin:compileKotlin
  > Task :gradle-plugin:settings-plugin:compileJava NO-SOURCE
  > Task :gradle-plugin:settings-plugin:classes
  > Task :gradle-plugin:settings-plugin:jar
  > Task :gradle-plugin:react-native-gradle-plugin:checkKotlinGradlePluginConfigurationErrors
  > Task :expo-dev-launcher-gradle-plugin:checkKotlinGradlePluginConfigurationErrors
  > Task :expo-dev-launcher-gradle-plugin:pluginDescriptors
  > Task :expo-dev-launcher-gradle-plugin:processResources
  > Task :gradle-plugin:react-native-gradle-plugin:pluginDescriptors
  > Task :gradle-plugin:react-native-gradle-plugin:processResources
  > Task :gradle-plugin:react-native-gradle-plugin:compileKotlin
  > Task :gradle-plugin:react-native-gradle-plugin:compileJava NO-SOURCE
  > Task :gradle-plugin:react-native-gradle-plugin:classes
  > Task :gradle-plugin:react-native-gradle-plugin:jar
  > Task :expo-dev-launcher-gradle-plugin:compileKotlin
  > Task :expo-dev-launcher-gradle-plugin:compileJava NO-SOURCE
  > Task :expo-dev-launcher-gradle-plugin:classes
  > Task :expo-dev-launcher-gradle-plugin:jar
  > Configure project :app
  > ℹ️ [33mApplying gradle plugin[0m '[32mexpo-dev-launcher-gradle-plugin[0m' (expo-dev-launcher@5.0.29)
  > Configure project :expo-modules-core
  > WARNING: The following problems were found when resolving the SDK location:
  > Where: sdk.dir property in local.properties file. Problem: Directory does not exist
  > Configure project :expo
  > Using expo modules
  - [32mexpo-application[0m (6.0.2)
  - [32mexpo-asset[0m (11.0.4)
  - [32mexpo-blur[0m (14.0.3)
  - [32mexpo-constants[0m (17.0.7)
  - [32mexpo-crypto[0m (14.0.2)
  - [32mexpo-dev-client[0m (5.0.12)
  - [32mexpo-dev-launcher[0m (5.0.29)
  - [32mexpo-dev-menu[0m (6.0.19)
  - [32mexpo-file-system[0m (18.0.11)
  - [32mexpo-font[0m (13.0.4)
- [32mexpo-haptics[0m (14.0.1)
  - [32mexpo-json-utils[0m (0.14.0)
  - [32mexpo-keep-awake[0m (14.0.3)
  - [32mexpo-linking[0m (7.0.5)
  - [32mexpo-manifests[0m (0.15.7)
  - [32mexpo-modules-core[0m (2.2.2)
  - [32mexpo-random[0m (14.0.1)
  - [32mexpo-secure-store[0m (14.0.1)
  - [32mexpo-splash-screen[0m (0.29.22)
  - [32mexpo-system-ui[0m (4.0.8)
  - [32mexpo-web-browser[0m (14.0.2)
    > Configure project :react-native-firebase_analytics
    > :react-native-firebase_analytics package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/analytics/package.json
    > :react-native-firebase_app package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/app/package.json
    > :react-native-firebase_analytics:firebase.bom using default value: 33.9.0
    > :react-native-firebase_analytics package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/analytics/package.json
    > :react-native-firebase_analytics:version set from package.json: 21.12.0 (21,12,0 - 21012000)
    > :react-native-firebase_analytics:android.compileSdk using custom value: 35
    > :react-native-firebase_analytics:android.targetSdk using custom value: 34
    > :react-native-firebase_analytics:android.minSdk using custom value: 24
    > :react-native-firebase_analytics:reactNativeAndroidDir /home/expo/workingdir/build/app/node_modules/react-native/android
    > Configure project :react-native-firebase_app
    > :react-native-firebase_app package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/app/package.json
    > :react-native-firebase_app:firebase.bom using default value: 33.9.0
    > :react-native-firebase_app:play.play-services-auth using default value: 21.3.0
    > :react-native-firebase_app package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/app/package.json
    > :react-native-firebase_app:version set from package.json: 21.12.0 (21,12,0 - 21012000)
    > :react-native-firebase_app:android.compileSdk using custom value: 35
    > :react-native-firebase_app:android.targetSdk using custom value: 34
    > :react-native-firebase_app:android.minSdk using custom value: 24
    > :react-native-firebase_app:reactNativeAndroidDir /home/expo/workingdir/build/app/node_modules/react-native/android
    > Configure project :react-native-firebase_auth
    > :react-native-firebase_auth package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/auth/package.json
    > :react-native-firebase_app package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/app/package.json
    > :react-native-firebase_auth:firebase.bom using default value: 33.9.0
    > :react-native-firebase_auth package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/auth/package.json
    > :react-native-firebase_auth:version set from package.json: 21.12.0 (21,12,0 - 21012000)
    > :react-native-firebase_auth:android.compileSdk using custom value: 35
    > :react-native-firebase_auth:android.targetSdk using custom value: 34
    > :react-native-firebase_auth:android.minSdk using custom value: 24
    > :react-native-firebase_auth:reactNativeAndroidDir /home/expo/workingdir/build/app/node_modules/react-native/android
    > Configure project :react-native-firebase_crashlytics
    > :react-native-firebase_crashlytics package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/crashlytics/package.json
    > :react-native-firebase_app package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/app/package.json
    > :react-native-firebase_crashlytics:firebase.bom using default value: 33.9.0
    > :react-native-firebase_crashlytics package.json found at /home/expo/workingdir/build/app/node_modules/@react-native-firebase/crashlytics/package.json
    > :react-native-firebase_crashlytics:version set from package.json: 21.12.0 (21,12,0 - 21012000)
    > :react-native-firebase_crashlytics:android.compileSdk using custom value: 35
    > :react-native-firebase_crashlytics:android.targetSdk using custom value: 34
    > :react-native-firebase_crashlytics:android.minSdk using custom value: 24
    > :react-native-firebase_crashlytics:reactNativeAndroidDir /home/expo/workingdir/build/app/node_modules/react-native/android
    > Configure project :react-native-reanimated
    > Android gradle plugin: 8.6.0
    > Gradle: 8.13
    > [Incubating] Problems report is available at: file:///home/expo/workingdir/build/app/android/build/reports/problems/problems-report.html
    > Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.
    > You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
    > For more on this, please refer to https://docs.gradle.org/8.13/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
    > FAILURE: Build failed with an exception.

* What went wrong:
  Could not determine the dependencies of task ':expo:compileDebugJavaWithJavac'.
  > Could not resolve all dependencies for configuration ':expo:debugRuntimeClasspath'.
  > Invalid format: 'org.jetbrains.kotlin:kotlin-stdlib:'. Group, name and version cannot be empty. Correct example: 'org.gradle:gradle-core:1.0'
* Try:
  > Run with --stacktrace option to get the stack trace.
  > Run with --info or --debug option to get more log output.
  > Run with --scan to get full insights.
  > Get more help at https://help.gradle.org.
  > BUILD FAILED in 2m 2s
  > 18 actionable tasks: 18 executed
  > Error: Gradle build failed with unknown error. See logs for the "Run gradlew" phase for more information.
