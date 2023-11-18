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

export default function Register({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#ff5757'}}>
      <StatusBar barStyle="light-content" translucent={false} />
      <View style={{backgroundColor: '#ff5757', paddingBottom: 60}}>
        <Text
          style={{
            fontSize: 35,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}>
          Créer un nouveau compte
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            paddingTop: 20,
            textAlign: 'center',
            paddingLeft: 30,
            paddingRight: 30,
          }}>
          Vous êtes déjà inscrit.e ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              textDecorationLine: 'underline',
            }}>
            Se connecter
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#f4f4f4',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <View style={{padding: 30}}>
          <Text style={styles.formText}> VEUILLEZ SAISIR VOTRE NOM </Text>
          <TextInput style={styles.formInput} />
          <Text style={styles.formText}> VEUILLEZ SAISIR VOTRE E-MAIL </Text>
          <TextInput style={styles.formInput} />
          <Text style={styles.formText}>
            {' '}
            VEUILLEZ SAISIR VOTRE MOT DE PASSE{' '}
          </Text>
          <TextInput style={styles.formInput} />
          <Text style={styles.formText}>
            {' '}
            VEUILLEZ SAISIR VOTRE DATE DE NAISSANCE{' '}
          </Text>
          <TextInput style={styles.formInput} />
        </View>
        <View>
          <TouchableOpacity
            style={{
              marginRight: 90,
              marginLeft: 90,
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: '#ff5757',
              borderRadius: 25,
              borderWidth: 1,
              borderColor: '#fff',
            }}
            underlayColor="#fff"
            onPress={() => navigation.navigate('introduction')}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              S'inscrire
            </Text>
          </TouchableOpacity>
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
});
