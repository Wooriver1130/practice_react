import Book from "./Book";

function Library() {
    return (
        <>
            <Book name="책이름1" totalPage="100" /><br />
            <Book name="책이름2" totalPage="200" /><br />
            <Book name="책이름3" totalPage="300" /><br />
        </>
    );
}

export default Library;