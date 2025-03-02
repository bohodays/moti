import React from 'react';
import Providers from './providers';
import GuestRouter from './router/GuestRouter';
import InviteRouter from './router/InviteRouter';

function App() {
  const uuid = window.location.pathname.substring(1); // 첫 번째 "/" 제거

  return <Providers>{uuid?.length < 10 ? <InviteRouter /> : <GuestRouter url={uuid} />}</Providers>;
}

export default App;
