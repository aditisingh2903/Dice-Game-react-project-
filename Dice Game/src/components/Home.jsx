import styled from 'styled-components'

const Home = ({toggle}) => {
return(
    <Container> 
        <div>
        <img src="/images/dices.png" />
        </div>
    <div className="content"> 
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
    </div>
    </Container>
);
};

export default Home;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1180px;
  height:100vh;
  align-items: center;
  .content{
    h1{
        font-size:96px;
        white-space: nowrap;
    }
  }

`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px 18px;
  gap: 10px;

  width: 220px;
  height:44px;
  boder:none;
  background: #000000;
  border-radius: 5px;
  font-size:16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;