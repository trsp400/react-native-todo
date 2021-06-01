import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

function FlatListHeaderComponent() {
  return (
    <View>
      <Text style={styles.header}>Minhas tasks</Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return item?.done ? (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(+item?.id)}
            style={styles.taskButtonDone}
          >
            <View testID={`marker-${index}`} style={styles.taskMarkerDone} />
            <Text style={styles.taskTextDone}>{item.title}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(+item?.id)}
            onLongPress={() => onLongPress(+item?.id)}
            style={styles.taskButton}
          >
            <View testID={`marker-${index}`} style={styles.taskMarker} />
            <Text style={styles.taskText}>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#3D3D4D",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#212136",
    marginRight: 10,
  },
  taskText: {
    color: "#3D3D4D",
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "#1F1F1F",
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#565BFF",
    marginRight: 10,
  },
  taskTextDone: {
    color: "#A09CB1",
    textDecorationLine: "line-through",
  },
});
