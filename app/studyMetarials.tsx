import Footer from '@/components/footer';
import Header from '@/components/header';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type MaterialType = 'PDF' | 'VIDEO' | 'NOTES';

interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  type: MaterialType;
  uploadedOn: string;
}

const MATERIALS: StudyMaterial[] = [
  {
    id: '1',
    title: 'Trigonometry Formula Sheet',
    subject: 'Mathematics',
    type: 'PDF',
    uploadedOn: '15 Dec 2025',
  },
  {
    id: '2',
    title: 'Newton Laws – Video Lecture',
    subject: 'Physics',
    type: 'VIDEO',
    uploadedOn: '14 Dec 2025',
  },
  {
    id: '3',
    title: 'Organic Chemistry Notes',
    subject: 'Chemistry',
    type: 'NOTES',
    uploadedOn: '13 Dec 2025',
  },
  {
    id: '4',
    title: 'English Grammar PDF',
    subject: 'English',
    type: 'PDF',
    uploadedOn: '12 Dec 2025',
  },
];

export default function StudyMaterials() {
  const [search, setSearch] = useState('');

  const filteredData = MATERIALS.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.subject.toLowerCase().includes(search.toLowerCase())
  );

  const getTypeStyle = (type: MaterialType) => {
    switch (type) {
      case 'PDF':
        return styles.pdf;
      case 'VIDEO':
        return styles.video;
      case 'NOTES':
        return styles.notes;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Header title='Study Meterials'/>
      <Text style={styles.heading}>Study Materials</Text>

      {/* Search */}
      <TextInput
        placeholder="Search by subject or title"
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      {/* List */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.date}>Uploaded: {item.uploadedOn}</Text>
            </View>

            <View style={styles.right}>
              <Text style={[styles.typeBadge, getTypeStyle(item.type)]}>
                {item.type}
              </Text>

              <TouchableOpacity style={styles.openBtn}>
                <Text style={styles.openText}>Open</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Footer/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  search: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  subject: {
    fontSize: 13,
    color: '#555',
    marginVertical: 2,
  },
  date: {
    fontSize: 11,
    color: '#888',
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  typeBadge: {
    fontSize: 11,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 8,
  },
  pdf: {
    backgroundColor: '#E3F2FD',
    color: '#1565C0',
  },
  video: {
    backgroundColor: '#FCE4EC',
    color: '#C2185B',
  },
  notes: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
  },
  openBtn: {
    backgroundColor: '#1E88E5',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  openText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
