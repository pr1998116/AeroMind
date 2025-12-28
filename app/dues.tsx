import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* 🔹 Fee Type */
type FeeItem = {
  id: string;
  title: string;
  amount: number;
  dueDate: string;
  status: "Pending" | "Overdue";
};

/* 🔹 Dummy Data (Replace with API) */
const FEES: FeeItem[] = [
  {
    id: "1",
    title: "Tuition Fee",
    amount: 12000,
    dueDate: "20 Dec 2025",
    status: "Pending",
  },
  {
    id: "2",
    title: "Library Fee",
    amount: 1500,
    dueDate: "10 Dec 2025",
    status: "Overdue",
  },
  {
    id: "3",
    title: "Exam Fee",
    amount: 2500,
    dueDate: "30 Dec 2025",
    status: "Pending",
  },
];

export default function Dues() {
  const totalDue = FEES.reduce((sum, item) => sum + item.amount, 0);

  const renderItem = ({ item }: { item: FeeItem }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.feeTitle}>{item.title}</Text>
        <Text style={styles.date}>Due: {item.dueDate}</Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.amount}>₹ {item.amount}</Text>
        <Text
          style={[
            styles.status,
            { color: item.status === "Overdue" ? "#e74c3c" : "#f39c12" },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Due Fees" />

      {/* 🔹 Total Due Card */}
      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Total Due</Text>
        <Text style={styles.totalAmount}>₹ {totalDue}</Text>
      </View>

      {/* 🔹 Fee List */}
      <FlatList
        data={FEES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
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

  totalCard: {
    backgroundColor: "#007AFF",
    margin: 16,
    borderRadius: 12,
    padding: 20,
  },

  totalLabel: {
    color: "#fff",
    fontSize: 14,
  },

  totalAmount: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 6,
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
  },

  feeTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  date: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },

  amount: {
    fontSize: 16,
    fontWeight: "700",
  },

  status: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },
});
