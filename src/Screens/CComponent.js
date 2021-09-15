import React, { Component } from "react";
import {View,Text, Touchable, TouchableOpacity} from 'react-native'



class CComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            message:'Class Component',
            date: new Date().toString()
        }
    }

    componentDidMount(){
        console.log('I am DidMount') 
        // this.interval = setInterval(this.showDate,1000)
    }

    componentDidUpdate(){
        console.log('I am DidUpdte')
    }

    componentWillUnmount(){
        console.log('I am WillUnmount')
        clearInterval(this.interval)
    }
    

    showDate = () => {
        this.setState({date: new Date().toString()})
    }


    render(){
        return (
            <View>
                <Text>{this.state.message}</Text>
                <Text>{this.state.date}</Text>
                <TouchableOpacity 
                onPress={()=>this.setState({message:'hello'})}
                style={{backgroundColor:'red',width:'100%',height:50,justifyContent:'center',alignItems:'center'}}>
                    <Text>Date</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default CComponent