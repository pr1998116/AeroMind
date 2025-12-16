import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SubjectPerformance {
  id: string;
  subject: string;
  marks: number;
  total: number;
}

const DATA: SubjectPerformance[] = [
  { id: '1', subject: 'Mathematics', marks: 85, total: 100 },
  { id: '2', subject: 'Physics', marks: 78, total: 100 },
  { id: '3', subject: 'Chemistry', marks: 82, total: 100 },
  { id: '4', subject: 'English', marks: 90, total: 100 },
  { id: '5', subject: 'Computer', marks: 95, total: 100 },
];

export default function StudentPerformance() {
  const totalMarks = DATA.reduce((sum, s) => sum + s.marks, 0);
  const maxMarks = DATA.reduce((sum, s) => sum + s.total, 0);
  const percentage = ((totalMarks / maxMarks) * 100).toFixed(1);

  const getGrade = (percent: number) => {
    if (percent >= 90) return 'A+';
    if (percent >= 80) return 'A';
    if (percent >= 70) return 'B';
    if (percent >= 60) return 'C';
    return 'D';
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Header title='Performence'/>
      <Text style={styles.heading}>My Performance</Text>

      {/* Overall Card */}
      <View style={styles.overallCard}>
        <Text style={styles.percent}>{percentage}%</Text>
        <Text style={styles.grade}>
          Grade: {getGrade(Number(percentage))}
        </Text>
      </View>

      {/* Subject-wise */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => {
          const progress = (item.marks / item.total) * 100;
          return (
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.subject}>{item.subject}</Text>
                <Text style={styles.marks}>
                  {item.marks}/{item.total}
                </Text>
              </View>

              <View style={styles.progressBg}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${progress}%` },
                  ]}
                />
              </View>
            </View>
          );
        }}
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
    marginBottom: 14,
  },
  overallCard: {
    backgroundColor: '#1E88E5',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    marginBottom: 18,
  },
  percent: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  grade: {
    fontSize: 16,
    color: '#E3F2FD',
    marginTop: 6,
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  subject: {
    fontSize: 15,
    fontWeight: '600',
  },
  marks: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressBg: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#43A047',
    borderRadius: 6,
  },
});
