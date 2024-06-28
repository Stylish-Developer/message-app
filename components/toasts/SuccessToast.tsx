import { View, Text } from "react-native";
import { BaseToastProps } from "react-native-toast-message";

const SuccessToast = (props: BaseToastProps) => {
    const { text1 } = props;

    return (
        <View className="h-[39px] w-[293px] flex-row items-center justify-center space-x-3 rounded-[10px] bg-green-500 px-4">
            <Text className="font-satoshi-medium text-white">{text1}</Text>
        </View>
    );
};

export default SuccessToast;
