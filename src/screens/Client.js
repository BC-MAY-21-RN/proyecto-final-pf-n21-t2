import React from 'react';
import CustomButton from "../components/CustomButton";
import GenericContainer from '../containers/GenericContainer';
import EnfasisText from '../components/EnfasisText';
import EnfasisContainer from '../containers/EnfasisContainer';

const Client = () => {
  return (
    <GenericContainer>
      <EnfasisContainer>
        <EnfasisText text="There are 69,420 walkers right now" />
        <CustomButton title='Search Walker' loading={false} width={200} leftIconName="search-outline"/>
      </EnfasisContainer>
    </GenericContainer>
    
  );
};

export default Client;
