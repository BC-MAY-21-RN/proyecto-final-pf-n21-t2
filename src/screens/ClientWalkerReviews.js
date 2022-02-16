import React from 'react'
import GenericContainer from '../containers/GenericContainer'
import CustomFlatList from '../components/CustomFlatList'
import ReviewCard from '../components/ReviewCard'

const ClientWalkerReviews = () => {
  const renderItem = ({ item }) => (
    <ReviewCard {...item} />
  )

  return (
    <GenericContainer>
      <CustomFlatList get render={renderItem} />
    </GenericContainer>
  )
}

export default ClientWalkerReviews
