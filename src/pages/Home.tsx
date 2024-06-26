import Blur from "../components/Blur";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import minhaFoto from "/foto.png";

export default function Home() {
  return (
    <Wrapper>
      <main className="bg-background  h-screen">
        <Blur></Blur>
        <div className="relative bg-transparent h-[60%] grid grid-cols-4 grid-rows-4 justify-center items-center w-[80%] mx-auto font-poppins text-xl text-heading font-semibold ">

          <p className="row-start-2 self-start">MATHEUS</p>
          <figure className="col-start-2 col-end-4 row-start-2	row-end-3">
            <img className=" h-56 w-40 my-5 mx-auto" src={minhaFoto} alt="" />
          </figure>
          <p className="row-start-3 col-start-4 self-start">MARTINS</p>

          <p className="pt-20 text-center text-paraghaph text-sm font-light row-start-4 col-start-1 col-end-5">
            Desenvolvedor front end, com boas habilidades em marketing.
          </p>
        </div>

        <div className="flex justify-center mx-auto py-16  gap-4 text-heading font-poppins">
          <Button style="p-2 text-sm rounded-full bg-primary">
            Conhecer melhor
          </Button>
          <Button style="p-2 text-sm border rounded-full border-primary">
            Ver projetos
          </Button>
        </div>
      </main>
    </Wrapper>
  );
}
