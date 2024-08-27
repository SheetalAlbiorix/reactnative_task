import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        color: '#000',
    },
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
      },
      item: {
        borderWidth : 1,
        borderColor:'black',
        marginHorizontal:16,
        marginVertical:10,
        borderRadius:18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      title: {
        fontSize: 18,
        color:'black',
        paddingVertical:16
      },
      imageCont:{
        margin:8,
        height : 45,
        width : 45,
        borderRadius:12
      },
      plusIcon:{
        height:30,
        width:30,
        position:'absolute',
        right:20,
        top: -35
      },

      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      },
      modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
      titleCont: {
        fontSize: 18,
        marginBottom: 10,
      },
      input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'blue',
        padding:12,
        borderRadius:12
      },
      buttonTitle:{
        fontSize:16,
        color:'#fffff'
      }
})
