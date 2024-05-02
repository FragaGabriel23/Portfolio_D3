import './index.scss'
import { useEffect, useState } from "react";

interface TextTypingProps {
    Text: string[];
}

const TextTyping = ({ Text }: TextTypingProps) => {
    const [text, setText] = useState("");
    const [textLoop, setTextLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deltaTime, setDeltaTime] = useState(100);
    const period: number = 50;

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, deltaTime);

        return () => { clearInterval(ticker) }
    });

    const toType = () => {
        let i = textLoop % Text.length;
        let fullText = Text[i];

        let updatedText = isDeleting ? (
            fullText.substring(0, text.length - 1)
        ) : (
            fullText.substring(0, text.length + 1)
        );

        if (!isDeleting && updatedText === fullText) {
            setTimeout(() => {
                setIsDeleting(true);
                setDeltaTime(period);
            }, i === 0 ? 1000 : 500); 
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setDeltaTime(100);
            setTextLoop(textLoop + 1);
        }

        setText(updatedText);
    };

    return (
        <>
            {text}
            <span className={isDeleting ? "" : "textTyping__cursor--blink"} >|</span>
        </>
    )
}

export default TextTyping