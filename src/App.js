import React,{Component} from 'react';
import Home from "./Views/Home/Home"; 
import AboutUs from "./Views/AboutUs/AboutUs";
import SideComponent from "./Components/SideBar/SideComponent";
import "./App.scss";
import Menu from "./Assets/img/SideBar/menu.svg";
import Close from "./Assets/img/SideBar/close.svg";

class App extends Component {

//   constructor(props){
//     super(props);

//     this.openNav=this.openNav.bind(this);
//     this.closeNav=this.closeNav.bind(this);
//   }

// openNav() {
//   // document.getElementById("SideComponent").style.display = "block";
//   document.getElementById("SideComponent").style.width = "100%";
//   document.getElementById("Open").style.display = "none";
// }
  
// closeNav() {
//     document.getElementById("SideComponent").style.display = "none";
//     document.getElementById("SideComponent").style.width = "0%";
// }

  render(){
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
