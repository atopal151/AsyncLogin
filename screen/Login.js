import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Button, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    const onSubmit = async () => {
        await AsyncStorage.setItem('token', username)
        if (username === "anthony" && password === "123456") {
            console.log("Successful");
            navigation.navigate("Home")
        } else {
            console.log("Un Successful");
        }
    }

    const tokenlogin = async () => {
        const value = await AsyncStorage.getItem("token")
        if (value !== null) {
            navigation.navigate("Home")
            console.log("Connected");
        } else {
            console.log("Sign in please");
        }
    }

    tokenlogin()

    return (
        <View style={styles.container}>
            <View style={{ margin: 50 }}>
                <Text style={{ color: "black",fontWeight:"600",fontSize:18 }}>Welcome {(
                    <Text style={{ color: "grey" }}>LogIn</Text>)}</Text>
            </View>
            <TextInput onChangeText={(value) => setUserName(value)}
                placeholder="Username" style={{
                    marginHorizontal: 20, height: 40, width: 250, borderColor: 'grey',
                    borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, margin: 10
                }} />
            <TextInput secureTextEntry onChangeText={(value) => setPassword(value)}
                placeholder="Password"
                style={{
                    marginHorizontal: 20, height: 40, width: 250, borderColor: 'grey',
                    borderWidth: 1, borderRadius: 10, paddingHorizontal: 10
                }} />
            <View style={{
                margin: 10, backgroundColor: "pink",
                borderRadius: 10, width: 100, alignItems: 'center'
            }}>
                <TouchableOpacity onPress={onSubmit} style={{ margin: 10 }}>
                    <Text style={{fontSize:13,fontWeight:"600",color:"white"}}>Log In</Text>
                </TouchableOpacity>
            </View>

            <View style={{ margin: 50, backgroundColor:"orange",borderRadius:5 }}>
                <Text style={{margin:10,color:"white"}}>
                    Username: {username}
                </Text>
                <Text style={{margin:10,color:"white"}}>
                    Password: {password}
                </Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
