import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import Swiper from 'react-native-swiper'
import { Button } from 'react-native-paper'
export class SliderCardItem extends Component {
  render() {
    return (
      <View style={{width:350, margin:5, borderRadius:20, borderWidth:1, justifyContent:"center",borderBottomWidth:15, borderBottomColor:this.props.borderWithColor}}>
        
       <TouchableOpacity style={{flex:1}}  onPress={() => this.props.navigation.navigate("Details", {logo :this.props.logo, image : this.props.image})} >
        
       <View style ={{flex:70, }}>
        <Image  source={this.props.image} style={styles.image}/>
        <Image source={this.props.logo} style={{position:"absolute", bottom:0, left:0}}/>
   <View style={{position:"absolute", bottom:0, right:0, width:97, height:32, borderRadius:20, borderWidth:1, backgroundColor:"black"}}>
    <Text style={{color:"white", textAlign:"center", justifyContent:"center"}}>Son {this.props.remainingDay} gün</Text>
   </View>
       </View>
       <Text style ={{flex:15, justifyContent:"center",fontSize:14, textAlign:"center",alignItems:"center",   fontWeight: "bold", color:"black", marginTop:10}} >
        {this.props.descsiption}
       </Text>
       <Text style ={{flex:15, fontSize:14, textAlign:"center",   fontWeight: "bold", color:this.props.color}}> Daha Daha</Text>
       </TouchableOpacity>
      </View>
    )
  }
}

export default SliderCardItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
      borderRadius:20, 
      borderWidth:1,
      borderBottomLeftRadius:100

    },
})