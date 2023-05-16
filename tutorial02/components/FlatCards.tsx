import {StyleSheet, Text, View} from 'react-native';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Green</Text>
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

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },

  card: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
  },

  card1: {
    backgroundColor: 'red',
  },

  card2: {
    backgroundColor: 'blue',
  },

  card3: {
    backgroundColor: 'green',
  },
});
