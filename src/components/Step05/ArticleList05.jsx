import Article05 from "./Article05";

const items = [
    {
      id: "1" , 
      subject: "제목1", 
      content: "내용1", 
      isFavorite: true, 
      imgSrc: "./img/hope.png"
    }, 
    {
      id: "2" , 
      subject: "제목2", 
      content: "내용2", 
      isFavorite: false, 
      imgSrc: "./img/star.png"
    }, 
    {
      id: "3" , 
      subject: "제목3", 
      content: "내용3", 
      isFavorite: true, 
      imgSrc: "./img/wind.png"
    }
  ]

function ArticleList05() {
    const [item1, item2, item3] = items;
    return (
        <>
             <div>
            <div className="card">
                <div className="card__header">강의 목록</div>
                <div className="card__body">
                    <div className="courses">
                        <Article05 { ... item1} />
                        <Article05 { ... item2} />
                        <Article05 { ... item3} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ArticleList05;