interface propsNavLink{
    children: string
}

export default function NavLink({children} : propsNavLink){
    return(
        <li>{children}</li>
    )
}