import { StyleSheet, FlatList } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';

export default function FavoritesScreen() {
  return (
    <View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => {
          return <TrackListItem track={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
