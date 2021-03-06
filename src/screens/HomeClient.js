import React from 'react'
import CustomButton from '../components/CustomButton'
import GenericContainer from '../containers/GenericContainer'
import EnfasisText from '../components/EnfasisText'
import theme from '../themes/lights'

const HomeClient = ({ navigation }) => {
  return (
    <GenericContainer style={ { backgroundColor: 'white' } }>
      <GenericContainer type="enfasis">
        <EnfasisText text="There are Walkers available right now!!" />
        <CustomButton marginTop={theme.spacing.xxxl} title='Search Walker'
          loading={false} width={200}
          leftIconName="search-outline" onPress={() => navigation.navigate('ClientWalkers')} />
      </GenericContainer>
    </GenericContainer>
  )
}

export default HomeClient
