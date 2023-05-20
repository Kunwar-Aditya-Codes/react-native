import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type {PropsWithChildren} from 'react';

import One from '../assests/one.png';
import Two from '../assests/two.png';
import Three from '../assests/three.png';
import Four from '../assests/four.png';
import Five from '../assests/five.png';
import Six from '../assests/six.png';
import {useState} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View style={styles.dice}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

export default function App(): JSX.Element {
  const [dice, setDice] = useState<ImageSourcePropType>(One);

  const rollDice = () => {
    const diceArray: ImageSourcePropType[] = [One, Two, Three, Four, Five, Six];
    const randomIndex = Math.floor(Math.random() * diceArray.length);
    setDice(diceArray[randomIndex]);
    ReactNativeHapticFeedback.trigger('impactHeavy', options);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dice Roller</Text>
      <Dice imageUrl={dice} />
      <TouchableOpacity onPress={rollDice}>
        <Text style={styles.diceBtn}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
  },

  dice: {},

  diceImage: {
    width: 200,
    height: 200,
    borderRadius: 16,
  },

  diceBtn: {
    fontSize: 24,
    backgroundColor: '#E07C24',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    color: 'white',
    fontWeight: '300',
    fontStyle: 'italic',
  },
});
