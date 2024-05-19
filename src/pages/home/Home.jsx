import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
body {
  background-image:url('Assets/mile1-assets/home-banner.png');
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center;
  
}`


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  text-align: center;
  margin-top: -25vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin:40px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: #FDC913;
  color: #292929;
  text-decoration: none;
  border-radius: 25px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: ease-out 0.3s;
  &:hover {
    color: black;
    background: #FDF40F;
    box-shadow:5px 5px;
    font-size: 1.4rem;
`;


function Home() {

  return (
    <>
    <GlobalStyle/>
    <Container>
      <Content>
        <Title>Hoş Geldiniz</Title>
        <StyledLink to='/order' >Acıktım</StyledLink>
      </Content>
    </Container>
    </>
  )
}

export default Home