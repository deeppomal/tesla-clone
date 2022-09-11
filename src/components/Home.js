import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Header />
      <Section
        title={"Model 3"}
        description="Order Online for Touchless Delivery"   
        backgroundImg="model-3.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"

      />
      <Section
        title={"Model S"}
        description="Order Online for Touchless Delivery"   
        backgroundImg="model-s.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"

      />
      <Section
        title={"Model X"}
        description="Order Online for Touchless Delivery"   
        backgroundImg="model-x.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"

      />
      <Section
        title={"Model Y"}
        description="Order Online for Touchless Delivery"   
        backgroundImg="model-y.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"

      />
       <Section
        title={"Solar Panels"}
        description="Lowest cost solar Panels in America"   
        backgroundImg="solar-panel.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"

      />
      <Section
        title={"Solar Roof"}
        description="Product Clean Energy From Your Roof"   
        backgroundImg="solar-roof.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"

      />
      <Section
        title={"Accessories"}
        backgroundImg="accessories.jpg"
        leftBtnTxt="Shop Now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height:100vh;
`