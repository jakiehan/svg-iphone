import './App.css'

function App() {
  return (
    <div>
      <div>
        <p>Ссылка deep:</p>
        <a href={'vk://vk.com/'} target="_self" rel="noopener noreferrer">Клик</a>
      </div>
      <div>
        <p>Ссылка deep сразу в сообщения:</p>
        <a href={'vk://vk.com/im'} target="_self" rel="noopener noreferrer">Клик в сообщения</a>
      </div>
      <div>
        <p>Ссылка deep 2:</p>
        <a href={'vk://vk.com/asasas'} target="_self" rel="noopener noreferrer">Клик в сообщения</a>
      </div>
      <div>
        <p>ссылка http:</p>
        <a href={'https://vk.com/'} target="_self" rel="noopener noreferrer">Клик 2</a>
      </div>
      <div>
        <p>ссылка http в сообщения:</p>
        <a href={'https://vk.com/im'} target="_self" rel="noopener noreferrer">Клик 2 в сообщения</a>
      </div>
    </div>
  )
}

export default App
