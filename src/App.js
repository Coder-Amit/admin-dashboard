import { useMode, ColorModeContext } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import ProSidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Invoice from './scenes/invoice'
import Contacts from './scenes/contacts'
import Form from './scenes/form';
import Calendar from './scenes/calender';
import Faq from './scenes/faq';
import ChartBarChart from './scenes/BarChart';
import ChartLineChart from './scenes/LineChart';
import ChartPieChart from './scenes/PieChart';



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoice />} />
              <Route path='/adduser' element={<Form />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/faq' element={<Faq />} />
              <Route path='/bar' element={<ChartBarChart />} />
              <Route path='/line' element={<ChartLineChart />} />
              <Route path='/pie' element={<ChartPieChart />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
