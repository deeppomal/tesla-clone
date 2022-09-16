import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux'; 
import LanguageIcon from '@mui/icons-material/Language';
import {Link} from 'react-router-dom';

function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <Link to={'/'}>
        <a>
          <img src='/images/logo.svg' />
        </a>
      </Link>
      <Menu>
        {
          cars && cars.map((car,index)=>{
            return <Link to={car =='Model 3' ? '/model3':'/'} ><a href="#" key={index}>{car}</a></Link> 
          })
        }
        <a href="#" >Solar Roof</a>
        <a href="#" >Solar Panels</a>
      </Menu>
      <RightMenu>
        <MenuSubGroup>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#" onClick={()=>setBurgerStatus(true)}>Menu</a>
        </MenuSubGroup>
        <MenuBtn>
          <p onClick={()=>setBurgerStatus(true)}>Menu</p>
        </MenuBtn>
        
        {/* <CustomMenu onClick={()=>setBurgerStatus(true)} /> */}
      </RightMenu>
      <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)} />
          </CloseWrapper>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
            <LangWrapper>
              <CustomLangIcon />
              <LangParent>
                <h1>United States</h1>
                <p>English</p>
              </LangParent>
            </LangWrapper>
        </BurgerNav> 
    </Container>
  )
}

export default Header

const MenuBtn = styled.div`
  padding: 5px 15px;
  border-radius: 4px;
  background-color: rgba(239, 239, 240,0.2);
  p {
      font-size: 15px;
      font-family: sans-serif;
      font-weight: bold;
      cursor: pointer;
    }
  @media (min-width: 1056px){
    display: none;
  }
`
const MenuSubGroup = styled.div`
  @media (max-width: 1056px){
    display: none;
  }
 
`
const Container = styled.div`
  min-height: 50px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  img{
    height: 15px;
    width: 100px;
  }
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex:1;
  justify-content: center;

  a {
    padding: 0 15px;
    flex-wrap: nowrap;
    font-size: 15px;
    font-family: sans-serif;
    font-weight: bold;
  }
  @media (max-width:1056px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
      font-size: 15px;
      font-family: sans-serif;
      font-weight: bold;
      margin-left: 15px;
    }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translate(0)':'translate(100%)'};
  transition: transform 0.2s ease-in;
  li {
    padding: 10px 20px;
    a{
      font-size: 15px;
      font-family: sans-serif;
      font-weight: 600;
    }
  }
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const LangWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 20px;

`
const CustomLangIcon = styled(LanguageIcon)`
  cursor: pointer;
`
const LangParent = styled.div`
  margin-left: 10px;
  h1{
    font-size: 15px;
    font-family: sans-serif;
    font-weight: bold;
    margin-bottom: 5px;
  }
  p{
    font-size: 13px;
    font-family: sans-serif;
  }
`