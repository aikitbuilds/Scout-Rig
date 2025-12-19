
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PartnerLanding from './pages/PartnerLanding';
import InvestorLanding from './pages/InvestorLanding';
import CustomerLanding from './pages/CustomerLanding';
import StrategicLanding from './pages/StrategicLanding';
import DashboardPortal from './pages/DashboardPortal';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/partners" element={<PartnerLanding />} />
          <Route path="/investors" element={<InvestorLanding />} />
          <Route path="/customers" element={<CustomerLanding />} />
          <Route path="/strategic" element={<StrategicLanding />} />
          <Route path="/dashboard" element={<DashboardPortal />} />
          <Route path="*" element={<div className="p-20 text-center">Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
