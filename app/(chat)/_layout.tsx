import { auth } from "@/config/firebase";
import { useAuthStore } from "@/store";
import { Redirect, Stack, router } from "expo-router";
import { signOut } from "firebase/auth";
import { Button } from "react-native";

const ChatLayout = () => {
    const authStoreValue = useAuthStore((state) => state.auth);
    const useAuth = useAuthStore((state) => state.useAuth);

    if (!authStoreValue.status) {
        return <Redirect href="/(auth)" />
    }

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerLeft: () => <Button
                    onPress={() => {
                        router.navigate('/(home)')
                    }}
                    title="back"
                    color="orange"
                />,
                headerRight: () => <Button
                    onPress={() => {
                        signOut(auth)
                        useAuth(false);
                    }}
                    title="logout"
                    color="blue"
                />
            }}
        >
            <Stack.Screen name="index" options={{
                title: 'Chat',
            }} />
        </Stack>
    )
}

export default ChatLayout;