import styled from "styled-components";

export const ContainerPlacar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  background-color: white;

  h2 {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 0;
    background-color: #ae9053;
    color: white;
    margin: 0;
    border: 1px solid black;
  }
`

export const ContainerCards = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
`

export const CardPlayer = styled.div`
  width: 49%;
  border: 1px solid black;

  h2 {
    width: auto;
    background-color: #f1c68b;
    color: white;
    padding: 10px;
    margin: 0;
  }

`
