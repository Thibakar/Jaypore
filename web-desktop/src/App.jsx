import React, { Component } from "react";
import "./App.css";
import "./assets/css/main.css";
// import "./assets/css/custom.css";
// import "./components/shared/header/header.css";
import "./assets/css/style.css";
import Routes from "./components/common/routes";

class App extends Component {

  componentDidMount() {

    window.addEventListener('hashchange', (evt) => {
      let divId = evt.newURL.split('#')[1]
      let modals = document.getElementsByClassName('modal-window')
      let shouldRemove = true
      for (let i = 0; i < modals.length; i++) {
        if (modals[i].id === divId) {
          document.body.classList.add("modal-open")
          shouldRemove = false
          break;
        }
      }
      if (shouldRemove && document.body.classList.contains('modal-open')) {
        document.body.classList.remove('modal-open')
      }

    }, false);
  }


  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
