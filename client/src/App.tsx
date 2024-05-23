import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { fetchApplications, fetchCandidates, fetchPositions } from './services/apiService';
import PositionList from './components/position-list/PositionList';
import CandidateList from './components/candidate-list/CandidateList';
import ApplicationList from './components/application-list/ApplicationList';

const App: React.FC = () => {
  const [positions, setPositions] = useState<any[]>([]);
  const [candidates, setCandidates] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const positionsData = await fetchPositions();
      const candidatesData = await fetchCandidates();
      const applicationsData = await fetchApplications();
      setPositions(positionsData);
      setCandidates(candidatesData);
      setApplications(applicationsData);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <PositionList positions={positions} />
      <CandidateList candidates={candidates} />
      <ApplicationList applications={applications} />
    </Container>
  );
};

export default App;
