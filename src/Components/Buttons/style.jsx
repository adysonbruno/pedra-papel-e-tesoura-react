import styled from "styled-components";

export const ContainerButtons = styled.div`
  display: flex;
  
`

export const Button = styled.button`
  padding: 10px 30px;
  margin: 10px;
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 5px;
  color: white;
  font-variant-caps: small-caps;
  font-family: monospace;
  font-weight: 900;
`

export const ButtonRock = styled(Button)`
  background-color: brown;
`

export const ButtonPaper = styled(Button)`
  background-color: red;
`

export const ButtonScissors = styled(Button)`
  background-color: gray;
`