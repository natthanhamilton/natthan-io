import React from 'react';
import { Provider } from 'react-redux';
import jest from 'jest';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { I18nextProvider, reactI18nextModule } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import Home from '../src/app/components/Home';
import { JestStore } from '../src/app/store';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'cimode',
    debug: false,
    saveMissing: false,
    react: {
      wait: false,
      nsMode: 'fallback'
    }
  });

Enzyme.configure({
  adapter: new Adapter()
});

describe('home', () => {
  let props;
  let mountedHome;

  const home = () => {
    n;
    if (!mountedHome) {
      mountedHome = mount(
        <I18nextProvider i18n={i18n}>
          <Provider store={JestStore}>
            <Home {...props} />
          </Provider>
        </I18nextProvider>
      );
    }
    return mountedHome;
  };

  beforeEach(() => {
    props = { wallpaperPath: undefined };

    mountedHome = undefined;
  });

  test('always renders a div', () => {
    const div = home().find('div');
    expect(div.length).toBeGreaterThan(0);
  });
});
