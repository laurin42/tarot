Uncaught Error: No Firebase App '[DEFAULT]' has been created - call firebase.initializeApp()
at getApp (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:116020:13)
at firebaseModuleWithApp (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:113753:44)
at CrashlyticsService.log (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:113390:32)
at entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:125554:48
at commitHookEffectListMount (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:30008:32)
at commitPassiveMountOnFiber (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:31501:19)
at commitPassiveMountEffects_complete (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:31473:15)
at commitPassiveMountEffects_begin (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:31463:13)
at commitPassiveMountEffects (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:31453:9)
at flushPassiveEffectsImpl (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:33336:9)
at flushPassiveEffects (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:33289:20)
at entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:33104:15
at workLoop (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:35974:40)
at flushWork (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:35952:20)
at MessagePort.performWorkUntilDeadline (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:36189:27)Understand this errorAI
entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:86087 Auth state changed: Object
hook.js:608 The above error occurred in the <App> component:

    at App (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:125535:26)
    at Suspense
    at Route (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:68084:5)
    at http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:68425:11
    at StaticContainer (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:132767:18)
    at EnsureSingleNavigator (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:129448:5)
    at SceneView (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:132658:5)
    at PreventRemoveProvider (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:131378:5)
    at NavigationContent (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:132385:5)
    at http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:132401:7
    at SlotNavigator (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:74021:50)
    at Slot (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:74052:50)
    at RootLayoutNav (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:86081:34)
    at ThemeProvider (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:129586:5)
    at AuthProvider (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:78940:5)
    at UserProvider (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:79227:5)
    at RootLayout (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:86116:60)
    at Suspense
    at Route (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:68084:5)
    at http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:68425:11
    at div
    at http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:37494:27
    at CssInteropComponent (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:4365:38)
    at NativeSafeAreaProvider (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:126969:5)
    at SafeAreaProvider (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:126838:9)
    at wrapper (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:75744:7)
    at ThemeProvider (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:129586:5)
    at EnsureSingleNavigator (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:129448:5)
    at BaseNavigationContainer (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:127908:5)
    at NavigationContainerInner (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:75913:9)
    at ContextNavigator (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:75766:5)
    at ExpoRoot (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:75735:18)
    at _HelmetProvider (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:168237:7)
    at App
    at LogBoxStateSubscription (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:59535:9)
    at ErrorOverlay
    at withDevTools(ErrorOverlay)
    at AppContainer (http://localhost:8081/node_modules/expo-router/entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:50429:5)

React will try to recreate this component tree from scratch using the error boundary you provided, LogBoxStateSubscription.
overrideMethod @ hook.js:608Understand this errorAI
entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:116077 Uncaught (in promise) Error: Missing or invalid FirebaseOptions property 'databaseURL'.
at Object.initializeApp (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:116077:29)
at entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:125548:22
at commitHookEffectListMount (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:30008:32)
at commitPassiveMountOnFiber (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:31501:19)
at commitPassiveMountEffects_complete (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:31473:15)
at commitPassiveMountEffects_begin (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:31463:13)
at commitPassiveMountEffects (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:31453:9)
at flushPassiveEffectsImpl (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:33336:9)
at flushPassiveEffects (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:33289:20)
at entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:33104:15
at workLoop (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:35974:40)
at flushWork (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:35952:20)
at MessagePort.performWorkUntilDeadline (entry.bundle?platform=web&dev=true&hot=false&transform.routerRoot=app:36189:27)Add prompt contents..
