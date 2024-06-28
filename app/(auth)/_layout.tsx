import { useAuthStore } from '@/store';
import { Redirect, Stack } from 'expo-router';

const AuthLayout = () => {
    const auth = useAuthStore((state) => state.auth);

    if (auth.status) {
        return <Redirect href="/(home)" />
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="signin" />
            <Stack.Screen name="modal" options={{
                presentation: 'modal'
            }} />
        </Stack>
    )

}

export default AuthLayout;