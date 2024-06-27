import Blur from "../components/Blur";
import Button from "../components/Button";

import minhaFoto from "/foto.png";

export default function Home() {
  return (
      <main className="bg-background h-[calc(100vh-4rem)]">
        <Blur blur="md:w-20 invisible md:visible"></Blur>
        <div className="relative bg-transparent py-10 h-96  grid grid-cols-4 grid-rows-4 justify-center items-center w-[80%] max-w-[500px] mx-auto font-poppins text-xl md:text-4xl text-heading font-semibold ">

          <p className="row-start-1 col-start-1 self-end justify-self-start ">MATHEUS</p>
          <p className="row-start-2 col-start-1 self-start justify-self-start ">MARTINS</p>
          <figure className="col-start-2 col-end-4 row-start-2	row-end-3 relative z-10">
            <img className=" h-72 mt-10 mx-auto" src={minhaFoto} alt="" />
          </figure>
          <Blur blur="w-14 relative top-[150%] left-[50%] translate-x-[-50] translate-y-[-50]"></Blur>
          <p className="row-start-3 col-start-4 self-end justify-self-start">DEVELOPER</p>
          <p className="row-start-4 col-start-4 self-start">WEB</p>


          <p className="pt-28 text-center text-paraghaph text-sm font-light row-start-4 col-start-1 col-end-5">
            Desenvolvedor front end, com boas habilidades em marketing.
          </p>
        </div>

        <div className="flex justify-center mx-auto py-10 gap-4 text-heading font-poppins">
          <Button style="p-2 text-sm rounded-full bg-primary">
            Conhecer melhor
          </Button>
          <Button style="p-2 text-sm border rounded-full border-primary">
            Ver projetos
          </Button>
        </div>
        <Blur blur="w-24 relative top-[0] left-[100%] translate-x-[-50] translate-y-[-50] invisible md:visible"></Blur>
      </main>
  );
}
