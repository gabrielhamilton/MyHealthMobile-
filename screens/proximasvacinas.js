import React from "react";
import { Button, FlatList, View } from 'react-native';
import CardProxVac from "../components/cardProxVac"

const listaProximasVacinas = [
    {
        id: 0,
        nome: 'COVID',
        data: '19/09/2022',
      },
    {
      id: 1,
      nome: 'BCG',
      data: '19/09/2022',
    },
    {
      id: 2,
      nome: 'Sarampo',
      data: '05/10/2022',
    },
  ]

const ProximasVacinas = (props) => {
    const setNovaVacina = () =>{
        props.navigation.push('novaVacina')
    }
    return (
        <View style={styles.view}>
            <FlatList
                data={listaProximasVacinas} renderItem={CardProxVac} keyExtractor={item => item.id} numColumns={1}
            
            />
            <View>
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
    view:{
        flex: 1,
        flexDirection: "column",
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 25,
    }

})

export default ProximasVacinas