function Cards( props ) {
    return (
        <div className="card" style={{width: "18rem" }}>
          <img className="card-img-top" src={props.src} alt="Card  cap"/>
          <div className="card-body">
             <h5 className="card-title">{props.title}</h5>
             <p className="card-text">
              {props.prag}

             </p>
             <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    );
}

export default Cards;