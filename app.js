// Importando expressjs
import express from 'express';
//Crear una instancia de express
const app = express(); //(req,res) => { UN MONTO DE CODIGO}
//Registrando nuestro primer Middleware

app.use('/about', (req, res) => {  //Middleware es una funcion
    res.send(`
    <h1 style="color: #555"> About... </h1>
    <p> Esto es una pagina creada para aprender desarrollo web en Fulstrack con JS </p>
    `);
});

app.use((req, res, next) => {  //Middleware es una funcion
    console.log("📢 Ejecutando el Middleware 1");
    //Invocando al siguiente Middleware
    next();
});

app.use((req, res, next) => {
    console.log("⭐ Ejecutando el Middleware 2");
    //Invocando al siguiente Middleware
    next();
});

app.use((req, res, next) => {
    console.log(`👻 ${req.method} - ${req.url}`);
    next();
});

app.use((req, res) => {
    console.log("⭐ Respondiendo al cliente");
    res.send(`
    <h1> Bienvenido a express </h1>
    <p> This is my awesome app </p>
    `)
});

//Creando el servidor
//Definir puertos
const port = 3000;
const ip = "0.0.0.0";
//Arrancar el server
app.listen(port, ip, (err) => {
    console.log("📢 Sirviendo en http://localhost:3000");
    console.log(`📢 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
});