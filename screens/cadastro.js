import React, {useState} from "react";
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import DatePicker from "react-native-date-picker";

import RadioButton from "../components/radioButton";


const Cadastro = (props) => {
    //consts e estados
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [repetirSenha, setRepetirSenha ] = useState ('')
    const [repeatWarning, setWarning] = useState(false)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [data, setData] = useState('')
    const [selected, setSelected] = useState()
    const novoUsuario = () => {
        if(repeatWarning == senha){
            setWarning(false)
        } else {
            setWarning(true)
        }
    }
    
    return(
        <View style={styles.view}>
            <View>
                <Text style={styles.text}>Nome Completo</Text>
                <TextInput style={styles.textinput}/>
            </View>
            <RadioButton
                selected={selected}
                options={['Masculino', 'Feminino']}
                horizontal={true}
                onChangeSelected={(opt,i)=>{
                    dispatch(showToast(`Opção selecionada ${opt}`));
                    setSelected(i);
                }}
            ></RadioButton>
            <View>
            <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                title={'Data de nascimento'}
                locale='pt-br'
                textColor="#3F92C5"
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    setData(date.toLocaleDateString('pt-br'))
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                />
            </View>
            <View>
                <Text style={styles.text}>E-mail</Text>
                <TextInput style={styles.textinput} value={email} onChangeText={setEmail}/>
            </View>
            <View>
                <Text style={styles.text}>Senha</Text> 
                <TextInput style={styles.textinput} value={senha} onChangeText={setSenha} secureTextEntry={true} />
            </View>
            <View>
                <Text style={styles.text}>Repetir Senha</Text>
                <TextInput style={styles.textinput} value={repetirSenha} onChangeText={setRepetirSenha} secureTextEntry={false}/>
                <Text style={styles.warming}>{repeatWarning ? 'Senha não confere!' : null}</Text>
            </View>
            <View>
            <Button style={styles.button} title="Cadastrar" color="#37BD6D" onPress={novoUsuario}></Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        borderColor: 'red',
        marginTop: 90,
    },
    text:{
        color: 'white',
        width: 52,
        marginBottom: 2,
        marginTop: 19,
        fontFamily: 'AveriaLibre-Bold',
        marginLeft: 59,
    },
    textinput: {
        backgroundColor: "white",
        width: 210,
        height: 21,
        marginLeft: -125,
        marginTop: 8,
        padding: 0,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Bold',
    },
    button:{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 125,
        marginTop: '27%',
        width: 160,
        height: 25,
    },
    warming:{
        color: '#FF8383',
        fontWeight: "bold",
        marginLeft: '25%',
        paddingLeft: 20,
        alignSelf: "flex-end",
        textAlign: "right",  
    }
})

export default Cadastro
