import ReactDOM from 'react-dom';
import './index.css';
import FiboApp from './FiboApp';
import './styles/styles.scss'
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
     <Provider store={ store }>
        <FiboApp />
      </Provider>,
  document.getElementById('root')
);


