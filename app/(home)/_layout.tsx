import { useAuthStore } from '@/store';
import { Redirect, Stack } from 'expo-router';

const HomeLayout = () => {
    const auth = useAuthStore((state) => state.auth);

    if (!auth.status) {
        return <Redirect href="/(auth)" />
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    )
}

export default HomeLayout;