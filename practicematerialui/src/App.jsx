
import './App.css';
import { makeStyles } from 'tss-react/mui';
import Navbar from './components/Navbar';
import {Leftbar} from './components/Leftbar';
import {Feed}from './components/Feed';

const useStyles = makeStyles((theme) => ({}));
function App() {
  const {classes} = useStyles()
  return (
    <div>
      <Navbar />
      <Leftbar />
      {/* <Feed/> */}
     
    </div>
  );
}

export default App;
