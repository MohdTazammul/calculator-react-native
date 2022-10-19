import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Button from './src/components/Button';
import { ThemeContext } from './src/context/ThemeContext';
import { colors } from './src/styles/Colors';

export default function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme == 'light' ?styles.container : [styles.container, {backgroundColor:'black'}]}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Switch value={theme == 'light'} onValueChange={()=>setTheme(theme == 'light' ? 'dark' : 'light')} />
        <Button title={"1"} onPress={()=>alert('hye')} />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
