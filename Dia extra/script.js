var link = 'https://www.datos.gov.co/resource/9qqx-f753.json'
const info = document.getElementById("caja2");

mostrar(link)

function mostrar(link){
    fetch(link)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        info.innerHTML = '';

        data.forEach((i, index) => {
            info.innerHTML += `
                <div class="caja3">
                    <p class="name">Nombre geografico: ${i.nombre_geografico}</p>
                    <input type="checkbox" id="cerrar-${index}">
                    <label for="cerrar-${index}">
                        <p>Ver más</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </label>
                    <section id="cajita3-${index}" class="cajita3">
                        <p class="code">Código dane: ${i.codigo_dane}</p>
                        <p class="muni">Municipio: ${i.municipio}</p>
                        <p class="id">Id: ${i.objectid}</p>
                        <p class="pap">${i.pap}</p>
                        <p class="descp">Descripción: ${i.descripcio}</p>
                        <p class="nameU">Nombre: ${i.nombre}</p>
                        <p class="type">Type: ${i.point.type}</p>
                        <p class="coor">Coordenadas: ${i.point.coordinates}</p>
                        <p class="site">${i.tp_sitio}</p>
                    </section>
                </div>
            `;
        });

        // Añadir evento a cada checkbox
        data.forEach((_, index) => {
            const checkbox = document.getElementById(`cerrar-${index}`);
            const section = document.getElementById(`cajita3-${index}`);
            
            checkbox.addEventListener('change', function() {
                // Ocultar todas las secciones
                document.querySelectorAll('.cajita3').forEach(sec => {
                    sec.style.opacity = '0';
                    sec.style.height = '0';
                    sec.style.display = 'none'; // Añadido para ocultar completamente
                });
                
                // Mostrar solo la sección correspondiente al checkbox marcado
                if (this.checked) {
                    section.style.opacity = '1';
                    section.style.height = '30vw';
                    section.style.display = 'block'; // Asegúrate de que esté visible
                }
            });
        });
    });
      
    document.getElementById("input").addEventListener("keyup", e => {
        const searchTerm = e.target.value.toLowerCase();

        document.querySelectorAll(".caja3").forEach(element => {
            const code1 = element.querySelector(".code").textContent.toLowerCase();
            const muni1 = element.querySelector(".muni").textContent.toLowerCase();
            const name1 = element.querySelector(".name").textContent.toLowerCase();
            const id1 = element.querySelector(".id").textContent.toLowerCase();
            const pap1 = element.querySelector(".pap").textContent.toLowerCase();
            const descp1 = element.querySelector(".descp").textContent.toLowerCase();
            const nameU1 = element.querySelector(".nameU").textContent.toLowerCase();
            const type1 = element.querySelector(".type").textContent.toLowerCase();
            const coor1 = element.querySelector(".coor").textContent.toLowerCase();
            const site1 = element.querySelector(".site").textContent.toLowerCase();
            if (code1.includes(searchTerm) || muni1.includes(searchTerm) || name1.includes(searchTerm) || id1.includes(searchTerm) || pap1.includes(searchTerm) || descp1.includes(searchTerm) || nameU1.includes(searchTerm) || type1.includes(searchTerm) || coor1.includes(searchTerm) || site1.includes(searchTerm)){
                element.classList.remove("filtro");
            }
            else {
                element.classList.add("filtro");
            }
        })

    })  
    document.getElementById('cerrar').addEventListener('change', function() {
        const otraSeccion = document.getElementById('otraSeccion');
        if (this.checked) {
            otraSeccion.style.display = 'block';
        } else {
            otraSeccion.style.display = 'none';
        }
    });  
}