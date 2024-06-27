import { ReactNode } from "react"

interface propsWrapper{
    children: ReactNode
}


export default function Wrapper({children} : propsWrapper){
    return(
        <div className="w-[80%] mx-auto">{children}</div>
    )
}