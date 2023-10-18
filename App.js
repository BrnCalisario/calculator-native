import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HistoryProvider } from './contexts/HistoryContext';
import Calculator from './pages/Calculator/Calculator';
import ContaHistory from './pages/History/History';

export default function App() {

	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<HistoryProvider>
				<Stack.Navigator>
					<Stack.Screen component={Calculator} name="Calculator" />
					<Stack.Screen component={ContaHistory} name="History" />
				</Stack.Navigator>
			</HistoryProvider>
		</NavigationContainer>
	);
}
