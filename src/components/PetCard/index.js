import React from "react";
import {Text, Image } from "react-native";

const PetCard = ({url, name, imgStyle, txtStyle}) => {
  return (
    <>
    <Image source={{uri:url}} style={imgStyle}/>
    <Text style={txtStyle}>{name}</Text>
    </>
  );
};

export default PetCard;