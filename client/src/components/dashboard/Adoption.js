import React, { Component } from "react";
import Container from "../layout/Containter";
import API from "../../utils/API";
import Form from "../layout/Form";
import Card from "../layout/Card";
import Animal from "../layout/Animal";
import { List } from "../layout/List";
import Modal from "../layout/Modal";
import "../css/Adoption.css";

class Adoption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      zipcode: "",
      PetType: "Dog",
      Gender: "Male",
      message: "no pets were found",
      Clicked: false,
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ Clicked: true });
    this.getDogs();
  };

  getDogs = () => {
    API.GetDogs(this.state.zipcode, this.state.Gender, this.state.PetType)
      .then(res => {
        console.log(res.data);
        this.setState({
          pets: res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  render() {
    const Resclicked = this.state.Clicked;
    let results;
    if (Resclicked) {
      results =
      <div className = "container Adoption">
          <Container>
              <Card title="Results">
                {this.state.pets.length ? (
                  <List>
                    {this.state.pets.map(pet => (
                      <Animal
                        key={pet.PetId}
                        name={pet.Name}
                        gender={pet.Gender}
                        type={pet.PetType}
                        photo={pet.PrimaryPhotoUrl}
                        Site={pet.ProfileUrl}
                        Lat={pet.Latitude}
                        Lng={pet.Longitude}
                        show={this.state.show}
                        hideModal ={this.hideModal}
                        showModal = {this.showModal}
                      />
                    ))}
                  </List>
                ) : (
                    <h2 className="text-center">{this.state.message}</h2>
                  )}
              </Card>
          </Container>
        </div>
    }
    return (
      <div className = "CardSection">
      <div className = "row">
      <div className="col md12 center">

        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
              <h2>Search Your Pets Here</h2>
          </h4>
        </div>
        
        <Container>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            q={this.state.q}
          />
        </Container>
        {results}
      </div>
      </div>
      </div>
    );
  }
}

export default Adoption;
