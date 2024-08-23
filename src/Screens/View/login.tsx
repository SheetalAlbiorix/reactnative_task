import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../Style/login';
import { loginModel } from '../ViewModel/login';

export default function Login() {

  const model = loginModel()

  useEffect(() => {
    model.abc()
    model.abdbsbs("sjdvasjv")
  }, [model.first])
  
  return (
    <SafeAreaView>
      <View>
        <TextInput style={{}}></TextInput>
      </View>
    </SafeAreaView>
  )
}

