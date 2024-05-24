import PropTypes from "prop-types"

function List({
    category = "Category",
    items = []
}){
    const categoryStyle = {
        fontSize: "2.5em",
        fontWeight: "bold",
        border: "2px solid",
        borderRadius: "5px",
        textAlign: "center",
        padding: "10px",
        marginBottom: "20px",
        backgroundColor: "hsl(0, 96%, 82%)"
    }

    const listStyle = {
        fontSize: "1.5em",
        listStyle: "none",
        color: "hsl(0%,0%,25%)",
        textAlign: "center",
        margin: "0"
    }
    
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); alfabetucznie
    //fruits.sort((a, b) => a.prize - b.prize); numerycznie

    const listItems = items.map( item => <li key = {item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.prize}</b></li>);
                                                    
    return(
        <>
            <h1 className="category" style={categoryStyle}>{category}</h1>
            <ol className="items-list" style={listStyle}>
                {listItems}
            </ol>
        </>
        
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        prize: PropTypes.number
    }))

}

export default List