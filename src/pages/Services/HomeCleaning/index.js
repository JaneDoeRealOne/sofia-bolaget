import React from 'react';
import { homeObj, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { PageContent, } from '../../../components';

function HomeCleaning() {
  return (
    <>
      <PageContent {...homeObj} />     
      <PageContent {...homeObjThree} />
      <PageContent {...homeObjTwo} />    
      <PageContent {...homeObjFour} />
    </>
  );
}

export default HomeCleaning;