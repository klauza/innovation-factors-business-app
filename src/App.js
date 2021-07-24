import React from 'react';

// utils
import usePersistedState from './utils/usePersistedState';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// css
import { ThemeProvider } from 'styled-components';
import basic from './styles/themes/basic';
import custom from './styles/themes/custom';
import GlobalStyle from './styles/global';

// routes index
import Main from './views';

function App() {
  const [theme, setTheme] = usePersistedState('theme', basic);

  const toggleTheme = () => {
    setTheme(theme.title === 'basic' ? custom : basic);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
