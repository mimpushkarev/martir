import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import store from "@utils/reducer/app";
import Home from "@components/pages/home";
import NotFound from "@components/pages/not-found";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
