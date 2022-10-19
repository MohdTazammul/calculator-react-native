import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Button from './src/components/Button';
import Keyboard from './src/components/Keyboard';
import { ThemeContext } from './src/context/ThemeContext';
import { colors } from './src/styles/Colors';

export default function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme == 'light' ?styles.container : [styles.container, {backgroundColor:'black'}]}>
      <StatusBar style="auto" />
        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme == 'light' ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e" value={theme == 'light'} onValueChange={()=>setTheme(theme == 'light' ? 'dark' : 'light')} />
       <Keyboard />
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
