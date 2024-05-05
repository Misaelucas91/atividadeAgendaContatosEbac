const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumContato = document.getElementById('num-contato');

  let linha = `<tr>`;
  linha += `<td>${inputNomeContato.value}</td>`;
  linha += `<td>${inputNumContato.value}</td>`;
  linha += `</tr>`;

  linhas += linha

  const corpoAgenda = document.querySelector('tbody');
  corpoAgenda.innerHTML = linhas;

  inputNomeContato.value = '';
  inputNumContato.value = '';
});