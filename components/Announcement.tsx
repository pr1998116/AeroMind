import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { databases, ID } from "../lib/appwrite";

const DATABASE_ID = "school_db";
const COLLECTION_ID = "announcements";

export default function AddAnnouncement() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const saveAnnouncement = async () => {
    if (!title || !message) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    setLoading(true);

    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          title,
          message,
          createdBy: "Teacher",
          createdAt: new Date().toISOString(),
        }
      );

      Alert.alert("Success", "Announcement saved");
      setTitle("");
      setMessage("");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to save announcement");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Announcement</Text>

      <TextInput
        placeholder="Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Message"
        style={[styles.input, styles.textArea]}
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={saveAnnouncement}>
        <Text style={styles.buttonText}>
          {loading ? "Saving..." : "Save Announcement"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
