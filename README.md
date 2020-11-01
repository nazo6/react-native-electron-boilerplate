# react-native-electron-boilerplate

React Native + Electron using react-native-web

Boilerplate for react-native multiplatform development. You can run app in both desktop and mobile.

## Usage

1. Clone this repository.
2. You should replace app id.
   Search "rnelectron" and replace it.
3. Install dependencies.
   ```
   yarn
   ```
4. Start app.
   ```
   yarn desktop:start
   ```
   You also can launch in mobile device
   ```
   yarn android
   ```

## Commands

Launch in electron

```
yarn desktop:start
```

Release using electron-builder

```
yarn desktop:release
```

Launch in android

```
yarn android
```

Launch in iOS (I have not tested yet.)

```
yarn ios
```

## Using react-native-\* library

If you want to use react native library, you should add library name to `electron/libraries.json`.

Example:

```json
[
  "react-native-elements",
  "react-native-vector-icons",
  "react-native-ratings",
  "react-native-vector-icons",
  "react-native-tab-view",
  "react-native-reanimated"
]
```

## Using react-native-gesture-handler

If you want to use `react-native-gesture-handler` or libraries depend on it, you need to downgrade `react-native-web` v0.12 (related with [this issue](https://github.com/software-mansion/react-native-gesture-handler/issues/1164)).
This problem will be solved soon.
