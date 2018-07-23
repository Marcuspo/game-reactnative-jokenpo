import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Topo extends Component{
    render() {
      return(
      <View> 
          <Image source={require('../../img/topo.png')}
          style={{
            width: 360,
            height: 300,
            resizeMode: Image.resizeMode.contain,
          }} />
        </View>
        )
    };
}
  
export default Topo;