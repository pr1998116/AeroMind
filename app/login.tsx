import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!userId || !password) {
      Alert.alert("Error", "Please enter ID and Password");
      return;
    }

    if (userId === "admin" && password === "1234") {
      await AsyncStorage.setItem("isLoggedIn", "true");
      router.replace("/home"); // ✅ go to home
    } else {
      Alert.alert("Failed", "Invalid ID or Password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput style={styles.input} placeholder="User ID" onChangeText={setUserId} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 30 },
  input: { borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 16 },
  button: { backgroundColor: "#007AFF", padding: 14, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 18, textAlign: "center" },
});
