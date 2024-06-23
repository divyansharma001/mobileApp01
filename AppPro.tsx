import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme,
} from 'react-native'

function AppPro() :JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'; 
    return(
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.darkText}>
                hello this is something
            </Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,  
    },
    container : {
        flex: 1,
        alignItems: 'center'
    },
    whiteText: {
        color: "#FFFFFF"
    },
    darkText: {
        color: '#000000'
    }

})

export default AppPro;