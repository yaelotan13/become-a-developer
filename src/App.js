import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
          hello
      </div>
    </ThemeProvider>
  );
}

export default App;
