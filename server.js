import express from 'express';
import path from 'path';
import usuarioRoutes from './src/routes/Usuarioroutes.js';

const app = express();
app.use(express.json());
app.use('/api', usuarioRoutes);

// Servir archivos de React
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});