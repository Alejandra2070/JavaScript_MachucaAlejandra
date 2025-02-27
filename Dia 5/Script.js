var productos=[
    {
        "products": [
          {
            "id": 1,
            "name": "Laptop",
            "category": "Electronics",
            "price": 999.99,
            "quantityInStock": 50,
            "supplierId": 101
          },
          {
            "id": 2,
            "name": "Smartphone",
            "category": "Electronics",
            "price": 999,
            "quantityInStock": 7,
            "supplierId": 101
          }
        ]
    } 
]
var supplier=[
    {
        "suppliers": [
      {
        "id": 101,
        "name": "Tech Supplies Inc.",
        "contactInfo": {
          "phone": "123-456-7890",
          "email": "sales@techsupplies.com",
          "address": "123 Tech Lane, Silicon Valley, CA"
        }
      }
        ]
    }
]
var ordenes=[
    {
        "orders": [
      {
        "orderId": 1001,
        "productId": 1,
        "quantity": 5,
        "price": 999.99,
        "orderDate": "2024-08-23",
        "status": "Delivered"
      }
    ]
    }
]

console.log("----Bienvenidossss----")
console.log("1. Gestión de productos")
console.log("2. Gestión de proveedores")
console.log("3. Gestión de pedidos")
console.log("4. Gestión de existencias")
console.log("5. Gestión de informes")
console.log("6. Búsqueda y filtrado de productos")
console.log("7. Búsqueda y filtrado de pedidos")
opc=prompt("Elige una de las opciones de nuestro menú: ")
if (opc==1){
    booleano=true
    console.log("---Esta es la gestión de productos---")
    while (booleano=true){
        console.log("1. Ver productos")
        console.log("2. Añadir productos")
        console.log("3. Eliminar productos")
        console.log("4. Actualizar productos")
        console.log("5. Volver al menú")
        x=(prompt("Elige una de estas opciones: "))
        if (x==1){
            function viewProducts(){
                for (var ver of productos[0]["products"]){
                    console.log("ID:",ver.id)
                    console.log("Nombre del producto:",ver.name)
                    console.log("Categoría:",ver.category)
                    console.log("Precio:",ver.price)
                    console.log("Cantidad en stock:",ver.quantityInStock)
                    console.log("Id del proveedor:",ver.supplierId)
                }
            }
            console.log(viewProducts())
        }
        else if (x==2){
            function addProduct(){
                let id=prompt("Ingresa el id del producto: ")
                let name=prompt("Ingresa el nombre del producto: ")
                let category=prompt("Ingresa la categoría del producto: ")
                let price=prompt("Ingresa el precio del producto: ")
                let quantityInStock=prompt("Ingresa la cantidad en stock del producto: ")
                let supplierId=prompt("Ingresa el id del proveedor del producto: ")
                productos[0]["products"].push({"id": id, "name": name, "category": category, "price": price, "quantityInStock": quantityInStock, "supplierId":supplierId})
                console.log(["products"])
            }
            console.log(addProduct())
        }
        else if (x==3){
            function deleteProduct(id){
                id=prompt("Ingresa el id del producto que deseas eliminar: ")
                for (const i of productos[0]["products"]){
                    if (id==i["id"]){
                        var ubi=productos[0]["products"].indexOf(i)
                        productos[0]["products"].splice(ubi,1)
                        console.log(productos)
                    }
                }
            }
            console.log(deleteProduct())
        }
        else if (x==4){
            function updateProduct(id, newDetails){
                id=prompt("Ingresa el id del producto al que quieres actualizar información: ")
                for (const i of productos[0]["products"]){
                    if (id==i["id"]){
                        console.log("1. Id")
                        console.log("2. Nombre")
                        console.log("3. Categoría")
                        console.log("4. Precio")
                        console.log("5. Cantidad en stock")
                        console.log("6. Id del proveedor")
                        newDetails=prompt("Qué deseas actualizar?: ")
                        if (newDetails==1){
                            let id=prompt("Ingresa el nuevo id: ")
                            i["id"]=id
                        }
                        if (newDetails==2){
                            let name=prompt("Ingresa el nuevo nombre del producto: ")
                            i["name"]=name
                        }
                        if (newDetails==3){
                            let category=prompt("Ingresa la nueva categoría del producto: ")
                            i["category"]=category
                        }
                        if (newDetails==4){
                            let price=prompt("Ingrese el nuevo precio del producto: ")
                            i["price"]=price
                        }
                        if (newDetails==5){
                            let quantityInStock=prompt("Ingrese la nueva cantidad en stock: ")
                            i["quantityInStock"]=quantityInStock
                        }
                        if (newDetails==6){
                            let supplierId=prompt("Ingrese el nuevo id del proveedor: ")
                            i["supplierId"]=supplierId
                        }
                    }
                }
                console.log()
            }
            console.log(updateProduct())
        }
        else if (x==5){
            console.log("Volviste al menú")
            booleano=false
        }
    } 
}
if(opc==2){
    boo=true
    console.log("----Esta es la gestión de proveedores")
    while (boo=true){
        console.log("1. Ver proveedores")
        console.log("2. Añadir proveedores")
        console.log("3. Eliminar proveedores")
        console.log("4. Actualizar información de los proveedores")
        console.log("5. Volver al menú")
        o=prompt("Elige una de estas opciones: ")
        if (o==1){
            function viewSuppliers(){
                for (var ver of supplier[0]["suppliers"]){
                    console.log("ID:",ver.id)
                    console.log("Nombre del proveedor:",ver.name)
                    console.log("Número de teléfono:",ver.contactInfo.phone)
                    console.log("Email:",ver.contactInfo.email)
                    console.log("Dirección:",ver.contactInfo.address)
                }
            }
            console.log(viewSuppliers())
        }
        if (o==2){
            function addSupplier(supplier){
                let id=prompt("Ingresa el id del proveedor: ")
                let name=prompt("Ingresa el nombre del proveedor: ")
                let phone=prompt("Ingresa el número de teléfono del proveedor: ")
                let email=prompt("Ingresa el email del proveedor: ")
                let address=prompt("Ingresa la dirección del proveedor: ")
                supplier[0]["suppliers"].push({"id": id, "name": name, "phone": phone, "email": email, "address": address})
                console.log(supplier)
            }
            console.log(addSupplier())
        }
        if (o==3){
            function deleteSupplier(id){
                [supplier].pop()
                console.log(supplier)
            }
            console.log(deleteSupplier)
        }
        if (o==4){
            function updateSupplier(id, newDetails){
                id=prompt("Ingresa el id del proveedor al que quieres actualizar la información: ")
                for (const i of supplier[0]["suppliers"]){
                    if (id==i["id"]){
                        console.log("1. Id")
                        console.log("2. Nombre")
                        console.log("3. Número de teléfono")
                        console.log("4. Email")
                        console.log("5. Dirección")
                        newDetails=prompt("Qué deseas actualizar del proveedor?: ")
                        if (newDetails==1){
                            let id=prompt("Ingresa el nuevo id: ")
                            i["id"]=id
                        }
                        if (newDetails==2){
                            let name=prompt("Ingresa el nuevo nombre del proveedor: ")
                            i["name"]=name
                        }
                        if (newDetails==3){
                            let phone=prompt("Ingresa el nuevo número de teléfono: ")
                            i["phone"]=phone
                        }
                        if (newDetails==4){
                            let email=prompt("Ingresa el nuevo email del proveedor: ")
                            i["email"]=email
                        }
                        if (newDetails==5){
                            let address=prompt("Ingresa la nueva direción del proveedor: ")
                            i["address"]=address
                        }
                    }
                }
            }
            console.log(updateSupplier())
        }
        if (o==5){
                console.log("Volviste al menú")
                boo=false
        }
    }
}
if (opc==3){
    bool=true
    console.log("----Esta es la Gestión de pedidos----")
    while (bool=true){
        console.log("1. Ver pedidos")
        console.log("2. Eliminar pedidos")
        console.log("3. Actualizar pedidos")
        console.log("4. Volver al menú")
        p=prompt("Elige una de nuestras opciones: ")
        if (p==1){
            function viewOrders(){
                for (var ver of ordenes[0]["orders"]){
                    console.log("Id de la orden:",ver.orderId)
                    console.log("Id del producto:",ver.productId)
                    console.log("Cantidad del producto:",ver.quantity)
                    console.log("Fecha de la orden:",ver.orderDate)
                    console.log("Estatus de la orden:",ver.status)
                }
            }
            console.log(viewOrders())
        }
        if (p==2){
            function deleteOrder(orderId){
                [ordenes].pop()
                console.log(ordenes)
            }
        }
        if (p==3){
            function updateOrder(orderId, newDetails){
                orderId=prompt("Ingresa el id de la orden a la que quieres actualizar la información: ")
                for (const i of ordenes[0]["orders"]){
                    if (orderId==i["orderId"]){
                        console.log("1. Id de la orden")
                        console.log("2. Id del producto")
                        console.log("3. Cantidad del producto")
                        console.log("4. Fecha de la orden")
                        console.log("5. Estatus del pedido")
                        r=prompt("Elige una de estas opciones: ")
                        if (r==1){
                            let orderId=prompt("Ingresa el nuevo id de la orden: ")
                            i["orderId"]=orderId
                        }
                        if (r==2){
                            let productId=prompt("Ingresa el nuevo id del producto: ")
                            i["productId"]=productId
                        }
                        if (r==3){
                            let quantity=prompt("Ingresa la nueva cantidad del producto: ")
                            i["quantity"]=quantity
                        }
                        if (r==4){
                            let orderDate=prompt("Ingresa la nueva fecha de la orden en formato (YYYY-MM-DD): ")
                            i["orderDate"]=orderDate
                        }
                        if (r==5){
                            let status=prompt("Ingresa el estatus de la orden: ")
                            i["status"]=status
                        }
                    }
                }
            }
            if (p==4){
                console.log("Volviste al menú")
                bool=false
            }
        }
    }
}
if (opc==4){
    boole=true
    console.log("----Esta es la gestón de existencias----")
    while (boole=true){
        console.log("1. Ver productos con poco stock")
        console.log("2. Aumentar nivel de stock de un producto")
        console.log("3. Volver al menú")
        s=prompt("Elige una de estas opciones: ")
        if (s==1){
            function checkStockLevels(){
                for (var verProd of productos[0]["products"]){
                    if (verProd.quantityInStock<8){
                        console.log("Estos son los productos con poco stock: ")
                        console.log("ID:",verProd.id)
                        console.log("Nombre del producto:",verProd.name)
                        console.log("Categoría del producto:",verProd.category)
                        console.log("Precio del producto:",verProd.price)
                        console.log("Cantidad en stock:",verProd.quantityInStock)
                        console.log("Id del proveedor del producto:",verProd.supplierId)
                    }
                }
            }
            console.log(checkStockLevels())
        }
        else if (s==2){
            function restockProduct(id, quantity){
                id=prompt("Ingresa el id del producto al que quieres agregar más cantidad en stock: ")
                for (var quantity of productos[0]["products"]){
                    if (id==quantity.id){
                        let quantityInStock=prompt("Ingrese la nueva cantidad en stock del producto: ")
                        quantity["quantityInStock"]=quantityInStock
                        console.log(quantity)
                    }
                }
            }
            console.log(restockProduct())
        }
        else if (s==3){
            console.log("Volviste al menú")
            boole=false
        }
    }
}
if (opc==5){
    boolea=true
    function generateSalesReport(){
        console.log("----Esta es la gestión de informes----")
        while (boolea=true){
            console.log("1. Número total de pedidos")
            console.log("2. Ingresos totales generados")
            console.log("3. Desglose de ventas por productos")
            console.log("4. Informe de todos los productos")
            console.log("5. Volver al menú")
            m=prompt("Elige una de estas opciones: ")
            if (m==1){
                fecha=prompt("Ingresa la fecha en que quieres revisar el número de pedidos: ")
                pedidos=ordenes[0]["orders"].filter(pedido=>pedido.orderDate==fecha)
                total=pedidos.length
                console.log("Este es el número total de pedidos: ",total)
            }
            else if(m==2){
                sumaTotal=0
                for (var ing of ordenes){
                    fecha=prompt("Ingresa la fecha para revisar los ingresos totales generados: ")
                    if (ing.orderDate==fecha){
                        console.log("Id de la orden:",ing.orderId)
                        console.log("Id del producto:",ing.productId)
                        console.log("Cantidad:",ing.quantity)
                        console.log("Fecha de la orden:",ing.orderDate)
                        search=ing.productId

                        for (var ing of productos[0]["products"]){
                            if (ing.id==search){
                                total=ing.quantity*ing.price
                                sumaTotal=+total
                            }
                        }
                    }
                }
                console.log("Este fue el total de los ingresos: ",sumaTotal)
            }
            else if(m==3){
                id=prompt("Ingresa el id del producto para ver el desglose: ")
                for (var ver of productos[0]["products"]){
                    if (id==ver.id){
                        console.log("Id:",ver.id)
                        console.log("Nombre del producto: ",ver.name)
                        console.log("Precio del producto: ",ver.price)
                        busq=ver.price

                        for (var ver of ordenes[0]["orders"]){
                            precio=(ver.quantity*ver.price)
                            console.log("Precio total de la venta: ",precio)
                        }
                    }

                }
            }
            else if(m==4){
                function generateInventoryReport(){
                    for (var ver of productos[0]["products"]){
                        console.log("Este es el informe de todos los productos: ")
                        console.log("ID:",ver.id)
                        console.log("Nombre del producto:",ver.name)
                        console.log("Categoría del producto:",ver.category)
                        console.log("Precio del producto:",ver.price)
                        console.log("Cantidad en stock del producto:",ver.quantityInStock)
                        console.log("Id del proveedor del producto:",ver.supplierId)
                        valor=ver.quantityInStock*ver.price
                        console.log("El valor total de la cantidad en stock es de: ",valor)
                    }
                }
                console.log(generateInventoryReport())
            }
            else if(m==5){
                console.log("Volviste al menú")
                boolea=false
            }
        } 
    }
    console.log(generateSalesReport())
}
if(opc==6){
    boolean=true
    function searchProducts(query){
        console.log("----Esta es la gestión de búsqueda y filtrado de productos----")
        while (boolean=true){
            console.log("1. Nombre")
            console.log("2. Categoría")
            console.log("3. Proveedor")
            console.log("4. Volver al menú")
            query=prompt("Estos son los datos con los que puedes realizar búsquedas. Elige una opción: ")
            if (query==1){
                nombre=prompt("Ingresa el nombre del producto que deseas buscar: ")
                for (var ver of productos[0]["products"]){
                    if (nombre==ver.name){
                        console.log("ID:",ver.id)
                        console.log("Nombre del producto:",ver.name)
                        console.log("Categoría:",ver.category)
                        console.log("Precio:",ver.price)
                        console.log("Cantidad en stock:",ver.quantityInStock)
                        console.log("Id del proveedor:",ver.supplierId)
                    }
                }
            }
            else if (query==2){
                categoria=prompt("Ingresa la categoría del producto que quieres buscar: ")
                for (var ver of productos[0]["products"]){
                    if (categoria==ver.category){
                        console.log("ID:",ver.id)
                        console.log("Nombre del producto:",ver.name)
                        console.log("Categoría:",ver.category)
                        console.log("Precio:",ver.price)
                        console.log("Cantidad en stock:",ver.quantityInStock)
                        console.log("Id del proveedor:",ver.supplierId)
                    }
                }
            }
            else if (query==3){
                proveedor=prompt("Ingresa el id del proveedor del producto: ")
                for (var ver of productos[0]["products"]){
                    if (proveedor==ver.supplierId){
                        console.log("ID:",ver.id)
                        console.log("Nombre del producto:",ver.name)
                        console.log("Categoría:",ver.category)
                        console.log("Precio:",ver.price)
                        console.log("Cantidad en stock:",ver.quantityInStock)
                        console.log("Id del proveedor:",ver.supplierId)
                    }
                }
            }
            else if (query==4){
                console.log("Volviste al menú")
                boolean=false
            }
        }
    }
    console.log(searchProducts())
}
if(opc==7){
    booleanoo=true
    function filterOrders(criteria){
        console.log("----Esta es la gestión de búsqueda y filtrado de pedidos----")
        while (booleanoo=true){
            console.log("1. Estado")
            console.log("2. Fechas")
            console.log("3. Producto")
            console.log("4. Volver al menú")
            criteria=prompt("Estos son los datos con los que puedes realizar búsquedas. Elige una opción: ")
            if (criteria==1){
                for (var ver of ordenes[0]["orders"]){
                    estado=prompt("Ingresa el estado de la orden que quieres buscar: ")
                    if (estado==ver.status){
                        console.log("Id de la orden:",ver.orderId)
                        console.log("Id del producto:",ver.productId)
                        console.log("Cantidad del producto:",ver.quantity)
                        console.log("Fecha de la orden:",ver.orderDate)
                        console.log("Estatus de la orden:",ver.status)
                    }
                }
            }
            else if (criteria==2){
                for (var ver of ordenes[0]["orders"]){
                    fecha=prompt("Ingresa la fecha de la orden que quieres buscar: ")
                    if (fecha==ver.orderDate){
                        console.log("Id de la orden:",ver.orderId)
                        console.log("Id del producto:",ver.productId)
                        console.log("Cantidad del producto:",ver.quantity)
                        console.log("Fecha de la orden:",ver.orderDate)
                        console.log("Estatus de la orden:",ver.status)
                    }
                }
            }
            else if (criteria==3){
                for (var ver of ordenes[0]["orders"]){
                    producto=prompt("Ingresa el id del producto que está en la orden que quieres buscar: ")
                    if (producto==ver.productId){
                        console.log("Id de la orden:",ver.orderId)
                        console.log("Id del producto:",ver.productId)
                        console.log("Cantidad del producto:",ver.quantity)
                        console.log("Fecha de la orden:",ver.orderDate)
                        console.log("Estatus de la orden:",ver.status)
                    }
                }
            }
            else if (criteria==4){
                console.log("Volviste al menú")
                booleanoo=false
            }
        }
    }
    console.log(filterOrders())
}
//Desarrollado por Alejandra Machuca Grupo T2