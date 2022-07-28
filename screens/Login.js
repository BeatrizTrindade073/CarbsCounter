import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Pressable, Button, Image} from 'react-native';

export default function Login({navigation}){
  return(

      <View style = {styles.fundo}>
<Image style={styles.imagem} source={require('../assets/Logo.png')} />

          <View style = {styles.subtela}>
       
          <Text style = {styles.texto}> Login </Text>
            <Text style = {styles.txt1}> Usuário </Text>
            <TextInput style = {styles.caixa}></TextInput>
            <Text style = {styles.txt1}> Senha </Text>
            <TextInput style = {styles.caixa}></TextInput>
            <Pressable style={styles.botao} title= "Entrar" onPress={()=>navigation.navigate("Cadastro")}> <Text style = {styles.txt}> Entrar </Text></Pressable>
          </View>
      
      </View>
  );
}

const styles = StyleSheet.create({
  fundo:{
    flex: 1,
    backgroundColor: '#CB6CE6'
  },
  texto: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: 'black',
    margin: 25
  },
  txt1:{
    color: '#2E2E2E',
    marginBottom: 10,
    textAlign: 'center',
  },//#F1A1BC
  subtela:{
    backgroundColor: '#E9D6F0',
    margin: 10,
    textAlign: 'center',
    borderRadius: 5
  },
  caixa:{
    borderWidth: 1,
    padding: 4, 
    borderRadius: 2,
    margin: 15
  },
  imagem:{
    height: 50,
    width: 50,
    resizeMode: 'center',
    alignSelf: 'center'
  },
botao:{
    backgroundColor: '#CB6CE6',
    padding: 4, 
    margin: 15
  }
});
