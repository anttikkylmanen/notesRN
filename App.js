import * as React from 'react';
import { Text, View, Button, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './Styles';
import { render } from 'react-dom';

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
      
 

  static getDerivedStateFromProps(){
    console.log("GDSFP")
    return null
  }

  addNote(){
    const par = this.props.route.params
    console.log(par)
    const newNote = par ? par.post : null
    console.log(newNote)

    if (this.state.notes.filter(note => note.content.toLowerCase() === newNote.toLowerCase()).length > 0) {
      Alert.alert("Note already there",
      "Add another note",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ])

    } else {

      const noteObject = {
        content: newNote,
        id: this.state.notes.length + 1
      }

      console.log(noteObject.content, noteObject.id )
      const notes1 = this.state.notes.concat(noteObject)
      console.log(notes1)
      this.setState({
        notes: notes1,
        newNote: ''
        })
      
      
    }


  }

  render(){
    console.log("render")
    const par = this.props.route.params
    console.log(par)

    return (
      <View style={styles.noteContainer}>
        <ScrollView style={styles.noteList}>
            {this.state.notes.map(note => 
              <Text key={note.id} style={styles.nList}>{note.content}</Text>
            )}
        </ScrollView>
        <View style={styles.noteForm}>
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

const AddNoteScreen = ({navigation, route}) => {
  const [postNote, setPostNote] = React.useState('');
  
  return (
    <View>
      <Text>Add a new note</Text>

      <TextInput
        placeholder="  Write a note here... "
        value={postNote}
        onChangeText={setPostNote}
        style={styles.noteInput}
      />
      <View style = {styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.noteButton}
          onPress={() => {navigation.navigate('ListNotes', { post: postNote })}}
        >
          <Text style = {styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
      </View>

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
