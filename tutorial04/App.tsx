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
  const [shapeColor, setShapeColor] = useState<string>('#ffffff');

  const changeColor = () => {
    const hexRange = '0123456789ABCDEF';

    let hex = '#';
    for (let i = 0; i < 6; i++) {
      const charIndex = Math.floor(Math.random() * hexRange.length);
      hex += hexRange.charAt(charIndex);
    }
    setBackground(hex);

    let shapeHex = '#';
    for (let i = 0; i < 6; i++) {
      const charIndex = Math.floor(Math.random() * hexRange.length);
      shapeHex += hexRange.charAt(charIndex);
    }
    setShapeColor(shapeHex);
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
        <View
          style={[
            styles.square,
            {
              backgroundColor: shapeColor,
            },
          ]}>
          <Text>Square</Text>
        </View>
        <View
          style={[
            styles.circle,
            {
              backgroundColor: shapeColor,
            },
          ]}>
          <Text>Circle</Text>
        </View>

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
    justifyContent: 'space-evenly',
  },

  square: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 4,
    borderColor: 'black',
  },

  circle: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'black',
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
