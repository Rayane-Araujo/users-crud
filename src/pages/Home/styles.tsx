import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-top: 2rem;
  color: #0d1931;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 32px;
  height: 450px;
  top: 170px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

export const Greeting = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  color: #0d1931;
`;

export const DateText = styled.p`
  color: #475569;
  font-size: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
    height: auto;
  }

  button{
    border: 1px solid #272846;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    width: 350px;
  }
`;

export const WelcomeText = styled.button`
  font-size: 18px;
  font-weight: 500;
  color: #0d1931;
  margin-top: 15px;
`;
