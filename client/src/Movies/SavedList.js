// import React from 'react';
// import { Link } from 'react-router-dom';

// export default class SavedList extends React.Component {
//   constructor(props) {
//     console.log(props);
//     super(props);
//   };

//   render() {
//     return (
//       <div className="saved-movies">
//         <h3>Saved Movies:</h3>
//         {this.props.list.map(movie => (
//           <Link to={`/movies/${movie.id}`} key={movie.id} activeClassName="saved-active">
//             <span className="saved-movie">{movie.title}</span>
//           </Link>
//         ))}
//         <Link to="/">
//           <div className="home-button">Home</div>
//         </Link>
//       </div>
//     );
//   };
// };

// // const SavedList = props => (
// //   <div className="saved-list">
// //     <h3>Saved Movies:</h3>
// //     {props.list.map(movie => (
// //       <Link to={`/movies/${movie.id}`} key={movie.id} activeClassName="saved-active">
// //         <span className="saved-movie">{movie.title}</span>
// //       </Link>
// //     ))}
// //     <Link to="/">
// //       <div className="home-button">Home</div>
// //     </Link>
// //   </div>
// // );

// // export default SavedList;

import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return (
            <NavLink
              to={`/movies/${movie.id}`}
              key={movie.id}
              activeClassName="saved-active"
            >
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
          );
        })}
        <div className="home-button">
          <Link to="/">Home </Link>
        </div>
      </div>
    );
  }
}