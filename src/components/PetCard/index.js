import React from "react";
import {Text, Image } from "react-native";

const PetCard = ({uri, name, imgStyle, txtStyle}) => {
  return (
    <>
    <Image source={{uri}} style={imgStyle}/>
    <Text style={txtStyle}>{name}</Text>
    </>
  );
};

export default PetCard;