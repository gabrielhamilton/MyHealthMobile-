import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
//Importe das telas 
import Login from "./screens/login"
import RecSenha from "./screens/recsenha"
import Cadastro from "./screens/cadastro"
import Inicial from "./screens/inicial"
import Vacinas from "./screens/vacinas"
import ProximasVacinas from "./screens/proximasvacinas"
import Editar from "./screens/editar"


const App = () =>{
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="RecSenha" component={RecSenha}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Inicial" component={Inicial}/>
      <Stack.Screen name="Vacinas" component={Vacinas}/>
      <Stack.Screen name="ProximasVacinas" component={ProximasVacinas}/>
      <Stack.Screen name="Editar" component={Editar}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App