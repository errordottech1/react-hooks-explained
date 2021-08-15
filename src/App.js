import React from 'react';
import UseReducer from "./hooks/UseReducer";
import UseEffect from "./hooks/UseEffectUseState";
import UseRef from "./hooks/UseRef";
import UseLayoutEffect from "./hooks/UseLayoutEffect"
import UseImperativeHandle from "./hooks/UseImperativeHandle/UseImperativeHandle"
import UseContext from './hooks/UseContext/UseContext'

function App() {
  return (
    <>
      <UseReducer />
      <UseEffect />
      <UseRef/>
      <UseLayoutEffect/>
      <UseImperativeHandle/>
      <UseContext/>
    </>
  );
}

export default App;
