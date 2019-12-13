import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';

import store from './store/configureStore.js';
import theme from './themes/theme';

import Routes from './routes/Routes';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes/>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;