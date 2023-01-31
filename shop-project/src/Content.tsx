type Props = {
    text1: string
    text2: string
    year: number
}

export const Content = (props: Props) => {
    return (
        <>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div>Year: {props.year}</div>
        </>
    )
}