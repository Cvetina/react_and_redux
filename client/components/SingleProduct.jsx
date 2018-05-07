import React from "react"
import { dispatch } from 'redux'
import { connect } from "react-redux"
import classNames from "classNames"
import { Modal, Button } from 'react-bootstrap';
import MainSlider from './MainSlider'
import Remove from './shared/Remove'
import style from './styles/SingleProduct'

function SingleProduct(props) {
  return (
    <Modal.Dialog show={props.showModal}>
      <Modal.Header>
        <Modal.Title>
        <Button onClick={props.hideModal}><Remove /></Button>
        {props.item.title}
        <h3 className={classNames(style.price, { [style.strike]: props.item.sale})}>
          Price:{props.item.price}
          {props.item.sale &&
            <span className={style.sale} >{props.item.salePrice}</span>
          }
        </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <p><b>Material</b>: {props.item.material}</p>
        <p><b>Size</b>: {props.item.size}</p>
        <p><b>Color</b>: {props.item.color}</p>
        <p><b>Description</b>: {props.item.description}</p>
        <MainSlider>
            {props.item.gallery &&
                props.item.gallery.map((image, index) => <img key={index} className={style.sliderImage} src={image} />)
            }
            {!props.item.gallery &&
              <img className={style.sliderImage} src={props.item.image} />
            }
          </MainSlider>
          <p><b>Packages</b>: {props.item.packeges}</p>
          <p><b>Weight</b>: {props.item.weight}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.hideModal}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}
 
export default SingleProduct

