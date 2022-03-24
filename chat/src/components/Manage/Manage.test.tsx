import { mount } from "enzyme";
import React from 'react';
import "../../setupTest"
import configureStore from "../../modules/configureStore";
import { Provider } from "react-redux";
import ChatPage from './index';

describe('Manage Component', () => {
  const mockStore = configureStore()
  it('should has Reset Data Button', () => {
    const c =  <Provider store={mockStore}><ChatPage /></Provider>;
    const component = mount(c);
    const title = component.find('.btn').at(0)
    expect(title.text()).toEqual('Reset data')
    component.unmount()
  })
  it('should has Logout Button', () => {
    const c =  <Provider store={mockStore}><ChatPage /></Provider>;
    const component = mount(c);
    const title = component.find('.btn').at(1)
    expect(title.text()).toEqual('Logout')
    component.unmount()
  })
});
