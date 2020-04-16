import React from 'react';
import { IStateFromProps } from "./index";
import { Wrapper } from './styles';

const Home = (props: IStateFromProps) => {
  console.log('PAGE PROPS', props);
  return (
    <Wrapper>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Wrapper >
  );
};

export default Home;