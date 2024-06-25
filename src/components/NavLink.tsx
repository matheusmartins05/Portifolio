import { ReactNode } from "react"

interface propsNavLink{
    children: ReactNode
}

export default function NavLink({children} : propsNavLink){
    return(
        <li>{children}</li>
    )
}