import { Grid } from '@mui/material';
import './App.css';
import Header from './components/header';
import Gmap from './components/map';
import Sidebar from './components/sidebar2';

function App() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          <Header />
          <Gmap />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
