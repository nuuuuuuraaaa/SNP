import './styles/index.sass';

import headerListener from './javascript/headerListener';
import handleMarsMain from './views/index.hbs';

function app() {
  const rootContaoner = document.getElementById('root');
  rootContaoner.innerHTML = handleMarsMain();
  headerListener();
}

app();
