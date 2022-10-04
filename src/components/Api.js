import React, {useState} from "react";
import * as S from "../styles/style.js"
import axios from "axios";

export default function Api() {
    const [data, setData] = useState(null)

    const API = "https://dog.ceo/api/breeds/image/random";

    const DogsApi = () => {
        axios.get(API).then((resposta) => {
            setData(resposta.data.message);
        }).catch((error) => {
        console.log("Error", error);
        });
      };

    return(
        <S.Div>
            <S.Titulo>Doguinhos</S.Titulo>
            <S.Img src={data} alt="dog" />
            <S.Botao onClick={() => {DogsApi()}}>Encontre o seu doguinho</S.Botao>
        </S.Div>
    )
};