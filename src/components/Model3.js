import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import SpeedIcon from '@mui/icons-material/Speed';

const Model3 = () => {

  const [speedTimer,setSpeedTimer]=useState(0);

  useEffect(()=>{
    const timer1 = setTimeout(() => {
      clearInterval(interval1);

     
    }, 800);
    const interval1 = setInterval(() => {
      setSpeedTimer(speedTimer => speedTimer +10);
    }, 25);

    return () => {
      clearTimeout(timer1);
      clearInterval(interval1);
    }
  },[])

  return (
    <Container>
      <StatsContainer>
        <Stat>
          <SpeedWrapper>
            <SpeedIcon style={{ fontSize: 32,fill:'white',marginRight:3}} />
            <h4>{(speedTimer/100).toFixed(1)} s</h4>
          </SpeedWrapper>
          <p>0-60 mph*</p>
        </Stat>
        <Stat>
          <h4>358 mi</h4>
          <p>Range (EPA est.)</p>
        </Stat>
        <Stat>
          <h4>AWD</h4>
          <p>Dual Motor</p>
        </Stat>
        <StatEnd>
          <OrderBtn>
            <p>Order Now</p>
          </OrderBtn>
        </StatEnd>
      </StatsContainer>
      <OrderBtnResp>
            <p>Order Now</p>
      </OrderBtnResp>
      <DownArrow src='/images/down-arrow.svg' />
    </Container>
  )
}

export default Model3

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('/images/model-3-home.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
`
const DownArrow = styled.img`
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  height: 30px;
  width: 35px;
`
const StatsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  width:40%;
  @media (max-width: 1560px) {
    width:60%;
  }
`
const Stat=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4{
    font-size: 30px;
    font-family: sans-serif;
    font-weight: bold;
    color: white;
  }
  p{
    font-size: 12px;
    font-family: sans-serif;
    color: white;
    margin-top: 5px;
  }
  @media (max-width: 1026px) {
    h4{
      font-size: 25px;
    }
    p{
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    h4{
      font-size: 18px;
    }
    p{
      font-size: 11px;
    }
  }
`
const StatEnd = styled(Stat)`
  @media (max-width: 1026px) {
    display: none;
  }
`
const OrderBtn = styled.div`
  padding: 10px 50px;
  border: 3px solid white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p{
    font-size: 15px;
    font-family: sans-serif;
    color: white;
    font-weight: bold;
    margin: 0px;
  }
  &:hover{
    background-color: white;
    p{
      color:#393c41;
    }
  }
  transition: 0.5s;
`
const OrderBtnResp = styled(OrderBtn)`
  display: none;
  @media (max-width: 1026px) {
    display: block;
  }
  @media (max-width: 768px) {
    width: 60%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content:center;
    p{
      font-size: 14px;
    }
  }
`
const SpeedWrapper = styled.div`
  display: flex;
  align-items: center;
`