import { StyleSheet, View, FlatList, Text, Button } from "react-native";
import { useState } from "react";
import QuoteItem from "./Components/QuoteItem";
import QuoteInput from "./Components/QuoteInput";

export default function App(props) {
  const [quoteList, setQuoteList] = useState([]);

  function addQuote(enteredQuote) {
    setQuoteList((prev) => [
      ...prev,
      { text: enteredQuote, id: Math.random().toString() },
    ]);
  }

  function deleteItem(id) {
    setQuoteList((prev) => {
      return prev.filter((quotes) => quotes.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.myQuotes}>My Quote's🧾</Text>

      <QuoteInput AddQuote={addQuote} />

      <View style={styles.yourQuotes}>
        <FlatList
          alwaysBounceVertical={false}
          data={quoteList}
          renderItem={(quoteObj) => {
            return (
              <QuoteItem
                text={quoteObj.item.text}
                delete={deleteItem}
                id={quoteObj.item.id}
              />
            );
          }}
        />
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

  yourQuotes: {
    marginRight: 8,
    padding: 8,
    color: "black",
    flex: 4,
  },

  myQuotes: {
    flex: 0,
    fontSize: 30,
    border: 3,
    borderBottomColor: "skyblue",
  },
});
