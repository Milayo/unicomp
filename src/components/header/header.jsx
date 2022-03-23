import { Text } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo_school.svg';

import { ImageContainer } from './header.styles';


const Header = () => {
  return (
      <div><ImageContainer>
      <Logo className='header-logo' style={{ fill: "white"}}/></ImageContainer>
    <Text>UNIVERSITY OF COMPUTER SCIENCES</Text>  
    </div>
  )
}

export default Header;