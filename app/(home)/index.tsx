import CaButton from "@/components/caButton";
import { auth } from "@/config/firebase";
import { useAuthStore, useUserStore } from "@/store";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
    const insets = useSafeAreaInsets();
    const userLogout = useUserStore((state) => state.userLogout);
    const useAuth = useAuthStore((state) => state.useAuth);

    return (
        <>
            <View style={[styles.homeView, { paddingTop: insets.top, paddingRight: insets.right, paddingBottom: insets.bottom, paddingLeft: insets.left }]} className="bg-ca-grey">
                <Text className="text-ca-white2">Home screen</Text>
                <CaButton title="logout" onPress={() => {
                    // userLogout();
                    signOut(auth)
                    useAuth(false);
                }} style={{
                    height: 40,
                    width: 100
                }} classname="justify-center items-center  bg-ca-darkGreen rounded-xl" />
                <CaButton title="go to chat" onPress={() => { router.navigate('(chat)') }} style={{ height: 40, width: 100 }} classname="bg-ca-purple" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Home;