import { Image } from 'expo-image';
import { Platform, StyleSheet,Text,View,TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={{backgroundColor:'purple', margin: 20, padding: 20}}>
      <Text style={{color:"blue", fontSize: 20}}>nome</Text>
      <TextInput style={{backgroundColor: 'lightblue'}} /> 
    </View>

    <View style={styles.div}>
    <Text style={Styles.texto}>nome</Text>
    <TextInput style={Styles.input} /> 
    </View>

    <View style={styles.div}>
    <Text>estado</Text>
    <Picker>
      <Picker.item label="admim" value="admim"/>
      <Picker.item label="professional" value="admim"/>
      <Picker.item label="cliente" value="cliente"/>
      <Picker.item label="gerente" value="gerente"/>
    </Picker>
  );
}

const styles = StyleSheet.create({
  texto:{
  fontSize: 10,
  color: 'blue'
  },
  input:{
  backgroundColor: 'darkblue'
},
});
