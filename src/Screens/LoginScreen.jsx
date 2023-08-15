import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../Global/Colors";
import { useSignInMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/User/userSlice";
import { insertSession } from "../SQLite";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const dispatch = useDispatch()

    const [triggerSignIn, resultSignIn] = useSignInMutation();
    const onSubmit = () => {

        //Submit logic with validations
        const isValidVariableEmail = isValidEmail(email)
        const isCorrectPassword = isAtLeastSixCharacters(password)

        if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                returnSecureToken: true,
            });
        }

        if (!isValidVariableEmail) setErrorEmail ('Email is not correct')
        else setErrorEmail('')
        if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
        else setErrorPassword('')
    };

    useEffect(()=> {
        (async ()=> {
            try {
                if(resultSignIn.isSuccess) {
                    //Insert session in SQLite database
                      console.log('inserting Session');
                    const response = await insertSession({
                        email: resultSignIn.data.email,
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                    })
                    console.log('Session inserted: ');
                    console.log(response);  
                    dispatch(setUser({
                        email: resultSignIn.data.email,
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                        profileImage: "",
                        location: {
                            latitude: "",
                            longitude: "",
                        }
                    }))
                }
            } catch (error) {
                console.log(error.message);
            }
        })()
    }, [resultSignIn])

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Login to start</Text>
                <InputForm
                    label={"email"}
                    onChange={(email) => setEmail(email)}
                    error={errorEmail}
                />
                <InputForm
                    label={"password"}
                    onChange={(password) => setPassword(password)}
                    error={errorPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Not have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.subLink}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightPink,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Josefin",
    },
    sub: {
        fontSize: 14,
        color: "black",
    },
    subLink: {
        fontSize: 14,
        color: "blue",
    },
});
// import { Pressable, StyleSheet, Text, View } from "react-native";
// import React, { useEffect, useState } from "react";
// import InputForm from "../Components/InputForm";
// import SubmitButton from "../Components/SubmitButton";
// import { colors } from "../Global/Colors";
// import { useSignInMutation } from "../Services/authServices";
// import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
// import { useDispatch } from "react-redux";
// import { setUser } from "../features/User/userSlice";

// const LoginScreen = ({ navigation }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const [errorEmail, setErrorEmail] = useState('')
//     const [errorPassword, setErrorPassword] = useState('')

//     const dispatch = useDispatch()

//     const [triggerSignIn, resultSignIn] = useSignInMutation();
//     const onSubmit = () => {

//         //Submit logic with validations
//         const isValidVariableEmail = isValidEmail(email)
//         const isCorrectPassword = isAtLeastSixCharacters(password)

//         if (isValidVariableEmail && isCorrectPassword) {
//             triggerSignIn({
//                 email,
//                 password,
//                 returnSecureToken: true,
//             });
//         }

//         if (!isValidVariableEmail) setErrorEmail ('Email is not correct')
//         else setErrorEmail('')
//         if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
//         else setErrorPassword('')
//     };

//     useEffect(()=> {
//         if(resultSignIn.isSuccess) {
//             dispatch(setUser({
//                 email: resultSignIn.data.email,
//                 idToken: resultSignIn.data.idToken,
//                 localId: resultSignIn.data.localId,
//                 profileImage: ""
//             }))
//         }
//     }, [resultSignIn])

//     return (
//         <View style={styles.main}>
//             <View style={styles.container}>
//                 <Text style={styles.title}>Login to start</Text>
//                 <InputForm
//                     label={"email"}
//                     onChange={(email) => setEmail(email)}
//                     error={errorEmail}
//                 />
//                 <InputForm
//                     label={"password"}
//                     onChange={(password) => setPassword(password)}
//                     error={errorPassword}
//                     isSecure={true}
//                 />
//                 <SubmitButton onPress={onSubmit} title="Send" />
//                 <Text style={styles.sub}>Not have an account?</Text>
//                 <Pressable onPress={() => navigation.navigate("Signup")}>
//                     <Text style={styles.subLink}>Sign up</Text>
//                 </Pressable>
//             </View>
//         </View>
//     );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//     main: {
//         width: "100%",
//         height: "100%",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     container: {
//         width: "90%",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: colors.lightPink,
//         gap: 15,
//         paddingVertical: 20,
//         borderRadius: 10,
//     },
//     title: {
//         fontSize: 22,
//         fontFamily: "Josefin",
//     },
//     sub: {
//         fontSize: 14,
//         color: "black",
//     },
//     subLink: {
//         fontSize: 14,
//         color: "blue",
//     },
// });


// // import { Pressable, StyleSheet, Text, View } from 'react-native' 
// // import InputForm from '../Components/InputForm'
// // import SubmitButton from '../Components/SubmitButton'
// // import { colors } from '../Global/Colors'
// // import { useLoginMutation } from '../Services/authServices' 
// // import { useDispatch } from "react-redux";
// // import React, { useEffect, useState } from "react";
// // import { setUser } from "../features/User/userSlice";

// // import { isValidEmail, isAtLeastSixCharacters } from "../Validations/auth";

// // const LoginScreen = ({navigation}) => { 
// //     const [email, setEmail] = useState("");
// //     const [errorMail, setErrorMail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [errorPassword, setErrorPassword] = useState("")
// //     const [confirmPassword, setconfirmPassword] = useState("");
// //     const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

// //     const [triggerLogin, result] = useLoginMutation()
// //     const dispatch = useDispatch()
// //     console.log("RRRRRRRRRRR" , result);
// //     useEffect(()=> {
// //         if (result.isSuccess) {
// //             dispatch(
// //                 setUser({
// //                     email: result.data.email,
// //                     idToken: result.data.idToken
// //                 })
// //             )
// //         }
// //     }, [result])
// //     const onSubmit = () => {
// //         try {
// //             //Submit logic with validations
// //             const isValidVariableEmail = isValidEmail(email)
// //             const isCorrectPassword = isAtLeastSixCharacters(password) 

// //             if (isValidVariableEmail && isCorrectPassword ) {
// //                 const request = {
// //                     email,
// //                     password,
// //                     returnSecureToken: true
// //                 }
// //                 triggerLogin(request)
// //             }

// //             if (!isValidVariableEmail) setErrorMail ('Email is not correct')
// //             else setErrorMail('')
// //             if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
// //             else setErrorPassword('') 

// //         } catch (err) {
// //             console.log("Catch error");
// //             console.log(err.message);
// //         }
// //     }
// //   return (
// //     <View style={styles.main}>
// //         <View style={styles.container}>
// //             <Text style={styles.title}>Login to start</Text>
// //             <InputForm 
// //                 label={"email"}
// //                 onChange={setEmail}
// //                 error={""}
// //             />
// //             <InputForm 
// //                 label={"password"}
// //                 onChange={setPassword}
// //                 error={""}
// //                 isSecure={true}
// //             />
// //             <SubmitButton 
// //                 onPress={onSubmit}
// //                 title = "Send"
// //             />
// //             <Text style={styles.sub}>Not have an account?</Text>
// //             <Pressable onPress={()=> navigation.navigate('Signup')}>
// //                 <Text style={styles.subLink}>Sign up</Text>
// //             </Pressable>
// //         </View>
// //     </View>
// //   )
// // }

// // export default LoginScreen

// // const styles = StyleSheet.create({
// //     main: {
// //         width: '100%',
// //         height: '100%',
// //         justifyContent: 'center',
// //         alignItems: 'center'
// //     },
// //     container: {
// //         width: '90%',
// //         flexDirection: 'column',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: colors.lightPink,
// //         gap: 15,
// //         paddingVertical: 20,
// //         borderRadius: 10,
// //     },
// //     title: {
// //         fontSize: 22,
// //         fontFamily: 'Josefin'
// //     },
// //     sub: {
// //         fontSize: 14,
// //         color: 'black',
// //     },
// //     subLink: {
// //         fontSize: 14,
// //         color: 'blue',
// //     }
// // })

// // import { Pressable, StyleSheet, Text, View } from 'react-native' 
// // import InputForm from '../Components/InputForm'
// // import SubmitButton from '../Components/SubmitButton'
// // import { colors } from '../Global/Colors'
// // import { useLoginMutation } from '../Services/authServices' 
// // import { useDispatch } from "react-redux";
// // import React, { useEffect, useState } from "react";
// // import { setUser } from "../features/User/userSlice";

// // import { isValidEmail, isAtLeastSixCharacters } from "../Validations/auth";

// // const LoginScreen = ({navigation}) => { 
// //     const [email, setEmail] = useState("");
// //     const [errorMail, setErrorMail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [errorPassword, setErrorPassword] = useState("")
// //     const [confirmPassword, setconfirmPassword] = useState("");
// //     const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

// //     const [triggerLogin, result] = useLoginMutation()
// //     const dispatch = useDispatch()
// //     console.log("RRRRRRRRRRR" , result);
// //     useEffect(()=> {
// //         if (result.isSuccess) {
// //             dispatch(
// //                 setUser({
// //                     email: result.data.email,
// //                     idToken: result.data.idToken
// //                 })
// //             )
// //         }
// //     }, [result])
// //     const onSubmit = () => {
// //         try {
// //             //Submit logic with validations
// //             const isValidVariableEmail = isValidEmail(email)
// //             const isCorrectPassword = isAtLeastSixCharacters(password) 

// //             if (isValidVariableEmail && isCorrectPassword ) {
// //                 const request = {
// //                     email,
// //                     password,
// //                     returnSecureToken: true
// //                 }
// //                 triggerLogin(request)
// //             }

// //             if (!isValidVariableEmail) setErrorMail ('Email is not correct')
// //             else setErrorMail('')
// //             if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
// //             else setErrorPassword('') 

// //         } catch (err) {
// //             console.log("Catch error");
// //             console.log(err.message);
// //         }
// //     }
// //   return (
// //     <View style={styles.main}>
// //         <View style={styles.container}>
// //             <Text style={styles.title}>Login to start</Text>
// //             <InputForm 
// //                 label={"email"}
// //                 onChange={setEmail}
// //                 error={""}
// //             />
// //             <InputForm 
// //                 label={"password"}
// //                 onChange={setPassword}
// //                 error={""}
// //                 isSecure={true}
// //             />
// //             <SubmitButton 
// //                 onPress={onSubmit}
// //                 title = "Send"
// //             />
// //             <Text style={styles.sub}>Not have an account?</Text>
// //             <Pressable onPress={()=> navigation.navigate('Signup')}>
// //                 <Text style={styles.subLink}>Sign up</Text>
// //             </Pressable>
// //         </View>
// //     </View>
// //   )
// // }

// // export default LoginScreen

// // const styles = StyleSheet.create({
// //     main: {
// //         width: '100%',
// //         height: '100%',
// //         justifyContent: 'center',
// //         alignItems: 'center'
// //     },
// //     container: {
// //         width: '90%',
// //         flexDirection: 'column',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: colors.lightPink,
// //         gap: 15,
// //         paddingVertical: 20,
// //         borderRadius: 10,
// //     },
// //     title: {
// //         fontSize: 22,
// //         fontFamily: 'Josefin'
// //     },
// //     sub: {
// //         fontSize: 14,
// //         color: 'black',
// //     },
// //     subLink: {
// //         fontSize: 14,
// //         color: 'blue',
// //     }
// // })

// // import { Pressable, StyleSheet, Text, View } from 'react-native' 
// // import InputForm from '../Components/InputForm'
// // import SubmitButton from '../Components/SubmitButton'
// // import { colors } from '../Global/Colors'
// // import { useLoginMutation } from '../Services/authServices' 
// // import { useDispatch } from "react-redux";
// // import React, { useEffect, useState } from "react";
// // import { setUser } from "../features/User/userSlice";

// // import { isValidEmail, isAtLeastSixCharacters } from "../Validations/auth";

// // const LoginScreen = ({navigation}) => { 
// //     const [email, setEmail] = useState("");
// //     const [errorMail, setErrorMail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [errorPassword, setErrorPassword] = useState("")
// //     const [confirmPassword, setconfirmPassword] = useState("");
// //     const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

// //     const [triggerLogin, result] = useLoginMutation()
// //     const dispatch = useDispatch()
// //     console.log("RRRRRRRRRRR" , result);
// //     useEffect(()=> {
// //         if (result.isSuccess) {
// //             dispatch(
// //                 setUser({
// //                     email: result.data.email,
// //                     idToken: result.data.idToken
// //                 })
// //             )
// //         }
// //     }, [result])
// //     const onSubmit = () => {
// //         try {
// //             //Submit logic with validations
// //             const isValidVariableEmail = isValidEmail(email)
// //             const isCorrectPassword = isAtLeastSixCharacters(password) 

// //             if (isValidVariableEmail && isCorrectPassword ) {
// //                 const request = {
// //                     email,
// //                     password,
// //                     returnSecureToken: true
// //                 }
// //                 triggerLogin(request)
// //             }

// //             if (!isValidVariableEmail) setErrorMail ('Email is not correct')
// //             else setErrorMail('')
// //             if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
// //             else setErrorPassword('') 

// //         } catch (err) {
// //             console.log("Catch error");
// //             console.log(err.message);
// //         }
// //     }
// //   return (
// //     <View style={styles.main}>
// //         <View style={styles.container}>
// //             <Text style={styles.title}>Login to start</Text>
// //             <InputForm 
// //                 label={"email"}
// //                 onChange={setEmail}
// //                 error={""}
// //             />
// //             <InputForm 
// //                 label={"password"}
// //                 onChange={setPassword}
// //                 error={""}
// //                 isSecure={true}
// //             />
// //             <SubmitButton 
// //                 onPress={onSubmit}
// //                 title = "Send"
// //             />
// //             <Text style={styles.sub}>Not have an account?</Text>
// //             <Pressable onPress={()=> navigation.navigate('Signup')}>
// //                 <Text style={styles.subLink}>Sign up</Text>
// //             </Pressable>
// //         </View>
// //     </View>
// //   )
// // }

// // export default LoginScreen

// // const styles = StyleSheet.create({
// //     main: {
// //         width: '100%',
// //         height: '100%',
// //         justifyContent: 'center',
// //         alignItems: 'center'
// //     },
// //     container: {
// //         width: '90%',
// //         flexDirection: 'column',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: colors.lightPink,
// //         gap: 15,
// //         paddingVertical: 20,
// //         borderRadius: 10,
// //     },
// //     title: {
// //         fontSize: 22,
// //         fontFamily: 'Josefin'
// //     },
// //     sub: {
// //         fontSize: 14,
// //         color: 'black',
// //     },
// //     subLink: {
// //         fontSize: 14,
// //         color: 'blue',
// //     }
// // })