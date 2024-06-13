import reactLogo from './assets/react.svg'
import './App.css'
import Star from '../src/assets/s1.svg?react';
import Star3 from '../src/assets/s3.svg?react';
import Star11 from '../src/assets/s11.svg?react';
import Star111 from '../src/assets/s111.svg?react';

function App() {
  return (
    <div>
      <div>
        <p>Иконка 1:</p>
        <img src={reactLogo} className="logo react" alt="React logo"/>
      </div>
      <div>
        <p>Иконка 2:</p>
        <div style={{ width: '42px', height: '42px' }}>
          <Star className="star"/>
        </div>
      </div>
      <div>
        <p>Иконка 3:</p>
        <div style={{ width: '42px', height: '42px' }}>
          <Star11 className="star"/>
        </div>
      </div>
      <div>
        <p>Иконка 4:</p>
        <div style={{ width: '42px', height: '42px' }}>
          <Star3 className="star"/>
        </div>
      </div>
      <div>
        <p>Иконка 5:</p>
        <div style={{ width: '42px', height: '42px' }}>
          <Star111 className="star"/>
        </div>
      </div>
    </div>
  )
}

export default App
