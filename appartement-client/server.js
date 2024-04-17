// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Nouvelle connexion:', socket.id);

    // Écoutez les événements du client ici
    socket.on('example-event', (data) => {
        console.log('Exemple d\'événement reçu avec des données:', data);
    });

    // D'autres écoutes d'événements peuvent être ajoutées ici

    // Déconnexion du client
    socket.on('disconnect', () => {
        console.log('Client déconnecté:', socket.id);
    });
});

const PORT = 6379;

server.listen(PORT, () => {
    console.log(`Serveur Socket.io écoutant sur le port ${PORT}`);
});
