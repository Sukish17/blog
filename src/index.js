import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="917286974119-atp2rv3h12ar3in95ivc9sur0hp9fuvr.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>;
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
