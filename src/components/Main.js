import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Container, Row, Col } from "react-bootstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function Main() {
  const [checked, setChecked] = React.useState(true);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const items = [];
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  for (var i = 22; i <= 39; i++) {
    const element = (
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name={`KW` + i}
          />
        }
        label={`KW` + i}
      />
    );
    items.push(element);
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h4>Bitte um Bestätigung bzw. Beantwortung folgender Fragen:</h4>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Col>
          <Col md={10}>
            <h6>
              Hiermit bestätigte ich mein Interesse an der temp. 3. Schicht F56
              (Nachtschicht voraussichtlich ab KW26 & befristet bis KW52/2021)
              zu arbeiten & bewerbe mich verbindlich.
            </h6>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Col>
          <Col md={10}>
            <h6>
              Die Rahmenbedingungen des 4-Tages-Modells inkl. Vergütung sowie
              die Arbeitszeiten habe ich zur Kenntnis genommen.
            </h6>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Col>
          <Col md={10}>
            <h6>
              Das Arbeiten am 5. Tag der Woche ist grundsätzlich für mich
              möglich – sofern zu einem späteren Zeitpunkt die Vereinbarung dazu
              getroffen wird bzw. im Rahmen einzelner Flex- Tage notwendig ist.
            </h6>
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={10}>
            <h6>
              Können Sie sich im Rahmen der Nachtschicht vorstellen eine andere
              Tätigkeit auszuüben? Wenn ja, … IB
              <p></p>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="(inkl. Cockpit)"
                  />
                }
                label="(inkl. Cockpit)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="FW (inkl. Türen)"
                  />
                }
                label="FW (inkl. Türen)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="Interesse an GV"
                  />
                }
                label="Interesse an GV"
              />
            </h6>
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={10}>
            <h6>
              <bold>Zusätzliche Angaben zur bisherigen Funktion:</bold> aktuell
              bin ich tätig in der Funktion als
              <p></p>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="GV/GV-Stellvertreter"
                  />
                }
                label="GV/GV-Stellvertreter"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="Maschinenführer"
                  />
                }
                label="Maschinenführer"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="Nacharbeit"
                  />
                }
                label="Nacharbeit"
              />
            </h6>
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={10}>
            <h6>Angabe meiner geplanten Urlaubszeiten</h6>
            <p></p>
            {items}
          </Col>
        </Row>
      </Container>
    </>
  );
}
