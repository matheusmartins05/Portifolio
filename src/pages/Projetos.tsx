import CardProjeto from "../components/CardProjeto";
import Wrapper from "../components/Wrapper";

export default function Projetos() {
  return (
    <>
    <Wrapper width="w-[80%] ">
      <h3 className="text-3xl text-heading text-center mt-8">Projetos</h3>
      <div className="flex gap-4 py-8">

          <CardProjeto/>
          <CardProjeto/>
          <CardProjeto/>
          <CardProjeto/>
      </div>
    </Wrapper>
    </>
  );
}
