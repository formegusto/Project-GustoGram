import React, { useState, useRef, useCallback } from 'react';
import GramNav from './components/GramNav';
import GramTemplate from './components/GramTemplate';
import GramNavBottom from './components/GramNavBottom';
import testimg from './img/testimg.jpg';

const App = () => {
  const [grams, setGrams] = useState([
    {
      id:1,
      img:testimg,
      text:"오늘은 삭제 API를 했다."
    },
    {
      id:2,
      img:testimg,
      text:"오늘은 국밥을 먹었다."
    },
    {
      id:3,
      img:testimg,
      text:"반응을 보아하니 내일도 먹을 거 같다."
    },
    {
      id:4,
      img:testimg,
      text:"집가서 뭐할지 생각 중이다."
    }
  ]);
  const [gramType, setGramType] = useState('list');
  const [spin, setSpin] = useState(false);
  const nextId = useRef(5);

  const insertGram = useCallback((gram) => {
    gram = {
      ...gram,
      id:nextId.current
    }
    setGrams(grams.concat(gram));
    nextId.current += 1;
  },[grams]);

  const onChangeGramType = (type) => {
    setGramType(type);
  }

  const closeGram = (id) => {
    setGrams(grams.filter(gram => gram.id !== id));
  }
  
  const onSpin = () => {
    spin ? setSpin(false) : setSpin(true);
    console.log('스핀을 시작합니다.');
  }

  return (
    <div>
      <GramNav onChangeGramType={onChangeGramType} onSpin={onSpin}/>
      <GramTemplate grams={grams} closeGram={closeGram} gramType={gramType} insertGram={insertGram} spin={spin} />
      <GramNavBottom />
    </div>
  )
}

export default App;
