import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
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
    margin: 8,
  },

  card: {
    flex: 1,
    marginRight: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
  },

  elevated: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'white',
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  
});
