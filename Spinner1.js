import React, { Component } from "react";
import { Platform, StyleSheet, View, Button, Picker, Alert ,Text} from "react-native";

export default class Spinner1 extends Component {

  constructor(){
     super();
     this.state={
       PickerSelectedVal : ''
     }
   }

  


  render() {
    return (
      <View style={styles.container}>
      <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="1" value="1" />
           <Picker.Item label="2" value="2" />
           <Picker.Item label="3" value="3" />
           <Picker.Item label="4" value="4" />
           <Picker.Item label="5" value="5" />
           <Picker.Item label="6" value="6" />
           <Picker.Item label="7" value="7" />


         </Picker>
        
      
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
   

    justifyContent: "center",
    marginLeft :30,
    width:80,
        borderWidth:0.3,
height:30,
borderColor:'white',
backgroundColor:'white',
  },
  
});