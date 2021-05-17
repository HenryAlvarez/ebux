import React from 'react';
import Card from './components/cards/Card';
import CoverHome from './components/coverHome/CoverHome';
import ThemeChanger from './components/DarkMode/ThemeChanger';
import { Section } from './components/section/Section';
// import ThemeChanger from './components/DarkMode/ThemeChanger';

function App() {
  return (
    <>
      <ThemeChanger />
      <CoverHome />
      <Section
        className='sectionTwo'
        id='services'
        title={'Servicios'}
        desc='Servicios a la medida para mejorar tu sitio web' >
        <Card
          className='cardLeft'
          title='Consultoría en Diseño de
            UX'
          desc='Descubrimos las reales motivaciones, comportamientos y necesidades de tus usuarios para diseñar productos y servicios digitales que entreguen experiencias significativas y relevantes.'
          icon='coffe'
        />
        <Card
          className='cardLeft'
          title='Diseño de Servicios y
            Experiencia de Clientes'
          desc='Diseñamos servicios y experiencias memorables, conectadas con las reales necesidades y expectativas de tus clientes, lo que te permitirá alcanzar los objetivos y metas de tu negocio.'
          icon='coffe'
        />
        <Card
          className='cardLeft'
          title='Investigación de
            Usuarios'
          desc='Desarrollamos estrategias de investigación cualitativas y cuantitativas que te permitirán descubrir las reales motivaciones, comportamientos y necesidades de tus clientes.'
          icon='coffe'
        />
      </Section>
      <Section
        id='tecnicas'
        title={'Tecnicas'}
        desc='Servicios a la medida para mejorar tu sitio web' >
        <Card
          title='Estudios de
            Usabilidad'
          desc='Analizamos y optimizamos tus canales digitales para entregarle a tus clientes experiencias de uso memorables, que eleven las tasas de conversión y las ventas de tu negocio.'
          icon='coffe'
        />
        <Card
          title='Formación en
            Diseño UX / CX'
          desc='En Diseño.Lateral organizamos regularmente charlas, talleres y otras actividades de formación, en donde enseñamos a otros lo que mejor sabemos hacer.'
          icon='coffe'
        />
      </Section>
      <Section
        className='sectionTwo'
        id='nosotros'
        title={'Sobre Nosotros'}
        desc='Diseñamos experiencias 
        centradas en las personas ' >
        <div className='col-12 col-md-6 mb-3'>
          <img src='https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='nosotros' />
        </div>
        <div className='col-12 col-md-6 mb-3'>
          <h3>Somos Ebux</h3>
          <p>
            Te ayudamos a mejorar la  performance  de tus productos y servicios, a obtener mayor  presencia de mercado , a disminuir tus costos operativos y a incrementar las  ventas  de tu negocio.
            </p>
        </div>
        <div className='col-12 col-md-6 mb-3 order-md-last'>
          <img src='https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=816&q=80' alt='nosotros' />
        </div>
        <div className='col-12 col-md-6 mb-3'>
          <h3>Qué hacemos</h3>
          <p>
            Trabajamos en la gestión y desarrollo de proyectos de diseño e innovación para empresas y organizaciones de diversos sectores económicos.
            </p>
        </div>
      </Section>
      <Section
        id='contact'
        title={'Contactenos'}
        desc='Envie tu solicitud y te contactaremos' >
        <div className='col-12 col-lg-10 col-xl-8'>
          <form>
            <div class="row">
              <div class="col-12 col-md-6 mb-3">
                <input type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <input type="text" class="form-control" placeholder="Apellido" />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <input type="email" class="form-control" placeholder="Correo Electronico" />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <input type="number" class="form-control" placeholder="Numero de telefono" />
              </div>
              <div className='col-12 mb-3'>
                <textarea placeholder='Haz un comentario' class="form-control" rows="3"></textarea>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
            <button type="submit" class="btn btnPrimary mt-3">Enviar</button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}

export default App;
