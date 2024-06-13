import reactLogo from './assets/react.svg'
import './App.css'
import Star from '../src/assets/star.svg?react';
import Star2 from '../src/assets/star2.svg?react';
import Logo from '../src/assets/control-logo.svg?react';
import Logo2 from '../src/assets/control-logo2.svg?react';

function App() {
  return (
    <div>
      <div>
        <p>Иконка 1:</p>
        <img src={reactLogo} className="logo react" alt="React logo"/>
      </div>
      <div>
        <p>Иконка 2:</p>
        <Star />
      </div>
      <div>
        <p>Иконка 3:</p>
        <div style={{width: '42px', height: '42px'}}>
          <Star2 />
        </div>
      </div>
      <div>
        <p>Иконка 4:</p>
        <Logo />
      </div>
      <div>
        <p>Иконка 5:</p>
        <div style={{ width: '210px', height: '21px' }}>
          <Logo2/>
        </div>
      </div>
    </div>
  )
}

export default App
