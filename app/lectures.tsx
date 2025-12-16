import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* 🔹 Lecture Type */
type Lecture = {
  id: string;
  subject: string;
  teacher: string;
  time: string;
  room: string;
};

/* 🔹 Dummy Data (Replace with API per student) */
const TODAY_LECTURES: Lecture[] = [
  {
    id: "1",
    subject: "Mathematics",
    teacher: "Mr. Sharma",
    time: "09:00 - 10:00",
    room: "Room 101",
  },
  {
    id: "2",
    subject: "Physics",
    teacher: "Dr. Mehta",
    time: "10:15 - 11:15",
    room: "Lab 2",
  },
  {
    id: "3",
    subject: "Chemistry",
    teacher: "Mrs. Singh",
    time: "11:30 - 12:30",
    room: "Room 203",
  },
  {
    id: "4",
    subject: "English",
    teacher: "Ms. Roy",
    time: "01:30 - 02:30",
    room: "Room 105",
  },
];

export default function TodayLecturesScreen() {
  const renderItem = ({ item }: { item: Lecture }) => (
    <View style={styles.card}>
      <Text style={styles.subject}>{item.subject}</Text>

      <Text style={styles.info}>👨‍🏫 {item.teacher}</Text>
      <Text style={styles.info}>⏰ {item.time}</Text>
      <Text style={styles.info}>🏫 {item.room}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Today's Lectures" />

      {TODAY_LECTURES.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No lectures today 🎉</Text>
        </View>
      ) : (
        <FlatList
          data={TODAY_LECTURES}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}                     
          columnWrapperStyle={styles.row}    
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
      <Footer/>
    </SafeAreaView>
  );
}

/* 🎨 Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },

  list: {
    padding: 16,
  },

  row: {
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#ffffff",
    width: "48%",             // 🔥 Two cards per row
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    elevation: 3,
  },

  subject: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  info: {
    fontSize: 13,
    color: "#444",
    marginTop: 2,
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: 16,
    color: "#777",
  },
});
