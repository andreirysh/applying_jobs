import { Provider } from "react-redux";
import PositionManager from "./components/position-list/PositionManager";
import { store } from "./store/store";
import CandidateManager from "./components/candidate-list/CandidateManager";
import ApplicationManager from "./components/application-list/ApplicationManager";

const App: React.FC = () => {
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

export default App;
