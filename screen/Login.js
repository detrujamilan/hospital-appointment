import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function Login() {
  return (
    <View>
      <View className="flex justify-center items-center">
        <Image
          source={require("../assets/images/Appointment.jpg")}
          className="w-[350px] h-[350px]"
        />
      </View>
      <View>
        <Text
          className="text-2xl  text-center "
          style={{ fontFamily: "montserratBold" }}
        >
          Your Ultimate Doctor
        </Text>
        <Text
          className="text-2xl  text-center "
          style={{ fontFamily: "montserratBold" }}
        >
          Appointment Booking App
        </Text>
        <Text
          className="mt-5 text-center"
          style={{ fontFamily: "montserratRegular" }}
        >
          Book Appointment Booking Effortlessly and manager your helth Journey
        </Text>
        <TouchableOpacity
          className=" rounded-[90px] justify-center flex   p-5 items-center mt-5 bg-[#6366F1]"
          style={{
            width: 280,
            alignItems: "center",
          }}
        >
          <Text
            className="text-white text-lg "
            style={{ fontFamily: "montserratMedium" }}
          >
            Login With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
