import Article01 from "./Article01";

function ArticleList01(props) {
    return (
        <div>
            <div className="card">
                <div className="card__header">강의 목록</div>
                <div className="card__body">
                    <div className="courses">
                        <Article01 />
                        <Article01 />
                        <Article01 />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ArticleList01;