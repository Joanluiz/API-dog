import styled, {createGlobalStyle} from "styled-components";

export const globalStyle = createGlobalStyle`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Img = styled.img`
    width: 30%;
    margin-bottom: 30px;
`
export const Titulo = styled.h1`
    font-family: 'Lora', serif;
`

export const Botao = styled.button`
    font-family: 'Lora', serif;
    font-size: 18px;
    padding: 12px;
    border-radius: 20px;
    cursor: pointer;
`
