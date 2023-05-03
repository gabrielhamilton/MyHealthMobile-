import { createDrawerNavigator } from '@react-navigation/drawer'
import {  Image } from 'react-native'
import Vacinas from './vacinas' //tela inicial minhas vacinas 
import ProxVacinas from '.proximasvacinas' // próximas vacinas 

const Drawer = createDrawerNavigator()

const Inicial = (props) => {
    return(
        <Drawer.Navigator>
            <Drawer.screen name='Vacinas' component={Vacinas}/>
            <Drawer.screen name='Vacinas' component={Vacinas}/>
            <Drawer.screen name='ProxVacinas' component={ProxVacinas}
            option={{
            title:'Proximas Vacinas',
            drawerIcon: () => (
                <Image style={{width: 20, height: 20, marginRight: -25}} source={require('../images/calendario.png')}/>
                              )}}/>
            <DrawerItem label="Sair" labelStyle={{color:'#419ED7', fontFamily: 'AveriaLibre-Bold', fontSize: 15}}  onPress={logout}
                
                icon={ () => (
                     <Image style={styles.imagem} source={require('../images/sair.png')}/>   
                )}
            />
        </Drawer.Navigator>
        )
    }

    const styles = StyleSheet.create({
        imagem: {
            width: 20,
            height: 20, 
            marginRight: -25
        },
    })

export default Inicial