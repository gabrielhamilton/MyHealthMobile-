import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import {View, Text, StyleSheet, Image } from "react-native";


const CustonDrawer = (props) => {

    const logout = () =>{
        console.log('Saindo...')
        props.navigation.pop()
    }

    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.view}>
                <Text style={styles.text}>Olá </Text>
            </View>
            <View style={styles.traco}/>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" labelStyle={{color:'#419ED7', fontFamily: 'AveriaLibre-Bold', fontSize: 15}}  onPress={logout}
                
                icon={ () => (
                     <Image style={styles.imagem} source={require('../images/sair.png')}/>   
                )}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    view:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    traco:{
        width: '75%',
        height: 3,
        marginBottom: 20,
        alignSelf: "center",
        backgroundColor: '#419ED7',
    },
    text:{
        fontSize: 25,
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Bold',
    },
})

export default CustonDrawer