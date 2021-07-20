import React from "react";

function Cover() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        <div className="col-3 bg-success align-self-end">Chibi picture asking viewer to pick a language goes here</div>
        <div className="col-3 align-self-center">
          <div className="d-grid">
            <a href="home" class="btn btn-primary" type="button">American Flag Image</a>
          </div>
        </div>
        <div className="col-3 align-self-center">
          <div className="d-grid">
            <button class="btn btn-primary" type="button">Japanese Flag image</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
