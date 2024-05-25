import Card from "./Card"
import List from "./ListFruits.jsx"
import profilePic from "./assets/profile.jpg"
import SlidingCards from "./SlidingCards.jsx";


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
      {id:3, comp: <Card/>},
      {id:4, comp: <Card/>}
    ]
  
    
    return(
      <>
        <SlidingCards items={cards}/>
        {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      </>
    );
}

export default App
