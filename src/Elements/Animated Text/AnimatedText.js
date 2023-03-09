import React, { useState } from 'react'
import './AnimatedText.css'

function AnimatedText(props) {

    const [typedText, setTypedText] = useState('');

    const data = Object.values(props)[0];
    const key = data[0];
    const text = data[1].text;
    let isCommentLine = false;
    let isTitle = false;
    let isImportant = false;

    if (key === 'comment') {
        isCommentLine = true;
    }

    if (key === 'title') {
        isTitle = true;
    }

    if (key.includes('important')) {
        isImportant = true;
    }

    const styling = {
        color: isCommentLine ? '#8B949E' : (isTitle ? '#FF7B72' : (isImportant ? '#79C0FF' : 'white')),
        fontStyle: isCommentLine ? 'italic' : 'normal',
        cursor: (!isCommentLine && !isTitle) ? 'pointer' : '',
    }


    React.useEffect(() => {
        let typed = typedText;
        let typing = setInterval(() => {
            if (typed.length === text.length) {
                clearInterval(typing);
                return;
            }
            setTypedText(typed += text[typed.length]);
        }, 30);
        return () => clearInterval(typing);
    }, [typedText, text]);

    return (
        <p style={styling} >{typedText}</p>
    );
}

export default AnimatedText