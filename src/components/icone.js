import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import styles from '../../App';

class Icone extends Component{
    render() {
     
      if (this.props.escolha == 'Pedra') {
        return (
          <View style={styles.icone}>
          <Text style={styles.txtJogador} > { this.props.jogador } </Text >
        <Image source={require('../../img/pedra.png')} />
        </View>
    );
  
      } else if (this.props.escolha == 'Papel') {
        return (
          <View style={styles.icone}>
          <Text  style={styles.txtJogador}> { this.props.jogador } </Text >
        <Image source={require('../../img/papel.png')} />
        </View>
    );
  
      } else if (this.props.escolha == 'Tesoura') {
        return (
          <View style={styles.icone}>
          <Text  style={styles.txtJogador}> { this.props.jogador } </Text >
        <Image source={require('../../img/tesoura.png')} />
        </View>
    );
        
      } else {
        return false;
      }
    }
}

const styles = StyleSheet.create({
   icone: {
    alignItems: 'center',
    marginBottom: 10,
  },
  txtJogador: {
    fontSize: 15
  }
});
  
export default Icone;
