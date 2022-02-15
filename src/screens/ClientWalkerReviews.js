import React from 'react';
import GenericContainer from '../containers/GenericContainer';
import CustomFlatList from '../components/CustomFlatList';
import ReviewCard from '../components/ReviewCard';

const DATA = [
  {id: 1, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
  {id: 2, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
  {id: 3, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
  {id: 4, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
  {id: 5, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
  {id: 6, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
  {id: 7, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
  {id: 8, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
  {id: 9, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
  {id: 10, name: 'junaito', image: require('../assets/images/image_loading.gif'), rating: 2, review: 'foo foo foo'},
];

const ClientWalkerReviews = () => {
  const renderItem = ({ item }) => (
    <ReviewCard {...item} />
  );

  return (
    <GenericContainer>
      <CustomFlatList get render={renderItem} />
    </GenericContainer>
  );
};

export default ClientWalkerReviews;