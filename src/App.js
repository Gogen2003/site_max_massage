import Aside from './Aside';
import Content from './Content'
import  './Design/app.css'
import './Design/aside.css'
function App() {
  
  return (
    
    <>
      <div className="container">
        <div  className="box" >
          <Aside />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;

