import MainNavigation from "./src/navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  // const [user, setUser] = useState(false);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
