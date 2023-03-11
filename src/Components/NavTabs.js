import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Learn
        </NavLink>
      </li>
    </ul>

 
  );
}

export default NavTabs;



























  
// function Mainpage(){
//     return(
//         <div>

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item active">
//           <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Features</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </nav>
//    Save
  

// <div class="jumbotron">
//   <h1 class="display-4">Hello, world!</h1>
//   <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//   <hr class="my-4"/>
//   <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//   <p class="lead">
//     <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//   </p>
// </div>
//  Save


//         </div>
//     );
// };

// export default Mainpage;