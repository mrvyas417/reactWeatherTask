import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div class="container-fluid main_menu">
    <div class="row">
        <div class="col-md-10 col-12 mx-auto">
         
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">
                    <i class="far fa-snowflake"></i>
                    CheckWeather
                    <i class="far fa-snowflake"></i>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                             <NavLink  activeClassName="menu_active" className="nav-link" to="/weather"
                      >
                        Weather
                      </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink  activeClassName="menu_active" className="nav-link" to="/about"
                      >
                        About
                      </NavLink>
                        </li>


                    </ul>

                </div>
            </nav>
            


        </div>

    </div>


</div>

    </>
  );
};

export default Navbar;
