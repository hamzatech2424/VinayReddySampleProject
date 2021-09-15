import React,{useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet,Dimensions, TextInput} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button1 from "./Button1";


const LoginScreen = (props) => {

    const Dim = Dimensions.get('screen')

    // console.log(Dim)

    // console.log(props , 'LoginScreenProps')

    
    const [SignUpdata,SetSignUpdata] = useState({
        email :'',
        password: ''
    })


    const [isCompleted,setIsCompleted] = useState(false)
   

    // console.log(isCompleted)


    // console.log(SignUpdata.email,'Email',SignUpdata.password,'Password')


    return (
        <React.Fragment>
            <View style={styles.conatiner} >


                <View style={{backgroundColor:'red',width:'80%',height:450}} >

                    <View style={{backgroundColor:'black',width:'100%',height:150,justifyContent:'space-between'}}>

                    <Text style={{fontSize:25,color:'white',alignSelf:'center',paddingTop:20}}>Recepie Daily</Text>

                    <Text style={{fontSize:18,color:'white',alignSelf:'center',paddingBottom:20}}>Register</Text>

                    </View>




                    <View style={{backgroundColor:'green',width:'100%',height:250}}>


                   
                      <View style={{backgroundColor:'orange',width:'100%',height:40,flexDirection:'row'}}>
                        
                        <View style={{backgroundColor:'blue',width:'10%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <FontAwesome name="user" size={25} color="white" />
                        </View>
                        <View style={{backgroundColor:'lightgreen',width:'90%',height:'100%'}}>
                       
                       <TextInput placeholder={'UserName'} value={SignUpdata.email}

                        onChangeText={(txt)=>SetSignUpdata({...SignUpdata,email:txt})}

                         style={{width:'100%',height:'100%'}}   />
                        </View>


                      </View>





                      <View style={{backgroundColor:'orange',width:'100%',height:40,flexDirection:'row'}}>
                        
                        <View style={{backgroundColor:'blue',width:'10%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <FontAwesome name="user" size={25} color="white" />
                        </View>
                        <View style={{backgroundColor:'lightgreen',width:'90%',height:'100%'}}>
                       
                       <TextInput placeholder={'UserName'} value={SignUpdata.password}

                        onChangeText={(txt)=>SetSignUpdata({...SignUpdata,password:txt})}

                         style={{width:'100%',height:'100%'}}   />
                        </View>


                      </View>




                      <Button1 myName={'LogIn'}  color={'pink'} myData={SignUpdata}
                    
                      />

                      {/* <Button1 myName={'SignIn'} color={'red'} /> */}






                     










                    </View>

                    <View style={{backgroundColor:'pink',width:'100%',height:50}}>
                    </View>



                </View> 



            </View>
        </React.Fragment>
    )

}


export default LoginScreen


const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})