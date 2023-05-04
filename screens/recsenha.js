import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const RecSenha = (props) => {
  const [email, setEmail] = useState()
  const setSenha = (props) => {
        
    } 
  return (
    <View>
        <View style={styles.view}>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.textinput}
        value={email}
        onChangeText={setEmail}></TextInput>
    </View>
    <Button
        style={styles.button}
        title="Recuperar senha"
        color="#37BD6D"
        onPress={setSenha}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 275,
        flexDirection: "row",
        justifyContent: "center",
    }, 
    text:{
        width: 56,
        height: 30,
        textAlign: "center",
        alignSelf: "flex-start",
        color: 'black',
        paddingTop: 5,
        fontFamily: 'AveriaLibre-Bold',
    },
    textinput:{
        backgroundColor: "white",
        fontFamily: 'AveriaLibre-Bold',
        width: 250,
        height: 28,
        borderWidth: 2,
    },
    button:{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 125,
        marginTop: '27%',
        width: 160,
        height: 25,
    },
});

export default RecSenha;
