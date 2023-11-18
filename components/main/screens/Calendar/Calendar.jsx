import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

export default function Calendars() {
  LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    monthNamesShort: [
      'Janv.',
      'Févr.',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juil.',
      'Août',
      'Sept.',
      'Oct.',
      'Nov.',
      'Déc.',
    ],
    dayNames: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = 'fr';
  const [selected, setSelected] = React.useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#ff5757'}}>
      <View>
        <View
          style={{
            backgroundColor: '#ff5757',
            paddingTop: 30,
          }}></View>
        <View
          style={{
            backgroundColor: '#ff5757',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 200, width: 200}}
            source={require('../../../../src/images/logo/logo.png')}
          />
        </View>
        <View
          style={{
            margin: 0,
            padding: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Calendar
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
            dayComponent={({date, state}) => {
              return (
                <View>
                  {date.dateString === '2023-11-29' ? (
                    <Image
                      style={{height: 30, width: 30, borderRadius: 90}}
                      source={require('../../../../src/images/calendar/paps.jpg')}
                    />
                  ) : (
                    <Text style={{padding: 5}}>{date.day}</Text>
                  )}
                </View>
              );
            }}
          />
          <View style={{height: '100%'}}>
            <ScrollView style={{padding: 20, backgroundColor: 'white'}}>
              <View
                style={{
                  padding: 15,
                  paddingTop: 25,
                  paddingBottom: 25,
                  backgroundColor: '#f1f1f1',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../../../../src/images/calendar/birthday.png')}
                />
                <Text>J-5 avant l'anniversaire de Patrice (30 ans)</Text>
              </View>
              <View
                style={{
                  padding: 15,
                  paddingTop: 25,
                  paddingBottom: 25,
                  backgroundColor: '#f1f1f1',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../../../../src/images/calendar/birthday.png')}
                />
                <Text>J-2 avant l'anniversaire de Stephanie (30 ans)</Text>
              </View>
              <View
                style={{
                  padding: 15,
                  paddingTop: 25,
                  paddingBottom: 25,
                  backgroundColor: '#f1f1f1',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../../../../src/images/calendar/birthday.png')}
                />
                <Text>J-2 avant l'anniversaire de Stephanie (30 ans)</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
