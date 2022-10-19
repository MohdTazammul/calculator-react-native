import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Styles } from '../styles/style'
import { colors } from '../styles/Colors'
import Button from './Button'

const Keyboard = () => {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState(null);

    function onPressOperator(op)
    {
        alert(op);
    }
    function onPressDigit(op)
    {
        alert(op);
    }

  return (
    <View>
        <View style={Styles.row}>
            <Button title="C" isGray />
            <Button title="+/-" isGray onPress={() => onPressOperator("+/-")} />
            <Button title="%" isGray onPress={() => onPressOperator("％")} />
            <Button title="÷" isBlue onPress={() => onPressOperator("/")} />
        </View>
        <View style={Styles.row}>
            <Button title="7" onPress={() => onPressDigit("7")} />
            <Button title="8" onPress={() => onPressDigit("8")} />
            <Button title="9" onPress={() => onPressDigit("9")} />
            <Button title="*" isBlue onPress={() => onPressOperator("*")} />
        </View>
        <View style={Styles.row}>
            <Button title="4" onPress={() => onPressDigit("4")} />
            <Button title="5" onPress={() => onPressDigit("5")} />
            <Button title="6" onPress={() => onPressDigit("6")} />
            <Button title="-" isBlue onPress={() => onPressOperator("-")} />
        </View>
        <View style={Styles.row}>
            <Button title="1" onPress={() => onPressDigit("1")} />
            <Button title="2" onPress={() => onPressDigit("2")} />
            <Button title="3" onPress={() => onPressDigit("3")} />
            <Button title="+" isBlue onPress={() => onPressOperator("+")} />
        </View>
        <View style={Styles.row}>
            <Button title="." onPress={() => onPressDigit(".")} />
            <Button title="0" onPress={() => onPressDigit("0")} />
            <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
            <Button title="=" isBlue onPress={() => getResult()} />
        </View>

    </View>
  )
}

export default Keyboard