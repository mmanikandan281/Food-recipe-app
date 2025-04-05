export const Fav = ({ id, image, title, rmFromFav }) => {
    return (
      <div className="card" style={{ width: "18rem" }} key={id}>
        <img src={image} className="card-img-top" alt={`Recipe ${title}`} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <button onClick={rmFromFav} className="btn btn-primary">
            Remove from favourite
          </button>
        </div>
      </div>
    );
  };
  