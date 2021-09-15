import React,{Component, useEffect, useState} from "react";
import {View,Text, TouchableOpacity} from 'react-native'



const FComponent = () => {

const [date,setDate] = useState(new Date().toString())
const [message,setMessage] = useState('This is My Message')
const [deve,setDeve] = useState(false)


useEffect(()=>{
    
    console.log('I am useEffect')

  return ()=>{
      console.log('Component Will Un mount')
  }
},[])

    return (
        <View>
            <Text>{date}</Text>
            <Text>{message}</Text>
            <TouchableOpacity
            // onPress={()=>setDeve((prev)=>!prev)}e
            onPress={()=>setMessage('Hai')}
            style={{backgroundColor:'green',height:50,width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text>Message</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FComponent