import {Provider} from 'react-redux';

import {Routing} from '@pages';
import store from '@utils/reducer/app';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export {App};
