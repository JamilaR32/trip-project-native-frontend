//\\ بسم الله الرحمن الرحيم //\\

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/profile/Login";
import Register from "../screens/profile/Register";
import ROUTES from ".";

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.AUTH_NAVIGATION.LOGIN}>
      <Stack.Screen
        name={ROUTES.AUTH_NAVIGATION.REGISTER}
        component={Register}
      />
      <Stack.Screen name={ROUTES.AUTH_NAVIGATION.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
