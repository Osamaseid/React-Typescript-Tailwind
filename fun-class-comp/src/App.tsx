import ChildComponent from './Components/Child-comp'
import ClassComponent from './Components/Classs-comp'
import FunctionalComponent from './Components/Functional-comp'
import ParentComponent from './Components/Parent-com'

function App() {
  
  return (
    
    <div>
    <h1>hello world</h1>
    <FunctionalComponent/>
    <ClassComponent/>
    <ParentComponent/>
    <ChildComponent />
    </div>
   
  )
}

export default App
