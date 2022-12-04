import {Text, View, TouchableOpacity, Image, StyleSheet, ScrollView, TouchableHighlight, Button} from 'react-native'
import React, {Component} from 'react'

function Details ({navigation, route}) {
 
    return (
      <View
        style={{
          flex: 1
       
        }}>
        <View style={{flex: 60}}>
          <Image source={route.params.image} style={styles.image} />
          <Image
            source={route.params.logo}
            style={{position: 'absolute', bottom: 0, left: 0}}
          />
        </View>
        <Text
          style={{
            flex: 12,
            justifyContent: 'center',
            fontSize: 26,
            padding:20,
            fontWeight: 'bold',
            color: 'black',
         
          }}>
          Her Altın Kapakta Bir Coca-Cola + Coffee Keyfi
        </Text>
        <View style={{flex:30}}>
          <ScrollView  style={{flex: 1}}
          showsHorizontalScrollIndicator={false}>
          <Text
            style={{
            
              fontSize: 16,
            
              fontWeight: 'bold',
              color:"grey",
              padding: 10,
             
            }}>
            Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya
            getirir. Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca
            Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer
            alır. 
            
            {' '}
            Yeni tatlara açık olanların beğenisini kazanan kahveli
            Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve
            tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak
            ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer
            almaktadır. İçeceğin soğuk tüketilmesi önerilir. Buzla beraber
            içilebilir. Özellikle sıcak yaz günlerinde ferahlatıcı etki
            gösterir.{' '}
          </Text>
          </ScrollView>
        </View>
        <TouchableHighlight style={styles.submit} underlayColor='#fff'>
            <Text style={styles.submitText}>Hemen Katıl</Text>
          </TouchableHighlight>
      </View>
    )
  }


export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    borderBottomLeftRadius: 100,
  },
  submit: {
    flex:10,
    textAlign: 'center',
   marginBottom:20,

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
