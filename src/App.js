import './App.css';
import { Routes, Route } from 'react-router-dom'
import { SignIn, Post } from './pages'
import { AuthContextProvider } from './context/AuthContext';
import NavBar from './Components/NavBar';

function App() {
  return (

    <AuthContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Post />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </AuthContextProvider>

  );
}

export default App;
