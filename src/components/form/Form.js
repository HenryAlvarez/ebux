import React, { useState } from 'react'
import * as emailjs from "emailjs-com";

const SERVICE_ID = 'default_service'
const TEMPLATE_ID = 'template_j3r6ont'
const USER_ID = 'user_qtpClzKMQNyJ3nore8uXi'

export const Form = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleClick = () => {
        var data = {
          to_emailHost: ['sunuchenry10@gmail.com'],
          to_email:email,
          to_name:name,
          to_lastName: lastName
        };
    
        emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
          function (response) {
            console.log(response.status, response.text);
            setEmail('')
            setName('')
            setLastName('')
          },
          function (err) {
            console.log(err);
          }
        );
      }
    return (
        <div>
            
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={event => setName(event.target.value)}/>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Apellido" value={lastName} onChange={event => setLastName(event.target.value)}/>
              </div>
              <div className="col-12 mb-3">
                <input type="email" className="form-control" placeholder="Correo Electronico" value={email} onChange={event => setEmail(event.target.value)}/>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" onClick={handleClick} className="btn btnPrimary mt-3">Enviar</button>
            </div>
        </div>
    )
}
