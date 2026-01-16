import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (email === 'admin' && password === 'admin') {
      navigation.replace('MainDrawer');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput 
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#666"
      />

      <TextInput 
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="#666"
      />

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}

      <View style={styles.buttonWrapper}>
        <Button title="Login" color="#a0aec0" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef8ff',
    justifyContent: 'center',
    padding: 25,
    alignContent:'center',
    alignItems:'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1e3a8a',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#a0aec0',
    backgroundColor: '#ffffff',
    padding: 14,
    marginVertical: 10,
    borderRadius: 10,
    width:'50%',
    fontSize: 18,
  },
  errorText: {
    color: '#e53e3e',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 12,
    fontSize: 16,
  },
  buttonWrapper: {
    borderRadius: 10,
    width:'10%',

  },
});
