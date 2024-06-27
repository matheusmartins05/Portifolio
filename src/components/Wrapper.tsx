import { ReactNode } from "react"

interface propsWrapper{
    children: ReactNode
    width: string
}


export default function Wrapper({children, width} : propsWrapper){
    return(
        <div className={`${width} mx-auto`}>{children}</div>
    )
}