import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

export default function QuoteInput(props) {
  const [enteredQuote, SetEnteredQuote] = useState("");

  function quoteHandler(enteredText) {
    SetEnteredQuote(enteredText);
  }

  function sendingQuoteText() {
    props.AddQuote(enteredQuote);
    SetEnteredQuote("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Write Quote"
        value={enteredQuote}
        onChangeText={quoteHandler}
      />

      <Button title="Add" onPress={sendingQuoteText} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "skyblue",
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: "row",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "80%",
    padding: 8,
    marginRight: 8,
  },
});
