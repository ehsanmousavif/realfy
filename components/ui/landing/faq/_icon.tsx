interface Props {
    width: string
    height: string
}

export const PayPal = ({ height, width }: Props) => {
    return (// 
        <svg width={width} height={height} viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18 6H38C49 6 55 12 53 22C51 33 42 38 31 38H22L18 54H6L18 6Z"
                fill="#003087"
            />

            <path
                d="M26 10H44C54 10 59 15 57 24C55 33 47 38 36 38H28L24 52H14L26 10Z"
                fill="#009CDE"
            />

            <text
                x="78"
                y="44"
                font-family="Arial, Helvetica, sans-serif"
                font-size="40"
                font-weight="700"
                fill="#253B80"
            >
                Pay
            </text>

            <text
                x="150"
                y="44"
                font-family="Arial, Helvetica, sans-serif"
                font-size="40"
                font-weight="700"
                fill="#009CDE"
            >
                Pal
            </text>
        </svg>)
}
export const TickIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 16 16"><path fill="#99E1CE" fillRule="evenodd" d="M13.7 4.19c.31.274.339.748.065 1.06l-5.75 6.5a.75.75 0 0 1-1.074.051l-3.75-3.5a.75.75 0 0 1 1.023-1.097l3.19 2.97l5.24-5.92a.75.75 0 0 1 1.06-.064z" clipRule="evenodd" strokeWidth={1} stroke="#99E1CE"></path></svg>
}
export const NoEntryIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 20 20"><g fill="#E59C9C" fillRule="evenodd" clipRule="evenodd" strokeWidth={0.4} stroke="#E59C9C"><path d="M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0"></path><path d="M15.657 4.343a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414-1.414l9.9-9.9a1 1 0 0 1 1.414 0"></path></g></svg>
}
