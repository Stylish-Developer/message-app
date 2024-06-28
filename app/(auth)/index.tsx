import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from "react-native-toast-message";
import { useAuthStore, useUserStore } from "@/store";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import AppLogo from "@/components/applogo";
import CaButton from "@/components/caButton";
import CaInput from "@/components/caInput";

type userType = {
    name: string;
    password: string;
}

const Login = () => {
    const insets = useSafeAreaInsets();
    const [user, setuser] = useState<userType>({
        name: '',
        password: ''
    });

    const { name, password } = useUserStore((state) => state.user);
    const useAuth = useAuthStore((state) => state.useAuth);

    const handleLogIn = () => {
        if (!user.name || user.name === "") {
            Toast.show({
                type: "caError",
                text1: "Username Required",
                position: "bottom",
                visibilityTime: 1000,
            });
        } else if (!user.password || user.password === "") {
            Toast.show({
                type: "caError",
                text1: "Password Required",
                position: "bottom",
                visibilityTime: 1000,
            });
        } else if (user.name.length < 6) {
            Toast.show({
                type: "caError",
                text1: "Username must be minimum 6 characters",
                position: "bottom",
                visibilityTime: 1000,
            });
        } else if (user.password.length < 6) {
            Toast.show({
                type: "caError",
                text1: "password must be minimum 6 characters",
                position: "bottom",
                visibilityTime: 1000,
            });
        } else {
            signInWithEmailAndPassword(auth, user.name, user.password)
                .then(res => {
                    console.log("login response", JSON.stringify(res))
                    Toast.show({
                        type: 'caSuccess',
                        text1: `${res.user.email}logged in successfully.`,
                        position: 'bottom',
                        visibilityTime: 3000
                    })
                    useAuth(true)
                    setuser({
                        name: '',
                        password: ''
                    })
                })
                .catch(err => {
                    console.log("login error", JSON.stringify(err));
                    Toast.show({
                        type: 'caError',
                        text1: `${err.code}`,
                        position: 'bottom',
                        visibilityTime: 1000
                    })
                })
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.loginView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.loginView, { paddingRight: insets.right, paddingBottom: insets.bottom, paddingLeft: insets.left }]} className="bg-ca-lightVoilet">
                    <View className="h-3/6 w-full bg-ca-black rounded-b-3xl justify-center items-center">
                        <AppLogo styles={{ height: 180, width: 180 }} />
                        <Text className="text-ca-white2 text-[25px]">{name}</Text>
                        <Text className="text-ca-white2 text-[25px]">{password}</Text>
                    </View>
                    <View className="h-3/6 w-full bg-ca-white px-4 py-4 justify-start items-start">
                        <View className="h-1/6 w-full">
                            <Text className="text-[28px] text-ca-black2 font-Dosis-SemiBold tracking-wider">Hi!</Text>
                            <Text className="text-[18px] text-ca-black2 font-Dosis-SemiBold tracking-wider">LogIn Into Your Account </Text>
                        </View>
                        <View className="h-4/6 w-full">
                            <Text className="text-[12] text-ca-grey ffont-Dosis-SemiBold tracking-wider -mb-4 ml-2 w-full">Enter your username:</Text>
                            <CaInput
                                style={{ width: '100%', height: 55, borderColor: '#ccc', borderWidth: 1, marginVertical: 10, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 }}
                                onChangeText={(val) => setuser({ ...user, name: val })}
                                value={user.name}
                                placeholder={'Enter your username...'}
                                placeholderTextColor={'#b783f0'}
                                keyboardType={'default'}
                                allowFontScaling={true}
                                autoFocus={true}
                                cursorColor={'#b783f0'}
                                maxLength={25}
                                multiline={false}
                                numberOfLines={1}
                                secureTextEntry={false} />
                            <Text className="text-[12] text-ca-grey ffont-Dosis-SemiBold tracking-wider -mb-4 ml-2 w-full">Enter your password:</Text>
                            <CaInput
                                style={{ width: '100%', height: 55, borderColor: '#ccc', borderWidth: 1, marginVertical: 10, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 }}
                                onChangeText={(val) => setuser({ ...user, password: val })}
                                value={user.password}
                                placeholder={'Enter your password...'}
                                placeholderTextColor={'#b783f0'}
                                keyboardType={'default'}
                                allowFontScaling={true}
                                autoFocus={false}
                                cursorColor={'#b783f0'}
                                maxLength={25}
                                multiline={false}
                                numberOfLines={1}
                                secureTextEntry={true} />
                            <View className="justify-center items-center h-2/4">
                                <CaButton style={{ width: '85%', height: 45 }} title="LogIn" onPress={handleLogIn} className="rounded-xl bg-ca-darkGreen justify-center mb-10 items-center" />
                            </View>
                        </View>
                        <View className="h-1/6 w-full flex-row justify-start items-center mt-5">
                            <Text className="text-[18px] font-Dosis-SemiBold tracking-wider">Don't have an account?</Text>
                            <Link href="/signin" asChild><Text className="text-[18px] font-Dosis-SemiBold tracking-wider text-ca-purple ml-2">Sign In</Text></Link>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
    },
});

export default Login;