import { usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === "/home";

  const handleBack = () => {
    router.replace("/home"); // 🔥 always go to Home
  };

  return (
    <View style={styles.container}>
      {!isHome ? (
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}

      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  back: {
    fontSize: 22,
    color: "#fff",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
