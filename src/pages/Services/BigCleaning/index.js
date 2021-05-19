import React from 'react';
import { bigObj, bigObjOne, bigObjTwo, bigObjThree, bigObjFour } from './Data';
import { PageContent, } from '../../../components';

function BigCleaning() {
  return (
    <>
      <PageContent {...bigObj} />
      <PageContent {...bigObjOne} />
      <PageContent {...bigObjThree} />
      <PageContent {...bigObjTwo} />    
      <PageContent {...bigObjFour} />
    </>
  );
}

export default BigCleaning;

