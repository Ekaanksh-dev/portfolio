import { useState, useEffect } from "react";

export default function useTypingEffect(
  words,
  typeSpeed   = 65,
  deleteSpeed = 35,
  pause       = 2000
) {
  const [state, setState] = useState({
    text:     "",
    wordIdx:  0,
    charIdx:  0,
    deleting: false,
  });

  useEffect(() => {
    const { wordIdx, charIdx, deleting } = state;
    const word = words[wordIdx];
    let id;

    if (!deleting && charIdx < word.length) {
      id = setTimeout(
        () => setState(s => ({ ...s, text: word.slice(0, s.charIdx + 1), charIdx: s.charIdx + 1 })),
        typeSpeed
      );
    } else if (!deleting && charIdx === word.length) {
      id = setTimeout(() => setState(s => ({ ...s, deleting: true })), pause);
    } else if (deleting && charIdx > 0) {
      id = setTimeout(
        () => setState(s => ({ ...s, text: word.slice(0, s.charIdx - 1), charIdx: s.charIdx - 1 })),
        deleteSpeed
      );
    } else if (deleting && charIdx === 0) {
      setState(s => ({ ...s, deleting: false, wordIdx: (s.wordIdx + 1) % words.length }));
    }

    return () => clearTimeout(id);
  }, [state]);

  return state.text;
}
