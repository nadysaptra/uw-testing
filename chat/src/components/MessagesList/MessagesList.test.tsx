import { mount } from "enzyme";
import React from 'react';
import "../../setupTest"
import configureStore from "../../modules/configureStore";
import { Provider } from "react-redux";
import ChatPage from './index';
import ChatHistory from "./index";
import { message } from "../../modules/chat/actions/message";

describe('MessagesList Component', () => {
  const mockStore = configureStore()
  it('should have no data when no messages', () => {
    const c =  <Provider store={mockStore}><ChatHistory /></Provider>;
    const component = mount(c);
    const title = component.find('.message-profile')
    expect(title).toBeFalsy()
    component.unmount()
  })
  it('should have show data when has messages', () => {
    mockStore.dispatch(message({name: 'tes', text: 'test', uid :'1'}));
    const c =  <Provider store={mockStore}><ChatPage /></Provider>;
    const component = mount(c);
    const title = component.find('.message-profile').at(0)
    expect(title).toBeTruthy()
    component.unmount()
  })
});
