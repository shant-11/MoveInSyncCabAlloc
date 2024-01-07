import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'login',
  },
]

const NavOptions = () => {
    const navigation = useNavigation();

  return (
    <FlatList 
      data = {data}
      keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-25 pb-8 pt-4 bg-gray-300 mt-10 w-100` }>
                <View>
                    <Image 
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                        }}
                        source={{
                            uri: item.image,
                        }}
                    />      
                    <Text style={tw`text-lg font-semibold pl-2`}>{item.title}</Text>
                    <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright" color="white" type="antdesign" />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})