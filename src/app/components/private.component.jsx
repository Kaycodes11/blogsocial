// import React, { Component } from "react";
// import withRouteGuardComponent from "./with-router-guard/with-route-guard.component";
// import { connect } from "react-redux";

// export class PostContainer extends Component {
//   render(){
//     return this.props.render(this.props);
//   }
// }

// export default connect(null,null)(PrivateComponent);

// class PostPage extends Component {
//   render() {
//     return(
//     <PostContainer render={function(someData)=>{
//       return (
//         <React.Fragment>
//           <ComponentA {...someData} />
//           <ComponentB {...someData} />
//           <ComponentD {...someData} />
//         </React.Fragment>
//       )
//     }}>

//     </PostContainer>
//     )
//   }
// }

// export default withRouteGuardComponent(PrivateComponent);
// Container componet basically holds multiple components within it and container patter is good for sharing same state among multiple components
