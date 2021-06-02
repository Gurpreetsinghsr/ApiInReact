import axios from "axios";
import "./App.css";
import Header from "./components/header";
import ImageList from "./components/imageList";
import React, { Component } from "react";
// The state and the Events are Handled here as both the component are dependent on each other
class App extends Component {
  state = {
    post: [], // Array of photo will come here with all the properties
    show: false, // used for model to show and hide
    link: "", // this gives the link of the image we click on and we will use this link to show the Image in Modal
    tag: "", // for search
  };

  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }
  async componentDidMount() {
    const { data } = await axios(
      "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=15a7f5952196a2203f002dfd400e7095&format=json&nojsoncallback=1"
    );
    const post = data.photos.photo; //  the useful data is extracted
    this.setState({ post });
  }
  handleShow = (x) => {
    const xs = { ...x }; // Spread operator is used to put the value of x in xs
    const link =
      "https://farm" +
      xs.farm +
      ".staticflickr.com/" +
      xs.server +
      "/" +
      xs.id +
      "_" +
      xs.secret +
      ".jpg";
    //link is genrated to get the Image
    const show = true;
    this.setState({ show }); //to open the Modal
    this.setState({ link });
  };
  handleClose = () => {
    const show = false;
    this.setState({ show }); //to close the modal
  };

  async handleSearch(e) {
    var tag = { ...this.state.tag };
    tag = e.currentTarget.value;
    this.setState({ tag });
    if (tag !== "") {
      const { data } = await axios(
        "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=15a7f5952196a2203f002dfd400e7095&tags=" +
          tag +
          "&format=json&nojsoncallback=1"
      );

      const post = data.photos.photo; //  the useful data is extracted
      this.setState({ post });
    } else {
      const { data } = await axios(
        "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=15a7f5952196a2203f002dfd400e7095&format=json&nojsoncallback=1"
      );
      const post = data.photos.photo; //  the useful data is extracted
      this.setState({ post });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "inline-block", marginTop: "20px" }}>
          <div className="row">
            <Header tag={this.state.tag} handleSearch={this.handleSearch} />
          </div>
          <div>
            {/* the list of Image is render by ImageList component */}
            <ImageList
              show={this.state.show}
              post={this.state.post}
              link={this.state.link}
              handleShow={this.handleShow}
              handleClose={this.handleClose}
            ></ImageList>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
