const Card = ({image, selected, onClickHandler}) => {
  return (
    <div className="card" onClick={onClickHandler}>
      <div className={selected && 'selected'}>
        <div className="card-face">
          <img src={image} alt="card-icon" />
        </div>
        <div className="card-back">
          <img src="/assets/logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Card;