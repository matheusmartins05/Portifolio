import { ReactNode } from "react"

interface propsWrapper{
    children: ReactNode
}


export default function Wrapper({children} : propsWrapper){
    return(
        <div className="max-w-[100%]">{children}</div>
    )
}