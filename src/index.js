import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase-config';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
