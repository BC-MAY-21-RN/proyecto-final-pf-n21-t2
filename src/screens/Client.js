import React from 'react';
import CustomButton from "../components/CustomButton";
import GenericContainer from '../containers/GenericContainer';
import EnfasisText from '../components/EnfasisText';
import EnfasisContainer from '../containers/EnfasisContainer';
import theme from '../themes/lights';

const Client = () => {
  return (
    <GenericContainer>
      <EnfasisContainer>
        <EnfasisText text="There are 69,420 walkers right now" />
        <CustomButton marginTop={theme.spacing.xxxl} title='Search Walker' loading={false} width={200} leftIconName="search-outline"/>
      </EnfasisContainer>
    </GenericContainer>
  );
};

export default Client;
