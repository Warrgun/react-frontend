import Card from "./Card"
import List from "./ListFruits.jsx"
import profilePic from "./assets/profile.jpg"
import SlidingCards from "./button/SlidingCards.jsx";
import Form from "./Form.jsx"
import ColorPicker from "./ColorPicker.jsx";
import CarList from "./CarList.jsx";

function App() {

    const fruits = [
    {id: 1, name: "Jabłuko", prize: 2.99},
    {id: 2, name: "Gruszka", prize: 3.99},
    {id: 3, name: "Pomarańcza", prize: 2.05},
    {id: 4, name: "Pomidor", prize: 1.50}
    ];

    const cards = [
      {id:1, comp: <Card picture = {profilePic} name="Fabio" age ={20} isSingle = {true}/>},
      {id:2, comp: <Card/>},
      {id:3, comp: fruits.length > 0 && <List items={fruits} category="Fruits"/>},
      {id:4, comp: <Form/>},
      {id:5, comp: <ColorPicker/>},
      {id:6, comp: <CarList/>}
    ]
  
    
    return(
      <>
        {cards.length>0 &&<SlidingCards items={cards}/>}
      </>
    );
}

export default App
