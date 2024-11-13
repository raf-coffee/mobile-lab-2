import { ScrollView, RefreshControl, StyleSheet, FlatList } from "react-native";
import LanguageList from "@/components/LanguageList";
import data from "@/data";
import { useState } from "react";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    console.log("Refresh");

    setTimeout(() => {
      setRefreshing(false);
      console.log("Refresh end");
    }, 500);
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => (
        <LanguageList
          language={item.language}
          experience={item.experience}
          logo={item.logo}
        />
      )}
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
