import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Image} from 'react-native';

export default function Cadastro(){
  return(

      <View style = {styles.fundo}>
          <Image style={styles.imagem} source={require('../assets/Logo.png')} />

          <View style = {styles.subtela}>
           <Text style = {styles.texto}> Para conhecermos um pouco mais de você,  será necessário o preenchimento de alguns dados pessoais.  Para isso, responda as perguntas abaixo: </Text>
            <Text style = {styles.txt1}> Informe-nos seu nome completo: </Text>

            <TextInput style = {styles.caixa}> </TextInput>
            
            <Text style = {styles.txt1}> Informe-nos sua idade: </Text>
            
            <TextInput style = {styles.caixa}> </TextInput>
            
            <Text style = {styles.txt1}> Informe-nos o tipo de sua Diabetes: </Text>
            
            <TextInput style = {styles.caixa}> </TextInput>
            
            <Text style = {styles.txt1}> Informe-nos seu peso: </Text>
            
            <TextInput style = {styles.caixa}> </TextInput>
            
            <Text style = {styles.txt1}> Informe-nos sua altura: </Text>
            
            <TextInput style = {styles.caixa}> </TextInput>
            
            <Text style = {styles.txt1}> Você possui alguma outra comorbidade? Se sim, qual </Text>
            
            <TextInput style = {styles.caixa}> </TextInput>

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
    
  },
  imagem:{
    height: 100,
    width: 100,
    resizeMode: 'center',
    alignSelf: 'center'
  },
  txt1:{
    fontWeight: '400',
    color: '#2E2E2E',
    textAlign: 'justify',
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15
  },
  subtela:{
    backgroundColor: '#F1B8C9',
    margin: 10,
    textAlign: 'center',
    borderRadius: 5
  },
  caixa:{
    borderWidth: 1,
    padding: 4, 
    borderRadius: 2,
    margin: 15
  }
});
