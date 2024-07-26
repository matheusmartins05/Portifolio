
import CardProjeto from "../components/CardProjeto";
import Wrapper from "../components/Wrapper";
import doctorCare from "/doctorCare.png";
import FilmesPopulares from "/FilmesPopulares.png";
import listaCompras from "/listaCompras.png";
import tyescript from "/typescript.svg"
import tailwind from "/tailwindcss.svg"
import react from "/react.svg"
import javascript from "/javascript.svg"
import html from "/html.svg"
import css from "/css3.svg"

const projetos = {
  FILMES: {
    nome: "Filmes Populares",
    descricao: "Projeto desenvolvido em React com Typescript para prática de consumo de API. O site exibe filmes que estão em alta, e dá opção favoritar seu filme preferido, exibindo somente os filmes favoritos quando solicitado, além de contar com um campo de pesquisa para buscar filmes especificos",
    link: "https://filmes-app-ten.vercel.app/",
    imagem: {
      src: FilmesPopulares,
    },
    techs: {
      principal: tyescript,
      segunda: react,
      terceira: tailwind
    }

  },
  DOCTOR: {
    nome: "Doctor Care",
    descricao: "Projeto de site desenvolvido na Next Level Week Return da Rocketseat. Conceitos como: mobile first, acessebildade e consumo de bibliotecas de terceiros.",
    link: "https://matheusmartins05.github.io/Doctor-Care/",
    imagem: {
      src: doctorCare,
    },
    techs: {
      principal: javascript,
      segunda: html,
      terceira: css
    }
  },
  COMPRAS: {
    nome: "Lista de compras",
    descricao: "Projeto pessoal de uma lista de compras. O app conta com opções de adicionar e remover itens, além da opção de marcar como comprado",
    link: "https://lista-de-compras-app-one.vercel.app/",
    imagem: {
      src: listaCompras,
    },
    techs: {
      principal: tyescript,
      segunda: react,
      terceira: tailwind
    }
  },
}


export default function Projetos() {



  return (
    <>
    <Wrapper width="w-[80%] ">
      <h3 className="text-3xl text-heading text-center mt-8">Projetos</h3>
      <div className="flex justify-center flex-wrap gap-8 py-10">

      {Object.entries(projetos).map(([key, value]) => {
        return (
          <CardProjeto key={key} nome={value.nome} descricao={value.descricao} imagem={value.imagem.src} link={value.link} techPrincipal={value.techs.principal} tech2={value.techs.segunda} tech3={value.techs.terceira}/>
        )
      })}
      </div>
    </Wrapper>
    </>
  );
}
