import { StyleSheet } from "react-native";
import { colors } from "./Colors";

let btnHeightWidth = 72;

export const Styles = StyleSheet.create({
    btnBlue: {
        width: btnHeightWidth,
        height: btnHeightWidth,
        borderRadius: 24,
        backgroundColor: colors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
       
    },
    btnDark: {
        width: btnHeightWidth,
        height: btnHeightWidth,
        borderRadius: 24,
        backgroundColor: colors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: btnHeightWidth,
        height: btnHeightWidth,
        borderRadius: 24,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: btnHeightWidth,
        height: btnHeightWidth,
        borderRadius: 24,
        backgroundColor: colors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: colors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: colors.black,
    },

    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: colors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: colors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
});