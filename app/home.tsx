import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Announcement from "@/icons/announcement";
import Attendence from "@/icons/attendence";
import Lectures from "@/icons/lecture";
import Performence from "@/icons/performence";
import Rupee from "@/icons/rupee";
import StudyMetarials from "@/icons/studyMetarials";
import { router } from "expo-router";


type Props = {
  navigation?: any; // optional if not using now
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Aero Mind"/>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.grid}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/announcementScreen")}
          >
            <Announcement />
            <Text style={styles.text}>Announcements</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>router.push("/dues")}>
            <Rupee />
            <Text style={styles.text}>Dues</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>router.push("/lectures")}>
            <Lectures />
            <Text style={styles.text}>Lectures</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Attendence />
            <Text style={styles.text}>Attendance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <StudyMetarials />
            <Text style={styles.text}>Study Material</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Performence />
            <Text style={styles.text}>Performance</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scroll: {
    padding: 16,
  },

  /* Grid for 2 buttons per row */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  button: {
    width: "48%",            // 🔥 two buttons per row
    height: 90,              // 🔥 big button
    backgroundColor: "#a0e0f0ff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    elevation: 4,            // Android shadow
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
