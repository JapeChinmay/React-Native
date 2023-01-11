import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";

export default function QuoteItem(props) {
  return (
    <View style={styles.quoteList}>
      <Pressable
        style={({ pressedData }) => pressedData && styles.pressedItem}
        onPress={props.delete.bind(this, props.id)}
      >
        <Text style={styles.uniqueQuote}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  quoteList: {
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: "skyblue",

    padding: 8,
    color: "black",
  },

  uniqueQuote: {
    display: "inline-block",
    backgroundColor: "skyblue",
    color: "black",
  },

  pressedItem: {
    opacity: 0.5,
  },
});
