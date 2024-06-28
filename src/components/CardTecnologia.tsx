interface CardTecnologiaProps{
    imgTech: string
    nomeTech: string
}

export default function CardTecnologia({imgTech, nomeTech} : CardTecnologiaProps){
    return(
       <figure className="flex flex-col items-center p-6 rounded-md bg-[#2079fe1f] hover:bg-slate-600 transition-colors">
            <img className="w-20" src={imgTech} alt={nomeTech} />
            <figcaption className="text-heading text-sm font-poppins font-extralight pt-2">{nomeTech}</figcaption>
       </figure>
    )
}