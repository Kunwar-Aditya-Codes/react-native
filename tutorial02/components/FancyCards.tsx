import {Image, StyleSheet, Text, View} from 'react-native';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <View style={[styles.card, styles.elevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Card Title</Text>
          <Text style={styles.cardLabel}>Card Label</Text>
          <Text style={styles.cardDesc}>Card Desc</Text>
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

  cardImage: {
    height: 200,
    borderRadius: 4,
  },

  cardBody: {
    paddingVertical: 8,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  cardLabel: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },

  cardDesc: {
    fontSize: 14,
    color: 'gray',
  },
});
