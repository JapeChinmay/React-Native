import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredQuote, SetEnteredQuote] = useState("");

  const [quoteList, setQuoteList] = useState([]);

  function quoteHandler(enteredText) {
    SetEnteredQuote(enteredText);
  }

  function addQuote() {
    setQuoteList((prev) => [...prev, enteredQuote]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write Quote"
          onChangeText={quoteHandler}
        />
        <Button title="Add" onPress={addQuote} />
      </View>

      <View style={styles.yourQuotes}>
        <ScrollView alwaysBounceVertical={false}>
          {quoteList.map((QUOTE) => (
            <View style={styles.quoteList} key={Math.random()}>
              <Text>{QUOTE}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  inputContainer: {
    flexDirection: "row",
    flex: 1,

    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "skyblue",
    borderRadius: 5,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "80%",
    padding: 8,
    marginRight: 8,
  },

  yourQuotes: {
    marginRight: 8,
    padding: 8,
    color: "black",
    flex: 4,
  },

  quoteList: {
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: "skyblue",

    padding: 8,
    color: "black",
  },
});
