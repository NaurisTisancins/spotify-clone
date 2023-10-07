import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import TrackListItem from '../../components/TrackListItem';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query MyQuery($genres: String!) {
    recommendations(seed_genres: $genres) {
      tracks {
        id
        name
        preview_url
        artists {
          id
          name
        }
        album {
          id
          name
          images {
            height
            url
            width
          }
        }
      }
    }
  }
`;

export default function HomeScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { genres: 'drum-and-bass,house' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <Text style={{ color: 'white' }}>Failed to fentch recommendations</Text>
    );
  }

  const tracks = data.recommendations?.tracks || [];

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
