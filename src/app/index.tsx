import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { supabase } from "../lib/supabase";
import MovieItem from "../components/MovieItem";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      let { data: movies, error } = await supabase
        .from("movies")
        .select("*")
        .range(0, 49);
      if (movies) {
        setMovies(movies);
      }
    };
    fetchMovies();
  }, []);
  const onSearch = () => {
    setQuery("");
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Search for movies..."
            placeholderTextColor={"gray"}
            style={styles.search}
            value={query}
            onChangeText={setQuery}
          />
          <Button title="Search" onPress={onSearch} />
        </View>
        <FlatList data={movies} renderItem={MovieItem} />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181413",
  },
  search: {
    flex: 1,
    color: "gainsboro",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
});
