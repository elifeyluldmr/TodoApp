//elif eylül demir 220404052
import {
    StyleSheet, Text, View, Button, TextInput, FlatList, Keyboard, KeyboardAvoidingView, Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoItem from './components/TodoItem';
import React, { useState } from 'react';
export default function App() {

    const [tasks, setTasks] = useState([]);
    const [enteredTaskText, setEnteredTaskText] = useState('');

    const taskInputHandler = (enteredText) => {
        setEnteredTaskText(enteredText);
    };
    function deleteTaskHandler(id) {
        setTasks((currentTasks) => {
            return currentTasks.filter((task) => task.id !== id);
        });
    }
    function addTaskHandler() {

        if (enteredTaskText.trim().length === 0) {
            return;
        }
        setTasks((currentTasks) => [
            ...currentTasks,
            { id: Math.random().toString(), text: enteredTaskText }
        ]);
        setEnteredTaskText('');
        Keyboard.dismiss();


    }
    return (
        <SafeAreaView style={styles.appContainer}>
            <KeyboardAvoidingView
                style={styles.contentContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Yapılacaklar Listem</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.listContainer}>
                            <FlatList
                                data={tasks}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <TodoItem
                                        text={item.text}
                                        id={item.id}
                                        onDelete={deleteTaskHandler}
                                    />
                                )}
                                ListEmptyComponent={<Text style={styles.emptyText}> Henüz eklenmiş görev yok </Text>}
                            />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Yeni görev ekle..."
                            onChangeText={taskInputHandler}
                            value={enteredTaskText}
                        />
                    </View>
                    <Button title="Ekle" onPress={addTaskHandler} />


                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#f0f2f5'
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
    },
    listContainer: {
        flex: 5,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },

});