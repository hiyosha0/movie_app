import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Profile = () => {
  return (
    <View className=" bg-primary flex-1">
      <View className=" flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className=" size-10" tintColor={"#Fff"} />
        <Text className=" text-white">Profile</Text>
      </View>
    </View>
  );
};

export default Profile;
