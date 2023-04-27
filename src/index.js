import React from "react";
import ReactDOM  from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import App from './App';
import './index.css';

import { Provider } from "./context/context";

ReactDOM.render(
    <SpeechProvider appId="91ba9997-cc27-4c69-9f71-00e95ace7323" language="en-US">
    <Provider>
    <App />
    </Provider>
    </SpeechProvider>,
 document.getElementById('root'));

