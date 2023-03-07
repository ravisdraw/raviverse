import React, { useState } from 'react'
import './AnimatedText.css'

function AnimatedText(props) {

    const [typedText, setTypedText] = useState('');
    const data = Object.values(props)
    const text = data[0].name;
    const colorCode = data[0].color;

    React.useEffect(() => {
        let typed = typedText;
        let typing = setInterval(() => {
            if (typed.length === text.length) {
                clearInterval(typing);
                return;
            }
            setTypedText(typed += text[typed.length]);
        }, 70);
        return () => clearInterval(typing);
    }, [typedText, text]);

    return (
        <p style={{ color: colorCode }}>{typedText}</p>
    );
}

export default AnimatedText