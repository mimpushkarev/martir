import { Provider } from "react-redux";
import store from "@utils/reducer/app";
import { Routing } from "@pages";

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export { App };
