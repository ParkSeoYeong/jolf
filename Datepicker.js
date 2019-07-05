//This is an example code to get DatePicker//
import React, { Component } from 'react';
//import react in our code.
import { View, StyleSheet,Text } from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
//import DatePicker from the package we installed

export default class Datepicker extends Component {
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = { date:'', date1:''};
  
      }

  

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          style={{ width: 100}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2019-01-01"
          maxDate="2021-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
              borderColor:'white',
               backgroundColor: 'white',
              borderColor:'white'

            },
            placeholderText: {
                 color: '#52B5EF',

                  }
          }}
         onDateChange={date => {
            this.setState({ date: date });
          
          }}
        />
        <Text style={styles.fcolor}>       -    </Text>

<DatePicker
          style={{ width: 100}}
          date={this.state.date1} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2019-01-01"
          maxDate="2021-02-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
              color:'white',
              backgroundColor: 'white',
              borderColor:'white'

              
            },
             placeholderText: {
                      //fontSize: 18,
                      color: '#52B5EF',
                  }
          }}
          onDateChange={date => {
            this.setState({ date1: date });
          
          }}
        />

      </View>


      
    );
  }
}
const styles = StyleSheet.create({
  container: {
       flexDirection:"row",

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  //  marginTop: 20,
    padding: 10,
    
    
  },
  fcolor:{
    color:'white',
  }
});


