import { Form } from "react-router-dom";
import { Texts } from "../../utils/texts";
import { Col, Container, Row } from 'reactstrap';
import './index.css';


export default function Identification() {
  return (
    <>
      <h1>{Texts.Identification}</h1>
      <hr />
      <div id="contact">
        <div>
          <Form method="post" id="">
            <p>
              <label>
                <input
                  placeholder="Informe seu BI"
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
        </div>
      </div>

      <div id="coluns_infos">
        teste
      </div>
    </>
  );
}


{/* <h1>{Texts.Identification}</h1>
      <hr />
      <div id="contact">
        <div>
          <Form method="post" id="">
            <p>
              <label>
                <input
                  placeholder="Informe seu BI"
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
        </div>
      </div>

      <div id="identification_values">
        
      </div> */}