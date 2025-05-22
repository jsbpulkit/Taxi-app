// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const Form = () => {
//   const [to, setTo] = useState('');
//   const [from, setFrom] = useState('');
//   const [errors, setErrors] = useState({ to: '', from: '' });

//   const [focusedField, setFocusedField] = useState<'to' | 'from' | null>(null);

//   const handleLocateOnMap = () => {
//     if (focusedField === 'to') {
//       console.log('Locate on Map pressed for TO');
//     } else if (focusedField === 'from') {
//       console.log('Locate on Map pressed for FROM');
//     } else {
//       console.log('No field is focused');
//     }
//   };

//   const handleSubmit = () => {
//     let valid = true;
//     const newErrors = { to: '', from: '' };

//     if (!to.trim()) {
//       newErrors.to = 'This field is required';
//       valid = false;
//     }

//     if (!from.trim()) {
//       newErrors.from = 'This field is required';
//       valid = false;
//     }

//     setErrors(newErrors);

//     if (valid) {
//       console.log({ to, from });

//       setTo('');
//       setFrom('');
//       setErrors({ to: '', from: '' });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>To</Text>
//       <TextInput
//         style={[styles.input, errors.to && styles.inputError]}
//         value={to}
//         onChangeText={setTo}
//         placeholder="to"
//         onFocus={() => setFocusedField('to')}
//         onBlur={() => setFocusedField(null)}
//       />
//       {errors.to ? <Text style={styles.errorText}>{errors.to}</Text> : null}

//       <Text style={styles.label}>From</Text>
//       <TextInput
//         style={[styles.input, errors.from && styles.inputError]}
//         value={from}
//         onChangeText={setFrom}
//         placeholder="from"
//         onFocus={() => setFocusedField('from')}
//         onBlur={() => setFocusedField(null)}
//       />
//       {errors.from ? <Text style={styles.errorText}>{errors.from}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleLocateOnMap}>
//         <Text style={styles.buttonText}>Locate on Map</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Form;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     gap: 12,
//   },
//   label: {
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 6,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   inputError: {
//     borderColor: 'red',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 4,
//     fontSize: 12,
//   },
//   button: {
//     marginTop: 16,
//     backgroundColor: '#007bff',
//     padding: 12,
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Form = () => {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [errors, setErrors] = useState({ to: '', from: '' });

  // Tracks which field is currently focused: 'to', 'from', or null
  const [focusedField, setFocusedField] = useState<'to' | 'from' | null>(null);

  // Handle the Locate on Map button click
  const handleLocateOnMap = () => {
    if (focusedField === 'to') {
      console.log('Locate on Map pressed for TO');
    } else if (focusedField === 'from') {
      console.log('Locate on Map pressed for FROM');
    } else {
      console.log('No field is focused');
    }
  };

  // Handle form submission and validate inputs
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
      console.log({ to, from });

      // Reset the form fields
      setTo('');
      setFrom('');
      setErrors({ to: '', from: '' });
      setFocusedField(null); // Also reset focus state
    }
  };

  return (
    <View style={styles.container}>
      {/* TO Field */}
      <Text style={styles.label}>To</Text>
      <TextInput
        style={[styles.input, errors.to && styles.inputError]}
        value={to}
        onChangeText={setTo}
        placeholder="to"
        onFocus={() => setFocusedField('to')} // Show Locate button when focused
        onBlur={() => setFocusedField(null)} // Hide when blurred (optional)
      />
      {errors.to ? <Text style={styles.errorText}>{errors.to}</Text> : null}

      {/* FROM Field */}
      <Text style={styles.label}>From</Text>
      <TextInput
        style={[styles.input, errors.from && styles.inputError]}
        value={from}
        onChangeText={setFrom}
        placeholder="from"
        onFocus={() => setFocusedField('from')}
        onBlur={() => setFocusedField(null)}
      />
      {errors.from ? <Text style={styles.errorText}>{errors.from}</Text> : null}

      {/* Conditionally render Locate on Map button */}
      {focusedField && (
        <TouchableOpacity style={styles.button} onPress={handleLocateOnMap}>
          <Text style={styles.buttonText}>Locate on Map</Text>
        </TouchableOpacity>
      )}

      {/* Submit Button */}
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

