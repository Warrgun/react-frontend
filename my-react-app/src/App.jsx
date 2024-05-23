import Card from "./Card"
import profilePic from "./assets/profile.jpg"

function App() {
    return(
      <>
        <Card picture = {profilePic} name="Fabio" age ={20} isSingle = {true}/>
        <Card/>
        <Card/>
        <Card/>
      </>
    );
}

export default App
