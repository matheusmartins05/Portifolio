
import Blur from "../components/Blur";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import minhaFoto from "/minhaFoto2.png"

export default function Sobre() {
  return (
      <section className="bg-background py-20 md:py-10 h-screen">
        <Wrapper width="md:w-[60%] w-[90%] mx-auto">
          <div className="flex justify-between items-center h-96 text-center">
            <figure>
              <Blur blur="absolute top-[50%] left-[50%] w-px"></Blur>
              {/* <img className="rounded-md max-w-72 " src={minhaFoto} alt="" /> */}
            </figure>

            <div className="text-heading flex flex-col justify-end gap-4 sm:text-left text-center w-96 h-[100%] relative">
              <h2 className="text-4xl">Muito prazer, sou Matheus Santos Martins</h2>
              <div className="h-px w-[100%] bg-paraghaph my-4"></div>
              <p className="leading-7 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut numquam quos cumque aliquam nisi, alias magnam, suscipit optio, fuga provident exercitationem itaque earum velit facilis quaerat maxime corporis commodi iste.</p>
          
              <div className="flex justify-center md:justify-start gap-4">
                <Button style="bg-primary text-heading w-32 p-2 rounded-lg"> Tecnologias </Button>
                <Button style="bg-primary text-heading w-32 p-2 rounded-lg">  Projetos  </Button>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

  );
}
