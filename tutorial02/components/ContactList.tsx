import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'Hey there! I am using WhatsApp.',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },

    {
      uid: 2,
      name: 'Jane Doe',
      status: 'Hey there! I am using WhatsApp.',
      image:
        'https://pps.whatsapp.net/v/t61.24694-24/328791088_1222245488419354_7543275835369231688_n.jpg?ccb=11-4&oh=01_AdSkf9T-Y6u2SUBIZOMh-2H40_5V-0ZtfeSfC_FGvBSc8Q&oe=647178D8',
    },
    {
      uid: 3,
      name: 'Kate Doe',
      status: 'Hey there! I am using WhatsApp.',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      uid: 4,
      name: 'Anon Doe',
      status: 'Hey there! I am using WhatsApp.',
      image:
        'https://pps.whatsapp.net/v/t61.24694-24/328791088_1222245488419354_7543275835369231688_n.jpg?ccb=11-4&oh=01_AdSkf9T-Y6u2SUBIZOMh-2H40_5V-0ZtfeSfC_FGvBSc8Q&oe=647178D8',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.contactContainer}>
            <View style={styles.contactImageContainer}>
              <Image
                source={{uri: contact.image}}
                style={styles.contactImage}
              />
            </View>
            <View style={styles.contactDetailsContainer}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
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

  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    backgroundColor: '#E07C24',
    borderRadius: 8,
  },

  contactImageContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  contactDetailsContainer: {
    flex: 1,
    padding: 8,
  },

  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  contactStatus: {
    fontSize: 14,
  },
});
