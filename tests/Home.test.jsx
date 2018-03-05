import React from "react";
import { Provider } from 'react-redux';
import jest from 'jest';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import cloudinary from 'cloudinary'

import Home from "../src/app/components/Home";
import {JestStore} from '../src/app/store';

cloudinary.config({
  cloud_name: 'natthanhamilton',
  api_key: '621237428861119',
  api_secret: 'QIqk-HNw3dDdWRz-iHFUgBjeE3Y'
});

Enzyme.configure({ adapter: new Adapter() });

describe("homeome", () => {
  let props;
  let mountedHome;

  const home = () => {
    if (!mountedHome) {
      mountedHome = mount(
        <Provider store={JestStore}>
          <Home {...props} />
        </Provider>
      );
    }
    return mountedHome;
  }

  beforeEach(() => {

    props = {
      wallpaperPath: undefined,
    };

    mountedHome = undefined;
  });

  it("always renders a div", () => {
    const divs = home().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
});
