import './App.css'

function App() {

  const handleClick = () => {
    const a = document.createElement('a');
    a.href = 'https://vk.com/im';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const handleClick2 = () => {
    const a = document.createElement('a');
    a.href = 'vk://vk.com/im';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div>
      <div>
        <p>новый клик</p>
        <button onClick={handleClick}>Новый клик</button>
      </div>
      <div>
        <p>новый клик2</p>
        <button onClick={handleClick2}>Новый клик 2</button>
      </div>
    </div>
  )
}

export default App
