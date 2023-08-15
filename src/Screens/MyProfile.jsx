import { Image, Text, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButton";
import * as ImagePicker from 'expo-image-picker'
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices";
import { dropTableSessions } from "../SQLite";
import { useDispatch } from "react-redux"; 

const MyProfile = ({navigation}) => {
    // const {profileImage, imageCamera} = useSelector(state => state.authReducer.value);

    const {localId, profileImage} = useSelector(state => state.userReducer.value)

    const {data: image} = useGetProfileImageQuery(localId)

    console.log(image);
    const dispatch = useDispatch()

    const cameraImage = image?.image

    const launchCamera = async () => {
        navigation.navigate('Image Selector')
    };

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }

    console.log(profileImage);

    return (
        <View style={styles.container}>
            {profileImage || cameraImage  ? (
                <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../Assets/Images/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title="Add profile picture" />
            <AddButton onPress={launchLocation} title="My address" />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});


// import { Image,Pressable, Text, StyleSheet, View } from "react-native";
// import React, { useState } from "react";
// import AddButton from "../Components/AddButton"; 
// import * as ImagePicker from 'expo-image-picker'

// import { setUser } from "../features/User/userSlice";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useGetProfileImageQuery } from "../Services/shopServices";

// const MyProfile = ({navigation}) => {
//     // const {profileImage, imageCamera} = useSelector(state => state.authReducer.value);

//     const {localId, profileImage} = useSelector(state => state.userReducer.value)

// /*     const {data: image} = useGetProfileImageQuery(localId)

//     const cameraImage = image?.image */

//     const launchCamera = async () => {
//         navigation.navigate('Image Selector')
//     };

//     console.log(profileImage);


// //////////////
//     const dispatch = useDispatch()

//     const logOut = () =>{
//                 dispatch(
//                     setUser({
//                         email: "",
//                         idToken: ""
//                     })
//                 )
//             }

//             //////////////

//     return (
//         <View style={styles.container}>
//             {/* ////////////// */}

//              <Pressable  onPress={logOut}  >
//                 <Text  >LOG OUT</Text>
//                     </Pressable>  
//                     {/* ////////////// */}
//             {profileImage ? (
//                 <Image
//                     source={{uri: profileImage}}
//                     style={styles.image}
//                     resizeMode="cover"
//                 />
//             ) : (
//                 <Image
//                     source={require("../Assets/Images/defaultProfile.png")}
//                     style={styles.image}
//                     resizeMode="cover"
//                 />
//             )}
//             <AddButton onPress={launchCamera} title="Add profile picture" />
//         </View>
//     );
// };

// export default MyProfile;

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//         gap: 15,
//         alignItems: "center",
//         justifyContent: "flex-start",
//     },
//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//     },
// });
