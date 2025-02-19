import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import ChallengePage from './pages/ChallengePage';
import PenaltyPage from './pages/PenaltyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ChallengePage />} />

          <Route path="/penalty" element={<PenaltyPage />} />

          <Route path="/yerin" element={<div>예린님 파트</div>} />

          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
