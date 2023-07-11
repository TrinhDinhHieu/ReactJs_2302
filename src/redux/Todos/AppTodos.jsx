import { Provider } from 'react-redux';

import store from './store';
import IndexList from './page/IndexList';
function AppTodos() {
    return (  
      <Provider store={store}>
          <IndexList/>
      </Provider>
    );
}

export default AppTodos;