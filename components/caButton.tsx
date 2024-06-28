import { ImageStyle } from "expo-image";
import { StyleProp, Text, TouchableOpacity } from "react-native";

type CaButtonProps = {
    style: StyleProp<ImageStyle>;
    onPress: () => void;
    title: string;
    classname: string;
};

const CaButton = ({ style, onPress, title, classname }: CaButtonProps) => {
    return (
        <TouchableOpacity style={style} onPress={onPress} className={classname}>
            <Text className="text-ca-white2 text-[20px] font-Dosis-Regular tracking-widest">{title}</Text>
        </TouchableOpacity>
    )
}

export default CaButton;