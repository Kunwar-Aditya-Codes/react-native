import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ActionCard() {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in React Native 0.64</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardDesc} numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo
            voluptatum facere voluptas, saepe dolorum assumenda dolor
            asperiores? Reiciendis porro nesciunt architecto quaerat minus
            cupiditate fugiat eius, consequuntur culpa repellendus facere,
            nostrum pariatur iure. Fugit amet animi dignissimos nostrum aliquam
            maiores! Repellat labore et dolore aperiam rerum error culpa earum?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://reactnative.dev/docs/environment-setup')
            }>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },

  card: {
    margin: 8,
    flex: 1,
  },

  elevated: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
    elevation: 1,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'white',
  },

  headingContainer: {},

  headerText: {
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: '#1B98F5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },

  cardImage: {
    height: 200,
    borderRadius: 4,
    marginBottom: 16,
  },

  cardBody: {
    paddingVertical: 8,
  },

  cardDesc: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 16,
  },

  footerContainer: {
    marginBottom: 8,
  },

  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#1B98F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    width: 100,
    color: 'white',
  },
});
