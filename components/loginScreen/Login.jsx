import {
  SafeAreaView,
  StatusBar,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#ff5757'}}>
      <StatusBar barStyle="light-content" translucent={false} />
      <View style={{backgroundColor: '#ff5757', padding: 100}}>
        <Text
          style={{
            fontSize: 35,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}>
          On vous attendait !
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#f4f4f4',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <View style={{padding: 30, paddingBottom: 10}}>
          <Text style={styles.title}> CONNEXION </Text>
          <Text style={styles.formText}> VEUILLEZ SAISIR VOTRE NOM </Text>
          <TextInput style={styles.formInput} />
          <Text style={styles.formText}>
            {' '}
            VEUILLEZ SAISIR VOTRE MOT DE PASSE{' '}
          </Text>
          <TextInput style={styles.formInput} />
        </View>
        <View>
          <TouchableOpacity
            style={{
              marginRight: 90,
              marginLeft: 90,
              marginBottom: 20,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: '#ff5757',
              borderRadius: 25,
              borderWidth: 1,
              borderColor: '#fff',
            }}
            underlayColor="#fff"
            onPress={() => navigation.navigate('Navigation')}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Se connecter
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color: '#a4a5af', textAlign: 'center'}}>
              Mot de passe oublié ?
            </Text>
            <Text style={{color: '#a4a5af', textAlign: 'center'}}>
              Pas encore de compte. Je m'inscris !
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formText: {
    color: '#c1c1c1',
    marginBottom: 10,
  },
  formInput: {
    backgroundColor: '#ececec',
    padding: 15,
    borderRadius: 40,
    marginBottom: 20,
    fontSize: 15,
  },
  title: {
    color: '#46485f',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 45,
  },
});
