import React from 'react';
import { officeObj, officeObjTwo, officeObjThree } from './Data';
import { PageContent, } from '../../../components';

function OfficeCleaning() {
  return (
    <>
      <PageContent {...officeObj} />
      <PageContent {...officeObjThree} />
      <PageContent {...officeObjTwo} />    
    </>
  );
}

export default OfficeCleaning;
