

function List(){
    const fruits = [
        {id: 1, name: "Jabłuko", prize: 2.99},
        {id: 2, name: "Gruszka", prize: 3.99},
        {id: 3, name: "Pomarańcza", prize: 2.05},
        {id: 4, name: "Pomidor", prize: 1.50}
    ];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); alfabetucznie
    //fruits.sort((a, b) => a.prize - b.prize); numerycznie

    const listItems = fruits.map( fruit => <li key = {fruit.id}>
                                                    {fruit.name}: &nbsp;
                                                    <b>{fruit.prize}</b></li>);
                                                    
    return(
        <ol>
            {listItems}
        </ol>
    );
}

export default List