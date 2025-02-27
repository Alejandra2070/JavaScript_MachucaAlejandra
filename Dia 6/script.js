fetch("info.json")
.then(res => res.json())
.then(data => {

    //Productossss---------------------------------------------------------------------------

    function añadirProductos() {//añadir productoss
        const productId = parseFloat(document.getElementById("id1").value);
        const name = (document.getElementById("nombre1").value);
        const category = (document.getElementById("categoria1").value);
        const price = (document.getElementById("precio1").value);
        const quantityInStock = parseInt(document.getElementById("cantidad1").value);
        const supplierId = (document.getElementById("idProv1").value);
        data[0]["products"].push({ productId, name, category, price, quantityInStock, supplierId })
        console.log(data[0]["products"])
    }
    button1.addEventListener("click", (e) => {
        añadirProductos()
    })

    function actualizarProductos() {//Actualizar productoss
        let filtrar = parseInt(document.getElementById("filtrar").value);
        output4.innerHTML = "";
        let contador = false;
        for (let i of data[0].products) {
            if (i["id"] === filtrar) {

                output4.innerHTML += `<h3>Id: ${i["id"]}
            <h3> Name: ${i["name"]}
            <h3> Category: ${i["category"]}
            <h3> Precio: ${i["price"]}
            <h3> Cantidad: ${i["quantityInStock"]}
            <h3> Id Proveedor: ${i["supplierId"]}`
                contador = true

                buttonActualizar.addEventListener("click", (e) => {
                    let nuevoPrecio = parseInt(document.getElementById("actualizarPro").value);
                    i.price = nuevoPrecio
                    actualizarProductos()
                })

            }
        }

        if (!contador) {
            output4.innerHTML = "no encontrado"
        }
    }
    button2.addEventListener("click", (e) => {
        actualizarProductos()
        document.getElementById("filtrar").style.display = "none"
        document.getElementById("button2").style.display = "none"
        document.getElementById("actualizarPro").style.display = "block"
        document.getElementById("buttonActualizar").style.display = "block"

    })

    function verProductos() {//ver productosss
        let productos = data[0]["products"];
        let output = document.getElementById("output");
        output.innerHTML = "";
        productos.forEach(product => {
            document.getElementById("output").innerHTML += `
        <p>Id: ${product.id}</p>
        <p>Nombre: ${product.name}</p>
        <p>Categoría: ${product.category}</p>
        <p>Precio: ${product.price}</p>
        <p>Cantidad: ${product.quantityInStock}</p>
        <p>Id del proveedor: ${product.supplierId}</p>
        `
        })
    }
    button4.addEventListener("click", (e) => {
        verProductos()
    })

    function eliminarProductos(id) {
        let idProDelete = parseInt(document.getElementById("idProDelete").value);
        if (data[0].products.find(i=>i.id===idProDelete)){
            data[0].products=data[0].products.filter(i =>i.id!==idProDelete)
            document.getElementById("by").innerHTML=""
            verProductos()
        }
        else{
            alert("El id no ha sido encontrado")
        }
    }
    button3.addEventListener("click", (e) => {
        eliminarProductos()
    })

    //ordenesss------------------------------------------------------------------
    

    function actualizarOrdenes() {
        let idOrder = parseInt(document.getElementById("idOrder").value);
        output5.innerHTML = "";
        let cont = false;
        for (let i of data[0].orders) {
            if (i["orderId"] === idOrder) {
                output5.innerHTML += `<h3>Id de la orden: ${i["orderId"]}
            <h3>Id del producto: ${i["productId"]}
            <h3> Cantidad: ${i["quantity"]}
            <h3> Precio: ${i["price"]}
            <h3> Fecha de la orden: ${i["orderDate"]}
            <h3> Estatus: ${i["status"]}`
                cont = true

                buttonActualizarOrd.addEventListener("click", (e) => {
                    let nuevoPrecioOrd = parseInt(document.getElementById("actualizarOrd").value);
                    i.price = nuevoPrecioOrd
                    actualizarOrdenes()
                })
            }
        }
        if (!cont) {
            output.innerHTML = "No encontrado"
        }
    }
    button5.addEventListener("click", (e) => {
        actualizarOrdenes()
        document.getElementById("idOrder").style.display = "none"
        document.getElementById("button5").style.display = "none"
        document.getElementById("actualizarOrd").style.display = "block"
        document.getElementById("buttonActualizarOrd").style.display = "block"
    })

    function eliminarOrdenes(){
        let idDeleteOrder = parseInt(document.getElementById("idDeleteOrder").value);
        if (data[0].orders.find(i=>i.orderId===idDeleteOrder)){
            data[0].orders=data[0].orders.filter(i =>i.orderId!==idDeleteOrder)
            document.getElementById("in").innerHTML=""
            verOrdenes()
        }
        else{
            alert("El id no ha sido encontrado")
        }
    }
    button6.addEventListener("click", (e) => {
        eliminarOrdenes()
    })

    function verOrdenes() {
        let ordenes = data[0]["orders"];
        let output2 = document.getElementById("output2");
        output2.innerHTML = "";
        ordenes.forEach(orden => {
            document.getElementById("output2").innerHTML += `
        <p>Id de la orden: ${orden.orderId}</p>
        <p>Id del producto: ${orden.productId}</p>
        <p>Cantidad: ${orden.quantity}</p>
        <p>Precio: ${orden.price}</p>
        <p>Fecha de la orden: ${orden.orderDate}</p>
        <p>Estatus: ${orden.status}</p>
        `
        })
    }
    button7.addEventListener("click", (e) => {
        verOrdenes()
    })

    //Proveedores-----------------------------------------------------------------------------------------

    function añadirProveedores() {
        const idDos1 = parseFloat(document.getElementById("idProvee").value);
        const name1 = (document.getElementById("nameProvee").value);
        const phone1 = (document.getElementById("phonee").value);
        const email1 = (document.getElementById("emaill").value);
        const address1 = parseInt(document.getElementById("address1").value);
    
        data[0]["suppliers"].push({ idDos1, name1, phone1, email1, address1 })
        console.log(data[0]["suppliers"])
    }
    button8.addEventListener("click", (e) => {
        añadirProveedores()
    })

    function actualizarProveedores() {
        let idActProv = parseInt(document.getElementById("idActProv").value);
        output9.innerHTML = "";
        let contado = false;
        for (let i of data[0].suppliers) {
            if (i["id"] === idActProv) {
                output9.innerHTML += `<h3>Id: ${i["idActProv"]}
            <h3>Nombre: ${i["name"]}
            <h3>Número de teléfono: ${i["contactInfo"]["phone"]}
            <h3>Email: ${i["contactInfo"]["email"]}
            <h3>Dirección: ${i["contactInfo"]["address"]}`
                contado = true

                buttonActuProv.addEventListener("click", (e) => {
                    let nuevoAddressProv = parseInt(document.getElementById("actualizarProv").value);
                    i.contactInfo["address"] = nuevoAddressProv
                    actualizarProveedores()
                })
            }
        }
        if (!contado) {
            output9.innerHTML = "No encontrado"
        }
    }
    button9.addEventListener("click", (e) => {
        
        document.getElementById("idActProv").style.display = "none"
        document.getElementById("button9").style.display = "none"
        document.getElementById("actualizarProv").style.display = "block"
        document.getElementById("buttonActuProv").style.display = "block"
        actualizarProveedores()
        
    })

    function eliminarProveedores() {
        let idDeleteProv = parseInt(document.getElementById("idDeleteProv").value);
        if (data[0].suppliers.find(i=>i.id===idDeleteProv)){
            data[0].suppliers=data[0].suppliers.filter(i =>i.id!==idDeleteProv)
            document.getElementById("uno").innerHTML=""
            verProveedores()
        }
        else{
            alert("El id no ha sido encontrado")
        }
    }
    button10.addEventListener("click", (e) => {
        eliminarProveedores()
    })

    function verProveedores() {
        let proveedores = data[0]["suppliers"];
        let output3 = document.getElementById("output3");
        output3.innerHTML = "";
        proveedores.forEach(proveedor => {
            document.getElementById("output3").innerHTML += `
        <p>Id del proveedor: ${proveedor.id}</p>
        <p>Nombre del proveedor: ${proveedor.name}</p>
        <p>---Información de contacto---</p>
        <p>Número de teléfono: ${proveedor.contactInfo.phone}</p>
        <p>Email: ${proveedor.contactInfo.email}</p>
        <p>Dirección: ${proveedor.contactInfo.address}</p>
        `
        })
    }
    button11.addEventListener("click", (e) => {
        verProveedores()
    })
    
})

//Desarrollado por Alejandra Machuca, estudiante de CampusLands grupo T2