import typescript from "/typescript.svg";
import react from "/react.svg";
import tailwindcss from "/tailwindcss.svg";
import { Eye } from "@phosphor-icons/react";

interface cardProjetosProps{
  nome: string
  descricao: string
  imagem: string
  link: string
  techPrincipal: string
  tech2: string,
  tech3: string
}

export default function CardProjeto({nome, descricao, imagem, link,techPrincipal, tech2,tech3} : cardProjetosProps) {

  return (
    <div className="bg-[#121316] w-80 rounded-lg">
      <img
        className="w-[87%] h-40 mx-auto mt-8 rounded-t-lg"
        src={imagem}
        alt={nome}
      />
      <div className="flex flex-col w-[85%] mx-auto my-4">
        <div className="flex justify-between mt-2">
          <div className="flex gap-4">
            <img className="w-4" src={techPrincipal} alt="" />
            <img className="w-4" src={tech2} alt="" />
            <img className="w-4" src={tech3} alt="" />
          </div>

          <div>
          <a href={link} target="_blank">
            <Eye size={20} className="text-paraghaph cursor-pointer"/>
          </a>
          </div>
        </div>
        <h4 className="text-[#655048] mt-2">{nome}</h4>
        <p className="text-xs text-paraghaph mt-1">
        {descricao}
        </p>
        <img src="" alt="" />
      </div>
    
    </div>
  );
}
