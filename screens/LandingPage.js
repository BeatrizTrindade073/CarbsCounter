import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Pressable, Image} from 'react-native';


export default function LandingPage({navigation}){
  return(

      <View style = {styles.fundo}>
          <Image style={styles.imagem} source={require('../assets/Logo.png')} />
          <View style = {styles.subtela}>
       
          <Text style = {styles.texto}> CarbsCounter </Text>
            <Text style = {styles.txt1}> Pensando nas  dificuldades encontradas pelos 
diabéticos em encontrar informações confiáveis 
sobre sua doença e tratamento,  trazemos uma 
solução eficiente e inovadora, que reune menores 
soluções já conhecidas, mas que juntas fazem toda 
a diferença na vida do diabético.  </Text>
<Text style = {styles.txt1}> O CarbsCounter reune uma tabela nutricional  para lhe auxiliar na contagem 
e no controle de carboidratos ingeridos e um diário glicêmico para que se possa registrar a quantidade dos mesmos consumidos em média por refeição, o índice glicêmico antes e após as refeições e a dose de medicamento aplicada. O diário glicêmico habilita-nos a fazer um relatório do usuário, destacando padrões de hiper ou hipoglicemia. O  sistema também apresenta conteúdo informativo para lhe ajudar a compreender e a lidar melhor com o diabetes. </Text>
        
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
    fontFamily: 'Reem Kufi',
    fontWeight: 400,
    fontSize: 15,
    color: '#58136B',
    lineHeight: 20,
    textAlign: 'justify',
    margin: 10
  },
  imagem:{
    height: 50,
    width: 50,
    resizeMode: 'center',
    alignSelf: 'center'
  },
  subtela:{
    backgroundColor: '#E9D6F0',
    margin: 10,
    textAlign: 'center',
    borderRadius: 5
  },
});
