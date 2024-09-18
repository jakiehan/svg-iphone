import './App.css'

function App() {
  return (
    <div>
      <div>
        <p>Ссылка deep:</p>
        <a href={'vk://vk.com'} target="_self" rel="noopener noreferrer">Клик</a>
      </div>
      <div>
        <p>ссылка http:</p>
        <a href={'https://vk.com/'} target="_self" rel="noopener noreferrer">Клик 2</a>
      </div>
    </div>
  )
}

export default App
