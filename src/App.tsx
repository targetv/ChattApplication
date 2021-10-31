
import './App.css'
import MessagesComponent from './components/MessagesComponent'
import styled from 'styled-components'


const MainContainer = styled.main`

display: grid;
place-items: center;



`


function App() {
 

  return (
    <div className="App">
        <MainContainer>
          <MessagesComponent/>
          </MainContainer>
    </div>
  )
}

export default App
