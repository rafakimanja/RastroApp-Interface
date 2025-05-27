import type { ReactNode } from "react"
import './Card.css'

type CardProps = {
    children: ReactNode
    largura?: number
    altura?: number
}

export default function Card({ children, largura, altura }: CardProps){

    const toSize = (value?: number) => value ? `${value * 10}rem` : 'auto'

    return (
        <div className="bg-card" style={{width: toSize(largura), height: toSize(altura)}}>
            {children}
        </div>
    )
}