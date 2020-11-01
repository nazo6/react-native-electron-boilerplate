import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {showAlert} from './alert'

const App = () => {
  return (
    <>
      <View style={styles.main}>
        <Text>Hello React Native World!</Text>
        <Button onPress={showDialog} title="Alert" />
      </View>
    </>
  )
}

const showDialog = () => {
  showAlert('Native Dialog!', 'Content')
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
