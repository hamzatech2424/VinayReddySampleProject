import React, { useState,useEffect } from "react";
import {View,Text, ScrollView,FlatList} from "react-native";



const ScreenToShowData = () => {


   //useState Hook
   const [Data,SetData] = useState([])


//    const obj = {
//        name:'hamza',
//        age:25,
//        func: ()=> {
//            return 1
//        }
//    }

//    const arrObj = [
//        {
//         name:'aaaa',
//         age:25,

//        }, 
//        {
//         name:'ALi',
//         age:25,
//        }
//    ]

 


    const PostRequestForSignUp = async () => {
        const Header = {
          'Content-Type': "application/json",
          "Accept": "application/json",
        }
    
        const requestOptions = {
          method: 'GET',
          headers: Header,
        //   body: JSON.stringify({ first_name: SignData.Fname, last_name: SignData.Lname, email: SignData.Email, password: SignData.Password, phone: SignData.Phone })
        };
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
          const data = await response.json()
          SetData(data)
    
        }
        catch (err) {
          console.log(err)
        }
      }

    
    

     
      PostRequestForSignUp()

     









    return(

        

        // Array Map Method to render
        // <ScrollView  >
        // <View style={{flex:1}}>
           
        //     {
        //         Data.map((val,index)=>{

        //             return <View key={index} style={{width:'100%',height:50,backgroundColor:'red'}}>
        //                     <Text>{val.id}</Text>
        //                   </View>
        //         })
        //     }
     
        // </View>
        // </ScrollView>


 


        //FlatList used for data rendering
         <FlatList
         showsVerticalScrollIndicator={false}
         data={Data}
         renderItem={({item, index})=>{
          return(
          <View key={index} style={{width:'100%',height:50,backgroundColor:'red'}}>
            <Text>{item.id}</Text>
          </View>  
          )   
         }}
         keyExtractor={item => item.id}
         />














    )
}


export default ScreenToShowData