import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../App';

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  return (
    <div>
      <input value={text} onInput={(e) => setText(e.target.value)} />
      <br />
      Echo: {text}
    </div>
  );
};

export default TextInput;
