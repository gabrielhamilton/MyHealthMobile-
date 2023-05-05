import React, {useEffect, useState} from "react";
import { Button, FlatList, Image, TextInput, View } from 'react-native';

import CardVac from "../components/cardVac";


const listaVacinas = [
    {
        id: 0,
        nome: 'COVID',
        data: '19/09/2022',
        dose: 'única',
        proxima: null
      },
    {
      id: 1,
      nome: 'BCG',
      data: '19/09/2022',
      dose: 'única',
      proxima: null
    },
    {
      id: 2,
      nome: 'Sarampo',
      data: '05/10/2022',
      dose: '1',
      proxima: '18/09/2024'
    },
    {
      id: 3,
      nome: 'Polio',
      data: '22/12/2019',
      dose: 'única',
      proxima: '22/12/2029'
    }
  ]

  const Vacinas = (props) => {
    const [buscarvacina, setBuscarVacina] = useState('') 
    const setNovaVacina = () =>{
        props.navigation.push('novaVacina')
    }
    return (
        <View style={styles.view}>
            <View style={styles.search}>
                <View style={styles.searchbox}>
                    <Image 
                        style={styles.icone}
                        source={require('../images/iconepesquisar.png')}
                    /> 
                    <TextInput placeholder="PESQUISAR VACINA..." style={styles.textinput} value={buscarvacina} onChangeText={setBuscarVacina}></TextInput>
                </View>
            </View>
            <View style={styles.view}>
                <View style={styles.flatlistview}>
                    <FlatList
                        data={listaVacinas} renderItem={CardVac} keyExtractor={item => item.id} numColumns={2}
                    />
                </View>
            </View>
            <View style={styles.view}>
            <Button
                style={styles.button}
                title="Nova Vacina"
                color="#37BD6D"
                onPress={setNovaVacina}
            />
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    search:{
        marginTop: '2%',
        alignSelf: "center",
        //backgroundColor: 'blue',
        flexDirection: "row", // prioridade para os outros elementos 
        alignItems: "center",
        width: '95%',
        height: '10%',
        //marginBottom: 0,
    },
    textinput:{
        padding: 0,
        width: '100%',
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Bold', 
        marginLeft: '2%',
        fontSize: 18,
        paddingLeft: 8,
    },
    searchbox:{
        //backgroundColor: 'pink',
        width: '100%',
        height: '78%',
        flexDirection: "row",
        alignItems: "center",
    },
    icone:{
        width: '4%',
        height: '32%',
        position: "absolute",
        opacity: 0.5,
        alignSelf: "center",
        marginLeft: '0.9%',
        padding: 10,
    },
    flatlistview:{
        height: "78%",
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 25,
    },
  })

  export default Vacinas