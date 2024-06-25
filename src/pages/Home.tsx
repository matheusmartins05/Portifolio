import { Link } from "react-router-dom";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import minhaFoto from "/minhaFoto.jpg"

export default function Home() {

  return (
    <Wrapper>
      <main className="bg-[#160F29] h-96">
          <div className="flex flex-col justify-center items-center w-[80%] mx-auto py-10">
            <h1 className="text-white text-xl text-center">
              Olá 👋🏼, sou Matheus, desenvolvedor front end.
            </h1>

            <figure >
                <img className="rounded-full h-28 w-28 my-5 mx-auto" src={minhaFoto} alt="" />
                <figcaption className="text-white text-center">
                    <h4>Matheus Martins</h4>
                    <p>27 anos</p>
                </figcaption>
                <Button style="text-white border p-2 rounded-md my-2"><Link to={"/sobremim"}>Conhecer Melhor</Link></Button>
            </figure>
          </div>
      </main>
    </Wrapper>
  );
}
