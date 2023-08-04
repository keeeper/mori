// import logo from "assets/logo.svg";
import { useEffect } from "react";

const Header = ({handleNewGame, wins, attempts}) => {
  useEffect(() => {
    document.title = `${wins} wins`;
  })

  return (
    <header className="header">
      <img className="logo" src="/assets/logo.svg" alt="Mori logo" />
      <div className="game-info">
        <span className="label-primary">{wins} wins</span>
        <span className="label-secondary">{attempts} attempts</span>
        <button className="btn" onClick={handleNewGame}>reset</button>
      </div>
    </header>

  )
}

export default Header;