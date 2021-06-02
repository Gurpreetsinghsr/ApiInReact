import { propTypes } from "react-bootstrap/esm/Image";

const Header = (props) => {
  return (
    // this is the Header of the main Page
    <div className="App">
      <header className="App-header">
        <h4>Search Photos</h4>
        <input
          type="text"
          className="headerInputField"
          onChange={props.handleSearch}
          value={props.tag}
        />
      </header>
    </div>
  );
};

export default Header;
