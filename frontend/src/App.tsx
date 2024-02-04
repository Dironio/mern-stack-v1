import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/auth.context';
import useAuth from './hooks/auth.hook';
import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage';

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuth = !!token;

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuth }}
    >
      {isAuth ? (
        <>
          <NavBar />
          <Routes>
            <Route path='/' element={'Main page'} />
          </Routes>
        </>

      ) : (
        <Routes>
          <Route path='/' element={<AuthPage />} />
        </Routes>
      )
      }
    </AuthContext.Provider>
  );
}

export default App;
