import { For } from 'solid-js';
import { render } from 'solid-js/web';
import { HashRouter, Route } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';
import 'solid-devtools';

import './styles/index.css';

import DefaultLayout from './layouts/DefaultLayout';
import { routes } from './data/Routes';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <MetaProvider>
    <HashRouter root={DefaultLayout}>
      <For each={routes}>
        {route => <Route path={route.path} component={route.component} />}
      </For>
    </HashRouter>
  </MetaProvider>
), root!);
