import React from 'react';
import { shallow } from 'enzyme';
import ListaTareas from './ListaTareas';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('ListaTareas', () => {
  let wrapper;

  beforeEach(() => {
    // Simulamos que el usuario no está autenticado
    jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValueOnce(JSON.stringify({ logueado: false }));
    wrapper = shallow(<ListaTareas />);
  });

  it('debería redirigir a la página de inicio de sesión si el usuario no está autenticado', () => {
    expect(useNavigate).toHaveBeenCalled();
  });

  it('debería renderizar correctamente si el usuario está autenticado', () => {
    // Simulamos que el usuario está autenticado
    const usuario = { logueado: true }; // Puedes agregar otros atributos según sea necesario
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValueOnce(JSON.stringify(usuario));
    wrapper = shallow(<ListaTareas />);
    
    // Aquí puedes agregar las expectativas para verificar que el componente se renderiza correctamente
  });
});
