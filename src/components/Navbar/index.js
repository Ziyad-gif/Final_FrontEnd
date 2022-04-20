import "./navbar.css";
function Navbar(props) {
  const {status} = props;
  return (
    <>
      <div class="topnav">  
        <a href="#" id="covid">Covid</a>

        <a href="#" id="global">Global</a>
        <a href="#" id="indonesia">Indonesia</a>
        <a href="#" id="provisi">Provinsi</a>
        <a href="#" id="about">About</a>
      </div>
    </>
  );
}

export default Navbar;
