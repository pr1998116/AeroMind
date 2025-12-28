import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Footer() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.replace("/home")}>
        <Text style={styles.item}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/announcementScreen")}>
        <Text style={styles.item}>Announcements</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Text style={styles.item}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    
  },
  item: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007AFF",
  },
});
