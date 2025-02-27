import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'src/layout/Layout';
import ChallengePage from 'src/pages/ChallengePage';
import PenaltyPage from 'src/pages/PenaltyPage';

const InviteRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ChallengePage />} />

          <Route path="/penalty" element={<PenaltyPage />} />

          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default InviteRouter;
