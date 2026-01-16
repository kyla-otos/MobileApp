import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

     
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Account</Text>
        <Pressable style={styles.item} onPress={() => {}}>
          <Text style={styles.itemText}>Profile</Text>
        </Pressable>
        <View style={styles.divider}/>
        <Pressable style={styles.item} onPress={() => {}}>
          <Text style={styles.itemText}>Change Password</Text>
        </Pressable>
      </View>

    
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Notifications</Text>
        <Pressable style={styles.item} onPress={() => {}}>
          <Text style={styles.itemText}>Push Notifications</Text>
        </Pressable>
        <View style={styles.divider}/>
        <Pressable style={styles.item} onPress={() => {}}>
          <Text style={styles.itemText}>Email Alerts</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', 
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 25,
    color: '#2a2a2a',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#ffffff', 
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  item: {
    paddingVertical: 18, 
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#eef2f7',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 6,
  },
});
