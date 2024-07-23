import logo from './logo.svg';
import './App.css';
import MyCards from './components/MyCards';


function App() {

  return (
    <div className="App">
          <h1> Welcome to IDCards App! </h1>   

          {/* <div className='d-flex'> 
          <IDCard iname="Jane" idesc="Likes coding. likes travelling"/>   
          <IDCard iname="John" idesc="Likes analyzing. likes swimming"/>   
          <IDCard iname="Mike" idesc="Likes cooking. likes hiking"/>        
          </div> 
           */}

       <MyCards/>





    </div>
  );
}

export default App;
