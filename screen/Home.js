import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home({ navigation }) {

    
    
    const logout = async () => {
        await AsyncStorage.removeItem("token")
        navigation.navigate("Login")
    }

    const showData = async () => {
        let data = await AsyncStorage.getItem("token")
        console.log(data);
    }
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text style={{ margin: 50 }}>Login Successful
            </Text>
            <View style={{
                margin: 10, backgroundColor: "red",
                borderRadius: 10, width: 100, alignItems: 'center'
            }}>
                <TouchableOpacity onPress={logout} style={{ margin: 10 }}>
                    <Text style={{ fontSize: 13, fontWeight: "600", color: "white" }}>Log Out</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                margin: 10, backgroundColor: "red",
                borderRadius: 10, width: 100, alignItems: 'center'
            }}>
                <TouchableOpacity onPress={showData} style={{ margin: 10 }}>
                    <Text style={{ fontSize: 13, fontWeight: "600", color: "white" }}>Show Data</Text>
                </TouchableOpacity>
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
