import {
  useState
} from 'react';
import {
  StatusBar
} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from 'react-native';

export default function App() {

  const [getInput,
    setInput] = useState('');
  const [getTodo,
    setTodo] = useState([]);

  function inputHandler(value) {
    setInput(value);
  }

  function buttonHandler() {
    setTodo([...getTodo, getInput]);
  }

  return (

    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput placeholder="Enter your todo..." style={styles.input} onChangeText={inputHandler} />
        <Button title="ADD" onPress={buttonHandler} />
      </View>
        <ScrollView alwaysBounceVertical={true}>
        
          {getTodo.map((td, i) => (
          <View key={i} style={styles.todoWrapper}>
            <Text style={{textAlign: "center"}}>{td}</Text>
          </View>
          ))}
    
        </ScrollView>
    </View>

  );
}

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingHorizontal: 16
    },
    inputWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 25,
      borderBottomColor: "#a6a6a6",
      borderBottomWidth: 1,
      marginBottom: 25
    },
    input: {
      marginRight: 10,
      borderWidth: 1,
      borderColor: "#d0d0d0",
      width: "80%",
      padding: 5
    },
    todoWrapper: {
      backgroundColor: "#40d4f9",
      padding: 10,
      borderRadius: 6,
      marginVertical: 10,
      borderWidth: 1.5,
      borderColor: "#b0b0b0"
    }
  });