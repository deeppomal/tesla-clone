import React,{useState} from 'react'
import styled,{ css } from 'styled-components';
import { Fade } from "react-awesome-reveal";

const DATA = [
    {
        id:1,
        title:'Performance',
        data:[
            {
                id:1,
                title:'Battery',
                desc:'Long Range'
            },
            {
                id:2,
                title:'*Acceleration',
                desc:'3.1 s 0-60 mph \nwith rollout subtracted'
            },
            {
                id:3,
                title:'Range',
                desc:'315 miles (EPA est.)'
            },
            {
                id:4,
                title:'Drive',
                desc:'Dual Motor All-Wheel Drive'
            },
            {
                id:5,
                title:'Seating',
                desc:'5 Adults'
            },
            {
                id:6,
                title:'Wheels',
                desc:'20"'
            },
            {
                id:7,
                title:'Weight',
                desc:'4,048 lbs'
            },
            {
                id:8,
                title:'Cargo',
                desc:'23 cu ft'
            },
            {
                id:9,
                title:'Displays',
                desc:'15" Center Touchscreen'
            },
            {
                id:10,
                title:'Supercharging Max/ Payment \nType',
                desc:'250 kW max; Pay Per Use'
            },
            {
                id:11,
                title:'Onboard Charger Max',
                desc:'11.5 kW max (48A)'
            },
            {
                id:12,
                title:'Warranty',
                desc:'Basic Vehicle - 4 years or 50,000 mi, whichever comes first\nBattery & Drive Unit - 8 years or 120,000 mi, whichever comes first'
            },
        ]
    },
    {
        id:2,
        title:'Long Range AWD',
        data:[
            {
                id:1,
                title:'Battery',
                desc:'Long Range'
            },
            {
                id:2,
                title:'Acceleration',
                desc:'4.2 s 0-60 mph'
            },
            {
                id:3,
                title:'Range',
                desc:'358 miles (EPA est.)'
            },
            {
                id:4,
                title:'Drive',
                desc:'Dual Motor All-Wheel Drive'
            },
            {
                id:5,
                title:'Seating',
                desc:'5 Adults'
            },
            {
                id:6,
                title:'Wheels',
                desc:'18" or 19"'
            },
            {
                id:7,
                title:'Weight',
                desc:'4,034 lbs'
            },
            {
                id:8,
                title:'Cargo',
                desc:'23 cu ft'
            },
            {
                id:9,
                title:'Displays',
                desc:'15" Center Touchscreen'
            },
            {
                id:10,
                title:'Supercharging Max/ Payment Type',
                desc:'250 kW max; Pay Per Use'
            },
            {
                id:11,
                title:'Onboard Charger Max',
                desc:'11.5 kW max (48A)'
            },
            {
                id:12,
                title:'Warranty',
                desc:'Basic Vehicle - 4 years or 50,000 mi, whichever comes first\nBattery & Drive Unit - 8 years or 120,000 mi, whichever comes first'
            },
        ]
    },
    
]

const Specs = () => {

    const [selectedItem,setSelectedITem] = useState(DATA[0]);
    const [itemTitle,setItemTitle] = useState('Performance');

    
  return (
    <Container>
       <LeftContent>
        <img src='/images/specs.jpg' alt='Tesla' />
       </LeftContent>
       <RightContent>
        <Fade direction='up' duration={1000}>
            <TitleWrapper>
                <h4>Model 3</h4>
                <p>Specs</p>
            </TitleWrapper>
            <ToggleContainer>
                {
                    DATA.map( item => {
                        return( 
                            <ToggleItem id={item.id} onClick={()=>{setSelectedITem(item); setItemTitle(item.title) }} isSelectedItem={item.title === itemTitle ? true : ''}>
                                <p>{item.title}</p>
                            </ToggleItem>
                        )
                    })
                }
            </ToggleContainer>
        </Fade>
        <Fade duration={2000}>
            <ToggleContent>
                {
                    selectedItem.data.map( item => {
                        return(
                            <ToggleContentItem id={item.id}>
                                <Divider />
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </ToggleContentItem>
                        )
                    })
                }
            </ToggleContent>
        </Fade>
       </RightContent>
    </Container>
  )
}

export default Specs
const ToggleContentItem = styled.div`
    h4{
        font-family: sans-serif;
        font-weight: bold;
        color: #f3f3f3;
    }
    p{
        font-family: sans-serif;
        color: #f3f3f3;
        margin-top: 2px;
        font-size: 14px;
    }
`
const Divider = styled.div`
    height: 1px;
    background-color: #f3f3f3;
    width: 30px;
    margin: 15px 0px;
`
const ToggleContent=styled.div`
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: auto auto auto auto auto auto;
    grid-gap: 10px;
`
const ToggleContainer = styled.div`
    display: flex;
    margin-top: 20px;
`
const ToggleItem = styled.div`
    padding: 7px 0px;
    width: 200px;
    border: 3px solid gray;
    border-radius: 3px;
    margin: 5px;
    cursor: pointer;
    font-weight: bold;
    p{
        font-family: sans-serif;
        font-size: 14px;
        margin-left: 5px;
        color: gray;
        text-align: center;
    }
    ${props =>
    props.isSelectedItem &&
    css`
      border: 3px solid #f3f3f3;
      p{
        color: #f3f3f3;
      }
    `}
`
const Container = styled.div`
    height: auto;
    padding-bottom: 50px;
    width: 100vw;
    display: flex;
    background-color: black;
    @media (max-width:1000px) {
        flex-direction: column;
        height: auto;
        align-items: center;
        padding-bottom: 50px;
    };
`
const LeftContent = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:1000px) {
        img{
            height: 500px;
        }
    };
`   
const RightContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width:1000px) {
        align-items: center;
    };
`
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    h4{
        font-family: sans-serif;
        font-weight: bold;
        font-size: 30px;
        color: #f3f3f3;
    }
    p{
        font-family: sans-serif;
        font-size: 30px;
        margin-left: 5px;
        color: #f3f3f3;
    }
`