import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import { TsReactTest } from 'homework/try-user-array';
import { LoginScreen } from 'screens/project-list/login';

function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/*<ProjectListScreen/>*/}
    </div>
  );
}

export default App;
