import React, { useState } from 'react';
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

  const insertGram = (gram) => {
    gram.concat(grams);
    console.log(gram);
  }

  const onChangeGramType = (type) => {
    setGramType(type);
  }

  const closeGram = (id) => {
    setGrams(grams.filter(gram => gram.id !== id));
  }
  
  return (
    <div>
      <GramNav onChangeGramType={onChangeGramType}/>
        <GramTemplate grams={grams} closeGram={closeGram} gramType={gramType} insertGram={insertGram}/>
      <GramNavBottom />
    </div>
  )
}

export default App;
