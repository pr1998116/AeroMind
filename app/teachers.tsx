

import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface Student {
  id: string;
  name: string;
  class: string;
}

export default function TeacherDashboardScreen() {
  const [search, setSearch] = useState('');
  const [students] = useState<Student[]>([
    { id: '1', name: 'Aman Sharma', class: '10-A' },
    { id: '2', name: 'Priya Singh', class: '10-B' },
    { id: '3', name: 'Rohit Verma', class: '9-A' },
  ]);

  const [lectureTime, setLectureTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.class.toLowerCase().includes(search.toLowerCase())
  );

  const uploadPDF = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });

    if (result.canceled) return;

    Alert.alert('PDF Selected', result.assets[0].name);
    // TODO: Upload PDF to backend / Firebase / Cloud storage
  };

  const onTimeChange = (_: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) setLectureTime(selectedDate);
  };

  return (
    <SafeAreaProvider>
        <SafeAreaView>
          
            <View style={styles.container}>
      <Text style={styles.heading}>Teacher Dashboard</Text>

      {/* Upload PDF */}
      <TouchableOpacity style={styles.button} onPress={uploadPDF}>
        <Text style={styles.buttonText}>Upload Lecture PDF</Text>
      </TouchableOpacity>

      {/* Change Lecture Time */}
      
      
      

      {/* Search Students */}
      <View style={styles.section}>
        <Text style={styles.label}>Search Students</Text>
        <TextInput
          style={styles.input}
          placeholder="Search by name or class"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filteredStudents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.name}</Text>
            <Text style={styles.studentClass}>Class: {item.class}</Text>
          </View>
        )}
      />
    </View>

        </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F9FC',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  outlineButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2563EB',
    alignItems: 'center',
  },
  studentCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    elevation: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
  },
  studentClass: {
    fontSize: 14,
    color: '#555',
  },
});
