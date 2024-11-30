
const people = 
[
 {
    id: 1, 
    name: "kim", 
    age: "10"
 },        
 {
    id: 2, 
    name: "Lee", 
    age: "20"
 },        
 {
    id: 3, 
    name: "Park", 
    age: "30"
 }       
];
function People2() {
    const people2 = people.map(item => {
        return <li key={item.id}>이름: {item.name} 나이: {item.age}</li>
    });
    return (
        <div>
            {people2}
        </div>
    );
}

export default People2;