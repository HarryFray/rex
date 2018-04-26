import React, { Component } from 'react';
import './Home.css';
import book from '../images/book.png';
import music from '../images/music.png';
import movie from '../images/movie.png';
import food from '../images/food.png';
import NavBar from './NavBar';
import { Route, Link, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Dropdown, Menu, Button, Container, Header, Icon } from 'semantic-ui-react';

import BookDetail from './Entry/BookDetail';

const NewRecommendationButton = () => (
  <div className="newRecButton">
    <Link to="/entry">
      <Button size="massive" color="teal" borderRadius="30px">
        New Recommendations
        <Icon className="plus" name="plus" />
      </Button>
    </Link>
  </div>
);

class Home extends Component {
  state = {
    category: '',
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="userName">Welcome! {this.props.firstName}</div>
        <div className="newRec-button">
          <NewRecommendationButton />
        </div>
        <div className="icon-list">
          <div className="left-half">
            <div className="image">
              <Link to="/browse" />
              <img src="images/food.jpg" className alt="" />
              <h3 className="top-left">
                <span>Food</span>
              </h3>
            </div>
            <div className="image">
              <Link to="/browse" />
              <img src="images/books.jpg" className alt="" />
              <h3 className="top-left">
                <span>Books</span>
              </h3>
            </div>
          </div>
          <div className="right-half">
            <div className="image top">
              <Link to="/browse" />
              <img src="images/music.jpg" className alt="" />
              <h3 className="top-left">
                <span>Music</span>
              </h3>
            </div>
            <div className="image bottom">
              <Link to="/browse" />
              <img src="images/tv.jpg" className alt="" />
              <h3 className="top-left">
                <span>Movies</span>
              </h3>
            </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

class FindRecommendationButton extends Component {
  state = {
    category: '',
  };

  render() {
    return (
      <div>
        <Menu vertical>
          <Dropdown text="Find Something from" pointing="left" className="link item">
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  this.setState({ category: 'books' });
                  //<Redirect to="/browse" />;
                  //redirect is like component
                }}
              >
                <Link to="/browse">Books</Link>
              </Dropdown.Item>
              <Dropdown.Item>Movies</Dropdown.Item>
              <Dropdown.Item>Restaurants</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    );
  }
}

export default Home;
