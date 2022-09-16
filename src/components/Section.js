import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Section = (props) => {
  return (
    <Wrap bgImage={props.backgroundImg}>
        <Fade direction='up'>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade direction='up'>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnTxt}
                    </LeftButton>
                    {props.rightBtnTxt && <RightButton>
                        {props.rightBtnTxt}
                    </RightButton>}
                </ButtonGroup>
            </Fade>
            {props.isDownArrow && <DownArrow  />}
        </Buttons>
       
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props=>`url("/images/${props.bgImage}")`};
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    h1{
        font-size: 40px;
        font-family: sans-serif;
        font-weight: bold;
    }
    p{
        font-size: 16px;
        font-family: sans-serif;
        margin-top: 10px;
    }
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    margin: 8px;
    font-family: sans-serif;
    font-weight: bold;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity:0.65;
    color:black;
`
const DownArrow = styled(KeyboardArrowDownIcon)`
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`