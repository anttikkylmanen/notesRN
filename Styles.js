import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    noteContainer: {
        padding: 10,
        backgroundColor: "#FFF8DC",
        flexDirection: "column",
        flex:1, 
    },
    noteList: {
        padding: 10,
        
    },
    noteForm: {
        padding: 10,
        alignItems: "stretch",
        justifyContent: "flex-end"
    },
    noteButton: {
        padding: 10,
        backgroundColor: "#f4511e",
        alignItems: "center",
        borderRadius: 10,
    },
    noteInput: {
        borderColor: "#20232a",
        borderRadius: 5,
        borderWidth: 1,
        padding: 5,
    },
    buttonContainer: {
        padding: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        textTransform: 'uppercase',
    },
    nList: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20,
       
    }


});

export default styles;
