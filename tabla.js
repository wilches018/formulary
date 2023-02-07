var row = "";
var filas = [];
function addrow() {
    const correo = document.getElementById('correo');
    const descripcion = document.getElementById('descripcion');

    row = `<tr>
              <th scope="row">${correo.value}</th>
              <td>${descripcion.value}</td>
            </tr>`;
    filas.push(row);
    //addr.innerHTML = row;
}

function leerarray() {
    const addr = document.getElementById('addr');
    filas.forEach(item => {
        console.log(item);
    });
    /*
    for (let index = 0; index < filas.length; index++) {
      const element = filas[index];
      console.log(element);    
    }
  */
}