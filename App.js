import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
    return (
        <View style = {styles.appContainer}>
            <View style = {styles.inputContainer}>
                <TextInput placeholder= "your course goal!"/>
                <Button title="Add goal" />
            </View>
            <View>
                <Text>Course of goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        padding: 10,
        marginRight: 10
    }
});
