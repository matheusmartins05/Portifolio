
import { useEffect, useState } from "react";
import CardProjeto from "../components/CardProjeto";
import Wrapper from "../components/Wrapper";
import { api } from "../api/api";
import Iprojetos from "../models/Iprojetos"

export default function Projetos() {
  const [projetos, setProjetos] = useState<Iprojetos[]>([])
  useEffect(() => {
    api.get('projetos').then((resposta) =>{
      setProjetos(resposta.data)      
    })
  },[])

  return (
    <>
    <Wrapper width="w-[80%] ">
      <h3 className="text-3xl text-heading text-center mt-8">Projetos</h3>
      <div className="flex justify-center flex-wrap gap-8 py-10">

      {projetos.map((projeto) => (
        <CardProjeto key={projeto._id} nome={projeto.nome} descricao={projeto.descricao} imagem={projeto.imagem} link={projeto.link}/>
      ))}
      </div>
    </Wrapper>
    </>
  );
}
