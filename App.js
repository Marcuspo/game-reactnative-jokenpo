import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Image } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }
  
  jokenpo(escolhaUsuario) {

    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }

    var resultado = '';

    if (escolhaComputador == 'Pedra') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'Papel'){
        resultado = 'Você ganhou';
      }
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Você perdeu';
      }
    }
      if (escolhaComputador == 'Papel') { 
        if (escolhaUsuario == 'Pedra') {
          resultado = 'Você perdeu';
        }
        if (escolhaUsuario == 'Papel') {
          resultado = 'Empate';
        }
        if (escolhaUsuario == 'Tesoura')
        resultado = 'Você ganhou';
      }
    
    if (escolhaComputador == 'Tesoura') {
      if (escolhaUsuario == 'Pedra') { 
        resultado = 'Você ganhou';
      }
      if (escolhaUsuario == 'Papel') { 
        resultado = 'Você perdeu';
      }
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Empate';
      }
     } 

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
    resultado: resultado });
}

render(){ 
  return (
    <View style={styles.fundo}>

      <Topo> </Topo>

      <View style={styles.painelAcoes}> 
        
        <View style={styles.btnescolha}>
          <Button title="Pedra" onPress={() => { this.jokenpo('Pedra') }} />
        </View>    
        
        <View style={styles.btnescolha}>
          <Button title="Papel" onPress={() => { this.jokenpo('Papel') }} />
        </View>   
        
        <View style={styles.btnescolha}>
          <Button title="Tesoura" onPress={() => { this.jokenpo('Tesoura') }} />
        </View>        
      </View>
      
      <View style={styles.palco}>

        <Icone escolha={this.state.escolhaComputador} jogador={'Escolha computador:'}></Icone>
        <Icone escolha={this.state.escolhaUsuario} jogador={'Escolha usuário: '}></Icone>

        <Text style={styles.txtResultado}> {this.state.resultado} </Text>
        
      </View>       
      </View>
    );
  }
}

class Topo extends Component{
  render() {
    return(
    <View> 
        <Image source={require('./img/topo.png')}
        style={{
          width: 360,
          height: 300,
          resizeMode: Image.resizeMode.contain,
        }} />
      </View>
      )
  };
}

class Icone extends Component{
  render() {
   
    if (this.props.escolha == 'Pedra') {
      return (
        <View style={styles.icone}>
        <Text style={styles.txtJogador} > { this.props.jogador } </Text >
      <Image source={require('./img/pedra.png')} />
      </View>
  );

    } else if (this.props.escolha == 'Papel') {
      return (
        <View style={styles.icone}>
        <Text  style={styles.txtJogador}> { this.props.jogador } </Text >
      <Image source={require('./img/papel.png')} />
      </View>
  );

    } else if (this.props.escolha == 'Tesoura') {
      return (
        <View style={styles.icone}>
        <Text  style={styles.txtJogador}> { this.props.jogador } </Text >
      <Image source={require('./img/tesoura.png')} />
      </View>
  );
      
    } else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: 'white',
    flex: 1
  },
  btnescolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15
  },
  palco: {
    alignItems: 'center',
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
  icone: {
    alignItems: 'center',
    marginBottom: 10,
  },
  txtJogador: {
    fontSize: 15
  }
}); 


AppRegistry.registerComponent('Jokenpo', () => App);