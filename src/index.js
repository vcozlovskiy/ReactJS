import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { type } from '@testing-library/user-event/dist/type';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
