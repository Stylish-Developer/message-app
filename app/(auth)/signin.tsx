import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Link, router } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from "react";
import { useUserStore } from "@/store";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import Toast from "react-native-toast-message";
import AppLogo from "@/components/applogo";
import CaButton from "@/components/caButton";
import CaInput from "@/components/caInput";

type userType = {
    name: string;
    password: string;
}

const Signin = () => {
    const insets = useSafeAreaInsets();
    const [user, setuser] = useState<userType>({
        name: '',
        password: ''
    });

    const userSignin = useUserStore((state) => state.userSignin);

    const handleSignUp = () => {
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
            createUserWithEmailAndPassword(auth, user.name, user.password)
                .then(res => {
                    Toast.show({
                        type: 'caSuccess',
                        text1: `${res.user.email} Signed in successfully`,
                        position: 'bottom',
                        visibilityTime: 1000
                    })
                    router.navigate('/')
                })
                .catch(err => {
                    Toast.show({
                        type: 'caError',
                        text1: `${err.code}`,
                        position: 'bottom',
                        visibilityTime: 1000
                    })
                })
        }
    }
    // const handleSignUp = () => {
    //     if (!user.name || !user.password) {
    //         Toast.show({
    //             type: "caError",
    //             text1: "Required",
    //             position: "bottom",
    //             visibilityTime: 1000,
    //         });
    //     } else if (user.name.length < 6) {
    //         Toast.show({
    //             type: "caError",
    //             text1: "Username must be minimum 6 characters",
    //             position: "bottom",
    //             visibilityTime: 1000,
    //         });
    //     } else if (user.password.length < 6) {
    //         Toast.show({
    //             type: "caError",
    //             text1: "password must be minimum 6 characters",
    //             position: "bottom",
    //             visibilityTime: 1000,
    //         });
    //     } else {
    //         userSignin(user.name, user.password)
    //         Toast.show({
    //             type: "caSuccess",
    //             text1: "You signedin sucessfully.",
    //             position: "bottom",
    //             visibilityTime: 1000
    //         });
    //         setuser({
    //             name: '',
    //             password: ''
    //         })
    //         router.navigate('/')

    //     }
    // }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.signinView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.signinView, { paddingRight: insets.right, paddingBottom: insets.bottom, paddingLeft: insets.left }]} className="bg-ca-lightVoilet">
                    <View className="h-3/6 w-full bg-ca-black rounded-b-3xl justify-center items-center">
                        <AppLogo styles={{ height: 180, width: 180 }} />
                        <Text className="text-ca-white2 text-[25px]">Chat App</Text>

                    </View>
                    <View className="h-3/6 w-full bg-ca-white px-4 py-4 justify-start items-start">
                        <View className="h-1/6 w-full">
                            <Text className="text-[28px] text-ca-black2 font-Dosis-SemiBold tracking-wider">Welcome to CA!</Text>
                            <Text className="text-[18px] text-ca-black2 font-Dosis-SemiBold tracking-wider">Create Your Account </Text>
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
                                <CaButton style={{ width: '85%', height: 45 }} title="Sign Up" onPress={handleSignUp} className="rounded-xl bg-ca-darkGreen justify-center mb-10 items-center" />
                            </View>
                        </View>
                        <View className="h-1/6 w-full flex-row justify-start items-center mt-5">
                            <Text className="text-[18px] font-Dosis-SemiBold tracking-wider">Already you have an account?</Text>
                            <Link href="/" asChild><Text className="text-[18px] font-Dosis-SemiBold tracking-wider text-ca-purple ml-2">Log In</Text></Link>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    signinView: {
        flex: 1,
    },
    signinTitle: {
        color: 'red',
        fontSize: 25,
    }
});

export default Signin;