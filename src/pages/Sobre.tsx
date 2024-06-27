
import Wrapper from "../components/Wrapper";
import minhaFoto from "/minhaFoto2.png"

export default function Sobre() {
  return (
      <section className="bg-background py-10 text-center h-screen">
        <Wrapper width="w-[60%]">
          <div className="flex justify-between items-center h-96">
            <figure>
              <img className="rounded-md max-w-72" src={minhaFoto} alt="" />
            </figure>

            <div className="text-paraghaph flex flex-col justify-end gap-10 text-left w-96 h-[100%]">
              <p className="leading-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut numquam quos cumque aliquam nisi, alias magnam, suscipit optio, fuga provident exercitationem itaque earum velit facilis quaerat maxime corporis commodi iste.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut numquam quos cumque aliquam nisi, alias magnam, suscipit optio, fuga provident exercitationem itaque earum velit facilis quaerat maxime corporis commodi iste.</p>
            </div>
          </div>
        </Wrapper>
      </section>

  );
}
