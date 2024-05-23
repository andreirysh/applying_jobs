import { CandidateManager } from "./components/candidate-list/CandidateManager";
import { ApplicationManager } from "./components/application-list/ApplicationManager";
import { PositionManager } from "./components/position-list/PositionManager";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <PositionManager />
        <CandidateManager />
        <ApplicationManager />
      </Provider>
    </div>
  );
};