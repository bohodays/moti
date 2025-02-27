import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getInvitationInfo } from '@api/user';
import useInvitedStore from '@store/invitedStore';
import Layout from 'src/layout/Layout';

// lazy loading
const InvitePage = lazy(() => import('src/pages/InvitePage'));

const GuestRouter = ({ url }: { url: string }) => {
  const { setInvitationInfo } = useInvitedStore();

  const onGetInvitationInfo = async (url: string) => {
    const response = await getInvitationInfo(url);
    setInvitationInfo(response);
  };

  useEffect(() => {
    if (url) onGetInvitationInfo(url);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={`/${url}`} element={<InvitePage />} />

          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default GuestRouter;
