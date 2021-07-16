import Homepage from './components/homepage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/footer';
import Login from './components/Login';
import Learning from './components/learn';
import Home from './components/home';
import Transaction from './components/transaction';
import EditTransactions from './components/ediTransaction';

function App() {
  return (
    <>
     <Router>
       <Route path='/' exact component={Homepage}/>
       <Route path='/login' exact component={Login}/>
       <Route path='/learn' exact component={Learning}/>
       <Route path='/transaction' exact component={Transaction}/>
       <Route path='/home' exact component={Home}/>
       <Route path='/edit' exact component={EditTransactions}/>

     </Router>
    
    <Footer/>
    </>
  );
}

export default App;
