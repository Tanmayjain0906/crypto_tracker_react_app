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
import { motion } from 'framer-motion';

export default function Tabs({ coins, page }) {
  const themeValue = localStorage.getItem('theme');
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
          <Tab label="Grid" value="Grid" sx={{ color: "var(--white)", fontWeight: "600", fontFamily: "'Inter', sans-serif" }} />
          <Tab label="List" value="List" sx={{ color: "var(--white)", fontWeight: "600", fontFamily: "'Inter', sans-serif" }} />
        </TabList>

        <TabPanel value="Grid" >
          <div className='grid-container'>
            {
              coins.map((coin, i) => (
              <Grid coin={coin} key={i} page={page}/>
              ))
            }
          </div>
        </TabPanel>
        <TabPanel value="List">
          <table className="list-container">
            <thead>
              {
                coins.map((coin, i) => (
                  <List coin={coin} key={i} page={page}/>
                ))
              }
            </thead>
          </table>
        </TabPanel>

      </TabContext>
    </ThemeProvider>

  );
}