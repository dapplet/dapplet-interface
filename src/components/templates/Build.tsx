import CreateDapp from '../organisms/CreateDapp';
import MyDapps from './MyDapps';

const App = () => {
  return (
    <div className="flex w-full justify-center">
      {/* left main panel */}
      <div className="dashboard-main-panel" style={{ maxWidth: '70rem' }}>
        <CreateDapp />
        <MyDapps />
      </div>
    </div>
  );
};

export default App;
