import trollFace from "../Assets/Troll Face.png";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="logoWrapper">
            <img src={trollFace} alt="logo" className="logo" />
            <h3 className="header">Meme Generator</h3>
          </div>
          <p className="header-desc">React Course - Project 3</p>
        </nav>
      </header>
    </>
  );
}
