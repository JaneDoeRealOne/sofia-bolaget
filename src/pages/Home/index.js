import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { PageContent, } from '../../components';

function Home() {
  return (
    <>
      <PageContent {...homeObjOne} />
      <PageContent {...homeObjThree} />
      <PageContent {...homeObjTwo} />    
      <PageContent {...homeObjFour} />
    </>
  );
}

export default Home;
