import styled from "styled-components";

export const ContainerMoves = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`

export const CardPlayerMove = styled.div` 
    margin: 30px;
`

export const MovesImg = styled.img`
    height: 200px;
`
export const MovesImgRotate = styled(MovesImg)`
  transform:  rotateY(180deg)
`
