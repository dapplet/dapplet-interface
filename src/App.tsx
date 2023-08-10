import { Route, Routes } from 'react-router-dom';
import Build from './components/templates/Build';
import Dapplet from './components/templates/Dapplet';
import Dapplets from './components/templates/Dapplets';
import Dapps from './components/templates/Dapps';
import Dashboard from './components/templates/Dashboard';
import Develop from './components/templates/Develop';
import NotFound from './components/templates/NotFound';
import Stake from './components/templates/Stake';

import SwitchChains from './components/organisms/SwitchChains';
import Notifications from './components/providers/Notifications';
import Dapp from './components/templates/Dapp';
import Header from './components/templates/Header';
import Sidebar from './components/templates/Sidebar';
import useWindowDimensions from './lib/utils/dimensions';

function App() {
  const { width } = useWindowDimensions();

  return (
    <main className="flex flex-row">
      {width > 768 && <Sidebar />}
      <SwitchChains />
      <div id="main">
        <Notifications />
        <Header />
        <div id="template">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/develop" element={<Develop />} />
            <Route path="/build" element={<Build />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/stake" element={<Stake />} />
            <Route path="/dapplets">
              <Route index element={<Dapplets />} />
              <Route path=":pkg" element={<Dapplet />} />
            </Route>
            <Route path="/dapps">
              <Route index element={<Dapps />} />
              <Route path=":dapp" element={<Dapp />} />
            </Route>
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
