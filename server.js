import express from 'express';
import path from 'path';
import usuarioRoutes from './src/routes/Usuarioroutes.js';
import recomendacionroutes from './src/routes/recomendacionroutes.js';
import usersongsroutes from './src/routes/UserSongsRoutes.js';
import Olapconsulta1 from './src/routes/OLAPGeneroYCiudadroutes.js';
import Olapconsulta2 from './src/routes/OLAPCiudadYMesroutes.js';

import cors from "cors"; 

const app = express(); // Aquí se define 'app'

app.use(cors()); // Ahora sí puedes usar CORS
app.use(express.json());
app.use(usuarioRoutes);
app.use(recomendacionroutes);
app.use(usersongsroutes);
app.use(Olapconsulta1);
app.use(Olapconsulta2);



// Servir archivos de React
/*app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});*/

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
