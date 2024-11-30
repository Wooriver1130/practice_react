

const people = 
[
 {
    id: 1, 
    name: "kim", 
    age: "10"
 },        
 {
    id: 1, 
    name: "Lee", 
    age: "20"
 },        
 {
    id: 1, 
    name: "Park", 
    age: "30"
 }
]   
function People3(props) {
    const  ageIsTen = people.filter(item => {
        return item.age == "10"; // age가 10인 객체들을 추려서 새로운 배열 생성
    });
    const newArray = ageIsTen.map(item => {
        return <li key={item.id}>나이가 10살인 사람: {item.name}</li>
    });
    return (
        <div>
            {newArray}
        </div>
    );
}

export default People3;