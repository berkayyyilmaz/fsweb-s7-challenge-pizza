import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


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
`;

const Button = styled.button`
  display: inline-block;
  padding: 12px 24px;
  background-color: #FDC913;
  color: #292929;
  text-decoration: none;
  border-radius: 25px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
`;


function Home() {
   // const handleClick = () => {
  //  navigate('/order');
    // butona onClick={handleClick} yazcaksın
  return (
    <>
    <GlobalStyle/>
    <Container>
      <Content>
        <Title>Hoş Geldiniz</Title>
        <Button >Acıktım</Button>
      </Content>
    </Container>
    </>
  )
}

export default Home