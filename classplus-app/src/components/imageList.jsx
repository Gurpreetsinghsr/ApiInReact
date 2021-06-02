import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
const ImageList = (props) => {
  return (
    <React.Fragment>
      <div className="imagelist" style={{ marginTop: "10%" }}>
        {/* This is to render the List of Images*/}
        {props.post.map((x) => (
          <div className="col-4" key={x.id} onClick={() => props.handleShow(x)}>
            <img
              alt=""
              src={
                "https://farm" +
                x.farm +
                ".staticflickr.com/" +
                x.server +
                "/" +
                x.id +
                "_" +
                x.secret +
                ".jpg"
                //THIS IS HOW WE USE THE DATA WE GOT FROM THE API TO GENRATE THE PIC REFER THE FLICKER API DOCUMENTATIUON FOR MORE
              }
              className="images"
            />
          </div>
        ))}
      </div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-12">
            <img alt="" src={props.link} className="images" />{" "}
            {/* lINK is directly used to get Image */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ImageList;
