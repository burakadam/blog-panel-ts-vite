import { Spin } from 'antd';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { store } from './store/store';

function App() {
  return (
    <Suspense fallback={<Spin />}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
