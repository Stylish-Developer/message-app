import { ImageStyle } from "expo-image";
import { KeyboardTypeOptions, StyleProp, TextInput } from "react-native";

type caInputProps = {
    style: StyleProp<ImageStyle>;
    onChangeText: (val: string) => void;
    value: string;
    placeholder: string;
    placeholderTextColor: string;
    keyboardType: KeyboardTypeOptions;
    allowFontScaling: boolean;
    autoFocus: boolean;
    cursorColor: string;
    maxLength: number;
    multiline: boolean;
    numberOfLines: number;
    secureTextEntry: boolean;
}

const CaInput = ({
    style,
    onChangeText,
    value,
    placeholder,
    placeholderTextColor,
    keyboardType,
    allowFontScaling,
    autoFocus,
    cursorColor,
    maxLength,
    multiline,
    numberOfLines,
    secureTextEntry,
}: caInputProps) => {
    return (
        <TextInput
            style={style}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            allowFontScaling={allowFontScaling}
            autoFocus={autoFocus}
            cursorColor={cursorColor}
            maxLength={maxLength}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
        />
    )
}

export default CaInput;