import React from 'react';
import { stairsObj, stairsObjTwo } from './Data';
import { PageContent, } from '../../../components';

function StairsCleaning() {
  return (
    <>
      <PageContent {...stairsObj} />
      <PageContent {...stairsObjTwo} />    
      
    </>
  );
}

export default StairsCleaning;
