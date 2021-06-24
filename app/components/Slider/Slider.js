import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, View, Linking, TouchableOpacity, ImageBackground, Text } from 'react-native';
import Util from '../../utilities/util';

export const Slider = (props) => {

    let { size, style, data, that, } = props

    const BannerWidth = Util.getTotalWidth();
    const BannerHeight = BannerWidth * (2 / 3.5);

    const renderPage = (data, index) => {
        return (
            <View key={index}>
                <TouchableOpacity activeOpacity={1}
                    style={[style, { width: BannerWidth - 10, height: BannerHeight, alignSelf: "center", alignSelf: "center" }]}>
                    <ImageBackground style={[style, { width: "100%", height: "100%", alignSelf: "center" }]} source={{ uri: data.image }} resizeMode={"stretch"} >
                        {/* <View style={{ backgroundColor: 'rgba(0,0,0,.3)', padding: 10 }}>
                            <Text style={[GlobalStyle.font18, GlobalStyle.fontBold, { color: COLOR.white, alignSelf: "center", marginHorizontal: 30, textAlign: "center" }]}>{data.title}</Text>
                            <Text numberOfLines={2} style={[GlobalStyle.font16, GlobalStyle.fontRegular, { color: COLOR.white, alignSelf: "center", marginHorizontal: 30, textAlign: "center" }]}>{data.description}</Text>
                        </View> */}
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Carousel
                autoplayTimeout={5000}
                loop={true}
                index={0}
                pageSize={BannerWidth}
                autoplay={false}
                // autoplay={data.length === 1 ? false : true}
            >
                {data.map((data, index) => renderPage(data, index))}
            </Carousel>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignSelf: "center",
        alignSelf: "center"
    },
});