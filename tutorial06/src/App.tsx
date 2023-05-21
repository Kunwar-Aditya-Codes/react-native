import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import Japan from '../assets/japan.jpg';
import America from '../assets/usa.jpg';
import Russia from '../assets/russia.jpg';
import UK from '../assets/uk.jpg';
import FlatCard from '../components/FlatCard';
import {useState} from 'react';

const cardData = [
  {
    id: 1,
    country: 'America',
    flag: America,
    currency: '$',
    conversionRate: 90,
  },
  {
    id: 2,
    country: 'Japan',
    flag: Japan,
    currency: '¥',
    conversionRate: 0.6,
  },
  {
    id: 3,
    country: 'Russia',
    flag: Russia,
    currency: '₽',
    conversionRate: 70,
  },
  {
    id: 4,
    country: 'UK',
    flag: UK,
    currency: '£',
    conversionRate: 100,
  },
];

export default function App() {
  const [amount, setAmount] = useState<string>();
  const [switchedAmount, setSwitchedAmount] = useState<string>();

  const convertCurrency = (currencyAmount: string) => {
    if (!amount) {
      return;
    }

    const intAmount = parseFloat(amount as string);
    const intCurrencyAmount = parseFloat(currencyAmount);
    const convertedAmount = Math.floor(intAmount / intCurrencyAmount);

    setSwitchedAmount(convertedAmount.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {switchedAmount ? (
          <>
            <Text style={styles.newAmountText}>
              Converted Amount: {switchedAmount}
            </Text>
          </>
        ) : null}
        <TextInput
          placeholder="Enter amount in INR"
          onChangeText={setAmount}
          value={amount}
          style={styles.textInput}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.cardContainer}>
        {cardData.map(card => (
          <Pressable
            key={card.id}
            onPress={() => convertCurrency(card.conversionRate.toString())}>
            <FlatCard
              key={card.id}
              country={card.country}
              flag={card.flag}
              currency={card.currency}
              conversionRate={card.conversionRate}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  newAmountText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 4,
  },

  inputContainer: {
    flex: 3,
    justifyContent: 'center',
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'flex-start',
    padding: 16,
    flex: 7,
  },
});
