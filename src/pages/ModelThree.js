import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Model3 from '../components/Model3';

const ModelThree = () => {
  return (
    <Container>
      <Header />
        <Model3 />
      <Footer />
    </Container>
  )
}

export default ModelThree

const Container = styled.div`
  height:100vh;
`