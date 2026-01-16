import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function DashboardScreen() {
  return (
    <ImageBackground
      source={require('../assets/download.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,                
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
