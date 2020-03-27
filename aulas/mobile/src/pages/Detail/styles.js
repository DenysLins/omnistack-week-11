import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

const $e01541 = '#e01541'
const $737380 = '#737380'
const $FFF = '#FFF'
const $41414d = '#41414d'
const $13131a = '#13131a'

export default StyleSheet.create({
  action: {
    alignItems: 'center',
    backgroundColor: $e01541,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    width: '48%'
  },
  actionText: {
    color: $FFF,
    fontSize: 15,
    fontWeight: 'bold'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },
  contactBox: {
    backgroundColor: $FFF,
    borderRadius: 8,
    marginBottom: 16,
    padding: 24
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heroDescription: {
    color: $737380,
    fontSize: 15,
    marginTop: 16
  },
  heroTitle: {
    color: $13131a,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30
  },
  incident: {
    backgroundColor: $FFF,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 48,
    padding: 24
  },
  incidentProperty: {
    color: $41414d,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 24
  },
  incidentValue: {
    color: $737380,
    fontSize: 15,
    marginTop: 8
  }

})
