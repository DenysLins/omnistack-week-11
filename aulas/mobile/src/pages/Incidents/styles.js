import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

const $e01541 = '#e01541'
const $737380 = '#737380'
const $FFF = '#FFF'
const $41414d = '#41414d'
const $13131a = '#13131a'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  description: {
    color: $737380,
    fontSize: 16,
    lineHeight: 24
  },
  detailsButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailsButtonText: {
    color: $e01541,
    fontSize: 15,
    fontWeight: 'bold'
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    color: $737380,
    fontSize: 15
  },
  headerTextBold: {
    fontWeight: 'bold'
  },
  incident: {
    backgroundColor: $FFF,
    borderRadius: 8,
    marginBottom: 16,
    padding: 24
  },
  incidentList: {
    marginTop: 32
  },
  incidentProperty: {
    color: $41414d,
    fontSize: 14,
    fontWeight: 'bold'
  },
  incidentValue: {
    color: $737380,
    fontSize: 15,
    marginBottom: 24,
    marginTop: 8
  },
  title: {
    color: $13131a,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 40
  }

})
