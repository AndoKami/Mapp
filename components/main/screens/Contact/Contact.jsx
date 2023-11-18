import React from 'react';

import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import AlphabetList from './AlphabetList';
export default function Contact() {
  const AlphList = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const mockData = [
    {
      name: 'Duncan Williams',
      phone: '(383) 807-4712',
    },
    {
      name: 'Lunea Fry',
      phone: '(351) 844-1196',
    },
    {
      name: 'Burton Hicks',
      phone: '1-923-898-7475',
    },
    {
      name: 'Cyrus Nieves',
      phone: '1-962-676-6138',
    },
    {
      name: 'Flavia Alston',
      phone: '(825) 472-6230',
    },
    {
      name: 'Barry Rowland',
      phone: '(332) 383-7255',
    },
    {
      name: 'Joy Velasquez',
      phone: '(446) 572-3881',
    },
    {
      name: 'Otto Myers',
      phone: '(455) 507-1266',
    },
    {
      name: 'Kamal Christensen',
      phone: '(655) 789-8311',
    },
    {
      name: 'Cameron Kinney',
      phone: '1-651-347-2562',
    },
  ];
  let [scrollTo, setScrollTo] = React.useState([]);
  const scrollViewRef = React.useRef(null);

  const handleScroll = letter => {
    if (letter === 'A') {
      scrollViewRef.current.scrollTo({y: 1, animated: true});
    } else if (scrollTo[letter]) {
      scrollViewRef.current.scrollTo({y: scrollTo[letter], animated: true});
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Contact</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '94%',
        }}>
        <ScrollView
          style={{padding: 0}}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}>
          <View>
            {AlphList.map(alph => (
              <View
                key={alph}
                style={{padding: 10}}
                onLayout={event => {
                  const layout = event.nativeEvent.layout;
                  setScrollTo(prevScrollTo => ({
                    ...prevScrollTo,
                    [alph]: layout.y,
                  }));
                }}>
                <View
                  style={{
                    padding: 10,
                    borderBottomColor: '#f1f1f1',
                    borderBottomWidth: 1,
                  }}>
                  <Text
                    key={alph}
                    style={{
                      fontSize: 30,
                      fontWeight: 'bold',
                    }}>
                    {alph}
                  </Text>
                </View>
                {mockData
                  .filter(mock => mock.name[0] === alph)
                  .map(contact => (
                    <View
                      style={{
                        marginTop: 15,
                        paddingBottom: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: '#f1f1f1',
                        borderBottomWidth: 1,
                      }}>
                      <View>
                        <Image
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 90,
                            backgroundColor: '#ff5757',
                          }}
                          source={require('../../../../src/images/avatars/girl.png')}
                        />
                      </View>
                      <View style={{padding: 0, margin: 0}}>
                        <Text> {contact.name} </Text>
                        <Text> {contact.phone} </Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          style={{
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingRight: 12,
                            paddingLeft: 12,
                            backgroundColor: '#ff5757',
                            borderRadius: 25,
                            borderWidth: 1,
                            borderColor: '#fff',
                          }}
                          underlayColor="#fff">
                          <Text
                            style={{
                              textAlign: 'center',
                              color: 'white',
                              fontSize: 15,
                              fontWeight: 'bold',
                            }}>
                            Envoyer
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <AlphabetList setLetter={handleScroll} AlphList={AlphList} />
      </View>
    </SafeAreaView>
  );
}
