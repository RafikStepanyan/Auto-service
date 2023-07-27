import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { UseRoutes } from './components/router';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <UseRoutes />
    </BrowserRouter>
  );
}

export default App;
