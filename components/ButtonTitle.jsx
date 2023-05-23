import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import React from 'react'

const ButtonTitle = ({ title, action }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonTitle

const styles = ScaledSheet.create({
  container: {
    margin: '10@s',
    alignSelf: 'center',
    padding: '10@s',
    backgroundColor: '#2774ba',
    borderRadius: '5@s',
    alignItems: 'center'
  },
  title: {
    color: '#ffffff'
  }
})