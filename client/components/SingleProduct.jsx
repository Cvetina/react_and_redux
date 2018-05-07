import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import { Modal } from 'react-bootstrap';
import classNames from "classNames"
import style from './styles/SingleProduct'

function SingleProduct(props) {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>{props.item.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body> <p>Description: {item.description}</p></Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}
 
export default SingleProduct

