import { Form, useLoaderData } from "react-router-dom";
import { Texts } from "../../utils/texts";
import { Col, Container, Row, Table } from 'reactstrap';
import './index.css';
import { IdentificationVales } from "../../services/apis";

async function action(request: any) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  const row = IdentificationVales(values.avatar);
  console.log(row);
  return row;
}

export default function Identification() {
  const datas = useLoaderData();
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
          {
            datas ?  <Table hover>
            <thead>
              <tr>
                <th>
                Nome
                </th>
                <th>
                  Pai
                </th>
                <th>
                  Mãe
                </th>
                <th>
                  NIF
                </th>              
                <th>
                  Data de Nascimento
                </th>
                <th>
                  Naturalidade
                </th>
                <th>
                  Estado Civíl
                </th>
                <th>
                  Data de Emissão
                </th>
                <th>
                  Emissão Local
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  1
                </th>
                <td>
                  Mark
                </td>
                <td>
                  Otto
                </td>
                <td>
                  @mdo
                </td>
              </tr>
            </tbody>
            </Table> :
            <p id='noValuesFound'>Nenhum dado Encontrado</p>
          }
        </div>
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