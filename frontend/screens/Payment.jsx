import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button, RadioButton } from 'react-native-paper'

const Payment = ({ navigation, route }) => {
    
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const isAuthenticated = true;

  const redirectToLogin = () => {
    navigation.navigate("login");
  };
  const codHandler = () => {}; // to create later
  const onlineHandler = () => {}; // to create later

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading 
        containerStyle={{
          paddingTop: 70,
        }}
        text1="Payment"
        text2="Method"
      />

      <View style={styles.container}>
        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={paymentMethod}
        >
          <View style={styles.radioStyle}>
            <Text style={styles.radioTextStyle}>Cash on Delivery</Text>
            <RadioButton color={colors.color1} value={"COD"} />
          </View>
          <View style={styles.radioStyle}>
            <Text style={styles.radioTextStyle}>Online</Text>
            <RadioButton color={colors.color1} value={"ONLINE"} />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        onPress={
          !isAuthenticated 
            ? redirectToLogin 
            : paymentMethod=="COD"
              ? codHandler
              : onlineHandler
        }
      >
        <Button 
          style={styles.buttonStyle} 
          textColor={colors.color2} 
          icon={ paymentMethod == "COD" ? "check-circle" : "circle-multiple-outline" }>
          {
            paymentMethod == "COD" ? "Place Order" : "Pay"
          }
        </Button>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  radioTextStyle: {
    fontWeight: "600",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.color2,
  },
  buttonStyle: {
     backgroundColor: colors.color3,
     borderRadius: 100,
     margin: 10,
     padding: 5,
  },
});

export default Payment