import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import NoPage from './NoPage';
import Registration from './Registration';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Login page */}
       

        {/* Routes wrapped with Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/registration" element={<Registration />}/>

          {/* Add more routes here if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
