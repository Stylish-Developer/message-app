import { Image, ImageStyle } from 'expo-image';
import { StyleProp } from 'react-native';
import React from 'react';

type AppLogoProps = {
    styles?: StyleProp<ImageStyle>
}
const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const AppLogo = ({ styles }: AppLogoProps) => {
    return (
        <Image
            style={styles}
            source={require("../../assets/images/app-logo.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
        />
    )
}

export default AppLogo;