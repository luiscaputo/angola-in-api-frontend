import { Form } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Texts } from "../../utils/texts";

export default function Identification() {
  return (
    <>
      <h2>{Texts.Identification}</h2>
      <Form method="post" id="">
        <p>
          <label>
            <span>{Texts.informYouIdentificationNumber}</span>
            <input
              placeholder="006989589LA042"
              aria-label="Avatar URL"
              type="text"
              name="avatar"
              // defaultValue={contact.avatar}
            />
            <br />
          </label>
        </p>
        <p>
          <button type="submit">Consultar Dados</button>
        </p>
      </Form>
    </>
  );
}
