import React,{useEffect, useState} from "react";
import {View,Text, FlatList, Touchable, TouchableOpacity, TouchableHighlight} from 'react-native'


const MyScreen = () => {

    const [Data,SetData] = useState([])
   


    const getRequestFromApi = () => {
      const Header = {
        'Content-Type': "application/json",
        "Accept": "application/json",
      }
  
      const requestOptions = {
        method: 'GET',
        headers: Header,
      //   body: JSON.stringify({ first_name: SignData.Fname, last_name: SignData.Lname, email: SignData.Email, password: SignData.Password, phone: SignData.Phone })
      };
      return fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
        .then((response) => response.json())
        .then((json) => {
          // console.log(json)
          return SetData(json);
        })
        .catch((error) => {
          console.error(error);
        });
    };



  
  useEffect(()=>{
    getRequestFromApi()
  },[])

   



    return(
        <View>
        <Text>{Data.id}</Text>
        <TouchableOpacity
        onPress={()=>{
        SetData((prev)=>prev+1)
        }}
        >
          <Text>Click me</Text>
        </TouchableOpacity>
        </View>
    )
}


export default MyScreen