import React from 'react';
import CustomButton from "../components/CustomButton";
import GenericContainer from '../containers/GenericContainer';
import EnfasisText from '../components/EnfasisText';
import theme from '../themes/lights';

const Client = () => {
  return (
    <GenericContainer>
      <GenericContainer type="enfasis">
        <EnfasisText text="There are 69,420 walkers right now" />
        <CustomButton marginTop={theme.spacing.xxxl} title='Search Walker' loading={false} width={200} leftIconName="search-outline"/>
      </GenericContainer>
    </GenericContainer>
  );
};

export default Client;
