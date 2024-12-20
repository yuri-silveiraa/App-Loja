import { router } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { Button } from "../components/button";

export default function Screen() {

    const handleStart = () => {
        router.replace('/home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="cover" 
            />
            <Text style={styles.h1}>Loja do Fulano</Text>
            <Text style={styles.h2}>Aqui você encontra tudo que precisa</Text>
            <Button
                title="começar as compras"
                onPress={handleStart}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000f00f',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    h2: {
        fontSize: 16,
        marginBottom: 10,
    },
})