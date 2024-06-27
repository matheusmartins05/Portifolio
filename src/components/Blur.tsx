interface propsBlur{
    blur: string
}
export default function Blur({blur} : propsBlur){
    return(
        <div id="teste" className={`${blur}`}>
        </div>
    )
}