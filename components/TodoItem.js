import { StyleSheet, Text, View, Pressable } from 'react-native';
export default function TodoItem({ text, id, onDelete }) {
  return (
    <View>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{text}</Text>
      </View>

      <Pressable
        onPress={() => onDelete(id)}
        style={({ pressed }) => [
          styles.taskItem,
          pressed && styles.pressedItem,
        ]}
      >
        <Text style={styles.taskText}>{text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  taskItem: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskText: {
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: '#dddddd',
  },
});