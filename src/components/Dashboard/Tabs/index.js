import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import "./style.css"
import Grid from '../Grid';
import List from '../List';

export default function Tabs({ coins }) {
  const [value, setValue] = React.useState('Grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      }
    }
  })

  return (

    <ThemeProvider theme={theme}>
      <TabContext value={value}>

        <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
          <Tab label="Grid" value="Grid" sx={{ color: "white", fontWeight: "600", fontFamily: "'Inter', sans-serif" }} />
          <Tab label="List" value="List" sx={{ color: "white", fontWeight: "600", fontFamily: "'Inter', sans-serif" }} />
        </TabList>

        <TabPanel value="Grid">
          <div className='grid-container'>
            {
              coins.map((coin, i) => (
                <Grid coin={coin} key={i} />
              ))
            }
          </div>
        </TabPanel>
        <TabPanel value="List">
          <table className="list-container">
            <thead>
              {
                coins.map((coin, i) => (
                  <List coin={coin} key={i} />
                ))
              }
            </thead>
          </table>
        </TabPanel>

      </TabContext>
    </ThemeProvider>

  );
}