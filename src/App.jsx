import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HotelList } from "./components/HotelList";
import { Route, Switch } from "wouter";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={HotelList} />
      </Switch>
    </QueryClientProvider>
  );
};

export default App;
