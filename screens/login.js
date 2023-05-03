import { ImageBackground, View, Text, TextInput, ActivityIndicator, Button } from "react-native";  
import React, { useState } from "react";
import LinearGradient from 'react-native-linear-gradient'


const Login = (props) => {
    //Logica da entrada
    const [email, setEmail] = useState(0)
    const [senha, setSenha] = useState(0)
    //verificar usuario 
    const [usuario] = useState()
    const [authentication] = useState()

    useEffect(() => {
        console.log('Entrou')
    })
    //logica botoes 
    const auth = () => {
        props.navigation.navigate('inicial')
    }
    const criarConta = () => {
        props.navigation.navigate('cadastro')
    }
    const forgotpassword = () => {
        props.navigation.navigate ('recsenha')
    }

    return(
    <View style={styles.view}>
        <ImageBackground source={require('../images/background.jpg')} style={styles.image}>
            <LinearGradient 
            colors={['red', 'yellow', 'green' ]}
            style={styles.linearGradient} >
                <View style={styles.titulo}>
                    
                    <Text style={styles.texto} source={require('../images/seringa.png')}>
                        MyHealth
                    </Text>
                </View>
                <View style={{width: '100%'}}>
                    <Text style={styles.subtexto}>
                        Controle as suas vacinas e fique seguro
                    </Text>
                </View>
                <View style={{marginLeft: 15}}>
                    <View>
                        <Text style={styles.emailtext }>E-mail</Text>
                        <TextInput style={styles.emailinput} value={email} onChangeText={setEmail} keyboardType="email-address"/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.senhaltext }>Senha</Text>
                        <TextInput style={styles.senhainput} value={senha} onChangeText={setSenha} secureTextEntry/>
                    </View>
                    <View style={{ marginTop: 2, marginLeft: 80}}> 
                        {usuario ? null : 
                        <Text style={styles.textwarning}>E-mail e/ou senha inválidos.</Text>}
                        {authentication && usuario && (
                        <View style={styles.auth}>
                            <ActivityIndicator size="small" color="#419ED7" />
                            <Text style={styles.textauth}>Autenticando usuário...</Text>
                        </View>
                        )}
                    </View>
                    <View style={styles.buttons}>
                        <View style={styles.enterbutton}>
                            <Button title="Entrar" onPress={auth} color="#37BD6D"/>
                        </View>
                        <View style={styles.criarbutton}>
                            <Button title="Criar minha Conta" onPress={criarConta} color="#419ED7"/>
                        </View>
                        <View style={styles.esquecibutton}>
                            <Button title="Esqueci minha senha" onPress={forgotpassword } color="#B0CCDE"/>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    </View>
)}

const styles = StyleSheet.create({

    view:{
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
    },
    image:{
        flex: 1,
        resizeMode: "cover",
    },
    linearGradient:{  
        height: '100%',
        opacity: 0.93, 
    },
    titulo:{
        textDecorationLine: "underline",
        marginTop: '16%',
        fontSize: 40,
        fontFamily: 'AveriaLibre-Bold',
        color: '#419ED7'
    },
    texto:{
        color: '#419ED7',        
        textAlign:"center",
        fontFamily: 'AveriaLibre-Bold',
        fontSize: 30,
    },
    subtexto:{
        color: '#419ED7',        
        textAlign:"center",
        fontFamily: 'AveriaLibre-Bold',
        fontSize: 30,
    },
    emailtext:{
        marginTop: 5, 
        marginLeft: 25,
        color: "white",
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
    },
    emailinput:{
        backgroundColor: "white",
        fontFamily: 'AveriaLibre-Bold',
        width: 250,
        height: 28,
        borderWidth: 2,
    },
    senhaltext:{
        marginTop: 5, 
        marginLeft: 25,
        color: "white",
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
    },
    senhainput:{
        backgroundColor: "white",
        fontFamily: 'AveriaLibre-Bold',
        width: 250,
        height: 28,
        borderWidth: 2,
    },
    textwarning:{
        fontFamily: 'AveriaLibre-Bold',
        color: '#FD7979', 
        marginTop: '1.5%',
    },
    auth:{
        marginTop: -16,
        flexDirection: 'row',
        alignItems: "center",
    },
    textauth:{
        fontFamily: 'AveriaLibre-Bold',
        fontSize: 16,
        color: 'white',
    },
    buttons:{
        marginTop: '0%',
        height: '50%',
        flexDirection: "column",
    },
    enterbutton:{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 140,
        marginTop: 39,
        width: 130,
        height: 30,
    },
    criarbutton:{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 125,
        marginTop: '25%',
        width: 160,
        height: 35,
    },
    esquecibutton:{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 125,
        marginTop: '27%',
        width: 160,
        height: 25,
    },
})

export default Login;