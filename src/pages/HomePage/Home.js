import React from 'react';
import { homeOne, homeTwo, homeThree} from './Data';
import { Info } from '../../components';

function Home() {
  return (
    <>
      <Info {...homeOne} />
      <Info {...homeTwo} />
      <Info {...homeThree} />
    </>
  );
}

export default Home;