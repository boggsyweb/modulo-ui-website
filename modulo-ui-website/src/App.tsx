import Documentation from './Documentation';
import Home from './Home'



function App() {
  const currentPath = window.location.pathname;


  return (
    <>
      {currentPath === '/' ? <Home /> : null}
      {currentPath === '/documentation' ? <Documentation /> : null}
    </>
  )
}

export default App
