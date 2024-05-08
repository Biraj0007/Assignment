import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
        <Navbar />
        <Outlet />
      {/* </Provider> */}
    </>
  );
}
export default App;
