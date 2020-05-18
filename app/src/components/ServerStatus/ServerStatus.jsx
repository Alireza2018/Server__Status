import React from 'react';
import { hot } from 'react-hot-loader/root';
import Template from './Template'
import { StatusProvider } from './_useStatus'


const ServerStatus = props => {
  return (
    <StatusProvider>
      <Template />
    </StatusProvider>
  );
}

export default hot(ServerStatus);
