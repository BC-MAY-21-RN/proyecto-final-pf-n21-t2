import React from 'react';
import CustomButton from '../../components/CustomButton';
import theme from '../../themes/lights';

const MenuOptionButton = ({title, iconName, onPress}) => {
  const buttonWidth = 300;
  const bottomMargin = {marginBottom: theme.spacing.xxxl};

  return (
    <CustomButton leftIconName={iconName} onPress={onPress} style={bottomMargin} title={title} width={buttonWidth} />
  );
};

export default MenuOptionButton;
