import React from "react";
import {View,Text, TouchableOpacity} from 'react-native'



class Car extends React.Component {

    constructor(props) {
      super(props);
      this.state = {color: "red"};
    }

    name() {
    console.log('hamza')
    }

   
    render() {
      return (
          <TouchableOpacity
          style={{backgroundColor:'red',height:100,width:'50%'}}>
              <Text>{}</Text>
          </TouchableOpacity>
      )
    }
  }


  export default Car