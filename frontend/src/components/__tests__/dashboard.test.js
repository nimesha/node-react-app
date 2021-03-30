import {render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard'
import UserContextProvider from '../../contexts/UserContext';


test("User gallery list Wthout user", () => {
    render(
      <UserContextProvider value={null}>
        <Dashboard />
      </UserContextProvider>
    );
    expect(screen.getByText("User gallery list will be show in here..")).toBeInTheDocument();
  });
  
  test("User gallery list with user", () => {
    const user =  {'user_id': 'nimesh'};
    render(
      <UserContextProvider value={user}>
        <Dashboard />
      </UserContextProvider>
    );
    expect(screen.getByText(`User ID -  ${user.user_id}!`)).toBeInTheDocument();
  });