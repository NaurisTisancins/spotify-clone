import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Track } from '../types';
import { usePlayerContext } from '../providers/PlayerProvider';

type TrackListItemProps = {
  track: Track;
};

export default function TrackListItem({ track }: TrackListItemProps) {
  const { setTrack } = usePlayerContext();
  return (
    <Pressable onPress={() => setTrack(track)} style={styles.container}>
      <Image
        source={{ uri: track.album.images[0]?.url }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.subTitle}>{track.artists[0]?.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  subTitle: {
    color: 'gray',
  },
});
