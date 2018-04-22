import React, { Component } from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import EntryDetail from "./Entry/EntryDetail";
import BrowseDetail from "./Browse/BrowseDetail";
import { Button, Container } from "semantic-ui-react";
import { Dropdown, Menu } from "semantic-ui-react";
import EntryListView from "./EntryListView";
import BrowseView from "./BrowseView";
import CssBaseline from "material-ui/CssBaseline";
import { Navbar } from "react-bootstrap";

const NewRecommendationButton = () => (
  <Button>Enter New Recommendation </Button>
);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/books/" component={BrowseDetail} />

          <Route exact path="/addbook" component={EntryDetail} /> */}
          <Route exact path="/entry" component={EntryListView} />
          <Route exact path="/browse" component={BrowseView} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
