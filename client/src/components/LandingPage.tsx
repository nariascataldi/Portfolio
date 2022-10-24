import React from 'react';
import '../styles/LandingPage.css';


function LandingPage() {

  return (
    <table>
      <thead>
        <tr>
          <th>
            Html
          </th>
          <th></th>
          <th>Css</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <td>1</td>
            <td>
              <p className='maquina'>{'<'}p{'>'}Beetlejuice{'<'}p{'/>'} </p>
            </td>
          </td>
          <td></td>
          <td>
            <td>1</td>
            <td>@mdo</td>
          </td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td></td>
          <td>@fat</td>
        </tr>
        <tr>
          <td colSpan={3}>Larry the Bird</td>
        </tr>
      </tbody>
    </table>
  );
}

export default LandingPage;
