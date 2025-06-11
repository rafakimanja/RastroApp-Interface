import type { ReactNode } from "react"
import './Card.css'

type CardProps = {
    children: ReactNode
    id: string
}

export default function Card({ children, id }: CardProps){

    return (
        <div className="bg-card" id={id} >
            {children}
        </div>
    )
}