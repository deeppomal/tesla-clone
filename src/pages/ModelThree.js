import React from 'react'
import styled from 'styled-components';
import AWD from '../components/AWD';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Model3 from '../components/Model3';
import Specs from '../components/Specs';

const ModelThree = () => {
  return (
    <Container>
      <Header txtColor={'#fff'}  isPositionFixed={false} />
        <Model3 />
        <AWD />
        <Specs />
      <Footer />
    </Container>
  )
}

export default ModelThree

const Container = styled.div`
  height:100vh;
`