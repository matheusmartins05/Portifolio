import { ReactNode } from "react"

interface propsButton{
    children: ReactNode
    style: string
}

export default function Button({children, style} : propsButton){
    return(
        <button className={style}>{children}</button>
    )
}