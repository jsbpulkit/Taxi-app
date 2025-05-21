import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginForm = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ phone: '' });

  const handleSubmit = () => {
    let valid = true;
    const newErrors = { phone: '' };

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // You can process the form here
      console.log({ phone, email });

      // Clear form
      setPhone('');
      setEmail('');
      setErrors({ phone: '' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login</Text>

      <Text style={styles.label}>Phone Number *</Text>
      <TextInput
        style={[styles.input, errors.phone && styles.inputError]}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}

      <Text style={styles.label}>Email (optional)</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
