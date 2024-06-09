import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, defaultStyle, formHeading } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox';

const user = {
  name: "Yoman",
  email: "yoman@gmail.com",
};

const Profile = ({ navigation }) => {

  const [avatar, setAvatar] = useState(null);
  const navigateHandler = () => {}

  return (
    <View style={defaultStyle}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
        <Text style={formHeading}>Profile</Text>
      </View>

      {/* Loading*/}
      <View style={styles.container}>
        <Avatar.Image 
          source={{
            uri: avatar
            }} 
          size={100} 
          style={{ backgroundColor: colors.color1 }}
        />

        <TouchableOpacity 
          onPress={() => navigation.navigate("camera", { updateProfile: true })}
        >
          <Button textColor={colors.color1}>Change Photo</Button>
        </TouchableOpacity>

        <Text style={styles.name}>
          {user?.name}
        </Text>

        <Text style={{
          fontWeight: "300",
          color: colors.color2,
        }}>
          {user?.email}
        </Text>
      </View>

      <View>
        <View style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: 'space-between',
        }}
      >
        <ButtonBox handler={navigateHandler} text={"Orders"} icon={"format-list-bulleted-square"} />
        <ButtonBox handler={navigateHandler} text={"Admin"} icon={"view-dashboard"} reverse={true} />
        <ButtonBox handler={navigateHandler} text={"Profile"} icon={"pencil"} />
        

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10, 
    color: colors.color2,
  },
});

export default Profile