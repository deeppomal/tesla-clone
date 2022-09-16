import React,{useState} from 'react'
import styled from 'styled-components'

function Footer() {
 
  return (
    <Container>
      <p>Tesla © 2022</p>
      <p>Privacy & Legal</p>
      <p>Vehicle Recalls</p>
      <p>Contact</p>
      <p>Career</p>
      <p>News</p>
      <p>Engage</p>
      <p>Locations</p>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 13px;
      font-family: sans-serif;
      margin: 20px;
      cursor: pointer;
    }
    @media (max-width:756px){
        flex-direction: column;
        padding-bottom: 50px;
        p{
            margin:5px;
        }
    }
`