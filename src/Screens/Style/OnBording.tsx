import { StyleSheet } from "react-native";
// import { FONTSIZE } from "../../Utils/FontSize";


export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    bottom: 20,
  },
  activeDot: {
    backgroundColor: '#007bff',
  },
  nextBtnCon : {
    position:'absolute',
    bottom:20,
    right:20,
    backgroundColor:'#13274F',
    paddingHorizontal:25,
    paddingVertical:12,
    borderRadius:20
  },
  netxtButton:{
    color:'#FFFFFF',
    fontSize: 16
  }
})