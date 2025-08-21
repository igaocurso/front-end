import { Image } from 'expo-image';
import { ScrollView,StyleSheet,Text,TextInput,View } from 'React-native';
import { Picker } from '@react-native-picker/picker';
import React from 'React';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    <ScrollView>
    <View style={{backgroundColor:'purple', margin: 20, padding: 20}}>
      <Text style={{color:'blue', fontSize: 20}}>Nome</text>
      <TextInput style={{backgroundColor: 'lightblue'}} /> 
    </View>

    <View style={styles.div}>
     <Text style={Styles.texto}>Nome</Text>
    <TextInput style={Styles.input}/> 
    </View>

    <View style={styles.div}>
    <Text>Grupo</Text>
    <Picker>
      <Picker.item label="Admim" value="admim"/>
      <Picker.item label="ProfIssional" value="profIssional"/>
      <Picker.item label="Cliente" value="cliente"/>
      <Picker.item label="Gerente" value="gerente"/>
    </Picker>
    </View>
    </View>

    <View style={styles.div}>
    <TEXT>Estado:</TEXT>
    <picker>
          <picker.item label="Selecione um estado" value="" />
          <picker.item label="Amazonas" value="AM" />
          <picker.item label="Espirito santo" value="ES" />
          <picker.item label="Rio de janeiro" value="RJ" />
          <picker.item label="Minas gerais" value="MG" />
          <picker.item label="Para" value="PA" />
          <picker.item label="Parana" value="PR" />
          <picker.item label="Rio grande so sul" value="RS" />
          <picker.item label="Santa catarina" value="SC" />
          <picker.item label="São paulo" value="SP" />
          <picker.item label="Sergipe" value="SE" />
     </Picker>
     <view>
    <scrollview>
  );
}

</picker>
</view>

<view style={styles.div}>
<text>Estado:</text>
<picker>
{estados.map((estado)  => (
<Picker.item label={estado.label} value={estado.value} />
))}
    </picker>
  </view>
</srollview>
 };
}
//https://github.com/germanosilva25/react-native-apostila
const styles = styleSheet.create({
  texto:{
  fontSize: 10,
  color: 'blue'
  },
  input:{
  backgroundColor: 'darkblue'
},
});