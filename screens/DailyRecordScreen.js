import { View, Text, StyleSheet } from 'react-native';

export default function DailyRecordScreen() {
  return (
    <View style={style.container}>
      <Text style={style.box}>Your next chapter is going to be amazing.</Text>

      <Text style={style.box}>
        YOU ARE EXACTLY WHERE YOU NEED TO BE. TRUST THE DIVINE TIMING OF YOUR LIFE.
      </Text>

      <Text style={style.box}>
        One day you will look back and be so proud of yourself. So keep going, you got this!
      </Text>

      <Text style={style.box}>EVERY SINGLE DAY IS A NEW CHANCE TO TRY AGAIN.</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    gap: 20,
    flexDirection: 'column',
  },
  box: {
    backgroundColor: '#ffc0cb',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    lineHeight: 24,
    borderRadius: 12,
    width: '90%',
    paddingVertical: 20, 
    justifyContent: 'center',
    textAlignVertical: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
});
