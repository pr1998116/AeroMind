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

/* 1️⃣ Announcement Type */
type Announcement = {
  id: string;
  title: string;
  message: string;
  date: string;
};

/* 2️⃣ Temporary Data (Replace with API / Firebase later) */
const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "1",
    title: "Holiday Notice",
    message: "School will remain closed on Monday due to maintenance work.",
    date: "14 Dec 2025",
  },
  {
    id: "2",
    title: "Exam Schedule",
    message: "Final exams will start from 20 December.",
    date: "12 Dec 2025",
  },
  {
    id: "3",
    title: "Fee Reminder",
    message: "Please clear pending fees before 18 December.",
    date: "10 Dec 2025",
  },
];

export default function AnnouncementsScreen(){
  const renderItem = ({ item }: { item: Announcement }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Announcements"/>

      <FlatList
        data={ANNOUNCEMENTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <Footer/>
    </SafeAreaView>
  );
}

/* 3️⃣ Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    padding: 0,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },

  list: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  message: {
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
  },

  date: {
    fontSize: 12,
    color: "#777",
    textAlign: "right",
  },
});
