import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import{
  DndContext,
  closestCenter
}from "@dnd-kit/core";
import{
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import{
  useState
} from'react';
import { SortableItem } from './SortableItem';

function App() {

  const [languages, setLanguages] = useState(["javascript", "python", "Typescript"]);
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}
    >
      <container className="p-3" style={{"width":"50%"}} align="center">
        <h3>The Best programming languages</h3>
        <SortableContext items={languages} strategy={verticalListSortingStrategy}>
          {languages.map(language => <SortableItem key={language} id= {language}/>)}

        </SortableContext>
      </container>
     </DndContext>
  );

  function handleDragEnd(event){
    console.log("Drag end called");
    const {active,over} = event;
    console.log("Active: " + active.id);
    console.log("Over: " + over.id);

    if(active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex= items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);


        arrayMove()
          //items: [2,3,1] 0 => 2
          //{1,2,3} startIndex: 0 newIndex : => [2,3,1]
        
      })
    }

  }
}

export default App;
