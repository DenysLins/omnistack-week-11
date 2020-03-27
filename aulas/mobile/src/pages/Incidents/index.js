import React from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import logoImg from '../../assets/logo.png'
import style from './styles'
function Incidents() {

  const navigation = useNavigation()

  function navigateToDetail() {
    navigation.navigate('Detail')
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={logoImg} />
        <Text style={style.headerText}>
          Total de <Text style={style.headerTextBold}>0 casos</Text>
        </Text>
      </View>
      <Text style={style.title}>Bem vindo!</Text>
      <Text style={style.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList data={[1, 2, 3, 4, 5, 6]}
        style={style.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={style.incident}>
            <Text style={style.incidentProperty}>ONG:</Text>
            <Text style={style.incidentValue}>APAD</Text>

            <Text style={style.incidentProperty}>CASO:</Text>
            <Text style={style.incidentValue}>Cadelinha Atropelada</Text>

            <Text style={style.incidentProperty}>Valor:</Text>
            <Text style={style.incidentValue}>R$ 120,00</Text>

            <TouchableOpacity style={style.detailsButton} onPress={navigateToDetail}>
              <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )} />
    </View>

  )
}

export default Incidents
