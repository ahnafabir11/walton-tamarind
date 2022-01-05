import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Sticky } from "react-scroll-motion";
import { scenceOneList } from '../imageData/scenceOne';
import { scenceTwoList } from '../imageData/scenceTwo';
import { scenceThreeList } from '../imageData/scenceThree';
import { scenceFourList } from '../imageData/scenceFour';
import { scenceFiveList } from '../imageData/scenceFive';

const LandingPage = () => {
  return (
    <ScrollContainer>
      {
        [
          ...scenceOneList,
          ...scenceTwoList,
          ...scenceThreeList,
          ...scenceFourList,
          ...scenceFiveList
        ].map((item, index) =>
          <ScrollPage page={index} key={index}>
            <Animator animation={batch(Fade(), Sticky())}>
              <img src={item.imgUrl} alt="" />
            </Animator>
          </ScrollPage>
        )
      }
    </ScrollContainer>
  );
};

export default LandingPage;