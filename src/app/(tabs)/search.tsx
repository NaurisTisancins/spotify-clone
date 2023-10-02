import { View, StyleSheet, FlatList, TextInput, Text } from 'react-native';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function HomeScreen() {
  const [search, setSearch] = useState('Default value');
  console.log(search);
  return (
    <SafeAreaView>
      <View style={styles.header}>
        {/* Header */}
        <FontAwesome mname='search' size={24} color='gray' />
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          placeholder='What to you want to listen to'
        />
        <Text onPress={() => setSearch('')} style={{ color: 'white' }}>
          Cancel
        </Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => {
          return <TrackListItem track={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#121314',
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
});
