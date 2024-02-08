import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HotelList } from "./components/HotelList";
import { Route, Switch } from "wouter";
import { HotelDetails } from "./components/HotelDetails";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/" component={HotelList} />
          <Route path="/hotel/:id" component={HotelDetails} />
        </Switch>
      </QueryClientProvider>
    </>
  );
};

export default App;
