import { View, Text } from "react-native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';



const App = () =>{
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name=""  />
    </Stack.Navigator>
  );
}

export default App