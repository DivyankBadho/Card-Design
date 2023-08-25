import React from "react";
import { View ,Text,StyleSheet,Image} from "react-native";
import { AntDesign,Entypo } from '@expo/vector-icons';




const Card=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                   <Text style={styles.initialText}>R</Text>
                   <View style={styles.date}>
                    <Text style={styles.recipeTitle}> shrimp and corizo paella</Text>
                    <Text style={styles.recipeTitle}>  August 25,2023</Text>
                   </View>
                   <View style={{marginLeft:90}}>
                   <Entypo name="dots-three-vertical" size={24} color="white"/>
                   </View>
            </View>
            <View style={styles.imageContainer}>
            <Image  source={{uri: 'https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?size=626&ext=jpg&ga=GA1.1.1855402486.1692967268&semt=sph',}} style={styles.image} />
            </View>
            <Text style={styles.text}> This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels if you like</Text>
            <View style={{flexDirection: "row"}}>

            <AntDesign name="heart" size={24} color="white" />
            <View style={{marginLeft:20}}>
            <AntDesign name="sharealt" size={24} color="white" />
            </View>
            <View style={{marginLeft:250}}>
            <AntDesign name="down" size={24} color="white" />
            </View>
            </View>
        </View>
    );
}
export default Card;
const styles=StyleSheet.create({
    container: {
        backgroundColor: "black",
        padding: 20,
        borderRadius: 10,
      },
      cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
      },
      initialText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "pink",
        width: 40,
        height: 40,
        borderRadius: 20,
        textAlign: "center",
        lineHeight: 40,
      },
      date: {
        marginLeft: 10,
      },
      recipeTitle: {
        color: "white",
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 18,
      },
      imageContainer: {
        alignItems: "center",
        marginVertical: 10,
      },
      image: {
        width: 300,
        height: 300,
        // borderRadius: 10,
      },
      text:{
        color:"white",
        fontSize:20,
      },
      icon: {
        fontSize: 24,
        color: "white",
        marginRight: 10,
      },
})