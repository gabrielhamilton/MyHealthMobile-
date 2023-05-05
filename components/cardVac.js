import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';


const CardVac = (props) => {
    const {item} = props?.item

    const editVac =(id) =>{
        props.navigation.navigate('editar', {id: id})
    }

    return(
        <TouchableOpacity
        onPress={()=>editVac(item.id)}>
            <View style={styles.view}>
                <View>
                    <Text style={styles.titulo}>{item?.nomevacina}</Text>
                    <View style={styles.quadrodose}>
                        <Text style={styles.textodose}> {item?.dose} </Text>
                    </View>
                    <Text style={styles.data}>{item?.data}</Text>
                    <Image 
                        style={styles.imagem}
                        source={{uri: item?.urlImage}}
                    />
                    <Text style={styles.proximavac}>{item?.proximavacina}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.creat({
    view:{
        backgroundColor: 'white',
        width: (Dimensions.get('window').width/2)-10,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 6,
    },
    titulo:{
        color: '#3F92C5',
        alignSelf: "center",
        marginBottom: 2,
        fontSize: 24,
        fontFamily: 'AveriaLibre-Bold',
    },
    quadrodose:{
        borderRadius: 4,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: '#3F92C5',
        width: '45%',
    },
    textodose:{
        color: 'white',
        padding: 1,
        fontSize: 14,
        fontFamily: 'AveriaLibre-Bold', 
    },
    data:{
        marginVertical: 3.8,
        alignSelf: "center",
        fontFamily: 'AveriaLibre-Bold',
    },
    imagem:{
        height: 90,
        alignSelf: "center",
        width: '90%',
        resizeMode:"stretch",
    },
    proximavac:{
        color: 'rgba(253, 121, 121, 1)',
        alignSelf: "flex-end",
        fontSize: 11,
        fontFamily: 'AveriaLibre-Bold'
    },
})

export default CardVac