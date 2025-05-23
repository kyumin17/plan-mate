import TimeTablePage from './TimeTablePage';
import TimeTableCreatePage from './TimeTableCreatePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TimeTableStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='TimeTablePage'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='TimeTablePage' component={TimeTablePage} />
      <Stack.Screen name='TimeTableCreatePage' component={TimeTableCreatePage} />
    </Stack.Navigator>
  );
}

export default TimeTableStack;