import React from 'react';
import { PageContent } from '../../components';
import { homeObjOne, bigObjTwo, officeObjThree, windowsObjFour, generalObjFive, stairsObjSix } from './Data';

function Services() {
  return (
    <>
      <PageContent {...bigObjTwo} />
      <PageContent {...stairsObjSix} />
      <PageContent {...homeObjOne} />
      <PageContent {...generalObjFive} />
      <PageContent {...windowsObjFour} />
      <PageContent {...officeObjThree} /> 
      
    </>
  );
}

export default Services;
