import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Bestsells({
  ImageLink,
  articleName,
  company,
  price,
  like,
}) {
  return (
    <View style={{padding: 20}}>
      <Image
        style={{height: 200, width: 200, borderRadius: 20}}
        source={ImageLink}
      />
      <View style={{paddingTop: 25}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{articleName}</Text>
        <Text style={{color: '#767474'}}>{company}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', color: '#af8267'}}>{price}</Text>
          {like ? (
            <Ionicons name="heart" size={20} color="#ff5757" />
          ) : (
            <Ionicons name="heart-outline" size={20} color="#ff5757" />
          )}
        </View>
      </View>
    </View>
  );
}
