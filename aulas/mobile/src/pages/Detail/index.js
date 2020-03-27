import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'
import style from './styles'

function Detail() {

  const navigation = useNavigation()
  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$ 120,00.'
  const whatsappNumber = ''

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['denyslins@gmail.com'],
      body: message
    })
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${whatsappNumber}&text=${message}`)
  }

  return (
    <View style={style.container} s>
      <View style={style.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={style.incident}>

        <Text style={[style.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={style.incidentValue}>APAD</Text>

        <Text style={style.incidentProperty}>CASO:</Text>
        <Text style={style.incidentValue}>Cadelinha Atropelada</Text>

        <Text style={style.incidentProperty}>Valor:</Text>
        <Text style={style.incidentValue}>R$ 120,00</Text>

      </View>

      <View style={style.contactBox}>

        <Text style={style.heroTitle}>Salve o dia!</Text>
        <Text style={style.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={style.heroDescription}>Entre em contato:</Text>

        <View style={style.actions}>
          <TouchableOpacity style={style.action} onPress={sendWhatsApp}>
            <Text style={style.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.action} onPress={sendMail}>
            <Text style={style.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}

export default Detail
