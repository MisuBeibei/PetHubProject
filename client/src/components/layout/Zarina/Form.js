import React from "react";
import "./Form.css";
import { Row, Col } from "./Grid";


function Form({ zipcode, PetType, Gender, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <Row>
        <Col size="2 sm-2 md-2"></Col>
        <Col size="8 sm-8 md-8">
          <div className="form-group">
            <label htmlFor="Query">
              <strong>Zipcode</strong>
            </label>
            <input
              className="form-control"
              id="Zip"
              type="text"
              value={zipcode}
              placeholder="Zip Code"
              name="zipcode"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="Query">
              <strong>Pet Type</strong>
            </label>
            <select
              className="form-control"
              id="pet"
              type="text"
              value={PetType}
              name="PetType"
              onChange={handleInputChange}
              required>
              <option>Dog</option>
              <option>Cat</option>
            </select>

            <label htmlFor="Query">
              <strong>Gender</strong>
            </label>
            <select
              className="form-control"
              id="pet"
              type="text"
              value={Gender}
              name="Gender"
              onChange={handleInputChange}
              required>
              <option>Male</option>
              <option>Female</option>
            </select>

          </div>
          {/* </Col> */}
          {/* <Col size="2 sm-2 md-2">  */}

          {/* <div className="pull-right"> */}
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-lg btn-danger"
          >
            Search
        </button>
          {/* </div> */}
        </Col>
      </Row>
    </form>
  );
}

export default Form;
