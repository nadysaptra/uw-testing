import { mount } from "enzyme";
import React from 'react';
import "../../setupTest"
import configureStore from "../../modules/configureStore";
import { Provider } from "react-redux";
import ChatPage from './index';

describe('Chat Component', () => {
  const mockStore = configureStore()
  it('should has chat app text', () => {
    const c =  <Provider store={mockStore}><ChatPage /></Provider>;
    const component = mount(c);
    const title = component.find('.title')
    expect(title.text()).toEqual('chat app')
    component.unmount()
  })
});
