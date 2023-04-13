
type Props = {
    title?: string
    subTitle?: string
    imageOn?: boolean
}

export default function Hero({title, subTitle, imageOn = false}: Props){
    return(
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            { imageOn && <figure>[画像]</figure> }
        </div>
    )
}