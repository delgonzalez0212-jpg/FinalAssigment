// ACTIVITIES FROM JSON

let actividades = [];

const lista = document.getElementById("lista-actividades");

// SHOW ACTIVITIES

function mostrarActividades(datos, tipo) {

    lista.innerHTML = "";

    datos.forEach(actividad => {

        if (tipo === "All" || tipo === actividad.tipo) {

            lista.innerHTML += `
                <div class="col-12 col-md-4">

                    <div class="activity-card border border-secondary rounded p-4 h-100">

                        <p class="tipo fw-bold">
                            ${actividad.tipo}
                        </p>

                        <h3>
                            ${actividad.nombre}
                        </h3>

                        <p>
                            ${actividad.descripcion}
                        </p>

                    </div>

                </div>
            `;

        }

    });

}

// GET DATA FROM JSON

fetch("data/agenda.json")
    .then(response => response.json())
    .then(datos => {

        actividades = datos;

        mostrarActividades(actividades, "All");

    });

// MODAL FORM

document.getElementById("formularioActividades")
    .addEventListener("submit", function(evento) {

        evento.preventDefault();

        const tipo = document.getElementById("tipoActividad").value;

        mostrarActividades(actividades, tipo);

        document.getElementById("resultadoBusqueda").innerHTML =
            "Applied filter: " + tipo;

    });