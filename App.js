/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,  View,TouchableOpacity,onPress,TextInput, Text, Slider} from 'react-native';
import CustomButton from './CustomButton';
import Datepicker from './Datepicker';
import Slider1 from './Slider1';
import Spinner1 from './Spinner1';
import TagStart from './TagStart';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.hi}><Text style={styles.fontcolor2}> This page is written by travelers </Text></View>
          <View style={styles.header}><Text style={styles.fontcolor}>  · 글제목 (Title)  </Text><TextInput style={styles.top}></TextInput></View>
          <View style={styles.header}><Text style={styles.fontcolor}>  · 기간 (Period)  </Text><Datepicker></Datepicker></View>
          <View style={styles.header}><Text style={styles.fontcolor}>  · 예산 (Budget)  </Text><Slider1></Slider1></View>
          <View style={styles.header}><Text style={styles.fontcolor}>  · 인원 (People)  </Text><Spinner1></Spinner1><Text style={styles.fontcolor}>   명 / 최대7명</Text></View>
          <View style={styles.A}>
          <Text style={styles.fontcolor}>  · 필수여행지 (Essential travel destinations)  </Text></View>
          <View style={styles.A}> 
          <Text style={styles.fontcolor3}> ( * Enter the tag and Press the spacebar    /   * How to delete tags => Touch the tag )</Text></View>
                  <TagStart style={styles.A}></TagStart>

          <View style={styles.title}><Text style={styles.fontcolor}>  · 특별요청사항 (Special requests)  </Text>
          <Text style={styles.fontcolor3}> ( Ex. No Smoking, Only Women/Men ... ) </Text>
          <TextInput style={styles.B} multiline={true}></TextInput></View>
 
      
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'white'}
            titleColor={'#52B5EF'}
            title={'CANCEL'}
            onPress={() => alert('게시글 취소 버튼')}/>
          < CustomButton />
               </View>
      </View>
    );
  
  }
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
   // padding: 10,
    backgroundColor: '#52B5EF',
  },
    
    top: {
   margin:30,
    width:'70%',
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth:0.3,
    fontSize:10,
        borderColor:'white',

  },
  fontcolor:{
    color:'white',
    fontSize:15,
  },
   fontcolor2:{
    color:'#52B5EF'
  },
 fontcolor3:{
    color:'white',
    fontSize:11,
    margin:3,

  },
  header: {
    flexDirection:"row",
    width:'100%',
    height:'10%',
   // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52B5EF',
    borderWidth:0.3,
    borderColor:'white',
  
    
  },

 A: {
    width:'100%',
    //height:'9%',
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#52B5EF',
    //borderWidth:0.3,
        borderColor:'white',
            fontSize:70,


  },

     B: {
   
    //width:'100%',
    height:'60%',
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth:0.3,
    fontSize:13
  },
  title: {
    width:'100%',
    height:'20%',
    //justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#52B5EF',
    borderWidth:0.3,
                borderColor:'white',
                    

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6ca1a',
        


  },
    blank: {
    width:'100%',
    height:'10%',
    backgroundColor: 'white',
  },
  footer: {
    flexDirection:"row",
   // width:'100%',
   // height:'50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52B5EF',
    //borderWidth:0.3,
    //borderColor:'white',
  },
  hi:{
     width:'100%',
    justifyContent: 'center',
    backgroundColor: 'white',
        borderColor:'white',
            fontSize:70,
                alignItems: 'center',

  },
});
