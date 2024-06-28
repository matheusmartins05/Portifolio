import Blur from "../components/Blur";
import Button from "../components/Button";

import minhaFoto from "/foto.png";

export default function Home() {
  return (
      <main className="bg-background h-[calc(100vh-4rem)]">
        <Blur blur="sm:w-1 invisible sm:visible"></Blur>
        <div className="relative bg-transparent sm:h-96 flex flex-col sm:grid grid-cols-4 grid-rows-4 sm:justify-center items-center w-[80%] sm:max-w-[600px] mx-auto font-poppins text-2xl sm:text-4xl text-heading font-semibold pt-[50px]">

          <p className="sm:row-start-1 sm:col-start-1 sm:self-end sm:justify-self-start text-center ">MATHEUS</p>
          <p className="sm:row-start-2 sm:col-start-1 sm:self-start sm:justify-self-start text-center ">MARTINS</p>
          <figure className=" sm:col-start-2 sm:col-end-4 sm:row-start-2 	sm:row-end-3 relative z-10">
            <img className="w-[100%] h-72 sm:mt-10 mx-auto" src={minhaFoto} alt="" />
          </figure>
          <Blur blur="w-1 relative top-[150%] left-[50%] translate-x-[-50] translate-y-[-50]"></Blur>
          <p className="row-start-3 col-start-4 sm:self-end sm:justify-self-start pt-4">DEVELOPER</p>
          <p className="row-start-4 col-start-4 sm:self-start">WEB</p>


          <p className="sm:pt-28 text-center text-paraghaph text-sm font-light row-start-4 sm:col-start-1 sm:col-end-5 order-1 hidden sm:block">
            Desenvolvedor front end, com boas habilidades em marketing.
          </p>
        </div>

        <div className="flex justify-center mx-auto pt-10 md:py-20 gap-10 text-heading font-poppins">
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
