import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default function CreateProfile({navigation}) {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    if (selected.length > 0) {
      navigation.navigate('Choix');
    }
  }, [selected]);
  return (
    <SafeAreaView style={{backgroundColor: '#ff5757'}}>
      <StatusBar barStyle="light-content" translucent={false} />
      <View style={{backgroundColor: '#ff5757', padding: 100}}></View>
      <View
        style={{
          backgroundColor: '#f4f4f4',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <View style={{padding: 30, paddingBottom: 10}}>
          <Text style={styles.title}> Je suis ... </Text>
          <Text style={styles.formText}> Prénom </Text>
          <TextInput style={styles.formInput} />
          <Text style={styles.formText}> Age </Text>
          <TextInput style={styles.formInput} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 40,
          }}>
          <View>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 20,
                backgroundColor: selected === 'man' ? '#ff5757' : null,
              }}
              onPress={() => setSelected('man')}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../../../src/images/avatars/man.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 20,
                backgroundColor: selected === 'girl' ? '#ff5757' : null,
              }}
              onPress={() => setSelected('girl')}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../../../src/images/avatars/girl.png')}
              />
            </TouchableOpacity>
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
