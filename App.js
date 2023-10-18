import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './pages/Calculator/Calculator';

export default function App() {
	
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen component={Calculator} name="Calculator" />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
