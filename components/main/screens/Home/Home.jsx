import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bestsells from './Bestsells';
export default function Home({navigation}) {
  const articles = [
    {
      imageLink: require('../../../../src/images/products/virtualreality.webp'),
      articleName: 'Casque Réalité Virtuel',
      company: 'Vivatech',
      price: '430 €',
      like: true,
    },
    {
      imageLink: require('../../../../src/images/products/perle.webp'),
      articleName: 'Collier Perle Rare',
      company: 'Perlora',
      price: '65 €',
      like: false,
    },
    {
      imageLink: require('../../../../src/images/products/bible.jpg'),
      articleName: 'La bible',
      company: 'Eglise',
      price: '0 €',
      like: true,
    },
  ];
  const recommendations = [
    {
      imageLink: require('../../../../src/images/products/applewatch.jpeg'),
      articleName: 'Montre connectée',
      company: 'Apple',
      price: '320 €',
      like: true,
    },
    {
      imageLink: require('../../../../src/images/products/bible.jpg'),
      articleName: 'La bible',
      company: 'Eglise',
      price: '0 €',
      like: true,
    },
    {
      imageLink: require('../../../../src/images/products/bible.jpg'),
      articleName: 'La bible',
      company: 'Eglise',
      price: '0 €',
      like: true,
    },
    {
      imageLink: require('../../../../src/images/products/bible.jpg'),
      articleName: 'La bible',
      company: 'Eglise',
      price: '0 €',
      like: true,
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor: '#ff5757'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View>
          <Ionicons name="basket" size={35} color="white" />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Ionicons name="person" size={25} color="white" />
          <Ionicons
            style={{paddingLeft: 10}}
            name="notifications"
            size={25}
            color="white"
          />
          <Ionicons
            style={{paddingLeft: 10}}
            name="settings"
            size={25}
            color="white"
          />
        </View>
      </View>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 40,
            paddingBottom: 40,
            padding: 20,
            backgroundColor: '#ff5757',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            Nos meilleurs ventes
          </Text>
          <Text style={{fontWeight: 'bold', color: 'white'}}> Voir plus</Text>
        </View>
        <ScrollView
          style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {articles.map(article => (
            <Bestsells
              key={article.imageLink}
              ImageLink={article.imageLink}
              articleName={article.articleName}
              company={article.company}
              price={article.price}
              like={article.like}
            />
          ))}
        </ScrollView>
        <View style={{backgroundColor: 'white', padding: 20}}>
          <Text style={{fontSize: 17}}>
            Les cadeaux qui vous feront plaisir
          </Text>
          <ScrollView
            style={{paddingTop: 20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {recommendations.map(recommendation => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Image
                  style={{height: 100, width: 100, borderRadius: 20}}
                  source={recommendation.imageLink}
                />
                <View>
                  <Text style={{fontWeight: 'bold'}}>
                    {recommendation.articleName}
                  </Text>
                  <Text style={{color: '#767474'}}>
                    {recommendation.company}{' '}
                  </Text>
                  <Text> 5 </Text>
                  <Text style={{color: '#af8267', fontWeight: 'bold'}}>
                    {recommendation.price}
                  </Text>
                </View>
                {recommendation.like ? (
                  <Ionicons name="heart" size={20} color="#ff5757" />
                ) : (
                  <Ionicons name="heart-outline" size={20} color="#ff5757" />
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity
          style={{
            marginRight: 30,
            marginLeft: 30,
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
            Je veux faire plaisir !
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
