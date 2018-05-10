import React from 'react';
import { render } from 'react-dom';
import './../scss/style.scss';
import App from './components/App';
import ErrorBoundary from './helpers/ErrorBoundary';

render(
  (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>),
  document.getElementById('root'),
);

