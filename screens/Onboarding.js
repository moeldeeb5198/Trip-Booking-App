import React from "react";

// import LinearGradient from "react-native-linear-gradient";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image
          source={images.onboardingImage}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </View>
      <View style={styles.view}>
        <View style={{ alignItems: "center", marginHorizontal: SIZES.padding }}>
          <Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: "center",
              ...FONTS.body3
            }}
          >
            Easy Solution to buy tickets for your travel, business trips,
            transportation, lodgin and culinary.
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.shadow,
            {
              marginTop: SIZES.padding * 2,
              width: "70%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#46aeff",
              borderRadius: 15
            }
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          {/* <View style={{ , height:'100%', widht:'100%', alignItems: 'center', justifyContent: 'center', borderRaduis: 15}}> */}
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start !</Text>
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      widht: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export default Onboarding;
