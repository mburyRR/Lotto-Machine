import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background.primary
  },
  appTitle: {
    width: 190,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'San Francisco',
    marginBottom: 60,
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff'
  },
  label: {
    marginBottom: 10,
    fontSize: 18
  },
  button: {
    width: 190,
    backgroundColor: theme.color.default
  }
});