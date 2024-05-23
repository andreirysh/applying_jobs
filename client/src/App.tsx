import { CandidateManager } from "./components/candidate-list/CandidateManager";
import { ApplicationManager } from "./components/application-list/ApplicationManager";
import { PositionManager } from "./components/position-list/PositionManager";

export const App: React.FC = () => {
  return (
    <div>
      <PositionManager />
      <CandidateManager />
      <ApplicationManager />
    </div>
  );
};