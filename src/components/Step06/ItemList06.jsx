import Item06 from "./Item06";

 
function ItemList06(props) {
    return (
        <section>
            <h1>조건부 렌더링</h1>
            <ul>
                <Item06 name="루피" isPacked={true} /> 
                <Item06 name="조로" isPacked={false} /> 
                <Item06 name="상디" isPacked={true} /> 
            </ul>
        </section>
    );
}

export default ItemList06;