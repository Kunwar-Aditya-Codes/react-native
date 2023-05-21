import {StyleSheet, Text, View, ImageSourcePropType, Image} from 'react-native';
import type {PropsWithChildren} from 'react';

type FlatCardProps = PropsWithChildren<{
  country: string;
  flag: ImageSourcePropType;
  currency: string;
  conversionRate: number;
}>;

export default function FlatCard({
  country,
  flag,
  currency,
  conversionRate,
}: FlatCardProps) {
  return (
    <View style={styles.flatCardContainer}>
      <Image source={flag} style={styles.flagImage} />
      <Text style={styles.countryText}>{country}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flatCardContainer: {
    flexDirection: 'row',
    backgroundColor: '#5A20CB',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 4,
    width: 110,
  },

  flagImage: {
    height: 10,
    width: 20,
  },

  countryText: {
    fontSize: 12,
    fontWeight: '300',
    marginLeft: 10,
  },
});
