import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: 'rvieceli-dell' })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
