import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const skyHandsomeImageUrl = 'https://lh3.googleusercontent.com/4srn4-uEZuHrLZOzqa9m05xZ9wfkOOrv3s0IODXafWkyHS7Ui7V_tKNLTFMBOzIJy2NTxp-bAzpo2j4_y' +
                                'WFnzcHvuR-9OUSx7k8pVbvOLHtNfn_fJJpi8wX9e04Wi-3NGhcAGnppf5-AUZZGDoC2iiM6T6QLM2i5wDSkO8hCZbeZLd7BulKkZxqOM6GRLIkatnwp' +
                                'hdNuUAvGXCjgf_VApu4h5SoTnA87aF4wlNyCHhr4TqgStAP9FPaHHFX16ZV8fi1E8u3NltKn_HOe_HFIVdjVct_VGVy7aeYVklV_9cFt22yrllxxS1H' +
                                'YHCB8XvA9gh3-DSrjSY-QbAFgIeVPwGieTb6zQJDaNKIR_0VyfmtBaLm-GrEWJbjUKtADI-LFISQR8mX-5NbjUPYkQN86KvIigyLcb2AOePtcd39bU_' +
                                'XCje3Rcmg4mgm6uXxdLfwmf_sgEGVM0fjTnD9srdCPsmR35IdI23rlopfwQgmOOXRL61UajFMrzVsUUUt8OjkCipDsG0ZHuS6-NJavPDy0gnYphR2nh' +
                                'kIA5SiKpio-AAlsNXl5sza_ukzFop1Pne1F7b0urYQHuPf1m8x6jaAlJcJuwHR-1UMXPexKCh09OF7GtoDcEQ3RFqb9A3rTGKPL1QViHBYH0GyAFeBF' +
                                'X-9B_xHTwU5JjaBNhK9HTK0vvWe6y1eCMppep8XJyKieosbUfiXQQiTMttSq7jmBmUwkTFTxL8d0w9VqPxaOvpCbj2FJrFdOAr0Xp8o=w723-h963-no';

    return (
        <View style={styles.containerStyle}>
            <ImageBackground source={{ uri: skyHandsomeImageUrl }} style={styles.backgroundImageStyle}>
                <View style={styles.menuContainerStyle}>
                </View>
            </ImageBackground>
        </View>  
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: "column",
      },
      backgroundImageStyle: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
      },
      textStyle: {
        color: "red",
        fontSize: 30,
        fontWeight: "bold"
      },
      menuContainerStyle: {
          marginBottom: 100,
      },
      buttonStyle: {
      }
});

export default HomeScreen;