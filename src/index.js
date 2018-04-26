import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import Tasks from './components/Tasks';
import registerServiceWorker from './registerServiceWorker';



// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Tasks />, document.getElementById('tasks'));


registerServiceWorker();
