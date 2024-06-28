import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { LogBox, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { customFonts } from '@/constants';
import Toast from 'react-native-toast-message';
import { ActiveToast, ErrorToast, NeutralToast, SuccessToast } from '@/components/toasts';

const RootLayout = () => {
    const [fontsLoaded] = useFonts(customFonts);
    const isDark = useColorScheme() === 'dark';

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <StatusBar
                animated={true}
                barStyle={isDark ? 'light-content' : 'light-content'}
                showHideTransition={'fade'}
                translucent
                backgroundColor='transparent'
            />
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="(auth)" />
            </Stack>
            <Toast
                config={{
                    caError: ErrorToast,
                    caSuccess: SuccessToast,
                    caActive: ActiveToast,
                    caNeutral: NeutralToast,
                }}
            />
        </SafeAreaProvider>
    )
}

export default RootLayout;

LogBox.ignoreLogs(['WARN']);
