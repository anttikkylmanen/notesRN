import * as React from 'react';
import { Text, View, Button, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './Styles';

const notes= [
  {
    "id": 1,
    "content": "note1"
  },
  {
    "id": 2,
    "content": "note2"
  },
  {
    "id": 3,
    "content": "note3"
  },
  {
    "id": 4,
    "content": "note4"
  },
  {
    "id": 5,
    "content": "note5"
  },
  {
    "id": 6,
    "content": "note6"
  }
]

class NoteList extends React.Component {
  state = {
    notes: notes,
    newNote:""
  }

  addNote=()=>{
    const noteObject = {
      content: this.state.newNote,
      id: this.state.notes.length + 1
    }

    if (this.state.notes.filter(note => note.content.toLowerCase() === this.state.newNote.toLowerCase()).length > 0) {
      Alert.alert("Note already there",
      "Add another note",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ])

    } else {
      const notes = this.state.notes.concat(noteObject)

      this.setState({
      notes: notes,
      newNote: ''
      })
    }

    
    
    
  }

  handleNoteChange = (event) => {
    this.setState({ newNote: event })
  }


  render(){
    
    return (
      <View style={styles.noteContainer}>
        <ScrollView style={styles.noteList}>
            {this.state.notes.map(note => 
              <Text key={note.id} style={styles.nList}>{note.content}</Text>
              )}
        </ScrollView>
        <View style={styles.noteForm}>
          <TextInput
              placeholder="  Write a note here... "
              value={this.state.newNote}
              onChangeText={this.handleNoteChange}
              style={styles.noteInput}
          />
            <View style = {styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.noteButton}
                onPress={this.addNote}
              ><Text style = {styles.buttonText}>Add Note</Text></TouchableOpacity>
            </View>

            <View style = {styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.noteButton}
                onPress={() => this.props.navigation.navigate('AddNote')}
              ><Text style = {styles.buttonText}>Add a new note</Text></TouchableOpacity>
            </View>
          

        </View>
        
      </View>
      



    );
  }

}

const AddNoteScreen = () => {
  return (
    <View>
      <Text>Add a new note</Text>

      <TextInput
        placeholder="Write a note here"
      />
      <Button
        title="Add Note"
      />

    </View>
  );
}



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes" screenOptions={{ headerStyle: {backgroundColor: '#ffa500',}}}>
        <Stack.Screen name="ListNotes" component={NoteList}/>
        <Stack.Screen name="AddNote" component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;