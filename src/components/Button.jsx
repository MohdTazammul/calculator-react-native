import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { Styles } from '../styles/style';


const Button = ({ title, onPress, isBlue, isGray }) => {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            style={
                isBlue 
                ? Styles.btnBlue 
                : isGray 
                ? Styles.btnGray 
                : theme === "light" 
                ? Styles.btnLight 
                : Styles.btnDark
            } 
            onPress={onPress}>
            <Text 
               style={
                   isBlue || isGray 
                   ? Styles.smallTextLight
                   : theme === "dark" 
                   ? Styles.smallTextLight 
                   : Styles.smallTextDark 
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default Button