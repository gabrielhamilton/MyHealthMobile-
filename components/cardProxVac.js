import React from "react";
import { View, StyleSheet, Text} from 'react-native';


const CardProxVac = (props) => {
    const {item} = props?.item

    return(
            <View style={styles.view}>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{item?.nomevacina}</Text>
                    <Text style={styles.data}>{item?.data}</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.creat({
    view:{
        flex: 1,
        marginTop: 8,
        flexDirection: "column",
        marginHorizontal: 6,
    },
    card:{
        flexDirection: "column",
        height: 60,
        marginVertical: 3,
        backgroundColor: 'white',
        borderRadius: 6,
        paddingLeft: 6,
    },
    titulo:{
        color: '#3F92C5',
        alignSelf: "center",
        marginBottom: 2,
        fontSize: 24,
        fontFamily: 'AveriaLibre-Bold',
    },
    data:{
        marginVertical: 3.8,
        alignSelf: "center",
        fontFamily: 'AveriaLibre-Bold',
    },
})

export default CardProxVac