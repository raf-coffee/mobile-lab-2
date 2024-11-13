import { ScrollView, StyleSheet, FlatList } from "react-native";
import LanguageList from "@/components/LanguageList";
import data from "@/data";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <LanguageList
            language={item.language}
            experience={item.experience}
            logo={item.logo}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
