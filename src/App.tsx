import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home"
import CompanyNumbers from "./CompanyNumbers"
import NumberInfo from "./NumberInfo"

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:companyId" element={<CompanyNumbers />} />
        <Route path="/number/:numberId" element={<NumberInfo />} />
          
          {/*
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
