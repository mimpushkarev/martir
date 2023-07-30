import {Provider} from 'react-redux';

import {Routing} from '_pages';
import store from '_utils/reducer/app';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export {App};
