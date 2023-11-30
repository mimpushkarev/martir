import '@mdxeditor/editor/style.css';
import {App as AntApp, ConfigProvider, theme as antdTheme} from 'antd';
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
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionActiveBg: '#424242',
            optionSelectedBg: '#3691FC',
            colorIcon: '#fff'
          },
          Drawer: {
            footerPaddingInline: 24,
            footerPaddingBlock: 16
          }
        },
        token: {colorPrimary: '#3691FC', fontFamily: 'inherit'},
        algorithm: [antdTheme.darkAlgorithm]
      }}
    >
      <AntApp style={{height: '100%'}}>
        <Provider store={store}>
          <Routing />
        </Provider>
      </AntApp>
    </ConfigProvider>
  );
}

export {App};
