document.getElementById("boton").addEventListener("click", function(){
    let heroesId = document.getElementById("heroesId").value;
    fetch(`https://superheroapi.com/api.php/aeddac726bf2761ccc114a431c250adb/${heroesId}`)
    .then(res => res.json())
    .then(data => {
        displayDataInTable(data);
    })
    .catch(error => {
        console.error("Error", error)
    })
});

function displayDataInTable(data){
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";//para limpiar el contenido

    //Se crea la tabla
    const table = document.createElement("table");

    //Se crea la fila de encabezados
    const headerRow = document.createElement("tr");
    const headers = ["Propiedad"];
    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    //Se llena la tabla con los datos del API
    for (let key in data){
        if (data.hasOwnProperty(key)) {

            const headerRow = document.createElement("tr");
            const header = document.createElement("th");
            header.colSpan = 2;
            header.textContent = key;
            headerRow.appendChild(header);
            table.appendChild(headerRow);

            const row = document.createElement("tr");

            const cellKey = document.createElement("td");
            cellKey.textContent = "Valor";
            row.appendChild(cellKey);

            const cellValue = document.createElement("td");
            if (key === "image" && typeof data[key] === "object" && data[key].url) {
                const imgC=document.createElement("div");
                imgC.className="center";
                const img = document.createElement("img");
                img.src = data[key].url;
                imgC.appendChild(img);
                cellValue.appendChild(imgC);
            } else {
                cellValue.textContent = typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key];
            }
            row.appendChild(cellValue);

            table.appendChild(row);
        }
    }

    outputDiv.appendChild(table);
}
//Desarrollado por Alejandra Machuca Grupo T2