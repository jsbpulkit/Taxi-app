import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Form = () => {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [errors, setErrors] = useState({ to: '', from: '' });

  const handleSubmit = () => {
    let valid = true;
    const newErrors = { to: '', from: '' };

    if (!to.trim()) {
      newErrors.to = 'This field is required';
      valid = false;
    }

    if (!from.trim()) {
      newErrors.from = 'This field is required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // You can process the form here
      console.log({ to, from });

      // Clear form
      setTo('');
      setFrom('');
      setErrors({ to: '', from: '' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>To</Text>
      <TextInput
        style={[styles.input, errors.to && styles.inputError]}
        value={to}
        onChangeText={setTo}
        placeholder="to"
      />
      {errors.to ? <Text style={styles.errorText}>{errors.to}</Text> : null}

      <Text style={styles.label}>From</Text>
      <TextInput
        style={[styles.input, errors.from && styles.inputError]}
        value={from}
        onChangeText={setFrom}
        placeholder="from"
      />
      {errors.from ? <Text style={styles.errorText}>{errors.from}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Form;

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
