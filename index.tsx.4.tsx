import { FlatList, StyleSheet, Text, View } from 'react-native';
let jogos=[
  {nome:"O-puro-mal",media:"dificuldade",categoria:"rpg",tamanho:"20gb",nota:"5,0"}
]
let texto=[
        {
            "id_usuario": 24,
        "nome_usuario": "mark",
        "email": "bombarapida@hotmail.com",
        "data_de_nascimento": "2000-01-01",
        "id_grupo": 3,
        "data_criacao": "2024-10-25 14:26:00",
        "deletado": 0,
        "nome_grupo": "cliente",
        },
         {
            "id_usuario": 25,
        "nome_usuario": "mark",
        "email": "bombarapida@hotmail.com",
        "data_de_nascimento": "2000-01-01",
        "id_grupo": 3,
        "data_criacao": "2024-10-25 14:26:00",
        "deletado": 0,
        "nome_grupo": "cliente",
        }, {
            "id_usuario": 26,
        "nome_usuario": "mark",
        "email": "bombarapida@hotmail.com",
        "data_de_nascimento": "2000-01-01",
        "id_grupo": 3,
        "data_criacao": "2024-10-25 14:26:00",
        "deletado": 0,
        "nome_grupo": "cliente",
        }
]

export default function App(){
  return (
  <View>
    <FlatList
    data={jogos}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={styles.card}>
        <text style={styles.nome}>{item.nome}</text>
        <text>nome: {item.nome}</text>
        <text>dificuldade: {item.media}</text>
        <text>categoria: {item.categoria}</text>
        <text>tamanho: {item.tamanho}</text>
        <Text>nota: {item.nota}</Text>
        </View>
        

)}
/>
    
  </View>
  )
} 


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});



