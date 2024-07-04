
import Blur from "../components/Blur";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import minhaFoto from "/minhaFoto2.png"

export default function Sobre() {
  return (
      <section className="bg-background py-10 text-center h-screen">
        <Wrapper width="w-[60%]">
          <div className="flex justify-between items-center h-96">
            <figure>
              <Blur blur="absolute top-[50%] left-[50%] w-px"></Blur>
              {/* <img className="rounded-md max-w-72 " src={minhaFoto} alt="" /> */}
            </figure>

            <div className="text-heading flex flex-col justify-end gap-4 text-left w-96 h-[100%] relative">
              <h2 className="text-4xl">Muito prazer, sou Matheus Santos Martins</h2>
              <div className="h-px w-[100%] bg-paraghaph my-4"></div>
              <p className="leading-7 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut numquam quos cumque aliquam nisi, alias magnam, suscipit optio, fuga provident exercitationem itaque earum velit facilis quaerat maxime corporis commodi iste.</p>
          
              <Button style="bg-primary text-heading w-32 p-2 rounded-lg"> Ver projetos  </Button>
            </div>
          </div>
        </Wrapper>
      </section>

  );
}
