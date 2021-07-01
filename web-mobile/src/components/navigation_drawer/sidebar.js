import React from "react";
import Sidebar from "react-sidebar";
import NA from './navigationDrawer'

export default class RightSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
  }



  static getDerivedStateFromProps(props, state){
    if(props.show){
      return{
        sidebarOpen:open
      }
    }
    else{
      return{
        sidebarOpen:false
      }
    }
  }

  render() {
    return (
      <Sidebar
        sidebar={<NA/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", width:350 } }}
      >
        {/* <button onClick={() => this.onSetSidebarOpen(true)} style={{backgroundColor:'white',color:'black'}}>
          Open sidebar
        </button> */}
      </Sidebar>
    );
  }
}