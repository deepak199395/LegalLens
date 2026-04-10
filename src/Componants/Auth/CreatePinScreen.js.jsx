import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const CreatePinScreen = () => {
  const [pin, setPin] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const handleSubmit = () => {
    console.log('PIN:', pin);
    console.log('Form:', form);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>Create PIN</Text>

      {/* PIN INPUT */}
      <TextInput
        style={styles.pinInput}
        placeholder="Enter 6-digit PIN"
        keyboardType="numeric"
        maxLength={6}
        value={pin}
        onChangeText={setPin}
      />

      {/* FORM */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="numeric"
        value={form.phone}
        onChangeText={(text) => setForm({ ...form, phone: text })}
      />

      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={form.city}
        onChangeText={(text) => setForm({ ...form, city: text })}
      />

      {/* SUBMIT BUTTON */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default CreatePinScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  pinInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
  },

  label: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
  },

  button: {
    marginTop: 25,
    backgroundColor: '#1E1E2C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});