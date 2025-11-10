import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React , {useState} from 'react';
import { TextInput,Button} from 'react-native' ; 
export default function App() {
  // Metin girdisi için state
   const [enteredTaskText, setEnteredTaskText] = useState('');
   // Görevler listesi için state
   const [tasks, setTasks] = useState([]);

   function taskInputHandler(enteredText) {
       setEnteredTaskText(enteredText);}
   
    function addTaskHandler() {
      if(enteredTaskText.trim().length === 0){
        return; } // Boş görev eklenmesini engelle 
      // Yeni görevi görevler dizisine ekle
       setTasks((currentTasks) => [...currentTasks,{ id: Math.random().toString(), text: enteredTaskText },]);
       // Giriş alanını temizle
       setEnteredTaskText(''); }


return (
<SafeAreaView style={styles.appContainer}>
<View style={styles.contentContainer}>
  <View style={styles.inputContainer}>
<TextInput
style={styles.textInput}
placeholder="Yeni bir görev ekle..."
onChangeText={taskInputHandler} // State işleyiciye bağlan
value={enteredTaskText} // Değeri state'e bağla
/>
<Button title="Ekle" onPress={addTaskHandler} />
</View>
{/* Liste alanı buraya gelecek */ }
<Text style={styles.title}>Yapılacaklar Listem</Text>
{/* Giriş alanı buraya gelecek */ }
{/* Liste alanı buraya gelecek */ }
</View>
</SafeAreaView>
);
}
const styles = StyleSheet.create({
appContainer: {
flex: 1,
backgroundColor: '#f0f2f5', // Açık gri arka plan
},
contentContainer: {
flex: 1,
padding: 20,
paddingTop: 40,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
textAlign: 'center',
},
inputContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
borderBottomWidth: 1,
borderColor: '#ccc',
paddingBottom: 10,
},
textInput: {
flex: 1, // Mümkün olduğunca çok yer kapla
borderWidth: 1,
borderColor: '#ccc',
padding: 10,
borderRadius: 6,
marginRight: 10,
fontSize: 16,
}
});
