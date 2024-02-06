import { View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Feed from './src/screens/Feed';

const App = () => {
  const data = [
    {
        id: '1',
        avatar: "https://source.unsplash.com/random",
        username: "Paulo",
        comments: 10,
        reposts: 10,
        likes: 10,
        text: "Sei la",
        image: "https://source.unsplash.com/random",
    },
    {
        id: '2',
        avatar: "https://source.unsplash.com/random",
        username: "Paulo2",
        comments: 15,
        reposts: 15,
        likes: 15,
        text: "Sei la2",
        image: "https://source.unsplash.com/random",
    },
]
return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Feed
              avatar={item.avatar}
              username={item.username}
              comments={item.comments}
              reposts={item.reposts}
              likes={item.likes}
              text={item.text}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
