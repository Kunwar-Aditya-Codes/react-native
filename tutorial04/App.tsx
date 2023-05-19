import {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [background, setBackground] = useState<string>('#ffffff');

  const changeColor = () => {
    const hexRange = '0123456789ABCDEF';

    let hex = '#';

    for (let i = 0; i < 6; i++) {
      const charIndex = Math.floor(Math.random() * hexRange.length);
      hex += hexRange.charAt(charIndex);
    }

    setBackground(hex);
  };

  return (
    <>
      <StatusBar backgroundColor={background} />
      <View
        style={[
          styles.container,
          {
            backgroundColor: background,
          },
        ]}>
        <TouchableOpacity onPress={changeColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Press Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionButton: {
    backgroundColor: '#E07C24',
    padding: 16,
    borderRadius: 4,
    elevation: 8,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.5,
    shadowOffset: {width: 1, height: 1},
  },

  actionButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
