import Card from "./Card"
import List from "./ListFruits.jsx"
import profilePic from "./assets/profile.jpg"


function App() {

    const fruits = [
    {id: 1, name: "Jabłuko", prize: 2.99},
    {id: 2, name: "Gruszka", prize: 3.99},
    {id: 3, name: "Pomarańcza", prize: 2.05},
    {id: 4, name: "Pomidor", prize: 1.50}
    ];
  
    
    return(
      <>
        <Card picture = {profilePic} name="Fabio" age ={20} isSingle = {true}/>
        <Card/>
        <Card/>
        <Card/>
        {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      </>
    );
}

export default App
