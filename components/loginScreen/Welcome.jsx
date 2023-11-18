import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useFocusEffect} from '@react-navigation/native';

function Welcome({navigation}) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setHidden(true);
      return () => {
        StatusBar.setHidden(false);
      };
    }, []),
  );
  return (
    <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <View>
        <View
          style={{
            backgroundColor: '#ff5757',
            padding: 40,
            height: '46%',
            paddingTop: 70,
          }}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 40}}>
            Bienvenue
          </Text>
          <Text style={{color: 'white', fontSize: 40}}>sur</Text>
        </View>
        <View style={{backgroundColor: '#ff5757'}}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 50,
            }}>
            MARJAUX
          </Text>
        </View>
        <View style={{height: 60, margin: 0, padding: 0}}>
          <Svg height="150%" width="100%" viewBox="0 30 1440 320">
            <Path
              fill="#ff5757"
              d="M0,256L60,261.3C120,267,240,277,360,272C480,267,600,245,720,208C840,171,960,117,1080,117.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </Svg>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity
            style={{
              marginRight: 90,
              marginLeft: 90,
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: '#ff5757',
              borderRadius: 15,
              borderWidth: 1,
              borderColor: '#fff',
            }}
            underlayColor="#fff"
            onPress={() => navigation.navigate('Inscription')}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              S'INSCRIRE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: '#ff5757'}}>
          Le cadeau parfait n'a jamais été si simple à trouver !
        </Text>
      </View>
    </View>
  );
}

export default Welcome;
