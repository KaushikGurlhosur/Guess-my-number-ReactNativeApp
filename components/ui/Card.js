import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../contants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 9, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

// elevation: 4,// boxShadow only for android
