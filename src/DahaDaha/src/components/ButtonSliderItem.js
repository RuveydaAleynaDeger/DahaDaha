import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React, {Component} from 'react'
import logo from '../assets/daha.png'

export class ButtonSliderItem extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.sliderButton}>
          <Image
            style={{width: 30, height: 30, marginRight: 5}}
            source={this.props.imgSource}
          />
          <Text style={{marginRight: 2}}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ButtonSliderItem
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  sliderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    padding: 5,
    borderColor: 'grey',
  },
})
