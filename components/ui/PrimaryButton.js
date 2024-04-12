import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../contants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutterConstainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerConstainer, styles.pressed]
            : styles.buttonInnerConstainer
        }>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutterConstainer: {
    margin: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonInnerConstainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
