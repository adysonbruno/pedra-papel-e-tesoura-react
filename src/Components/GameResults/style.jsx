import styled from "styled-components";

export const ContainerGameResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h2{
    font-size: 6rem;
  }
  button{
    font-size: 6rem;
    padding: 10px 30px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-variant-caps: small-caps;
    font-family: monospace;
    font-weight: 900;
    cursor: pointer;
  }
`