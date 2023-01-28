import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Modal, Form } from "react-bootstrap";
import "./App.css";
import { MdDelete, MdOutlineFileCopy } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import moment from "moment/moment";

const HistoryComp = () => {
  const [localData, setLocalData] = useState([]);
  const [deleteId, setdeleteId] = useState("");
  const [copied, setcopied] = useState(false);
  const [showdelete, setshowdelete] = useState(false);
  const [showupdate, setshowupdate] = useState(false);

  
  useEffect(() => {
    const items = JSON?.parse(localStorage?.getItem('newShortURL'));
    setLocalData(items);
  }, []);

  const handleClose = () => {
    setshowdelete(false);
    setshowupdate(false);
    
  };

  const handleDeleteItem = () => {
    const filtered = localData.filter((filter) => {
      return filter?.id !== deleteId;
    });
    // localStorage.removeItem(deleteId)
    localStorage?.setItem('newShortURL', JSON?.stringify(filtered));
    setLocalData(filtered);
    setshowdelete(false);
  };

  const handleDeleteModal = (id) => {
    setdeleteId(id);
    setshowdelete(true);
  };

  const handleUpdate = (updateid) => {
    setshowupdate(true);
    
  }
  
  const handleUpdateSubmit = () => {

  }

  const handleDate = (item) => {
    const Date_Format = "DD MMM, yyyy";
    const currentdate = moment().format(Date_Format);
    const expirydate = moment(item.date).format(Date_Format);

    var datecheck = moment.utc(expirydate , Date_Format);

    var expiryIsAfter = datecheck.isAfter(currentdate);


    if(expiryIsAfter){
      console.log("not expire")
      window.open(item.Url, '_blank')

    }else{
      console.log("expired")
    }

    // expiryIsAfter ? (console.log(true)) : (console.log(false))


  }

  return (
    <div className="showurl">

      {/* Delete Modal Section */}
      <Modal show={showdelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure? You want to delete!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteItem}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Modal */}
      {/* Delete Modal Section */}
      <Modal show={showupdate} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateSubmit} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter New URL</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>New Expiry Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Table to show data */}
      <Table striped bordered className="tabledata">
        <thead>
          <tr>
            <th>#</th>
            <th>Long-URL</th>
            <th>Short-URL</th>
            <th>Expiry Date</th>
            <th>Copy</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {/* map fucntion to show data in required fileds */}
          {localData?.map((item, i) => (
            <tr key={item?.id}>
              <td>{i + 1}</td>
              <td>{item?.Url}</td>
              <td onClick={()=> handleDate(item)}>{item?.newshortUrl}
                {/* <a href={item?.Url} target={"_blank"}>
                  {item?.newshortUrl}
                </a> */}
              </td>
              <td>{item?.date}</td>
              <td>
                {
                  <CopyToClipboard
                    text={item?.newshortUrl}
                    onCopy={() => setcopied(true)}
                  >
                    <button>
                      <MdOutlineFileCopy />
                    </button>
                  </CopyToClipboard>
                }
              </td>
              <td>
                {/* Delete Icon in edit section */}
                <button onClick={() => handleDeleteModal(item?.id)}>
                  <MdDelete />
                </button>
                {/* Update Icon in edit section */}
                <button onClick={() => handleUpdate(item?.id)} >
                  <AiOutlineEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryComp;
