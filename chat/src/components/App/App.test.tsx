import { mount } from "enzyme";
import App from './index';
import React from 'react';
import "../../setupTest"
import configureStore from "../../modules/configureStore";
import { Provider } from "react-redux";
import LoginForm from '../SignUp/index';
import ChatPage from '../Chat/index';
import { setLogged, setLogin, setUserId } from "../../modules/chat/actions/login";

describe('App Component', () => {
  const mockStore = configureStore()
  it('should mount login form when not register', () => {
    const c =  <Provider store={mockStore}><App /></Provider>;
    const component = mount(c);
    expect(component.containsMatchingElement(<LoginForm />)).toEqual(true);
    component.unmount()
  })

  it('should mount ChatPage when register', () => {
    const username = "testing-user"
    const uid = "1";
    mockStore.dispatch(setLogin(username));
    mockStore.dispatch(setUserId(uid, username));
    mockStore.dispatch(setLogged(true));
    const c =  <Provider store={mockStore}><App /></Provider>;
    const component = mount(c);
    expect(component.containsMatchingElement(<ChatPage />)).toEqual(true);
    component.unmount()
  })
});
