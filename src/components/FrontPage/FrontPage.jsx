import React from "react";
import "./FrontPage.css";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
const FrontPage = () => {
  return (
    <div className="d-flex vh-100 text-center text-white background-dark front-page">
      <Container className=" cover-container text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
        {/*  <header class="mb-auto">
          <div>
            <h3 class="float-md-left mb-0">Carpool</h3>
            <nav class="nav nav-masthead justify-content-center float-md-right">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                Contact
              </a>
            </nav>
          </div>
        </header> */}
        {/* <Navbar /> */}
        <main class="px-3">
          <h1>Carpool</h1>
          <p class="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p class="lead">
            <a
              href="#"
              class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Take the tour
            </a>
          </p>
        </main>

        <footer class="mt-auto text-white-50">
          <p>
            Cover template for{" "}
            <a href="https://getbootstrap.com/" class="text-white">
              Bootstrap
            </a>
            , by{" "}
            <a href="https://twitter.com/mdo" class="text-white">
              @mdo
            </a>
            .
          </p>
        </footer>
      </Container>
    </div>
  );
};

export default FrontPage;
