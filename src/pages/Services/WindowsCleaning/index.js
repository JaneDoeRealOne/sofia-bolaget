import React from 'react';
import { windowsObj, windowsObjTwo } from './Data';
import { PageContent, } from '../../../components';

function WindowsCleaning() {
  return (
    <>
      <PageContent {...windowsObj} />
      <PageContent {...windowsObjTwo} />    
      
    </>
  );
}

export default WindowsCleaning;
