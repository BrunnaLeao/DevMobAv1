import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';




export default function playscreen(props) {
  
  const [pontos,setPontos] = useState(0);
  const [acertou,setAcertou] = useState("");
  const [resultado,setResultado] = useState("");
  

 

  const rodar = () => {
     
    

    let numPlayer = Math.floor(Math.random()*6+1);
    let numComputer = Math.floor(Math.random()*6+1);

    if(numPlayer>numComputer){
      setPontos(pontos + 1);
      setAcertou("Você tirou "+ numPlayer + " e eu "+numComputer + ".Ponto para você");

    }else if(numComputer>numPlayer){
      setPontos(pontos - 1);
      setAcertou("Você tirou "+ numPlayer + " e eu "+numComputer + ".Ponto para mim");
    }else{
      setAcertou("Você tirou "+ numPlayer + " e eu "+numComputer + ".Empatamos!");
    }

    setInterval(() =>{
      setAcertou('Tempo Esgotado! Clique em ROLL DICE para jogar novamente!');
        setInterval(()=> {
          setPontos(0);
        },2000);      

    },12000);
  }
  

  return (
    

    <View style={styles.container}>

      <Text style={styles.titulo}>{resultado}</Text>
      <Text style={styles.titulo}>{acertou}</Text>

      <Text style={styles.titulo}>Pontos: {pontos}</Text>
      

      <TouchableOpacity style={styles.playbutton} onPress={rodar} >
        <Text style={styles.playtext}>Roll Dice</Text>
      </TouchableOpacity>

     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    alignItems: 'center',
    fontSize: 20,
    color: '#1AA7EC',
    marginBottom: 20,
    
  },
  
  playbutton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius: 20,
    height: 80,
    width: 160,
    padding: 15,
    borderColor: '#1E2F97',
    borderWidth: 1,
    
  },

  playtext: {
    alignItems: 'center',
    fontSize: 30,
    color: '#4ADEDE',
  }
  


 
});
