import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

type NavLinkProps = {
    children: React.ReactNode,
    to: string,
    className: string,
    activeClassName: string,
    inactiveClassName: string,
}

export function NavLink({
    children,
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
} : NavLinkProps) {
    const location = useLocation();
    const [isActive, setIsActive] = useState(() => location.pathname === to);
    useEffect(() => {
        setIsActive(location.pathname === to)
    }, [location.pathname, to])

    return  <Link className={className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`)} to={to} {...rest} >{children}</Link>
}