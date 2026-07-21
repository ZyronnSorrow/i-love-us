import { render } from 'solid-js/web';
import { HashRouter, Route } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';
import 'solid-devtools';

import './styles/index.css';

import DefaultLayout from './layouts/DefaultLayout';
import Home from './views/Home';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <MetaProvider>
    <HashRouter root={DefaultLayout}>
      <Route path="/" component={Home} />
    </HashRouter>
  </MetaProvider>
), root!);
