import { View, Text, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/slow.jpg')}
        style={styles.background}
        resizeMode="cover"
      />

      <View style={styles.card}>
        <Text style={styles.text}>
          We are a team committed to delivering daily reminders that inspire positivity, self-belief, and mindful living one message at a time.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4aead',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    padding: 24,
  },
  background: {
    width: '100%',
    height: 600,
    borderRadius: 16,
    marginBottom: 24,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 14,
    maxWidth: 340,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  text: {
    fontSize: 20,
    color: '#1e293b',
    textAlign: 'center',
    lineHeight: 24,
  },
});
