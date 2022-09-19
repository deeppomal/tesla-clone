import React from 'react'
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const AWD = () => {

  return (
    <Container>
        <ImgContainer />
        <Fade direction='up' duration={500}>
            <ImageContent>
                <ImageWrapper>
                    <ImageContentItem>
                        <h4>2</h4>
                        <p>Independent motors display control torque to the front and rear wheels</p>
                        <CustomText>Independent Motors</CustomText>
                    </ImageContentItem>
                    <ImageContentItem>
                        <h4>10 ms</h4>
                        <p>Dual motors respond to changing conditions in as little as 10 milliseconds</p>
                        <CustomText>Torque Response</CustomText>
                    </ImageContentItem>
                    <ImageContentItem>
                        <ThunderstormIcon style={{ fontSize: 30,fill:'white'}} />
                        <p>Unparalleled traction and control, in all weather conditions</p>
                        <CustomText>All-Weather Control</CustomText>
                    </ImageContentItem>
                </ImageWrapper>
            </ImageContent>
            <Content>
                <LeftContent>
                    <ContentWrapper>
                        <p>All-Wheel Drive</p>
                        <h4>Dual Motor</h4>
                        <OrderBtn>
                            <p>Order Now</p>
                        </OrderBtn>
                    </ContentWrapper>
                </LeftContent>
                <RightContent>
                    <p>Tesla All-Wheel Drive has two independent motors for improved redundancy, 
                        each with only one moving part for minimal maintenance and maximum durability. 
                        Unlike traditional all-wheel drive systems, they digitally control torque to the 
                        front and rear wheels for far better handling and traction control.
                    </p>
                </RightContent>
            </Content>
            <RespContent>
                <p>All-Wheel Drive</p>
                <h4>Dual Motor</h4>
                <p>Tesla All-Wheel Drive has two independent motors for improved redundancy, 
                    each with only one moving part for minimal maintenance and maximum durability. 
                    Unlike traditional all-wheel drive systems, they digitally control torque to the 
                    front and rear wheels for far better handling and traction control.
                </p>
                <OrderBtnResp>
                    <p>Order Now</p>
                </OrderBtnResp>      
            </RespContent>
        </Fade>
    </Container>
  )
}

export default AWD

const CustomText = styled.h3`
    display: none;
    @media (max-width: 768px) {
        display: block;
        font-size: 14px;
        font-family: sans-serif;
        color: white;
        margin-top: 10px;
        font-weight: lighter;
        width: 70%;
        text-align: center;
    }
    
`
const RespContent = styled.div`
    display: none;
    @media (max-width: 1026px) {
        display: block;
        padding:20px 50px;
        p{
            font-size: 15px;
            font-family: sans-serif;
            /* width: 90%; */
        }
        h4{
            font-size: 25px;
            font-family: sans-serif;
            font-weight: bold;
            margin: 10px 0;
        }
    }
    
`
const ImageContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -120px;
`
const ImageWrapper = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1560px) {
        width:80%;
    }
`
const ImageContentItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 13px;
        font-family: sans-serif;
        color: white;
        width: 70%;
        margin-top: 10px;
        text-align: center;
    }
    h4{
        font-size: 30px;
        font-family: sans-serif;
        font-weight: bold;
        color: white;
    }
    @media (max-width: 768px) {
        p{
            display: none;
        }
        h4{
            font-size: 22px;
        }
        
    }
`
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  flex-direction: column;
`
const ImgContainer = styled.div`
    height: 75vh;
    background-image: url('/images/awd.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const Content = styled.div`
    height: 25vh;
    display: flex;
    @media (max-width: 1026px) {
        display: none;
    }

`
const LeftContent = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    p{
        font-size: 16px;
        font-family: sans-serif;
        font-weight:lighter;
    }
    h4{
        font-size: 30px;
        font-family: sans-serif;
        font-weight: bold;
        margin-top: 5px;
    }
`
const RightContent = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    p{
        width: 60%;
        font-family: sans-serif;
        font-size: 16px;
    }
`
const OrderBtn = styled.div`
  padding: 10px 50px;
  border: 3px solid black;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  p{
    font-size: 15px;
    font-family: sans-serif;
    font-weight: bold;
    margin: 0px;
  }
  &:hover{
    background-color: black;
    p{
      color:white;
    }
  }
  transition: 0.5s;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const OrderBtnResp = styled(OrderBtn)`
    width: 200px;
    padding: 10px 20px;
    p{
        text-align: center;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content:center;
        p{
        font-size: 14px;
        }
    }
`