import {View, Text} from 'react-native';
export default function AlphabetList({selected, AlphList}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      {AlphList.map(alph => (
        <Text style={{paddingBottom: alph === 'Z' ? 0 : 7}} key={alph}>
          {alph}
        </Text>
      ))}
    </View>
  );
}
