const inputCantidad = document.getElementById('cantidad');
const resultadoElement = document.getElementById('resultado');

inputCantidad.addEventListener('change', function() {
  const cantidad = parseInt(inputCantidad.value);
  const precioUnitario = 24.99;
  const total = cantidad * precioUnitario;
  resultadoElement.textContent = 'Total: subtotal: $' + total.toFixed(2);
});
