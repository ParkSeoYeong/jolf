import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Slider} from 'react-native';



type Props = {};
export default class Slider1 extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    const {value} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Max {String(value)} million-won </Text>
        <Slider 
          step={0.5}
          maximumValue={10}
          minimumTrackTintColor="white"
          thumbTintColor="white"


          onValueChange={this.change.bind(this)}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width:100,

  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color:'white'

  },
});