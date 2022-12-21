import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import Logo from "../img/logo3d-light.png";

const Home = () => {
  return (
    <div>
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              style={{ color: "white" }}
              className="my-5 display-3 fw-bold ls-tight px-3"
            >
            </h1>

            <p className="px-3" style={{ fontSize: "20px", color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>

            
          </MDBCol>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img alt="Logo" src={Logo} width="300px" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

    </div>
  );
};

export default Home;
