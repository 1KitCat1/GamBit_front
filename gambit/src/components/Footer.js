import React, { useState, useEffect } from "react";
import { MDBFooter} from "mdb-react-ui-kit";
import { LOCALES } from "../i18n";
import { useCookies } from "react-cookie";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Footer = () => {
  const [enVariant, setEnVariant] = useState("warning");
  const [uaVariant, setUaVariant] = useState("secondary");
  const [cookies, setCookie] = useCookies(["_lang"]);

  const setLangaugeHandle = (locale) => {
    setCookie("_lang", locale);
    if (locale === LOCALES.ENGLISH) {
      setEnVariant("warning");
      setUaVariant("secondary");
    } else {
      setEnVariant("secondary");
      setUaVariant("warning");
    }
  };

  useEffect(() => {
    const lang = cookies["_lang"];
    if (lang !== null && lang === LOCALES.UKRAINIAN) {
      setEnVariant("secondary");
      setUaVariant("warning");
    }
  }, []);

  return (
    <MDBFooter className="bg-dark text-center text-white footer">
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
          padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-begin",
          }}
        >
          <ButtonGroup aria-label="Basic example">
            <Button
              type="submit"
              variant={enVariant}
              style={{ padding: "3px" }}
              onClick={() => {
                setLangaugeHandle(LOCALES.ENGLISH);
              }}
            >
              ENG
            </Button>
            <Button
              type="button"
              onClick={() => {
                setLangaugeHandle(LOCALES.UKRAINIAN);
              }}
              variant={uaVariant}
              style={{ padding: "3px" }}
            >
              UA
            </Button>
          </ButtonGroup>
        </div>
        
        <div>© 2022 Copyright: GamBit International</div>
        <div></div>
        
      </div>
    </MDBFooter>
  );
};

export default Footer;
