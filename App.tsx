import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput
} from 'react-native'

function App(){
  return(
<ScrollView>
  <View>
    <Image
     source={{
      uri: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     }}    
     style={{width:450, height:400, marginVertical: 50}}
    />
   
    <Text style={{fontSize:25, margin:10}}>Hello this is my first mobile application</Text>

    <TextInput style={{
      height:40,
      borderColor: 'gray',
      borderWidth:1,
      margin:20,
    }}
    defaultValue="You can type in me"
    >

    </TextInput>
  </View>
</ScrollView>
  )
}

export default App;