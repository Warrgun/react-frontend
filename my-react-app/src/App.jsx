import Card from "./Card"
import List from "./ListFruits.jsx"
import profilePic from "./assets/profile.jpg"


function App() {
    return(
      <>
        <Card picture = {profilePic} name="Fabio" age ={20} isSingle = {true}/>
        <Card/>
        <Card/>
        <Card/>
        <List />
      </>
    );
}

export default App
