import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, teamsTheme } from '@fluentui/react-northstar'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import TaskModule from './components/TaskModule'

ReactDOM.render(
  <Provider theme={teamsTheme}>
    <TaskModule />
  </Provider>,
  document.getElementById('app'),
)