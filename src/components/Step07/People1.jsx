
const people = 
[
    " Kim: teacher  ", 
    " Lee: programmer  ", 
    " Park: chef  ", 
];
function People1(props) {
    const people1 = people.map(item => {
        return <li key={item}>{item} </li>
    });
    return (
        <ul>
            {people1}
        </ul>
    );
}

export default People1;