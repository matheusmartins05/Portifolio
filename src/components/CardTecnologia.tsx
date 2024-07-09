interface CardTecnologiaProps{
    imgTech: string
    nomeTech: string
}

export default function CardTecnologia({imgTech, nomeTech} : CardTecnologiaProps){
    return(
       <figure className="w-[100%] sm:w-[40%] md:w-[20%] flex flex-col items-center p-6 rounded-md bg-[#121316] hover:bg-[#212329] transition-colors">
            <img className="w-20" src={imgTech} alt={nomeTech} />
            <figcaption className="text-heading text-sm font-poppins font-extralight pt-2">{nomeTech}</figcaption>
       </figure>
    )
}