const validateEmail = require('./js/validator');

const cases = [
  { email: 'usuario@gmail.com', expected: true },
  { email: 'nombre.apellido@empresa.com.ar', expected: true },
  { email: 'user+filtro@outlook.com', expected: true },
  { email: 'x@y.io', expected: true },
  { email: 'contacto@mi-dominio.net', expected: true },
  { email: 'sinArroba.com', expected: false },
  { email: '@sinusuario.com', expected: false },
  { email: 'usuario@sinpunto', expected: false },
  { email: '  espacios@mail.com', expected: false },
  { email: '', expected: false }
];

cases.forEach(c => {
  const got = validateEmail(c.email);
  const pass = got === c.expected ? 'PASS' : 'FAIL';
  console.log(`${c.email} → ${got} → ${c.expected} → ${pass}`);
});
