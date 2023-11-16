import '@mdxeditor/editor/style.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Provider} from 'react-redux';

import {Routing} from '_pages';
import store from '_utils/reducer/app';

dayjs.locale('ru');
dayjs.extend(relativeTime);

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export {App};
