const cassandra = require('cassandra-driver')

const client = new cassandra.Client({
    contactPoints : ['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    keyspace: 'musicdb'
});

// Datos a insertar
const datos = [
  { id: 1, nombre: 'Juan', ciudad: 'Caracas', edad: 27 },
  { id: 2, nombre: 'Maria', ciudad: 'Maracaibo', edad: 30 },
  { id: 3, nombre: 'Carlos', ciudad: 'Valencia', edad: 26 },
  { id: 4, nombre: 'Luis', ciudad: 'Barcelona', edad: 26 },
  { id: 5, nombre: 'Ana', ciudad: 'Ciudad Guayana', edad: 17 },
  { id: 6, nombre: 'Pedro', ciudad: 'San Cristóbal', edad: 18 },
  { id: 7, nombre: 'Marta', ciudad: 'Maturín', edad: 19 },
  { id: 8, nombre: 'Fernando', ciudad: 'Barquisimeto', edad: 15 },
  { id: 9, nombre: 'Sofía', ciudad: 'Mérida', edad: 18 },
  { id: 10, nombre: 'Ricardo', ciudad: 'Cumaná', edad: 21 },
  { id: 11, nombre: 'Isabel', ciudad: 'Caracas', edad: 35 },
  { id: 12, nombre: 'Jorge', ciudad: 'Maracaibo', edad: 42 },
  { id: 13, nombre: 'Gabriela', ciudad: 'Valencia', edad: 28 },
  { id: 14, nombre: 'Diego', ciudad: 'Barcelona', edad: 31 },
  { id: 15, nombre: 'Patricia', ciudad: 'Ciudad Guayana', edad: 24 },
  { id: 16, nombre: 'Raúl', ciudad: 'San Cristóbal', edad: 19 },
  { id: 17, nombre: 'Lucía', ciudad: 'Maturín', edad: 22 },
  { id: 18, nombre: 'Oscar', ciudad: 'Barquisimeto', edad: 38 },
  { id: 19, nombre: 'Camila', ciudad: 'Mérida', edad: 29 },
  { id: 20, nombre: 'Héctor', ciudad: 'Cumaná', edad: 33 },
  { id: 21, nombre: 'Daniel', ciudad: 'Caracas', edad: 25 },
  { id: 22, nombre: 'Valentina', ciudad: 'Maracaibo', edad: 20 },
  { id: 23, nombre: 'Manuel', ciudad: 'Valencia', edad: 45 },
  { id: 24, nombre: 'Adriana', ciudad: 'Barcelona', edad: 27 },
  { id: 25, nombre: 'José', ciudad: 'Ciudad Guayana', edad: 32 },
  { id: 26, nombre: 'Laura', ciudad: 'San Cristóbal', edad: 21 },
  { id: 27, nombre: 'Miguel', ciudad: 'Maturín', edad: 39 },
  { id: 28, nombre: 'Elena', ciudad: 'Barquisimeto', edad: 18 },
  { id: 29, nombre: 'Andrés', ciudad: 'Mérida', edad: 26 },
  { id: 30, nombre: 'Natalia', ciudad: 'Cumaná', edad: 23 },
  { id: 31, nombre: 'Roberto', ciudad: 'Caracas', edad: 40 },
  { id: 32, nombre: 'Carmen', ciudad: 'Maracaibo', edad: 34 },
  { id: 33, nombre: 'Francisco', ciudad: 'Valencia', edad: 28 },
  { id: 34, nombre: 'Diana', ciudad: 'Barcelona', edad: 22 },
  { id: 35, nombre: 'Antonio', ciudad: 'Ciudad Guayana', edad: 31 },
  { id: 36, nombre: 'Mariana', ciudad: 'San Cristóbal', edad: 19 },
  { id: 37, nombre: 'Pablo', ciudad: 'Maturín', edad: 36 },
  { id: 38, nombre: 'Beatriz', ciudad: 'Barquisimeto', edad: 27 },
  { id: 39, nombre: 'Javier', ciudad: 'Mérida', edad: 24 },
  { id: 40, nombre: 'Alejandra', ciudad: 'Cumaná', edad: 29 },
  { id: 41, nombre: 'Rafael', ciudad: 'Caracas', edad: 33 },
  { id: 42, nombre: 'Teresa', ciudad: 'Maracaibo', edad: 41 },
  { id: 43, nombre: 'Eduardo', ciudad: 'Valencia', edad: 22 },
  { id: 44, nombre: 'Verónica', ciudad: 'Barcelona', edad: 30 },
  { id: 45, nombre: 'Alberto', ciudad: 'Ciudad Guayana', edad: 25 },
  { id: 46, nombre: 'Claudia', ciudad: 'San Cristóbal', edad: 35 },
  { id: 47, nombre: 'Arturo', ciudad: 'Maturín', edad: 28 },
  { id: 48, nombre: 'Rosa', ciudad: 'Barquisimeto', edad: 32 },
  { id: 49, nombre: 'Guillermo', ciudad: 'Mérida', edad: 27 },
  { id: 50, nombre: 'Silvia', ciudad: 'Cumaná', edad: 24 },
  { id: 51, nombre: 'Enrique', ciudad: 'Caracas', edad: 38 },
  { id: 52, nombre: 'Alicia', ciudad: 'Maracaibo', edad: 29 },
  { id: 53, nombre: 'Gustavo', ciudad: 'Valencia', edad: 31 },
  { id: 54, nombre: 'Olga', ciudad: 'Barcelona', edad: 26 },
  { id: 55, nombre: 'Felipe', ciudad: 'Ciudad Guayana', edad: 23 },
  { id: 56, nombre: 'Irene', ciudad: 'San Cristóbal', edad: 34 },
  { id: 57, nombre: 'Hugo', ciudad: 'Maturín', edad: 40 },
  { id: 58, nombre: 'Luisa', ciudad: 'Barquisimeto', edad: 21 },
  { id: 59, nombre: 'Raquel', ciudad: 'Mérida', edad: 28 },
  { id: 60, nombre: 'Sergio', ciudad: 'Cumaná', edad: 32 },
  { id: 61, nombre: 'Angélica', ciudad: 'Caracas', edad: 25 },
  { id: 62, nombre: 'Alfonso', ciudad: 'Maracaibo', edad: 37 },
  { id: 63, nombre: 'Cecilia', ciudad: 'Valencia', edad: 24 },
  { id: 64, nombre: 'René', ciudad: 'Barcelona', edad: 29 },
  { id: 65, nombre: 'Lorena', ciudad: 'Ciudad Guayana', edad: 31 },
  { id: 66, nombre: 'Víctor', ciudad: 'San Cristóbal', edad: 26 },
  { id: 67, nombre: 'Esther', ciudad: 'Maturín', edad: 33 },
  { id: 68, nombre: 'Julio', ciudad: 'Barquisimeto', edad: 22 },
  { id: 69, nombre: 'Aurora', ciudad: 'Mérida', edad: 27 },
  { id: 70, nombre: 'Rodrigo', ciudad: 'Cumaná', edad: 35 },
  { id: 71, nombre: 'Tania', ciudad: 'Caracas', edad: 28 },
  { id: 72, nombre: 'Emilio', ciudad: 'Maracaibo', edad: 30 },
  { id: 73, nombre: 'Gladys', ciudad: 'Valencia', edad: 24 },
  { id: 74, nombre: 'Federico', ciudad: 'Barcelona', edad: 39 },
  { id: 75, nombre: 'Yolanda', ciudad: 'Ciudad Guayana', edad: 32 },
  { id: 76, nombre: 'Samuel', ciudad: 'San Cristóbal', edad: 21 },
  { id: 77, nombre: 'Ruth', ciudad: 'Maturín', edad: 26 },
  { id: 78, nombre: 'Gerardo', ciudad: 'Barquisimeto', edad: 34 },
  { id: 79, nombre: 'Nora', ciudad: 'Mérida', edad: 29 },
  { id: 80, nombre: 'César', ciudad: 'Cumaná', edad: 31 },
  { id: 81, nombre: 'Miriam', ciudad: 'Caracas', edad: 23 },
  { id: 82, nombre: 'Agustín', ciudad: 'Maracaibo', edad: 36 },
  { id: 83, nombre: 'Liliana', ciudad: 'Valencia', edad: 27 },
  { id: 84, nombre: 'Marcos', ciudad: 'Barcelona', edad: 30 },
  { id: 85, nombre: 'Elsa', ciudad: 'Ciudad Guayana', edad: 25 },
  { id: 86, nombre: 'Saúl', ciudad: 'San Cristóbal', edad: 38 },
  { id: 87, nombre: 'Marisol', ciudad: 'Maturín', edad: 22 },
  { id: 88, nombre: 'Hernán', ciudad: 'Barquisimeto', edad: 28 },
  { id: 89, nombre: 'Iris', ciudad: 'Mérida', edad: 33 },
  { id: 90, nombre: 'Feliciano', ciudad: 'Cumaná', edad: 26 },
  { id: 91, nombre: 'Leticia', ciudad: 'Caracas', edad: 29 },
  { id: 92, nombre: 'Bernardo', ciudad: 'Maracaibo', edad: 31 },
  { id: 93, nombre: 'Amalia', ciudad: 'Valencia', edad: 24 },
  { id: 94, nombre: 'Ramiro', ciudad: 'Barcelona', edad: 35 },
  { id: 95, nombre: 'Dorothy', ciudad: 'Ciudad Guayana', edad: 27 },
  { id: 96, nombre: 'Ernesto', ciudad: 'San Cristóbal', edad: 32 },
  { id: 97, nombre: 'Rebeca', ciudad: 'Maturín', edad: 23 },
  { id: 98, nombre: 'Simón', ciudad: 'Barquisimeto', edad: 30 },
  { id: 99, nombre: 'Flor', ciudad: 'Mérida', edad: 28 },
  { id: 100, nombre: 'Leonardo', ciudad: 'Cumaná', edad: 34 }
];
const canciones = [
  { id: 1, titulo: "Bohemian Rhapsody", artista: "Queen", genero: "Rock" },
  { id: 2, titulo: "Shape of You", artista: "Ed Sheeran", genero: "Pop" },
  { id: 3, titulo: "Billie Jean", artista: "Michael Jackson", genero: "Pop" },
  { id: 4, titulo: "Smells Like Teen Spirit", artista: "Nirvana", genero: "Grunge" },
  { id: 5, titulo: "Despacito", artista: "Luis Fonsi", genero: "Reggaeton" },
  { id: 6, titulo: "Hotel California", artista: "Eagles", genero: "Rock" },
  { id: 7, titulo: "Blinding Lights", artista: "The Weeknd", genero: "Pop" },
  { id: 8, titulo: "La Bamba", artista: "Ritchie Valens", genero: "Rock and Roll" },
  { id: 9, titulo: "Vivir Mi Vida", artista: "Marc Anthony", genero: "Salsa" },
  { id: 10, titulo: "Gasolina", artista: "Daddy Yankee", genero: "Reggaeton" },
  { id: 11, titulo: "Sweet Child O'Mine", artista: "Guns N' Roses", genero: "Rock" },
  { id: 12, titulo: "Uptown Funk", artista: "Mark Ronson ft. Bruno Mars", genero: "Funk" },
  { id: 13, titulo: "Like a Rolling Stone", artista: "Bob Dylan", genero: "Folk Rock" },
  { id: 14, titulo: "Con Calma", artista: "Daddy Yankee", genero: "Reggaeton" },
  { id: 15, titulo: "Yesterday", artista: "The Beatles", genero: "Rock" },
  { id: 16, titulo: "Mi Gente", artista: "J Balvin", genero: "Reggaeton" },
  { id: 17, titulo: "Imagine", artista: "John Lennon", genero: "Soft Rock" },
  { id: 18, titulo: "Bailando", artista: "Enrique Iglesias", genero: "Pop Latino" },
  { id: 19, titulo: "Thriller", artista: "Michael Jackson", genero: "Pop" },
  { id: 20, titulo: "Wonderwall", artista: "Oasis", genero: "Britpop" },
  { id: 21, titulo: "Hips Don't Lie", artista: "Shakira", genero: "Pop Latino" },
  { id: 22, titulo: "Stairway to Heaven", artista: "Led Zeppelin", genero: "Rock" },
  { id: 23, titulo: "Dákiti", artista: "Bad Bunny", genero: "Reggaeton" },
  { id: 24, titulo: "Sweet Home Alabama", artista: "Lynyrd Skynyrd", genero: "Southern Rock" },
  { id: 25, titulo: "Feliz Navidad", artista: "José Feliciano", genero: "Villancico" },
  { id: 26, titulo: "Lose Yourself", artista: "Eminem", genero: "Hip Hop" },
  { id: 27, titulo: "La Tortura", artista: "Shakira", genero: "Pop Latino" },
  { id: 28, titulo: "November Rain", artista: "Guns N' Roses", genero: "Rock" },
  { id: 29, titulo: "Tusa", artista: "Karol G", genero: "Reggaeton" },
  { id: 30, titulo: "Don't Stop Believin'", artista: "Journey", genero: "Rock" },
  { id: 31, titulo: "Smooth", artista: "Santana ft. Rob Thomas", genero: "Rock Latino" },
  { id: 32, titulo: "El Cantante", artista: "Héctor Lavoe", genero: "Salsa" },
  { id: 33, titulo: "Rolling in the Deep", artista: "Adele", genero: "Pop" },
  { id: 34, titulo: "Oye Como Va", artista: "Santana", genero: "Rock Latino" },
  { id: 35, titulo: "Me Rehúso", artista: "Danny Ocean", genero: "Pop Latino" },
  { id: 36, titulo: "Another Brick in the Wall", artista: "Pink Floyd", genero: "Progressive Rock" },
  { id: 37, titulo: "Vivir Lo Nuestro", artista: "Marc Anthony y La India", genero: "Salsa" },
  { id: 38, titulo: "Calma", artista: "Pedro Capó", genero: "Pop Latino" },
  { id: 39, titulo: "Purple Haze", artista: "Jimi Hendrix", genero: "Rock" },
  { id: 40, titulo: "Ella Baila Sola", artista: "Eslabon Armado", genero: "Regional Mexicano" },
  { id: 41, titulo: "Livin' on a Prayer", artista: "Bon Jovi", genero: "Rock" },
  { id: 42, titulo: "Material Girl", artista: "Madonna", genero: "Pop" },
  { id: 43, titulo: "El Triste", artista: "José José", genero: "Balada" },
  { id: 44, titulo: "Bad Guy", artista: "Billie Eilish", genero: "Electropop" },
  { id: 45, titulo: "Enter Sandman", artista: "Metallica", genero: "Heavy Metal" },
  { id: 46, titulo: "La Gozadera", artista: "Gente de Zona", genero: "Salsa" },
  { id: 47, titulo: "Take On Me", artista: "a-ha", genero: "Synthpop" },
  { id: 48, titulo: "Propuesta Indecente", artista: "Romeo Santos", genero: "Bachata" },
  { id: 49, titulo: "Sweet Caroline", artista: "Neil Diamond", genero: "Pop" },
  { id: 50, titulo: "La Camisa Negra", artista: "Juanes", genero: "Rock Latino" },
  { id: 51, titulo: "Boogie Wonderland", artista: "Earth, Wind & Fire", genero: "Disco" },
  { id: 52, titulo: "Danza Kuduro", artista: "Don Omar", genero: "Reggaeton" },
  { id: 53, titulo: "Every Breath You Take", artista: "The Police", genero: "Rock" },
  { id: 54, titulo: "Ahora Te Puedes Marchar", artista: "Luis Miguel", genero: "Balada" },
  { id: 55, titulo: "Smoke on the Water", artista: "Deep Purple", genero: "Rock" },
  { id: 56, titulo: "Vente Pa' Ca", artista: "Ricky Martin", genero: "Pop Latino" },
  { id: 57, titulo: "Hey Jude", artista: "The Beatles", genero: "Rock" },
  { id: 58, titulo: "El Perdón", artista: "Nicky Jam", genero: "Reggaeton" },
  { id: 59, titulo: "Careless Whisper", artista: "George Michael", genero: "Pop" },
  { id: 60, titulo: "La Bilirrubina", artista: "Juan Luis Guerra", genero: "Merengue" },
  { id: 61, titulo: "Radioactive", artista: "Imagine Dragons", genero: "Alternative Rock" },
  { id: 62, titulo: "La Playa", artista: "Myke Towers", genero: "Reggaeton" },
  { id: 63, titulo: "Back in Black", artista: "AC/DC", genero: "Rock" },
  { id: 64, titulo: "No Me Doy por Vencido", artista: "Luis Fonsi", genero: "Balada" },
  { id: 65, titulo: "Poker Face", artista: "Lady Gaga", genero: "Pop" },
  { id: 66, titulo: "La Vida es un Carnaval", artista: "Celia Cruz", genero: "Salsa" },
  { id: 67, titulo: "Sweet Dreams", artista: "Eurythmics", genero: "Synthpop" },
  { id: 68, titulo: "Amor Prohibido", artista: "Selena", genero: "Tejano" },
  { id: 69, titulo: "Another One Bites the Dust", artista: "Queen", genero: "Rock" },
  { id: 70, titulo: "Corazón Sin Cara", artista: "Prince Royce", genero: "Bachata" },
  { id: 71, titulo: "All Star", artista: "Smash Mouth", genero: "Pop Rock" },
  { id: 72, titulo: "Dile", artista: "Don Omar", genero: "Reggaeton" },
  { id: 73, titulo: "Zombie", artista: "The Cranberries", genero: "Alternative Rock" },
  { id: 74, titulo: "Atrévete-Te-Te", artista: "Calle 13", genero: "Reggaeton" },
  { id: 75, titulo: "I Will Always Love You", artista: "Whitney Houston", genero: "R&B" },
  { id: 76, titulo: "La Incondicional", artista: "Luis Miguel", genero: "Balada" },
  { id: 77, titulo: "Lose You to Love Me", artista: "Selena Gomez", genero: "Pop" },
  { id: 78, titulo: "Welcome to the Jungle", artista: "Guns N' Roses", genero: "Rock" },
  { id: 79, titulo: "Obsesión", artista: "Aventura", genero: "Bachata" },
  { id: 80, titulo: "Watermelon Sugar", artista: "Harry Styles", genero: "Pop" },
  { id: 81, titulo: "La Chona", artista: "Los Tucanes de Tijuana", genero: "Norteño" },
  { id: 82, titulo: "Creep", artista: "Radiohead", genero: "Alternative Rock" },
  { id: 83, titulo: "Te Boté", artista: "Casper Magico, Nio García", genero: "Reggaeton" },
  { id: 84, titulo: "It's My Life", artista: "Bon Jovi", genero: "Rock" },
  { id: 85, titulo: "El Anillo", artista: "Jennifer Lopez", genero: "Pop Latino" },
  { id: 86, titulo: "Africa", artista: "Toto", genero: "Rock" },
  { id: 87, titulo: "Darte un Beso", artista: "Prince Royce", genero: "Bachata" },
  { id: 88, titulo: "Girls Just Want to Have Fun", artista: "Cyndi Lauper", genero: "Pop" },
  { id: 89, titulo: "Ella y Yo", artista: "Aventura", genero: "Bachata" },
  { id: 90, titulo: "Summer of '69", artista: "Bryan Adams", genero: "Rock" },
  { id: 91, titulo: "Miénteme", artista: "TINI, María Becerra", genero: "Pop Latino" },
  { id: 92, titulo: "Nothing Else Matters", artista: "Metallica", genero: "Heavy Metal" },
  { id: 93, titulo: "La Modelo", artista: "Ozuna", genero: "Reggaeton" },
  { id: 94, titulo: "Stand by Me", artista: "Ben E. King", genero: "R&B" },
  { id: 95, titulo: "Hawái", artista: "Maluma", genero: "Reggaeton" },
  { id: 96, titulo: "I Want to Break Free", artista: "Queen", genero: "Rock" },
  { id: 97, titulo: "Taki Taki", artista: "DJ Snake", genero: "Reggaeton" },
  { id: 98, titulo: "Everywhere", artista: "Fleetwood Mac", genero: "Rock" },
  { id: 99, titulo: "Dura", artista: "Daddy Yankee", genero: "Reggaeton" },
  { id: 100, titulo: "Dream On", artista: "Aerosmith", genero: "Rock" }
];

const reproducciones = [
 /**--------------------------------------------------------------------------------------- */
  { usuario_id: 1, cancion_id: 5, fecha_reproduccion: new Date('2023-05-15T08:30:00') },
  { usuario_id: 1, cancion_id: 23, fecha_reproduccion: new Date('2023-05-15T08:35:00') },
  { usuario_id: 1, cancion_id: 42, fecha_reproduccion: new Date('2023-05-16T19:20:00') },
  { usuario_id: 1, cancion_id: 5, fecha_reproduccion: new Date('2023-05-15T08:30:00') },
  { usuario_id: 1, cancion_id: 23, fecha_reproduccion: new Date('2023-05-15T08:35:00') },
  { usuario_id: 1, cancion_id: 42, fecha_reproduccion: new Date('2023-05-16T19:20:00') },
  
  /*--------------------------------------------------------------------------------------- */
  { usuario_id: 2, cancion_id: 15, fecha_reproduccion: new Date('2023-05-10T12:15:00') },
  { usuario_id: 2, cancion_id: 57, fecha_reproduccion: new Date('2023-05-11T14:30:00') },
  { usuario_id: 2, cancion_id: 89, fecha_reproduccion: new Date('2023-05-12T21:45:00') },
  
  
  { usuario_id: 3, cancion_id: 11, fecha_reproduccion: new Date('2023-05-14T09:10:00') },
  { usuario_id: 3, cancion_id: 45, fecha_reproduccion: new Date('2023-05-14T09:15:00') },
  { usuario_id: 3, cancion_id: 78, fecha_reproduccion: new Date('2023-05-15T17:30:00') },
  
  { usuario_id: 4, cancion_id: 7, fecha_reproduccion: new Date('2023-05-13T10:20:00') },
  { usuario_id: 4, cancion_id: 34, fecha_reproduccion: new Date('2023-05-13T10:25:00') },
  { usuario_id: 4, cancion_id: 67, fecha_reproduccion: new Date('2023-05-14T18:40:00') },
  
  
  { usuario_id: 5, cancion_id: 29, fecha_reproduccion: new Date('2023-05-12T11:30:00') },
  { usuario_id: 5, cancion_id: 58, fecha_reproduccion: new Date('2023-05-12T11:35:00') },
  { usuario_id: 5, cancion_id: 95, fecha_reproduccion: new Date('2023-05-13T20:50:00') },
  
  
  { usuario_id: 6, cancion_id: 3, fecha_reproduccion: new Date('2023-05-11T13:40:00') },
  { usuario_id: 6, cancion_id: 37, fecha_reproduccion: new Date('2023-05-11T13:45:00') },
  { usuario_id: 6, cancion_id: 71, fecha_reproduccion: new Date('2023-05-12T22:00:00') },
  
  
  { usuario_id: 7, cancion_id: 19, fecha_reproduccion: new Date('2023-05-10T15:50:00') },
  { usuario_id: 7, cancion_id: 52, fecha_reproduccion: new Date('2023-05-10T15:55:00') },
  { usuario_id: 7, cancion_id: 84, fecha_reproduccion: new Date('2023-05-11T23:10:00') },
  
  
  { usuario_id: 8, cancion_id: 8, fecha_reproduccion: new Date('2023-05-09T16:00:00') },
  { usuario_id: 8, cancion_id: 41, fecha_reproduccion: new Date('2023-05-09T16:05:00') },
  { usuario_id: 8, cancion_id: 73, fecha_reproduccion: new Date('2023-05-10T00:20:00') },
  
  
  { usuario_id: 9, cancion_id: 14, fecha_reproduccion: new Date('2023-05-08T17:10:00') },
  { usuario_id: 9, cancion_id: 47, fecha_reproduccion: new Date('2023-05-08T17:15:00') },
  { usuario_id: 9, cancion_id: 79, fecha_reproduccion: new Date('2023-05-09T01:30:00') },
  
  
  { usuario_id: 10, cancion_id: 22, fecha_reproduccion: new Date('2023-05-07T18:20:00') },
  { usuario_id: 10, cancion_id: 55, fecha_reproduccion: new Date('2023-05-07T18:25:00') },
  { usuario_id: 10, cancion_id: 88, fecha_reproduccion: new Date('2023-05-08T02:40:00') },
  
  
  { usuario_id: 11, cancion_id: 6, fecha_reproduccion: new Date('2023-05-06T19:30:00') },
  { usuario_id: 12, cancion_id: 17, fecha_reproduccion: new Date('2023-05-05T20:40:00') },
  { usuario_id: 13, cancion_id: 28, fecha_reproduccion: new Date('2023-05-04T21:50:00') },
  { usuario_id: 14, cancion_id: 39, fecha_reproduccion: new Date('2023-05-03T22:00:00') },
  { usuario_id: 15, cancion_id: 50, fecha_reproduccion: new Date('2023-05-02T23:10:00') },
  
  
  { usuario_id: 16, cancion_id: 61, fecha_reproduccion: new Date('2023-04-30T08:15:00') },
  { usuario_id: 16, cancion_id: 61, fecha_reproduccion: new Date('2023-04-30T08:20:00') }, 
  { usuario_id: 16, cancion_id: 72, fecha_reproduccion: new Date('2023-04-30T08:25:00') },
  
  { usuario_id: 17, cancion_id: 83, fecha_reproduccion: new Date('2023-04-29T09:30:00') },
  { usuario_id: 17, cancion_id: 94, fecha_reproduccion: new Date('2023-04-29T09:35:00') },
  
  { usuario_id: 18, cancion_id: 4, fecha_reproduccion: new Date('2023-04-28T10:45:00') },
  { usuario_id: 18, cancion_id: 26, fecha_reproduccion: new Date('2023-04-28T10:50:00') },
  { usuario_id: 18, cancion_id: 48, fecha_reproduccion: new Date('2023-04-28T10:55:00') },
  
  
  { usuario_id: 19, cancion_id: 10, fecha_reproduccion: new Date('2023-04-27T11:00:00') },
  { usuario_id: 19, cancion_id: 20, fecha_reproduccion: new Date('2023-04-27T11:05:00') },
  { usuario_id: 19, cancion_id: 30, fecha_reproduccion: new Date('2023-04-27T11:10:00') },
  { usuario_id: 19, cancion_id: 40, fecha_reproduccion: new Date('2023-04-27T11:15:00') },
  { usuario_id: 19, cancion_id: 60, fecha_reproduccion: new Date('2023-04-27T11:20:00') },
  { usuario_id: 19, cancion_id: 80, fecha_reproduccion: new Date('2023-04-27T11:25:00') },
  { usuario_id: 19, cancion_id: 100, fecha_reproduccion: new Date('2023-04-27T11:30:00') },
  
  
  { usuario_id: 20, cancion_id: 9, fecha_reproduccion: new Date('2023-04-26T12:35:00') },
  { usuario_id: 21, cancion_id: 18, fecha_reproduccion: new Date('2023-04-25T13:40:00') },
  { usuario_id: 22, cancion_id: 27, fecha_reproduccion: new Date('2023-04-24T14:45:00') },
  { usuario_id: 23, cancion_id: 36, fecha_reproduccion: new Date('2023-04-23T15:50:00') },
  { usuario_id: 24, cancion_id: 54, fecha_reproduccion: new Date('2023-04-22T16:55:00') },
  
  // Reproducciones del usuario 25 (Alberto)
  { usuario_id: 25, cancion_id: 63, fecha_reproduccion: new Date('2023-04-21T17:00:00') },
  { usuario_id: 25, cancion_id: 12, fecha_reproduccion: new Date('2023-04-22T09:15:00') },
  { usuario_id: 25, cancion_id: 77, fecha_reproduccion: new Date('2023-04-23T21:30:00') },

  // Reproducciones del usuario 26 (Claudia)
  { usuario_id: 26, cancion_id: 44, fecha_reproduccion: new Date('2023-04-20T14:45:00') },
  { usuario_id: 26, cancion_id: 85, fecha_reproduccion: new Date('2023-04-21T08:20:00') },
  { usuario_id: 26, cancion_id: 16, fecha_reproduccion: new Date('2023-04-22T19:10:00') },

  // Reproducciones del usuario 27 (Arturo)
  { usuario_id: 27, cancion_id: 92, fecha_reproduccion: new Date('2023-04-19T16:30:00') },
  { usuario_id: 27, cancion_id: 31, fecha_reproduccion: new Date('2023-04-20T11:45:00') },
  { usuario_id: 27, cancion_id: 68, fecha_reproduccion: new Date('2023-04-21T22:15:00') },

  // Reproducciones del usuario 28 (Rosa)
  { usuario_id: 28, cancion_id: 7, fecha_reproduccion: new Date('2023-04-18T13:20:00') },
  { usuario_id: 28, cancion_id: 49, fecha_reproduccion: new Date('2023-04-19T10:30:00') },
  { usuario_id: 28, cancion_id: 91, fecha_reproduccion: new Date('2023-04-20T20:45:00') },

  // Reproducciones del usuario 29 (Guillermo)
  { usuario_id: 29, cancion_id: 38, fecha_reproduccion: new Date('2023-04-17T15:10:00') },
  { usuario_id: 29, cancion_id: 69, fecha_reproduccion: new Date('2023-04-18T12:25:00') },
  { usuario_id: 29, cancion_id: 100, fecha_reproduccion: new Date('2023-04-19T23:40:00') },

  // Reproducciones del usuario 30 (Silvia)
  { usuario_id: 30, cancion_id: 21, fecha_reproduccion: new Date('2023-04-16T18:50:00') },
  { usuario_id: 30, cancion_id: 52, fecha_reproduccion: new Date('2023-04-17T09:15:00') },
  { usuario_id: 30, cancion_id: 83, fecha_reproduccion: new Date('2023-04-18T21:30:00') },

  // Reproducciones del usuario 31 (Enrique)
  { usuario_id: 31, cancion_id: 14, fecha_reproduccion: new Date('2023-04-15T14:00:00') },
  { usuario_id: 31, cancion_id: 45, fecha_reproduccion: new Date('2023-04-16T08:20:00') },
  { usuario_id: 31, cancion_id: 76, fecha_reproduccion: new Date('2023-04-17T19:35:00') },

  // Reproducciones del usuario 32 (Alicia)
  { usuario_id: 32, cancion_id: 87, fecha_reproduccion: new Date('2023-04-14T17:30:00') },
  { usuario_id: 32, cancion_id: 18, fecha_reproduccion: new Date('2023-04-15T11:45:00') },
  { usuario_id: 32, cancion_id: 59, fecha_reproduccion: new Date('2023-04-16T22:00:00') },

  // Reproducciones del usuario 33 (Gustavo)
  { usuario_id: 33, cancion_id: 30, fecha_reproduccion: new Date('2023-04-13T12:15:00') },
  { usuario_id: 33, cancion_id: 61, fecha_reproduccion: new Date('2023-04-14T10:30:00') },
  { usuario_id: 33, cancion_id: 92, fecha_reproduccion: new Date('2023-04-15T20:45:00') },

  // Reproducciones del usuario 34 (Olga)
  { usuario_id: 34, cancion_id: 3, fecha_reproduccion: new Date('2023-04-12T15:40:00') },
  { usuario_id: 34, cancion_id: 34, fecha_reproduccion: new Date('2023-04-13T13:55:00') },
  { usuario_id: 34, cancion_id: 65, fecha_reproduccion: new Date('2023-04-14T23:10:00') },

  // Reproducciones del usuario 35 (Felipe)
  { usuario_id: 35, cancion_id: 96, fecha_reproduccion: new Date('2023-04-11T18:20:00') },
  { usuario_id: 35, cancion_id: 27, fecha_reproduccion: new Date('2023-04-12T09:35:00') },
  { usuario_id: 35, cancion_id: 58, fecha_reproduccion: new Date('2023-04-13T21:50:00') },

  // Reproducciones del usuario 36 (Irene)
  { usuario_id: 36, cancion_id: 9, fecha_reproduccion: new Date('2023-04-10T14:05:00') },
  { usuario_id: 36, cancion_id: 40, fecha_reproduccion: new Date('2023-04-11T08:20:00') },
  { usuario_id: 36, cancion_id: 71, fecha_reproduccion: new Date('2023-04-12T19:35:00') },

  // Reproducciones del usuario 37 (Hugo)
  { usuario_id: 37, cancion_id: 82, fecha_reproduccion: new Date('2023-04-09T17:50:00') },
  { usuario_id: 37, cancion_id: 23, fecha_reproduccion: new Date('2023-04-10T12:05:00') },
  { usuario_id: 37, cancion_id: 54, fecha_reproduccion: new Date('2023-04-11T22:20:00') },

  // Reproducciones del usuario 38 (Luisa)
  { usuario_id: 38, cancion_id: 15, fecha_reproduccion: new Date('2023-04-08T13:25:00') },
  { usuario_id: 38, cancion_id: 46, fecha_reproduccion: new Date('2023-04-09T10:40:00') },
  { usuario_id: 38, cancion_id: 77, fecha_reproduccion: new Date('2023-04-10T20:55:00') },

  // Reproducciones del usuario 39 (Raquel)
  { usuario_id: 39, cancion_id: 88, fecha_reproduccion: new Date('2023-04-07T16:10:00') },
  { usuario_id: 39, cancion_id: 19, fecha_reproduccion: new Date('2023-04-08T11:25:00') },
  { usuario_id: 39, cancion_id: 50, fecha_reproduccion: new Date('2023-04-09T21:40:00') },

  // Reproducciones del usuario 40 (Sergio)
  { usuario_id: 40, cancion_id: 1, fecha_reproduccion: new Date('2023-04-06T19:35:00') },
  { usuario_id: 40, cancion_id: 32, fecha_reproduccion: new Date('2023-04-07T09:50:00') },
  { usuario_id: 40, cancion_id: 63, fecha_reproduccion: new Date('2023-04-08T22:05:00') },

  // Reproducciones del usuario 41 (Angélica)
  { usuario_id: 41, cancion_id: 74, fecha_reproduccion: new Date('2023-04-05T14:20:00') },
  { usuario_id: 41, cancion_id: 25, fecha_reproduccion: new Date('2023-04-06T08:35:00') },
  { usuario_id: 41, cancion_id: 56, fecha_reproduccion: new Date('2023-04-07T19:50:00') },

  // Reproducciones del usuario 42 (Alfonso)
  { usuario_id: 42, cancion_id: 97, fecha_reproduccion: new Date('2023-04-04T17:45:00') },
  { usuario_id: 42, cancion_id: 28, fecha_reproduccion: new Date('2023-04-05T12:00:00') },
  { usuario_id: 42, cancion_id: 59, fecha_reproduccion: new Date('2023-04-06T22:15:00') },

  // Reproducciones del usuario 43 (Cecilia)
  { usuario_id: 43, cancion_id: 10, fecha_reproduccion: new Date('2023-04-03T13:30:00') },
  { usuario_id: 43, cancion_id: 41, fecha_reproduccion: new Date('2023-04-04T10:45:00') },
  { usuario_id: 43, cancion_id: 72, fecha_reproduccion: new Date('2023-04-05T21:00:00') },

  // Reproducciones del usuario 44 (René)
  { usuario_id: 44, cancion_id: 83, fecha_reproduccion: new Date('2023-04-02T16:55:00') },
  { usuario_id: 44, cancion_id: 24, fecha_reproduccion: new Date('2023-04-03T11:10:00') },
  { usuario_id: 44, cancion_id: 65, fecha_reproduccion: new Date('2023-04-04T22:25:00') },

  // Reproducciones del usuario 45 (Lorena)
  { usuario_id: 45, cancion_id: 6, fecha_reproduccion: new Date('2023-04-01T19:40:00') },
  { usuario_id: 45, cancion_id: 37, fecha_reproduccion: new Date('2023-04-02T09:55:00') },
  { usuario_id: 45, cancion_id: 68, fecha_reproduccion: new Date('2023-04-03T20:10:00') },

  // Reproducciones del usuario 46 (Víctor)
  { usuario_id: 46, cancion_id: 89, fecha_reproduccion: new Date('2023-03-31T14:15:00') },
  { usuario_id: 46, cancion_id: 20, fecha_reproduccion: new Date('2023-04-01T08:30:00') },
  { usuario_id: 46, cancion_id: 51, fecha_reproduccion: new Date('2023-04-02T19:45:00') },

  // Reproducciones del usuario 47 (Esther)
  { usuario_id: 47, cancion_id: 2, fecha_reproduccion: new Date('2023-03-30T17:00:00') },
  { usuario_id: 47, cancion_id: 33, fecha_reproduccion: new Date('2023-03-31T12:15:00') },
  { usuario_id: 47, cancion_id: 64, fecha_reproduccion: new Date('2023-04-01T22:30:00') },

  // Reproducciones del usuario 48 (Julio)
  { usuario_id: 48, cancion_id: 95, fecha_reproduccion: new Date('2023-03-29T13:25:00') },
  { usuario_id: 48, cancion_id: 26, fecha_reproduccion: new Date('2023-03-30T10:40:00') },
  { usuario_id: 48, cancion_id: 57, fecha_reproduccion: new Date('2023-03-31T20:55:00') },

  // Reproducciones del usuario 49 (Aurora)
  { usuario_id: 49, cancion_id: 8, fecha_reproduccion: new Date('2023-03-28T16:50:00') },
  { usuario_id: 49, cancion_id: 39, fecha_reproduccion: new Date('2023-03-29T11:05:00') },
  { usuario_id: 49, cancion_id: 70, fecha_reproduccion: new Date('2023-03-30T21:20:00') },

  // Reproducciones del usuario 50 (Rodrigo)
  { usuario_id: 50, cancion_id: 81, fecha_reproduccion: new Date('2023-03-27T19:35:00') },
  { usuario_id: 50, cancion_id: 12, fecha_reproduccion: new Date('2023-03-28T09:50:00') },
  { usuario_id: 50, cancion_id: 43, fecha_reproduccion: new Date('2023-03-29T22:05:00') },

  {usuario_id: 51, cancion_id: 90, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 51, cancion_id: 51, fecha_reproduccion: new Date('2023-07-12T12:10:00')},


  {usuario_id: 52, cancion_id: 25, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 52, cancion_id: 60, fecha_reproduccion: new Date('2023-02-10T20:32:00')},
 
  {usuario_id: 53, cancion_id: 9, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 53, cancion_id: 90, fecha_reproduccion: new Date('2023-08-21T11:32:00')},
  
  {usuario_id: 54, cancion_id: 22, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 54, cancion_id: 28, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  
  {usuario_id: 55, cancion_id: 36, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 55, cancion_id: 57, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  
  {usuario_id: 56, cancion_id: 10, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 56, cancion_id: 10, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  
  {usuario_id: 57, cancion_id: 66, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 57, cancion_id: 70, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  
  {usuario_id: 58, cancion_id: 78, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 58, cancion_id: 16, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  
  {usuario_id: 59, cancion_id: 90, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 59, cancion_id: 18, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  
  {usuario_id: 60, cancion_id: 20, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 60, cancion_id: 42, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 60, cancion_id: 96, fecha_reproduccion: new Date('2023-07-15T8:20:00')},


  {usuario_id: 61, cancion_id: 22, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 61, cancion_id: 98, fecha_reproduccion: new Date('2023-04-21T9:15:00')},

  {usuario_id: 62, cancion_id: 12, fecha_reproduccion: new Date('2023-04-21T10:32:00')},

  {usuario_id: 63, cancion_id: 13, fecha_reproduccion: new Date('2023-04-21T10:32:00')},

  {usuario_id: 64, cancion_id: 78, fecha_reproduccion: new Date('2023-04-21T10:32:00')},

  {usuario_id: 65, cancion_id: 47, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 65, cancion_id: 93, fecha_reproduccion: new Date('2023-04-21T1:32:00')},


  {usuario_id: 66, cancion_id: 50, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 66, cancion_id: 86, fecha_reproduccion: new Date('2023-04-21T11:00:00')},

  {usuario_id: 67, cancion_id: 2, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 67, cancion_id: 62, fecha_reproduccion: new Date('2023-06-21T4:25:00')},

  {usuario_id: 68, cancion_id: 6, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 68, cancion_id: 75, fecha_reproduccion: new Date('2023-04-21T10:32:00')},

  {usuario_id: 69, cancion_id: 10, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 69, cancion_id: 53, fecha_reproduccion: new Date('2023-07-21T17:30:00')},

  {usuario_id: 70, cancion_id: 19, fecha_reproduccion: new Date('2023-04-21T10:32:00')},
  {usuario_id: 71, cancion_id: 42, fecha_reproduccion: new Date('2023-04-22T11:15:00')},
  {usuario_id: 72, cancion_id: 87, fecha_reproduccion: new Date('2023-04-23T14:20:00')},
  {usuario_id: 73, cancion_id: 5, fecha_reproduccion: new Date('2023-04-24T09:45:00')},
  {usuario_id: 74, cancion_id: 63, fecha_reproduccion: new Date('2023-04-25T16:30:00')},
  {usuario_id: 75, cancion_id: 28, fecha_reproduccion: new Date('2023-04-26T13:10:00')},
  {usuario_id: 76, cancion_id: 94, fecha_reproduccion: new Date('2023-04-27T08:25:00')},
  {usuario_id: 77, cancion_id: 11, fecha_reproduccion: new Date('2023-04-28T17:50:00')},
  {usuario_id: 78, cancion_id: 76, fecha_reproduccion: new Date('2023-04-29T12:05:00')},
  {usuario_id: 79, cancion_id: 33, fecha_reproduccion: new Date('2023-04-30T10:40:00')},
  {usuario_id: 80, cancion_id: 52, fecha_reproduccion: new Date('2023-05-01T15:20:00')},
  {usuario_id: 81, cancion_id: 8, fecha_reproduccion: new Date('2023-05-02T09:10:00')},
  {usuario_id: 82, cancion_id: 97, fecha_reproduccion: new Date('2023-05-03T14:55:00')},
  {usuario_id: 83, cancion_id: 24, fecha_reproduccion: new Date('2023-05-04T11:30:00')},
  {usuario_id: 84, cancion_id: 71, fecha_reproduccion: new Date('2023-05-05T16:15:00')},
  {usuario_id: 85, cancion_id: 3, fecha_reproduccion: new Date('2023-05-06T10:00:00')},
  {usuario_id: 86, cancion_id: 45, fecha_reproduccion: new Date('2023-05-07T13:45:00')},
  {usuario_id: 87, cancion_id: 89, fecha_reproduccion: new Date('2023-05-08T08:30:00')},
  {usuario_id: 88, cancion_id: 16, fecha_reproduccion: new Date('2023-05-09T17:20:00')},
  {usuario_id: 89, cancion_id: 67, fecha_reproduccion: new Date('2023-05-10T12:10:00')},
  {usuario_id: 90, cancion_id: 31, fecha_reproduccion: new Date('2023-05-11T09:05:00')},
  {usuario_id: 91, cancion_id: 54, fecha_reproduccion: new Date('2023-05-12T14:50:00')},
  {usuario_id: 92, cancion_id: 22, fecha_reproduccion: new Date('2023-05-13T11:35:00')},
  {usuario_id: 93, cancion_id: 78, fecha_reproduccion: new Date('2023-05-14T16:25:00')},
  {usuario_id: 94, cancion_id: 9, fecha_reproduccion: new Date('2023-05-15T10:15:00')},

  { usuario_id: 95, cancion_id: 2, fecha_reproduccion: new Date('2023-05-20T07:05:00') },
  { usuario_id: 96, cancion_id: 13, fecha_reproduccion: new Date('2023-05-20T08:10:00') },
  { usuario_id: 97, cancion_id: 24, fecha_reproduccion: new Date('2023-05-20T09:15:00') },
  { usuario_id: 98, cancion_id: 35, fecha_reproduccion: new Date('2023-05-20T10:20:00') },
  { usuario_id: 99, cancion_id: 46, fecha_reproduccion: new Date('2023-05-20T11:25:00') },
  { usuario_id: 100, cancion_id: 97, fecha_reproduccion: new Date('2023-05-20T12:30:00') }
];

async function InsertarCancionesMasEscuchadas(params) {

   try {
    // 1. Obtener el conteo de reproducciones por canción
    const queryCount = `
      SELECT cancion_id,  COUNT(*) as total 
      FROM usuario_cancion 
      GROUP BY cancion_id;
    `;

    const result = await client.execute(queryCount);
    // 2. Insertar los datos en la tabla canciones_mas_escuchadas
      const queryInsert = `
         INSERT INTO canciones_mas_escuchadas (cancion_id, total) 
         VALUES (?, ?);
      `;

      for (const fila of result.rows) {
         await client.execute(queryInsert, [fila.cancion_id, fila.total], { prepare: true });
      }

      console.log('Datos almacenados correctamente en canciones_mas_escuchadas');

   } catch (error) {
      console.error('Error al insertar canciones más escuchadas:', error);
   }
}


    

    
 
  




async function InsertarMultiplesregistroCanciones() {

  const query = `INSERT INTO canciones (id, titulo, artista, genero) VALUES (?,?,?)`;
  

  try{
    for (const cancion of canciones){
      await client.execute(query, [cancion.id, cancion.titulo, cancion.artista, cancion.genero], {prepare: true});
    }
    console.log('Todlos los registros de las canciones se han subido a la base de datos');
  }catch(error){
    console.log('error al subir los datos: ', error);
  }finally{
    await client.shutdown();
  }
}

// Función para insertar múltiples registros
async function insertarMultiplesRegistros() {
  const query = 'INSERT INTO usuarios (id, nombre, ciudad) VALUES (?, ?, ?)';

  try {
    for (const dato of datos) {
      await client.execute(query, [dato.id, dato.nombre, dato.ciudad], { prepare: true });
    }
    console.log('Todos los registros se insertaron correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    await client.shutdown();
  }
}

insertarMultiplesRegistros();

