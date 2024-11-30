import Comment from "./Comment";

const commentData = [
    {
        id: 1, 
        name: "사람1", 
        comment: "댓글1"
    }, 
    {
        id: 2, 
        name: "사람2", 
        comment: "댓글2"
    }, 
    {
        id: 3, 
        name: "사람3", 
        comment: "댓글3"
    }, 
    {
        id: 4, 
        name: "사람4", 
        comment: "댓글4"
    }
];

function CommentList() {
    return (
        <>
            {commentData.map(item => {
                return <Comment key={item.id} name={item.name} comment={item.comment} />;
            })}
        </>
    );
}

export default CommentList;