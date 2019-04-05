/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ListItem } from "./List";
import { Row, Col } from "./Grid";
import Modal from "../Modal";
import "./Card.css";



function PetCard({ name, type, gender, photo, Site, lat, lng, show, hideModal, showModal }) {
  return (
    <ListItem>
      <Row className="row">
        <Col size="4 sm-4 md-4">
          <img className="img-thumbnail img-fluid w-100" src={photo} alt={photo} />
        </Col>
        <Col size="4 sm-4 md-4">
          <h4 className="font-italic">{"Name: " + name}</h4>
          <h4 className="font-italic">{"Type: " + type}</h4>
          <h4 className="font-italic">{"Gender: " + gender}</h4>
          <button type="button" class="btn btn-lg btn-info add-to-saved btn-spinner m-r-1 ng-binding" ng-show="showSaveUnsaveButton() &amp;&amp; !initializingPetStatistic" ng-click="toggleSavedPet()" ng-disabled="savingPet || unsavingPet" ng-class="{'is-saved': isAdopter &amp;&amp; userSavedPetId}" title="Save Nelson to your dashboard.">
            <svg ng-show="!(isAdopter &amp;&amp; userSavedPetId)" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg" class=""><path d="M8 13.978S16 8.16 16 3.85c0-4.095-6.222-5.872-8-.496-1.778-5.376-8-3.6-8 .496 0 4.31 8 10.128 8 10.128" fill="#2D8FD2" fill-rule="evenodd"></path></svg>
            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
            <span class="hidden-xs-down ng-binding">Add to </span>
            Save<span class="hidden-xs-down ng-binding">d</span>
            <span us-spinner="" spinner-on="savingPet || unsavingPet" spinner-delay="500" class="ng-scope"></span>
          </button>
          {/* <a href="#"> <h5 className="font-italic">Like this pet</h5></a> */}
        </Col>
        <Col size="4 sm-4 md-4">
          <form action={Site}>
            <input type="submit" value="More" />
          </form>
          <Modal show={show} handleClose={hideModal}>
            <p>Modal</p>
            <p>Data</p>
          </Modal>
          <button type="button" onClick={showModal}>
            open
        </button>
        </Col>
      </Row>
      {/* <Row className="flex-wrap-reverse">
        <Col size="md-4">
          <a href="#"> <h3 className="font-italic">Like this pet</h3></a>
        </Col>
      </Row> */}
      {/* <Row> */}
      {/* <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={photo} alt={photo} />
        </Col> */}
      {/* <Col size="12 sm-8 md-10">
          <form action={Site}>
            <input type="submit" value="More" />
          </form>
          <Modal show={show} handleClose={hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={showModal}>
          open
        </button>
        </Col> */}
      {/* </Row> */}
    </ListItem>
  );
}

export default PetCard;
