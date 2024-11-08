import { atom, selector } from 'recoil';
import CharacterCount from './components/CharacterCount';
import TextInput from './components/TextInput';

export const textState = atom({
  key: 'textState', // 유니크한 값
  default: '', // 초기값
});

// atom이 바뀌어야 selector가 실행됨
export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState); // atom의 값이 바뀔때마다 해당 값이 여기로 들어옴

    return text.length;
  },
});

function App() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default App;
