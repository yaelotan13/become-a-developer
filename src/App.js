import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux'
import theme from './theme/index';

import { store } from './store';

import Home from './screens/Home';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
