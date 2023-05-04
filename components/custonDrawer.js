import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import {View, Text, StyleSheet, Image } from "react-native";


const CustonDrawer = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.view}>
                <Text style={styles.text}>Olá </Text>
            </View>
            <View style={styles.traco}/>
            <DrawerItemList {...props} />
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