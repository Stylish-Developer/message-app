import { View, Text } from "react-native";
import { Image } from "expo-image";
import { BaseToastProps } from "react-native-toast-message";

const ActiveToast = (props: BaseToastProps) => {
    const { text1 } = props;

    return (
        <View className="h-[39px] w-[293px] flex-row items-center justify-center space-x-3 rounded-[10px] bg-white px-4">
            <Image
                source={""}
                className="h-[20px] w-[22px]"
            />
            <Text className="font-satoshi-medium text-black">{text1}</Text>
        </View>
    );
};

export default ActiveToast;
