import React, { useEffect, useState } from "react";
import { TouchableOpacity,Text } from 'react-native'




const Button1 = (Props) => {  


    const [count,setCount] = useState(0)


useEffect(()=>{

setTimeout(()=>{
console.log('Hamza')
},5000)



},[])


    

    // console.log(myData,'Buttons')

    // console.log(Props.myData)



    const defaultColor = Props.color ? Props.color : 'red'



    return(
         <TouchableOpacity
         onPress={()=>setCount(count+1)}
         style={{width:'80%',height:50,backgroundColor:defaultColor,justifyContent:'center',alignItems:'center'}}>
             <Text style={{color:'white'}}>{count}</Text>
         </TouchableOpacity>
    )
}

export default Button1