import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ForgotPassword = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.forgotPasswordView, { paddingTop: insets.top, paddingRight: insets.right, paddingBottom: insets.bottom, paddingLeft: insets.left }]}>
            <Text style={styles.forgotPasswordTitle}>Forgot passwordscreen</Text>
            <Button title="goback" onPress={() => { router.back() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    forgotPasswordView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPasswordTitle: {
        color: 'purple',
        fontSize: 20
    },
    gobackActionBtn: {
        color: 'black',
        fontSize: 18
    }
});

export default ForgotPassword;