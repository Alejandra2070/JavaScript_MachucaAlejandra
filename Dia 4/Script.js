//información utilizada para la realización del trabajo
var informacion = [
    {
        "informacion_personal": [
            {
                "nombre": "juan",
                "edad": 30,
                "calle": "Calle Principal",
                "numero": 123,
                "ciudad": "Ciudad Ejemplo",
                "correo": "juan.perez@example.com",
                "telefono": "+123456789"
            }
        ]
    }
]
const historial = [
    {
        "historial_educativo": [
            {
            "nivel": "Secundaria",
            "institucion": "Instituto Secundario",
            "anio_inicio": 2000,
            "anio_fin": 2005
            },
            {
            "nivel": "Universidad",
            "institucion": "Universidad Ejemplar",
            "titulo": "Licenciatura en Ciencias",
            "anio_inicio": 2006,
            "anio_fin": 2010
            }
        ]
    }
]
const experiencia = [
    {
        "experiencia_laboral": [
            {
            "puesto": "Desarrollador de Software",
            "empresa": "Tech Solutions",
            "periodo": "2010-2015",
            "responsabilidades": [
            "Desarrollo de aplicaciones web",
            "Mantenimiento de bases de datos"
            ]
            },
            {
            "puesto": "Gerente de Proyectos",
            "empresa": "Proyectos Avanzados",
            "periodo": "2016-actualidad",
            "responsabilidades": [
            "Planificación y supervisión de proyectos",
            "Coordinación de equipos"
            ]
            }
        ]
    }
]

//menú principal para facilitar el uso del programa
console.log("--------Menú--------")
console.log("1. Información personal")
console.log("2. Historial educativo")
console.log("3. Experiencia laboral")
opc=prompt("Elige una de nuestras opciones: ")//el usuario elige una de las opciones
if (opc==1){//se empieza a dar la respuesta o solución a la opción
    console.log("---Información personal---")//se crea un submenu para realizar las preferencias del usuario
    console.log("1. Ver información")
    console.log("2. Actualizar información")
    console.log("3. Eliminar datos")
    console.log("4. Agregar información")
    x=prompt("Elige una opción: ")
    if (x==1){//se empieza a dar solución al submenu
        for (var infor of informacion[0]["informacion_personal"]){//se ubica para mostrar la información
            console.log("Nombre:",infor["nombre"])
            console.log("Edad:",infor["edad"])
            console.log("Dirección:")
            console.log("Calle:",infor["calle"])
            console.log("Número:",infor["numero"])
            console.log("Ciudad:",infor["ciudad"])
            console.log("Información de Contacto:")
            console.log("Correo:",infor["correo"])
            console.log("Teléfono:",infor["telefono"])
        }
            
    }
    if (x==2){
        nombre1=prompt("Ingresa el nombre del usuario al que quieres actualizar la información: ")
        for(const i of informacion[0]["informacion_personal"]){
            if (nombre1==i["nombre"]){
                console.log("1. Nombre", "2. Edad", "3. Calle", "4. Número", "5. Ciudad", "6. Correo", "7. Teléfono");//opciones de elección para el usuario
                v=prompt("Qué deseas actualizar?");//elige una de las opciones
                if (v==1){//se le da la solución a cada opción elegida
                    let nombre=prompt("Ingresa el nuevo nombre: ")
                    i["nombre"]=nombre
                }
                if (v==2){
                    let edad=prompt("Ingresa la edad: ")
                    i["edad"]=edad
                }
                if (v==3){
                    let calle=prompt("Ingresa la nueva calle: ")
                    i["calle"]=calle
                }
                if (v==4){
                    let numero=prompt("Ingresa el nuevo número de residencia: ")
                    i["numero"]=numero
                }
                if (v==5){
                    let ciudad=prompt("Ingresa la ciudad: ")
                    i["ciudad"]=ciudad
                }
                if (v==6){
                    let correo=prompt("Ingresa el nuevo correo: ")
                    i["correo"]=correo
                }
                if (v==7){
                    let telefono=prompt("Ingresa el nuevo número de teléfono: ")
                    i["telefono"]=telefono
                }
            }
            console.log(informacion[0]["informacion_personal"][0])//se guarda automaticamente y muestra la nueva actualización
        }
    }
    if (x==3){
        [informacion].pop()//ubicamos que queremos eliminar
        console.log(informacion)//y mostramos la información que quedó
    }
    if (x==4){//solución para agregar información personal de las personas
        let nombre = prompt("Ingrese el nombre: ")//se le pide la información al usuario
        let edad = prompt("Ingrese la edad de la persona: ")
        let calle = prompt("Ingrese la calle de residencia de la persona: ")
        let numero = prompt("Ingrese el número de la residencia: ")
        let ciudad = prompt("Ingrese la ciudad de seridencia de la persona: ")
        let correo = prompt("Ingrese el correo de la persona: ")
        let telefono = prompt("Ingrese el número de teléfono de la persona: ")
        informacion[0]["informacion_personal"].push({"nombre": nombre, "edad": edad, "calle": calle, "numero": numero, "ciudad": ciudad, "correo": correo, "telefono": telefono})//se especifica en que lugar se va a guardar la información
        console.log(informacion)//se muestra la información ingresada
    }
}
else if (opc==2){//segunda opción del menú principal
    console.log("---Historial educativo---")//submenu de la segunda opción
    console.log("1. Ver información")
    console.log("2. Eliminar datos")
    console.log("3. Agregar información")
    console.log("4. Actualizar información")
    p=prompt("Elige una de las opciones: ")//el usuario elige la opción que desea realizar
    if (p==1){
        for (var histo of historial[0]["historial_educativo"]){//llamamos y mostramos la información que hay en el historial
            console.log("Nivel:",histo["nivel"])
            console.log("Institución:",histo["institucion"])
            console.log("Año de inicio:",histo["anio_inicio"])
            console.log("Año de finalización:",histo["anio_fin"])
        }
    }
    if (p==2){
        [historial].pop()//borramos la última modificación que se hizo en el historial
        console.log(historial)//mostramos la información que quedó
    }
    if (p==3){//agregar historial de estudios
        let nivel = prompt("Ingrese el nivel de estudio: ")//se le pide la información necesaria al usuario
        let institucion = prompt("Ingrese el nombre de la institución en la que estudió: ")
        let anio_inicio = prompt("Ingrese el año en que entró a estudiar: ")
        let anio_fin = prompt("Ingrese el año en que finalizó su estudio: ")
        historial[0]["historial_educativo"].push({"nivel": nivel, "institucion": institucion, "anio_inicio": anio_inicio, "anio_fin": anio_fin})//se especifica donde se va a guardar la información y lo hace
        console.log(historial)//se muestra la información ingresada
    }
    if (p==4){
        for (const i of historial[0]["historial_educativo"]){//actualizar la información
            console.log("1. Nivel de estudio", "2. Institución", "3. Año de inicio", "4. Año de finalización");//el usuario elige lo que quiere actualizar
            z=prompt("Qué opción deseas actualizar?: ")
            if (z==1){//se le da solución a las opciones elegidas por los usuarios
                let nivel=prompt("Ingresa el nivel educativo: ")
                i["nivel"]=nivel
            }
            if (z==2){
                let institucion=prompt("Ingresa la institución: ")
                i["institucion"]=institucion
            }
            if (z==3){
                let anio_inicio=prompt("Ingresa el año de inicio: ")
                i["anio_inicio"]=anio_inicio
            }
            if (z==4){
                let anio_fin=prompt("Ingresa el año de finalización: ")
                i["anio_fin"]=anio_fin
            }
        }
        console.log(historial[0]["historial_educativo"][0])//se muestra la información ya actualizada
    }
}
else if (opc==3){//opción tres del menu principal
    console.log("---Experiencia laboral---")
    console.log("1. Ver información")//submenu para facilitar la ejecución
    console.log("2. Eliminar datos")
    console.log("3. Agregar información")
    console.log("4. Actualizar información")
    c=prompt("Elige una de estas opciones: ")//el usuario elige una de las opciones
    if (c==1){//se empieza a dar solución a cada una de las opciones elegidas por el usuario
        for (var exp of experiencia[0]["experiencia_laboral"]){//mostrar información
            console.log("Puesto:",exp["puesto"]);
            console.log("Empresa:",exp["empresa"]);
            console.log("Período:",exp["periodo"]);
            console.log("Responsabilidades:",exp["responsabilidades"])
        }
    }
    if (c==2){//eliminar información
        [experiencia].pop()
        console.log(experiencia)//se muestra la información restante
    }
    if (c==3){//agregar información de experiencia laboral
        let puesto = prompt("Ingresa el puesto de la persona: ")
        let empresa = prompt("Ingresa el nombre de la empresa en la que trabajó la persona: ")
        let periodo = prompt("Ingresa el periodo de duración de la persona: ")
        let responsabilidades = prompt("Ingresa las responsabilidades de la persona: ")
        experiencia[0]["experiencia_laboral"].push({"puesto": puesto, "empresa": empresa, "periodo": periodo, "responsabilidades": responsabilidades});
        console.log(experiencia)//se muestra la información agregada
    }
    if (c==4){//actualizar información de la experiencia laboral
        for (const i of experiencia[0]["experiencia_laboral"]){
            console.log("1. Puesto en la empresa", "2. Nombre de la empresa", "3. Periodo de trabajo", "4. Responsabilidades")
            d=prompt("Qué deseas actualizar?: ")
            if (d==1){
                let puesto=prompt("Ingresa tu puesto en la empresa: ")
                i["puesto"]=puesto
            }
            if (d==2){
                let empresa=prompt("Ingresa el nombre de la empresa: ")
                i["empresa"]=empresa
            }
            if (d==3){
                let periodo=prompt("Ingresa el periodo de trabajo en la empresa: ")
                i["periodo"]=periodo
            }
            if (d==4){
                let responsabilidades=prompt("Ingresa tus responsabilidades en la empresa: ")
                i["responsabilidades"]=responsabilidades
            }
        }
        console.log(experiencia[0]["experiencia_laboral"][0])//se muestra la información ya actualizada
    }
}

//Desarrollado por Alejandra Machuca Grupo T2