
function ToggleHeartIcon({isFavorite}) {
        return (
            <button className="btn">
                <img  className="btn_img" src={isFavorite ? "./img/heart-fill-icon.svg" : "./img/heart-icon.svg"} alt="" />
            </button>
        );
}

function Article05({imgSrc, content, subject, isFavorite}) {
    return (
        <div>
            <article className="course">
            <img className="course__img" src={imgSrc} alt="" />
            <div className="course__body">
                <div className="course__title">{subject}</div>
                <div className="course__description"> {content}</div>
            </div>
            <div className="course">
                <ToggleHeartIcon isFavorite={isFavorite} /> 
            </div>
        </article>
        </div>
    );
}

export default Article05;