import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import {ErrorBoundary} from 'src/components';
import {RootNavigation} from 'src/navigation';
import {store} from 'src/store';
import {ThemeProvider} from 'src/theme';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <SafeAreaProvider>
            <StatusBar barStyle={'dark-content'} backgroundColor="white" />
            <RootNavigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
