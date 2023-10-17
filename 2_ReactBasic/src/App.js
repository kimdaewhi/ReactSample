import React from 'react';
import './App.css';
import WelcomeDialog from './components/9_Composition/WelcomeDialog'
import Dialog from './components/9_Composition/Dialog'
import ThankyouDialog from './components/9_Composition/ThankyouDialog'

function App() {
  return (
    <div className="App">
      <WelcomeDialog/>
      <Dialog/>
      <ThankyouDialog/>

      {/* 👉 강의 목차 순서대로 정리한 내용
      <Composition/>
      <Extraction/>
      <ClassComponent/>
      <FunctionalComponent/>
      <ClassComponent2/>
      <Event/>
      <Condition/>
      <ListAndKey/>

      <Controlled/>
      <br/>
      <Uncontrolled/>

      <HookExample1/>
      <HookExample2/>
      <HookExample3/>
      <HookExample4/>
      <HookExample5/>
      <HookExample6/>
      <CallbackExam1/>
      <CallbackExam2/>
      <CallbackExam3/>

      <UseReducerExam/>
      <Reducer/>
      <Reducer2/>

      <WelcomeDialog/>
      <Dialog/>
      <ThankyouDialog/>

      <Input/>{' '}
      <HOCExample/>
      <Memo/>

      <Example/>
      <Example2/>

      <RenderProps/>
        */}
    </div>
  );
}


export default App;
