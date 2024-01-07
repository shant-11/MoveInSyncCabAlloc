import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
            style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
            }}
            source={{
                uri: 'https://lh3.ggpht.com/ky1hJdJd9lefAcaDQDa3DIPtBPcQ8uWlnkB0P3sHMfjSzC58UyrpLki5gyYazPtmNMxq=w300',
            }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})