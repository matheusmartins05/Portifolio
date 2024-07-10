import exemploProjeto from "/exemploProjeto.png";
import typescript from "/typescript.svg";
import react from "/react.svg";
import tailwindcss from "/tailwindcss.svg";

export default function CardProjeto() {
  return (
    <div className="bg-[#121316] h-[350px] w-80 rounded-lg">
      <img
        className="w-[90%] mx-auto mt-4 rounded-t-lg h-[50%]"
        src={exemploProjeto}
        alt=""
      />
      <div className="flex flex-col w-[85%] mx-auto my-4">
        <div className="flex gap-4 mt-2">
          <img className="w-4" src={typescript} alt="" />
          <img className="w-4" src={react} alt="" />
          <img className="w-4" src={tailwindcss} alt="" />
        </div>
        <h4 className="text-[#655048] mt-2">Nome do Projeto</h4>
        <p className="text-xs text-paraghaph mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          ipsam nobis quibusdam nisi dicta numquam quia illum.
        </p>
      </div>
    </div>
  );
}
