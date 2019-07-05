import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
 
} from 'react-native';

export default class CustomButton extends Component{

 static defaultProps = {
    title: 'POST',
    buttonColor: '#023e71',
    titleColor: 'white',
    onPress:() => alert('게시글 등록 버튼'),
  }


  constructor(props){
    super(props);
  }

   render(){
    return (
      <TouchableOpacity style={[
        styles.button,
        {backgroundColor: this.props.buttonColor}
      ]}
      onPress={this.props.onPress}>
        <Text style={[
          styles.title,
          {color: this.props.titleColor}
        ]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
   button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   margin: 15,
    borderRadius: 5,
    height:30,
    
  
    
  },
  title: {
    fontSize: 15,
  },
});