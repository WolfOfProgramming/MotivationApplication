import React from 'react';
import PageHeader from './components/PageHeader';
import PageMainSection from './components/PageMainSection';
import History from './components/History';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SelectSection from './components/SelectSection';

function App() {
  return (
    <Router>
      <div className='App'>
        <PageHeader />
        <Switch>
          <Route path='/history'>
            <History />
          </Route>
          <Route path='/improve-today'>
            <PageMainSection />
          </Route>
          <Route path='/'>
            <SelectSection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
