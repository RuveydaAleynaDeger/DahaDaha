import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Button,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import ButtonSliderItem from '../components/ButtonSliderItem'
import SliderCardItem from '../components/SliderCardItem'

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
const Tab = createMaterialBottomTabNavigator()
import logo from '../assets/Daha_Daha.png'
import trendyol from '../assets/Trendyol.png'
import burgerking from '../assets/BurgerKing.png'
import source from '../assets/Source.png'
import user from '../assets/userIcon.png'
import cocacola from '../assets/cocacola.png'
import cocacolalogo from '../assets/cocacolalogo.png'
import sprite from '../assets/sprite.png'
import spritelogo from '../assets/spriteLogo.png'
import dahadahaLogo from '../assets/dahadahalogo.png'
import star from '../assets/star.png'
import discover from '../assets/discover.png'

import Details from './Details'
function Main ({navigation}) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.tabBar}>
        <View style={{flex: 2, backgroundColor: 'white'}}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={{flex: 2, backgroundColor: 'white'}} />
        <View style={styles.signIn}>
          <TouchableHighlight style={styles.submit} underlayColor='#fff'>
            <Text style={styles.submitText}>Giriş Yap</Text>
          </TouchableHighlight>
        </View>

        <View
          style={styles.accountView}>
          <TouchableOpacity
            style={styles.accountButton}>
            <Image source={user} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 10, backgroundColor: 'white'}}>
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <ButtonSliderItem text='Fırsat Bul' imgSource={source} />
          <ButtonSliderItem text='BurgerKing' imgSource={burgerking} />
          <ButtonSliderItem text='Trendyol' imgSource={trendyol} />
          <ButtonSliderItem text='Sprite' imgSource={spritelogo} />
        </ScrollView>
      </View>
      <View style={{flex: 65, backgroundColor: 'white'}}>
        <ScrollView
          style={{flex: 1, padding: 10}}
          horizontal
          snapToInterval={4}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}>
          <SliderCardItem
            descsiption='2,5 LT Coca-Cola kapakları
            Coca-Cola +Coffee kazandırıyor!'
            color='red'
            borderWithColor='red'
            image={cocacola}
            logo={cocacolalogo}
            remainingDay='12'
            navigation={navigation}
          />
          <SliderCardItem
            descsiption='2,5 LT Sprite kapakları
            330 ML Kutu kazandırıyor!'
            color='#009639'
            borderWithColor='#009639'
            image={sprite}
            logo={spritelogo}
            remainingDay='12'
            navigation={navigation}
          />
        </ScrollView>
      </View>
      <View
        style={{
          flex: 15,
          flexDirection: 'row',
          backgroundColor: 'white',

          borderTopStartRadius: 20,

          borderTopEndRadius: 20,
          borderWidth: 1,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image source={discover} />
          <Text>Keşfet</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            position: 'relative',
          }}>
          <Image source={dahadahaLogo} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 10,
            borderTopStartRadius: 20,
          }}>
          <Image source={star} />
          <Text>Keşfet</Text>
        </View>
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flex: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 20,
  },
  accountView:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountButton:{
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 25,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },

  signIn: {
    flex: 2,

    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },

  submit: {
    textAlign: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#F40000',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
})
