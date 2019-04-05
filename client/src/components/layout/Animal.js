/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ListItem } from "./List";
import { Row, Col, Container } from "./Grid";
import { Button, Card } from 'react-bootstrap';
import Map from "../dashboard/Map";
import "./Card.css";
import Modal from "./Modal";
import "./Animal.css";


function PetCard({ name, type, gender, photo, Site, lat, lng, show, hideModal, showModal }) {
  return (
    <ListItem>
      <Row className="row">
        <Col size="4 sm-4 md-4">
          <img className="img-thumbnail img-fluid w-100" src={photo} alt={photo} />
        </Col>
        <Col size="4 sm-4 md-4 info">
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
        </Col>

        <Col size="4 sm-4 md-2 buttons">
          <form action={Site}>
            <Button type="submit" variant = "success" size="lg">More</Button>
            <br></br>
            <br></br>
            <Button className = "Open" type="button" variant = "danger" size = "lg" onClick={showModal}>
              open
            </Button>
          </form>

          <Modal show={show} handleClose={hideModal}>
            <p>Modal</p>
            <p>Data</p>
          </Modal>
        </Col>


      </Row>
    </ListItem>
  );
}

export default PetCard;
