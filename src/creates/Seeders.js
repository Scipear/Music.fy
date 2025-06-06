import cassandra from 'cassandra-driver'
import { v4 as uuidv4 } from 'uuid'

const client = new cassandra.Client({
    contactPoints : ['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    keyspace: 'musicdb'
});
const meses = [
    "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06",
    "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"
];
// Datos a insertar
const datos = [
  {  password: '12345', nombre: 'Luis', ciudad: 'Ciudad Guayana', edad: 21},
  {  password: '12345', nombre: 'Juan', ciudad: 'Caracas', edad: 27 },
  {  password: '12345', nombre: 'Maria', ciudad: 'Maracaibo', edad: 30 },
  {  password: '12345', nombre: 'Carlos', ciudad: 'Valencia', edad: 26 },
  {  password: '12345', nombre: 'Ana', ciudad: 'Ciudad Guayana', edad: 17 },
  {  password: '12345', nombre: 'Pedro', ciudad: 'San Cristóbal', edad: 18 },
  {  password: '12345', nombre: 'Marta', ciudad: 'Maturín', edad: 19 },
  {  password: '12345', nombre: 'Fernando', ciudad: 'Barquisimeto', edad: 15 },
  {  password: '12345', nombre: 'Sofía', ciudad: 'Mérida', edad: 18 },
  {  password: '12345', nombre: 'Ricardo', ciudad: 'Cumaná', edad: 21 },
  {  password: '12345', nombre: 'Isabel', ciudad: 'Caracas', edad: 35 },
  {  password: '12345', nombre: 'Jorge', ciudad: 'Maracaibo', edad: 42 },
  {  password: '12345', nombre: 'Gabriela', ciudad: 'Valencia', edad: 28 },
  {  password: '12345', nombre: 'Diego', ciudad: 'Barcelona', edad: 31 },
  {  password: '12345', nombre: 'Patricia', ciudad: 'Ciudad Guayana', edad: 24 },
  {  password: '12345', nombre: 'Raúl', ciudad: 'San Cristóbal', edad: 19 },
  {  password: '12345', nombre: 'Lucía', ciudad: 'Maturín', edad: 22 },
  {  password: '12345', nombre: 'Oscar', ciudad: 'Barquisimeto', edad: 38 },
  {  password: '12345', nombre: 'Camila', ciudad: 'Mérida', edad: 29 },
  {  password: '12345', nombre: 'Héctor', ciudad: 'Cumaná', edad: 33 },
  {  password: '12345', nombre: 'Daniel', ciudad: 'Caracas', edad: 25 },
  {  password: '12345', nombre: 'Valentina', ciudad: 'Maracaibo', edad: 20 },
  {  password: '12345', nombre: 'Manuel', ciudad: 'Valencia', edad: 45 },
  {  password: '12345', nombre: 'Adriana', ciudad: 'Barcelona', edad: 27 },
  {  password: '12345', nombre: 'José', ciudad: 'Ciudad Guayana', edad: 32 },
  {  password: '12345', nombre: 'Laura', ciudad: 'San Cristóbal', edad: 21 },
  {  password: '12345', nombre: 'Miguel', ciudad: 'Maturín', edad: 39 },
  {  password: '12345', nombre: 'Elena', ciudad: 'Barquisimeto', edad: 18 },
  {  password: '12345', nombre: 'Andrés', ciudad: 'Mérida', edad: 26 },
  {  password: '12345', nombre: 'Natalia', ciudad: 'Cumaná', edad: 23 },
  {  password: '12345', nombre: 'Roberto', ciudad: 'Caracas', edad: 40 },
  {  password: '12345', nombre: 'Carmen', ciudad: 'Maracaibo', edad: 34 },
  {  password: '12345', nombre: 'Francisco', ciudad: 'Valencia', edad: 28 },
  {  password: '12345', nombre: 'Diana', ciudad: 'Barcelona', edad: 22 },
  {  password: '12345', nombre: 'Antonio', ciudad: 'Ciudad Guayana', edad: 31 },
  {  password: '12345', nombre: 'Mariana', ciudad: 'San Cristóbal', edad: 19 },
  {  password: '12345', nombre: 'Pablo', ciudad: 'Maturín', edad: 36 },
  {  password: '12345', nombre: 'Beatriz', ciudad: 'Barquisimeto', edad: 27 },
  {  password: '12345', nombre: 'Javier', ciudad: 'Mérida', edad: 24 },
  {  password: '12345', nombre: 'Alejandra', ciudad: 'Cumaná', edad: 29 },
  {  password: '12345', nombre: 'Rafael', ciudad: 'Caracas', edad: 33 },
  {  password: '12345', nombre: 'Teresa', ciudad: 'Maracaibo', edad: 41 },
  {  password: '12345', nombre: 'Eduardo', ciudad: 'Valencia', edad: 22 },
  {  password: '12345', nombre: 'Verónica', ciudad: 'Barcelona', edad: 30 },
  {  password: '12345', nombre: 'Alberto', ciudad: 'Ciudad Guayana', edad: 25 },
  {  password: '12345', nombre: 'Claudia', ciudad: 'San Cristóbal', edad: 35 },
  {  password: '12345', nombre: 'Arturo', ciudad: 'Maturín', edad: 28 },
  {  password: '12345', nombre: 'Rosa', ciudad: 'Barquisimeto', edad: 32 },
  {  password: '12345', nombre: 'Guillermo', ciudad: 'Mérida', edad: 27 },
  {  password: '12345', nombre: 'Silvia', ciudad: 'Cumaná', edad: 24 },
  {  password: '12345', nombre: 'Enrique', ciudad: 'Caracas', edad: 38 },
  {  password: '12345', nombre: 'Alicia', ciudad: 'Maracaibo', edad: 29 },
  {  password: '12345', nombre: 'Gustavo', ciudad: 'Valencia', edad: 31 },
  {  password: '12345', nombre: 'Olga', ciudad: 'Barcelona', edad: 26 },
  {  password: '12345', nombre: 'Felipe', ciudad: 'Ciudad Guayana', edad: 23 },
  {  password: '12345', nombre: 'Irene', ciudad: 'San Cristóbal', edad: 34 },
  {  password: '12345', nombre: 'Hugo', ciudad: 'Maturín', edad: 40 },
  {  password: '12345', nombre: 'Luisa', ciudad: 'Barquisimeto', edad: 21 },
  {  password: '12345', nombre: 'Raquel', ciudad: 'Mérida', edad: 28 },
  {  password: '12345', nombre: 'Sergio', ciudad: 'Cumaná', edad: 32 },
  {  password: '12345', nombre: 'Angélica', ciudad: 'Caracas', edad: 25 },
  {  password: '12345', nombre: 'Alfonso', ciudad: 'Maracaibo', edad: 37 },
  {  password: '12345', nombre: 'Cecilia', ciudad: 'Valencia', edad: 24 },
  {  password: '12345', nombre: 'René', ciudad: 'Barcelona', edad: 29 },
  {  password: '12345', nombre: 'Lorena', ciudad: 'Ciudad Guayana', edad: 31 },
  {  password: '12345', nombre: 'Víctor', ciudad: 'San Cristóbal', edad: 26 },
  {  password: '12345', nombre: 'Esther', ciudad: 'Maturín', edad: 33 },
  {  password: '12345', nombre: 'Julio', ciudad: 'Barquisimeto', edad: 22 },
  {  password: '12345', nombre: 'Aurora', ciudad: 'Mérida', edad: 27 },
  {  password: '12345', nombre: 'Rodrigo', ciudad: 'Cumaná', edad: 35 },
  {  password: '12345', nombre: 'Tania', ciudad: 'Caracas', edad: 28 },
  {  password: '12345', nombre: 'Emilio', ciudad: 'Maracaibo', edad: 30 },
  {  password: '12345', nombre: 'Gladys', ciudad: 'Valencia', edad: 24 },
  {  password: '12345', nombre: 'Federico', ciudad: 'Barcelona', edad: 39 },
  {  password: '12345', nombre: 'Yolanda', ciudad: 'Ciudad Guayana', edad: 32 },
  {  password: '12345', nombre: 'Samuel', ciudad: 'San Cristóbal', edad: 21 },
  {  password: '12345', nombre: 'Ruth', ciudad: 'Maturín', edad: 26 },
  {  password: '12345', nombre: 'Gerardo', ciudad: 'Barquisimeto', edad: 34 },
  {  password: '12345', nombre: 'Nora', ciudad: 'Mérida', edad: 29 },
  {  password: '12345', nombre: 'César', ciudad: 'Cumaná', edad: 31 },
  {  password: '12345', nombre: 'Miriam', ciudad: 'Caracas', edad: 23 },
  {  password: '12345', nombre: 'Agustín', ciudad: 'Maracaibo', edad: 36 },
  {  password: '12345', nombre: 'Liliana', ciudad: 'Valencia', edad: 27 },
  {  password: '12345', nombre: 'Marcos', ciudad: 'Barcelona', edad: 30 },
  {  password: '12345', nombre: 'Elsa', ciudad: 'Ciudad Guayana', edad: 25 },
  {  password: '12345', nombre: 'Saúl', ciudad: 'San Cristóbal', edad: 38 },
  {  password: '12345', nombre: 'Marisol', ciudad: 'Maturín', edad: 22 },
  {  password: '12345', nombre: 'Hernán', ciudad: 'Barquisimeto', edad: 28 },
  {  password: '12345', nombre: 'Iris', ciudad: 'Mérida', edad: 33 },
  {  password: '12345', nombre: 'Feliciano', ciudad: 'Cumaná', edad: 26 },
  {  password: '12345', nombre: 'Leticia', ciudad: 'Caracas', edad: 29 },
  {  password: '12345', nombre: 'Bernardo', ciudad: 'Maracaibo', edad: 31 },
  {  password: '12345', nombre: 'Amalia', ciudad: 'Valencia', edad: 24 },
  {  password: '12345', nombre: 'Ramiro', ciudad: 'Barcelona', edad: 35 },
  {  password: '12345', nombre: 'Dorothy', ciudad: 'Ciudad Guayana', edad: 27 },
  {  password: '12345', nombre: 'Ernesto', ciudad: 'San Cristóbal', edad: 32 },
  {  password: '12345', nombre: 'Rebeca', ciudad: 'Maturín', edad: 23 },
  {  password: '12345', nombre: 'Simón', ciudad: 'Barquisimeto', edad: 30 },
  {  password: '12345', nombre: 'Flor', ciudad: 'Mérida', edad: 28 },
  {  password: '12345', nombre: 'Leonardo', ciudad: 'Cumaná', edad: 34 }
];

const canciones = [
  { titulo: "Disappear", artista: "Mazzy Star", album: "Among My Swan", genero: "Dream Pop", duracion: "4:04", portada: "Among My Swan.jpg"},
  { titulo: "Flowers In December", artista: "Mazzy Star", album: "Among My Swan", genero: "Folk", duracion: "4:57", portada: "Among My Swan.jpg"},
  { titulo: "Rhymes Of An Hour", artista: "Mazzy Star", album: "Among My Swan", genero: "Folk", duracion: "4:12", portada: "Among My Swan.jpg"},
  { titulo: "Cry, Cry", artista: "Mazzy Star", album: "Among My Swan", genero: "Folk", duracion: "3:58", portada: "Among My Swan.jpg"},
  { titulo: "Take Everything", artista: "Mazzy Star", album: "Among My Swan", genero: "Folk", duracion: "4:53", portada: "Among My Swan.jpg"},
  { titulo: "Still Cold", artista: "Mazzy Star", album: "Among My Swan", genero: "Dream Pop", duracion: "4:48", portada: "Among My Swan.jpg"},
  { titulo: "All Your Sisters", artista: "Mazzy Star", album: "Among My Swan", genero: "Folk", duracion: "5:16", portada: "Among My Swan.jpg"},
  { titulo: "I've Been Let Down", artista: "Mazzy Star", album: "Among My Swan", genero: "Folk", duracion: "3:17", portada: "Among My Swan.jpg"},
  { titulo: "Roseblood", artista: "Mazzy Star", album: "Among My Swan", genero: "Dream Pop", duracion: "4:51", portada: "Among My Swan.jpg"},
  { titulo: "Happy", artista: "Mazzy Star", album: "Among My Swan", genero: "Dream Pop", duracion: "3:58", portada: "Among My Swan.jpg"},
  { titulo: "Umbilical", artista: "Mazzy Star", album: "Among My Swan", genero: "Dream Pop", duracion: "4:59", portada: "Among My Swan.jpg"},
  { titulo: "Look On Down From The Bridge", artista: "Mazzy Star", album: "Among My Swan", genero: "Dream Pop", duracion: "4:47", portada: "Among My Swan.jpg"},
  { titulo: "Piel", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "4:07", portada: "Arca.jpg"},
  { titulo: "Anoche", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "3:36", portada: "Arca.jpg"},
  { titulo: "Saunter", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "2:09", portada: "Arca.jpg"},
  { titulo: "Urchin", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "4:00", portada: "Arca.jpg"},
  { titulo: "Reverie", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "3:12", portada: "Arca.jpg"},
  { titulo: "Castration", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "3:21", portada: "Arca.jpg"},
  { titulo: "Sin Rumbo", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "3:35", portada: "Arca.jpg"},
  { titulo: "Coraje", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "4:31", portada: "Arca.jpg"},
  { titulo: "Whip", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "1:20", portada: "Arca.jpg"},
  { titulo: "Desafio", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "3:53", portada: "Arca.jpg"},
  { titulo: "Fugaces", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "3:07", portada: "Arca.jpg"},
  { titulo: "Miel", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "2:56", portada: "Arca.jpg"},
  { titulo: "Child", artista: "Arca", album: "Arca", genero: "Art Pop", duracion: "3:23", portada: "Arca.jpg"},
  { titulo: "All I Want", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "3:34", portada: "Blue.jpg"},
  { titulo: "My Old Man", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "3:34", portada: "Blue.jpg"},
  { titulo: "Little Green", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "3:27", portada: "Blue.jpg"},
  { titulo: "Carey", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "3:02", portada: "Blue.jpg"},
  { titulo: "Blue", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "2:57", portada: "Blue.jpg"},
  { titulo: "California", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "3:50", portada: "Blue.jpg"},
  { titulo: "This Flight Tonight", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "2:52", portada: "Blue.jpg"},
  { titulo: "River", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "4:05", portada: "Blue.jpg"},
  { titulo: "A Case of You", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "4:23", portada: "Blue.jpg"},
  { titulo: "The Last Time I Saw Richard", artista: "Joni Mitchell", album: "Blue", genero: "Folk", duracion: "4:16", portada: "Blue.jpg"},
  { titulo: "Born To Die", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "4:46", portada: "Born To Die.webp"},
  { titulo: "Off To The Races", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "4:59", portada: "Born To Die.webp"},
  { titulo: "Blue Jeans", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "3:29", portada: "Born To Die.webp"},
  { titulo: "Video Games", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "4:41", portada: "Born To Die.webp"},
  { titulo: "Diet Mountain Dew", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "3:42", portada: "Born To Die.webp"},
  { titulo: "National Anthem", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "3:50", portada: "Born To Die.webp"},
  { titulo: "Dark Paradise", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "4:03", portada: "Born To Die.webp"},
  { titulo: "Radio", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "3:34", portada: "Born To Die.webp"},
  { titulo: "Carmen", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "4:08", portada: "Born To Die.webp"},
  { titulo: "Million Dollar Man", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "3:50", portada: "Born To Die.webp"},
  { titulo: "Summertime Sadness", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "4:24", portada: "Born To Die.webp"},
  { titulo: "This Is What Makes Us Girls", artista: "Lana Del Rey", album: "Born To Die", genero: "Alternative Pop", duracion: "4:00", portada: "Born To Die.webp"},
  { titulo: "Bite The Hand", artista: "Boygenius", album: "Boygenius", genero: "Indie Rock", duracion: "3:12", portada: "Boygenius.webp"},
  { titulo: "Me & My Dog", artista: "Boygenius", album: "Boygenius", genero: "Indie Rock", duracion: "3:26", portada: "Boygenius.webp"},
  { titulo: "Souvenir", artista: "Boygenius", album: "Boygenius", genero: "Indie Rock", duracion: "3:32", portada: "Boygenius.webp"},
  { titulo: "Stay Down", artista: "Boygenius", album: "Boygenius", genero: "Indie Rock", duracion: "4:00", portada: "Boygenius.webp"},
  { titulo: "Salt In The Wound", artista: "Boygenius", album: "Boygenius", genero: "Indie Rock", duracion: "4:11", portada: "Boygenius.webp"},
  { titulo: "Ketchum, ID", artista: "Boygenius", album: "Boygenius", genero: "Indie Rock", duracion: "3:35", portada: "Boygenius.webp"},
  { titulo: "360", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "2:13", portada: "brat.jpg"},
  { titulo: "Club classics", artista: "Charli XCX", album: "Brat", genero: "Dance Pop", duracion: "2:33", portada: "brat.jpg"},
  { titulo: "Sympathy is a knife", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "2:31", portada: "brat.jpg"},
  { titulo: "I might say something stupid", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "1:49", portada: "brat.jpg"},
  { titulo: "Talk talk", artista: "Charli XCX", album: "Brat", genero: "Dance Pop", duracion: "2:41", portada: "brat.jpg"},
  { titulo: "Von dutch", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "2:44", portada: "brat.jpg"},
  { titulo: "Everything is romantic", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "3:23", portada: "brat.jpg"},
  { titulo: "Rewind", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "2:48", portada: "brat.jpg"},
  { titulo: "So I", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "3:31", portada: "brat.jpg"},
  { titulo: "Girl, so confusing", artista: "Charli XCX", album: "Brat", genero: "Dance Pop", duracion: "2:54", portada: "brat.jpg"},
  { titulo: "Apple", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "2:31", portada: "brat.jpg"},
  { titulo: "B2b", artista: "Charli XCX", album: "Brat", genero: "Dance Pop", duracion: "2:58", portada: "brat.jpg"},
  { titulo: "Mean girls", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "3:09", portada: "brat.jpg"},
  { titulo: "I think about it all the time", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "2:15", portada: "brat.jpg"},
  { titulo: "365", artista: "Charli XCX", album: "Brat", genero: "Pop", duracion: "3:23", portada: "brat.jpg"},
  { titulo: "ride the dragon", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:08", portada: "Caprisongs.webp"},
  { titulo: "honda", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:21", portada: "Caprisongs.webp"},
  { titulo: "meta angel", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "4:19", portada: "Caprisongs.webp"},
  { titulo: "tears in the club", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:16", portada: "Caprisongs.webp"},
  { titulo: "oh my love", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:46", portada: "Caprisongs.webp"},
  { titulo: "pamplemousse", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "1:38", portada: "Caprisongs.webp"},
  { titulo: "caprisongs interlude", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "0:25", portada: "Caprisongs.webp"},
  { titulo: "lightbeamers", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:31", portada: "Caprisongs.webp"},
  { titulo: "papi bones", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:40", portada: "Caprisongs.webp"},
  { titulo: "which way", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "2:02", portada: "Caprisongs.webp"},
  { titulo: "jeaousy", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "2:39", portada: "Caprisongs.webp"},
  { titulo: "careless", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:36", portada: "Caprisongs.webp"},
  { titulo: "minds of men", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:24", portada: "Caprisongs.webp"},
  { titulo: "track girl interlude", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "1:42", portada: "Caprisongs.webp"},
  { titulo: "darjeeling", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:03", portada: "Caprisongs.webp"},
  { titulo: "christi interlude", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "1:04", portada: "Caprisongs.webp"},
  { titulo: "thank you song", artista: "FKA twigs", album: "Caprisongs", genero: "R&B", duracion: "3:28", portada: "Caprisongs.webp"},
  { titulo: "Nomad", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:48", portada: "Charm.jpg"},
  { titulo: "Sexy to Someone", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:27", portada: "Charm.jpg"},
  { titulo: "Second Nature", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:47", portada: "Charm.jpg"},
  { titulo: "Slow Dance", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:54", portada: "Charm.jpg"},
  { titulo: "Thank You", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:25", portada: "Charm.jpg"},
  { titulo: "Terrapin", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:00", portada: "Charm.jpg"},
  { titulo: "Juna", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:15", portada: "Charm.jpg"},
  { titulo: "Add Up My Love", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:25", portada: "Charm.jpg"},
  { titulo: "Echo", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:49", portada: "Charm.jpg"},
  { titulo: "Glory of the Snow", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "2:50", portada: "Charm.jpg"},
  { titulo: "Pier 4", artista: "Clairo", album: "Charm", genero: "Indie Pop", duracion: "3:25", portada: "Charm.jpg"},
  { titulo: "Just a Feeling", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "1:22", portada: "CINEMA.webp"},
  { titulo: "Calling U Bakc", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "3:19", portada: "CINEMA.webp"},
  { titulo: "Hush", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "3:01", portada: "CINEMA.webp"},
  { titulo: "All I Really Want Is You", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "3:11", portada: "CINEMA.webp"},
  { titulo: "Hable con Ella", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "0:33", portada: "CINEMA.webp"},
  { titulo: "Little by Litte", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "2:58", portada: "CINEMA.webp"},
  { titulo: "Heavy", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "4:13", portada: "CINEMA.webp"},
  { titulo: "Un Millon", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "2:47", portada: "CINEMA.webp"},
  { titulo: "Spin Me Around", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "2:26", portada: "CINEMA.webp"},
  { titulo: "The Mice Inside This Room", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "4:08", portada: "CINEMA.webp"},
  { titulo: "To Say Hello", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "3:22", portada: "CINEMA.webp"},
  { titulo: "Fog as a Bullet", artista: "The Marias", album: "Cinema", genero: "Folk", duracion: "2:57", portada: "CINEMA.webp"},
  { titulo: "Talk to Her", artista: "The Marias", album: "Cinema", genero: "Alternative Pop", duracion: "5:26", portada: "CINEMA.webp"},
  { titulo: "Found Heaven", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "2:57", portada: "Found Heaven.jpg"},
  { titulo: "Never Ending Song", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "2:34", portada: "Found Heaven.jpg"},
  { titulo: "Fainted Love", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "2:50", portada: "Found Heaven.jpg"},
  { titulo: "Lonely Dancers", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "2:28", portada: "Found Heaven.jpg"},
  { titulo: "Alley Rose", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "3:28", portada: "Found Heaven.jpg"},
  { titulo: "The Final Fight", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "2:08", portada: "Found Heaven.jpg"},
  { titulo: "Miss You", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "2:23", portada: "Found Heaven.jpg"},
  { titulo: "Bourgeoisieses", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "2:31", portada: "Found Heaven.jpg"},
  { titulo: "Forever With Me", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "3:35", portada: "Found Heaven.jpg"},
  { titulo: "Eye Of The Night", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "2:21", portada: "Found Heaven.jpg"},
  { titulo: "Boys & Girls", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "2:22", portada: "Found Heaven.jpg"},
  { titulo: "Killing Me", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "3:24", portada: "Found Heaven.jpg"},
  { titulo: "Winner", artista: "Conan Gray", album: "Found Heaven", genero: "Pop", duracion: "3:36", portada: "Found Heaven.jpg"},
  { titulo: "Neighborhood #1 (Tunnels)", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "4:48", portada: "Funeral.jpg"},
  { titulo: "Neighborhood #2 (Laika)", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "3:32", portada: "Funeral.jpg"},
  { titulo: "Une Annee Sans Lumiere", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "3:40", portada: "Funeral.jpg"},
  { titulo: "Neighborhood #3 (Power Out)", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "5:12", portada: "Funeral.jpg"},
  { titulo: "Neighborhood #4 (7 Kettles)", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "4:49", portada: "Funeral.jpg"},
  { titulo: "Crown of Love", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "4:42", portada: "Funeral.jpg"},
  { titulo: "Wake Up", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "5:35", portada: "Funeral.jpg"},
  { titulo: "Haiti", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "4:07", portada: "Funeral.jpg"},
  { titulo: "Rebellion (Lies)", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "5:10", portada: "Funeral.jpg"},
  { titulo: "In the Backseat", artista: "Arcade Fire", album: "Funeral", genero: "Indie Rock", duracion: "6:20", portada: "Funeral.jpg"},
  { titulo: "Mojo Pin", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "5:42", portada: "Grace.jpg"},
  { titulo: "Grace", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "5:22", portada: "Grace.jpg"},
  { titulo: "Last Goodbye", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "4:38", portada: "Grace.jpg"},
  { titulo: "Lilac Wine", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "4:32", portada: "Grace.jpg"},
  { titulo: "So Real", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "4:43", portada: "Grace.jpg"},
  { titulo: "Hallelujah", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "6:53", portada: "Grace.jpg"},
  { titulo: "Lover, You Should've Come Over", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "6:44", portada: "Grace.jpg"},
  { titulo: "Copus Christi Carol", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "2:56", portada: "Grace.jpg"},
  { titulo: "Eternal Life", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "4:52", portada: "Grace.jpg"},
  { titulo: "Dream Brother", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "5:26", portada: "Grace.jpg"},
  { titulo: "Forget Her", artista: "Jeff Buckley", album: "Grace", genero: "Alternative Rock", duracion: "5:12", portada: "Grace.jpg"},
  { titulo: "SKINNY", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Alternative Pop", duracion: "3:39", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "LUNCH", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Pop", duracion: "2:59", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "CHIHIRO", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Alternative Pop", duracion: "5:03", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "BIRDS OF A FEATHER", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Pop", duracion: "3:30", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "WILDFLOWER", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Alternative Pop", duracion: "4:21", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "THE GREATEST", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Alternative Pop", duracion: "4:53", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "LAMOUR DE MA VIE", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Alternative Pop", duracion: "5:33", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "THE DINER", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Alternative Pop", duracion: "3:06", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "BITTERSUITE", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Alternative Pop", duracion: "4:58", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "BLUE", artista: "Billie Eilish", album: "Hit Me Hard And Soft", genero: "Alternative Pop", duracion: "5:43", portada: "HIT ME HARD AND SOFT.jpg"},
  { titulo: "Concerning the UFO sighting near Highland, Illinois", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "2:08", portada: "Illinoise.jpg"},
  { titulo: "The Black Hawk War, Or, How to Demolish...", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "2:14", portada: "Illinoise.jpg"},
  { titulo: "Come On! Feel the Illinoise! Part I...", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "6:45", portada: "Illinoise.jpg"},
  { titulo: "John Wayne Gacy, Jr.", artista: "Sufjan Stevens", album: "Illinois", genero: "Folk", duracion: "3:19", portada: "Illinoise.jpg"},
  { titulo: "Jacksonville", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "5:24", portada: "Illinoise.jpg"},
  { titulo: "A short reprise for Mary Todd, who went insane...", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "0:47", portada: "Illinoise.jpg"},
  { titulo: "Decatur, or, Round of Applause for Your Step-Mother!", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "3:03", portada: "Illinoise.jpg"},
  { titulo: "One last Whoo-hoo! for the Pullman", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "0:06", portada: "Illinoise.jpg"},
  { titulo: "Chicago", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "6:04", portada: "Illinoise.jpg"},
  { titulo: "Casimir Pulaski Day", artista: "Sufjan Stevens", album: "Illinois", genero: "Folk", duracion: "5:53", portada: "Illinoise.jpg"},
  { titulo: "To The Workers of The Rock River Valley Region...", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "1:40", portada: "Illinoise.jpg"},
  { titulo: "The Man of Metrtopolis Steals Our Hearts", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "6:17", portada: "Illinoise.jpg"},
  { titulo: "Prairie Fire That Wanders About", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "2:11", portada: "Illinoise.jpg"},
  { titulo: "A conjuction of drones simulating the way...", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "0:19", portada: "Illinoise.jpg"},
  { titulo: "The Predatory Wasp of the Palisades Is Out to Get Us!", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "5:23", portada: "Illinoise.jpg"},
  { titulo: "They Are Night Zombies!! They Are Neighboors!!", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "5:09", portada: "Illinoise.jpg"},
  { titulo: "Let's hear that string part again, because I don't...", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "0:40", portada: "Illinoise.jpg"},
  { titulo: "In This Temple As In The Hearts of Man For Whom...", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "0:35", portada: "Illinoise.jpg"},
  { titulo: "The Seer's Tower", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "3:53", portada: "Illinoise.jpg"},
  { titulo: "The Talles Man, the Broadest Shoulders Part I", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "7:02", portada: "Illinoise.jpg"},
  { titulo: "Riffs and Variations on a single note for Jelly...", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "0:46", portada: "Illinoise.jpg"},
  { titulo: "Out of Egypt, into the Great Laugh of Mankind...", artista: "Sufjan Stevens", album: "Illinois", genero: "Pop", duracion: "4:21", portada: "Illinoise.jpg"},
  { titulo: "She Looked Like Me!", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "3:13", portada: "Imaginal Disk.jpg"},
  { titulo: "Killing Time", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "3:53", portada: "Imaginal Disk.jpg"},
  { titulo: "True Blue Interlude", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "1:49", portada: "Imaginal Disk.jpg"},
  { titulo: "Image", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "3:32", portada: "Imaginal Disk.jpg"},
  { titulo: "Death & Romance", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "5:14", portada: "Imaginal Disk.jpg"},
  { titulo: "Fear, Sex", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "2:32", portada: "Imaginal Disk.jpg"},
  { titulo: "Vampire in the Corner", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "3:22", portada: "Imaginal Disk.jpg"},
  { titulo: "Watching T.V", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "4:05", portada: "Imaginal Disk.jpg"},
  { titulo: "Tunnel Vision", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "5:05", portada: "Imaginal Disk.jpg"},
  { titulo: "Love Is Everywhere", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "3:14", portada: "Imaginal Disk.jpg"},
  { titulo: "Feeling Diskinserted?", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "0:58", portada: "Imaginal Disk.jpg"},
  { titulo: "That's My Floor", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "3:29", portada: "Imaginal Disk.jpg"},
  { titulo: "Cry for Me", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "5:07", portada: "Imaginal Disk.jpg"},
  { titulo: "Angel on a Satellite", artista: "Magdalena Bay", album: "Imaginal Disk", genero: "Pop", duracion: "4:03", portada: "Imaginal Disk.jpg"},
  { titulo: "16 Step", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "3:57", portada: "In Rainbows.webp"},
  { titulo: "Bodysnatchers", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "4:02", portada: "In Rainbows.webp"},
  { titulo: "Nude", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "4:15", portada: "In Rainbows.webp"},
  { titulo: "Weird Fishes / Arpeggi", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "5:18", portada: "In Rainbows.webp"},
  { titulo: "All I Need", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "3:48", portada: "In Rainbows.webp"},
  { titulo: "Faust Arp", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "2:09", portada: "In Rainbows.webp"},
  { titulo: "Reckoner", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "4:50", portada: "In Rainbows.webp"},
  { titulo: "House Of Cards", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "5:28", portada: "In Rainbows.webp"},
  { titulo: "Jigsaw Falling Into Place", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "4:08", portada: "In Rainbows.webp"},
  { titulo: "Videotape", artista: "Radiohead", album: "In Rainbows", genero: "Alternative Rock", duracion: "4:39", portada: "In Rainbows.webp"},
  { titulo: "Airbag", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "4:47", portada: "Ok Computer.webp"},
  { titulo: "Paranoid Android", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "6:27", portada: "Ok Computer.webp"},
  { titulo: "Subterranean Momesick Alien", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "4:27", portada: "Ok Computer.webp"},
  { titulo: "Exit Music (For A Film)", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "4:27", portada: "Ok Computer.webp"},
  { titulo: "Let Down", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "4:59", portada: "Ok Computer.webp"},
  { titulo: "Karma Police", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "4:24", portada: "Ok Computer.webp"},
  { titulo: "Fitter Happier", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "1:57", portada: "Ok Computer.webp"},
  { titulo: "Electioneering", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "3:50", portada: "Ok Computer.webp"},
  { titulo: "Climbing Up the Walls", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "4:45", portada: "Ok Computer.webp"},
  { titulo: "No Surprises", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "3:49", portada: "Ok Computer.webp"},
  { titulo: "Lucky", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "4:18", portada: "Ok Computer.webp"},
  { titulo: "The Tourist", artista: "Radiohead", album: "OK Computer", genero: "Alternative Rock", duracion: "5:26", portada: "Ok Computer.webp"},
  { titulo: "End Of An Era", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "3:16", portada: "Radical Optimism.webp"},
  { titulo: "Houdini", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "3:05", portada: "Radical Optimism.webp"},
  { titulo: "Training Season", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "3:29", portada: "Radical Optimism.webp"},
  { titulo: "These Walls", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "3:37", portada: "Radical Optimism.webp"},
  { titulo: "Watcha Doing", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "3:18", portada: "Radical Optimism.webp"},
  { titulo: "French Exit", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "3:21", portada: "Radical Optimism.webp"},
  { titulo: "Illusion", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "3:08", portada: "Radical Optimism.webp"},
  { titulo: "Falling Forever", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "3:43", portada: "Radical Optimism.webp"},
  { titulo: "Anything For Love", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "2_21", portada: "Radical Optimism.webp"},
  { titulo: "Maria", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "3:07", portada: "Radical Optimism.webp"},
  { titulo: "Happy For You", artista: "Dua Lipa", album: "Radical Optimism", genero: "Pop", duracion: "4:05", portada: "Radical Optimism.webp"},
  { titulo: "Give Life Back to Music", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "4:35", portada: "Random Access Memories.webp"},
  { titulo: "The Game of Love", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "5:22", portada: "Random Access Memories.webp"},
  { titulo: "Giorgio by Moroder", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "9:04", portada: "Random Access Memories.webp"},
  { titulo: "Within", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "3:48", portada: "Random Access Memories.webp"},
  { titulo: "Instant Crush", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "5:37", portada: "Random Access Memories.webp"},
  { titulo: "Lose Yourself to Dance", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "5:53", portada: "Random Access Memories.webp"},
  { titulo: "Touch", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "8:18", portada: "Random Access Memories.webp"},
  { titulo: "Get Lucky", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "6:09", portada: "Random Access Memories.webp"},
  { titulo: "Beyond", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "4:50", portada: "Random Access Memories.webp"},
  { titulo: "Motherboard", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "4:51", portada: "Random Access Memories.webp"},
  { titulo: "Fragments of Time", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "4:19", portada: "Random Access Memories.webp"},
  { titulo: "Doin it Right", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "4:11", portada: "Random Access Memories.webp"},
  { titulo: "Contact", artista: "Daft Punk", album: "Random Access Memories", genero: "Electronic", duracion: "6:23", portada: "Random Access Memories.webp"},
  { titulo: "I'M THAT GIRL", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "3:28", portada: "Renaissance.webp"},
  { titulo: "COZY", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "3:30", portada: "Renaissance.webp"},
  { titulo: "ALIEN SUPERSTAR", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "3:35", portada: "Renaissance.webp"},
  { titulo: "CUFF IT", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "3:45", portada: "Renaissance.webp"},
  { titulo: "ENERGY", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "1:56", portada: "Renaissance.webp"},
  { titulo: "BREAK MY SOUL", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "4:38", portada: "Renaissance.webp"},
  { titulo: "CHURCH GIRL", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "3:44", portada: "Renaissance.webp"},
  { titulo: "PLASTIC OFF THE SOFA", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "4:14", portada: "Renaissance.webp"},
  { titulo: "VIRGO'S GROOVE", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "6:08", portada: "Renaissance.webp"},
  { titulo: "MOVE", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "3:23", portada: "Renaissance.webp"},
  { titulo: "HEATED", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "4:20", portada: "Renaissance.webp"},
  { titulo: "THIQUE", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "4:04", portada: "Renaissance.webp"},
  { titulo: "ALL UP IN YOUR MIND", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "2:49", portada: "Renaissance.webp"},
  { titulo: "AMERICA HAS A PROBLEM", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "3:18", portada: "Renaissance.webp"},
  { titulo: "PURE/HONEY", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "4:48", portada: "Renaissance.webp"},
  { titulo: "SUMMER RENAISSANCE", artista: "Beyonce", album: "Renaissance", genero: "Dance Pop", duracion: "4:33", portada: "Renaissance.webp"},
  { titulo: "All the Trees of the Field Will Clap Their Hands", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "4:14", portada: "Seven Swans.jpg"},
  { titulo: "The Dress Looks Nice on You", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "2:32", portada: "Seven Swans.jpg"},
  { titulo: "In the Devil's Territory", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "4:57", portada: "Seven Swans.jpg"},
  { titulo: "To Be Alone With You", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "2:48", portada: "Seven Swans.jpg"},
  { titulo: "Abraham", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "2:33", portada: "Seven Swans.jpg"},
  { titulo: "Sister", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "6:00", portada: "Seven Swans.jpg"},
  { titulo: "Size Too Small", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "3:04", portada: "Seven Swans.jpg"},
  { titulo: "We Won't Need Legs To Stand", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "2:16", portada: "Seven Swans.jpg"},
  { titulo: "A Good Man Is Hard to Find", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "3:16", portada: "Seven Swans.jpg"},
  { titulo: "He Woke Me Up Again", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "2:43", portada: "Seven Swans.jpg"},
  { titulo: "Seven Swans", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "6:33", portada: "Seven Swans.jpg"},
  { titulo: "The Transfiguration", artista: "Sufjan Stevens", album: "Seven Swans", genero: "Folk", duracion: "5:18", portada: "Seven Swans.jpg"},
  { titulo: "two reverse", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "3:33", portada: "Songs.jpg"},
  { titulo: "ingydar", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "4:10", portada: "Songs.jpg"},
  { titulo: "anything", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "4:08", portada: "Songs.jpg"},
  { titulo: "forwards beckon rebound", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "3:22", portada: "Songs.jpg"},
  { titulo: "heavy focus", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "3:09", portada: "Songs.jpg"},
  { titulo: "hald return", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "2:34", portada: "Songs.jpg"},
  { titulo: "come", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "2:08", portada: "Songs.jpg"},
  { titulo: "zombie girl", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "5:17", portada: "Songs.jpg"},
  { titulo: "not a lot, just forever", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "2:44", portada: "Songs.jpg"},
  { titulo: "dragon eyes", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "3:26", portada: "Songs.jpg"},
  { titulo: "my angel", artista: "Adrianne Lenker", album: "Songs", genero: "Folk", duracion: "5:04", portada: "Songs.jpg"},
  { titulo: "Femininomenon", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:39", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Red Wine Supernova", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:12", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "After Midnight", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:24", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Coffee", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:25", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Casual", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:52", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Super Graphic Ultra Modern Girl", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:03", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "HOT TO GO!", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:04", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "My Kink Is Karma", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:42", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Picture You", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:07", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Kaleidoscope", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:42", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Pink Pony Club", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "4:18", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Naked In Manhattan", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:31", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "California", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:18", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Guilty Pleasure", artista: "Chappel Roan", album: "The Rise and Fall of a Midwest Princess", genero: "Pop", duracion: "3:44", portada: "The Rise and Fall of a Midwest Princess.webp"},
  { titulo: "Jumpsuit", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "3:44", portada: "Trench.jpg"},
  { titulo: "Levitate", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "2:25", portada: "Trench.jpg"},
  { titulo: "Morph", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "4:18", portada: "Trench.jpg"},
  { titulo: "Chlorine", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "3:49", portada: "Trench.jpg"},
  { titulo: "Smithereens", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "5:24", portada: "Trench.jpg"},
  { titulo: "Neon Gravestones", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "2:57", portada: "Trench.jpg"},
  { titulo: "The Hype", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "4:00", portada: "Trench.jpg"},
  { titulo: "Nico and the Niners", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "4:25", portada: "Trench.jpg"},
  { titulo: "Cut My Lip", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "3:45", portada: "Trench.jpg"},
  { titulo: "Bandito", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "4:42", portada: "Trench.jpg"},
  { titulo: "Pet Cheetah", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "5:30", portada: "Trench.jpg"},
  { titulo: "Legend", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "3:18", portada: "Trench.jpg"},
  { titulo: "Leave the City", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "2:52", portada: "Trench.jpg"},
  { titulo: "My Blood", artista: "Twenty One Pilots", album: "Trench", genero: "Alternative Pop", duracion: "4:40", portada: "Trench.jpg"},
  { titulo: "WOBBLE", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "2:43", portada: "What Happened To The Beach.webp"},
  { titulo: "Elevator Hum", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "3:55", portada: "What Happened To The Beach.webp"},
  { titulo: "I Write The News", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "2:45", portada: "What Happened To The Beach.webp"},
  { titulo: "Sympathy", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "3:05", portada: "What Happened To The Beach.webp"},
  { titulo: "Mulhollands Dinner and Wine", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "3:21", portada: "What Happened To The Beach.webp"},
  { titulo: "Breath of Light", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "3:40", portada: "What Happened To The Beach.webp"},
  { titulo: "Nothing Works", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "4:12", portada: "What Happened To The Beach.webp"},
  { titulo: "The Phantom Buzz (Kick In)", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "2:35", portada: "What Happened To The Beach.webp"},
  { titulo: "Honest Test", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "3:12", portada: "What Happened To The Beach.webp"},
  { titulo: "Mezzanine", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "4:19", portada: "What Happened To The Beach.webp"},
  { titulo: "Its An Act", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "5:00", portada: "What Happened To The Beach.webp"},
  { titulo: "4 More Years", artista: "Declan Mckenna", album: "What Happened To The Beach?", genero: "Indie Pop", duracion: "0:48", portada: "What Happened To The Beach.webp"},
];




/* 
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
}*/

async function InsertarMultiplesregistroCanciones() {

  try {
    for (const cancion of canciones) {
      const query = `INSERT INTO canciones (id, titulo, artista, album, genero, duracion, portada) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const params = [uuidv4(), cancion.titulo, cancion.artista, cancion.album, cancion.genero, cancion.duracion, cancion.portada];

      await client.execute(query, params, { prepare: true });
      console.log(`cancion insertada: ${cancion.titulo}`);
    }

    console.log('Todos las canciones fueron insertados correctamente');
  } catch (error) {
    console.error('Error al insertar cancion:', error);
  }

}

// Función para insertar múltiples registros
async function insertarMultiplesUsuarios() {
  try {
    for (const usuario of datos) {
      const query = `INSERT INTO usuarios (id, password, nombre, ciudad, edad) VALUES (?, ?, ?, ?, ?)`;
      const params = [uuidv4(), usuario.password, usuario.nombre, usuario.ciudad, usuario.edad];

      await client.execute(query, params, { prepare: true });
      console.log(`Usuario insertado: ${usuario.nombre}`);
    }

    console.log('Todos los usuarios fueron insertados correctamente');
  } catch (error) {
    console.error('Error al insertar usuarios:', error);
  }

}

async function insertarCancionesEscuchadasPorUsuario(){
    try {
        const usuarios = await client.execute("SELECT id FROM usuarios");
        const canciones = await client.execute("SELECT id, titulo, artista, album, genero, duracion, portada FROM canciones");
        
        for (const usuario of usuarios.rows) {
            let cancionesAsignadas = new Set();
            // Asegurar que haya mínimo 20 canciones por usuario
            while (cancionesAsignadas.size < 20) {
                const cancion = canciones.rows[Math.floor(Math.random() * canciones.rows.length)];
                cancionesAsignadas.add(cancion);
            }

            // 3. Insertar los datos en `usuario_cancion`
            for (const song of cancionesAsignadas) {
                const fechaReproduccion = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
                await client.execute(
                    "INSERT INTO usuario_cancion (usuario_id, cancion_id, titulo, artista, album, genero, duracion, portada, fecha_reproduccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    [usuario.id, song.id, song.titulo, song.artista, song.album, song.genero, song.duracion, song.portada, fechaReproduccion]
                );
                console.log(`Insertado: Usuario ${usuario.id} -> Canción ${song.titulo}`);
            }
        }

        console.log("¡Inserción completa! Todos los usuarios tienen mínimo 20 canciones.");
    } catch (err) {
        console.error("Error al insertar datos:", err);
    }
}

/*RECOMENDACION DE CANCIONES POR REPRODUCCION */
async function poblarCancionesPorUsuarios() {
  try {
      console.log("Obteniendo canciones desde la base de datos...");
      
      // Consultar todas las canciones
      const cancionesQuery = 'SELECT id, titulo, artista, album, genero, duracion, portada FROM canciones';
      const cancionesResult = await client.execute(cancionesQuery);
      
      console.log(`Se encontraron ${cancionesResult.rows.length} canciones. Poblando la tabla...`);
      
      for (const row of cancionesResult.rows) {
          const reproducciones = Math.floor(Math.random() * 20000); // Número aleatorio entre 0 y 999
          
          const insertQuery = 'INSERT INTO cancionesPorusuarios (cancion_id, titulo, artista, album, genero, duracion, portada, total) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
          await client.execute(insertQuery, [row.id, row.titulo, row.artista, row.album, row.genero, row.duracion, row.portada, reproducciones], { prepare: true });
          
          console.log(`Insertada: ${row.titulo} con ${reproducciones} reproducciones.`);
        }
        
        console.log("¡Tabla cancionesPorusuarios poblada correctamente!");
  } catch (error) {
    console.error("Error al poblar la tabla:", error);
  }
}

async function insertarCancionesPorGenero(){
  try {
      console.log("Obteniendo canciones desde la base de datos...");
      
      // Consultar todas las canciones
      const cancionesQuery = 'SELECT cancion_id, titulo, artista, album, genero, duracion, portada, total FROM cancionesPorusuarios';
      const cancionesResult = await client.execute(cancionesQuery);
      
      console.log(`Se encontraron ${cancionesResult.rows.length} canciones. Poblando la tabla...`);
      
      for (const row of cancionesResult.rows) {    
          const insertQuery = 'INSERT INTO canciones_mas_escuchadas_por_genero (genero, cancion_id, titulo, artista, album, duracion, portada, reproducciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
          await client.execute(insertQuery, [row.genero, row.cancion_id, row.titulo, row.artista, row.album, row.duracion, row.portada, row.total], { prepare: true });
          
          console.log(`Insertada: ${row.titulo} con ${row.total} reproducciones.`);
        }
        
        console.log("¡Tabla canciones_mas_escuchadas_por_genero poblada correctamente!");
  } catch (error) {
    console.error("Error al poblar la tabla:", error);
  } finally {
    
  }
}

async function PorciudadYGenero() {
    try {
        // Obtener todas las ciudades de usuarios
        const queryUsuarios = `SELECT ciudad FROM usuarios;`;
        const resultUsuarios = await client.execute(queryUsuarios);

        // Filtrar ciudades únicas
        const ciudadesUnicas = [...new Set(resultUsuarios.rows.map(row => row.ciudad))];
        console.log(`Se encontraron ${ciudadesUnicas.length} ciudades únicas`);

        // Lista de canciones organizadas por género
        

        for (const ciudad of ciudadesUnicas) {
            // Mezclar canciones para obtener una distribución aleatoria en cada ciudad
            const cancionesMezcladas = [...canciones].sort(() => Math.random() - 0.5);

            // Asignar reproducciones aleatorias
            let generoMasEscuchado = null;
            let maxReproducciones = 0;

            for (const cancion of cancionesMezcladas) {
                const reproducciones = Math.floor(Math.random() * 20000); // Generar un número aleatorio de reproducciones

                // Actualizar el género más escuchado de la ciudad
                if (reproducciones > maxReproducciones) {
                    maxReproducciones = reproducciones;
                    generoMasEscuchado = cancion.genero;
                }

                const queryInsert = `
                    INSERT INTO cancion_mas_escuchadas_ciudad (ciudad, cancion_id, titulo, artista, album, genero, duracion, portada, reproducciones)
                    VALUES (?, uuid(), ?, ?, ?, ?, ?, ?, ?);
                `;

                await client.execute(queryInsert, [
                    ciudad,
                    cancion.titulo,
                    cancion.artista,
                    cancion.album,
                    cancion.genero,
                    cancion.duracion,
                    cancion.portada,
                    reproducciones
                ], { prepare: true });

                console.log(`Insertada canción: ${cancion.titulo} (${cancion.genero}) en ${ciudad} con ${reproducciones} reproducciones`);
            }

            console.log(`En ${ciudad}, el género más escuchado es **${generoMasEscuchado}** con ${maxReproducciones} reproducciones.`);
        }

        console.log("Tabla poblada con múltiples géneros en cada ciudad, con variación en el género más escuchado.");
    } catch (error) {
        console.error("Error al llenar la tabla:", error);
    } finally {
        
    }
};



async function CancionMasEscuchadaPorMesEnCadaCiudad() {
    try {
        // Obtener todas las ciudades de usuarios
        const queryUsuarios = `SELECT ciudad FROM usuarios;`;
        const resultUsuarios = await client.execute(queryUsuarios);

        // Filtrar ciudades únicas
        const ciudadesUnicas = [...new Set(resultUsuarios.rows.map(row => row.ciudad))];
        console.log(`Se encontraron ${ciudadesUnicas.length} ciudades únicas`);

        for (const ciudad of ciudadesUnicas) {
            for (const mes of meses) {
                // Mezclar canciones y generar reproducciones aleatorias
                const cancionesMezcladas = [...canciones]
                    .sort(() => Math.random() - 0.5)
                    .map(cancion => ({
                        ...cancion,
                        reproducciones: Math.floor(Math.random() * 20000)
                    }))
                    .sort((a, b) => b.reproducciones - a.reproducciones) // Ordenar por reproducciones

                // Seleccionar las 3 canciones más escuchadas del mes en la ciudad
                const topCanciones = cancionesMezcladas.slice(0, 3);

                let generoMasEscuchado = topCanciones[0]?.genero; // Género de la canción con más reproducciones

                for (const cancion of topCanciones) {
                    const queryInsert = `
                        INSERT INTO canciones_populares_por_mes (ciudad, mes, cancion_id, titulo, artista, album, genero, duracion, portada, reproducciones)
                        VALUES (?, ?, uuid(), ?, ?, ?, ?, ?, ?, ?);
                    `;

                    await client.execute(queryInsert, [
                        ciudad,
                        mes,
                        cancion.titulo,
                        cancion.artista,
                        cancion.album,
                        cancion.genero,
                        cancion.duracion,
                        cancion.portada,
                        cancion.reproducciones
                    ], { prepare: true });

                    console.log(`TOP en ${ciudad} - ${mes}: ${cancion.titulo} (${cancion.genero}) con ${cancion.reproducciones} reproducciones`);
                }

                console.log(`En ${ciudad} en ${mes}, el género más escuchado es **${generoMasEscuchado}**`);
            }
        }

        console.log("Tabla poblada con el top 3 de canciones más escuchadas por mes en cada ciudad.");
    } catch (error) {
        console.error("Error al llenar la tabla:", error);
    } finally {
        await client.shutdown();
    }
}
  
async function runSeeders() {
  try {
    console.log('Insertando usuarios...');
    await insertarMultiplesUsuarios();

    console.log('Insertando canciones...');
    await InsertarMultiplesregistroCanciones();

    console.log('Vinculando usuarios con canciones...');
    await insertarCancionesEscuchadasPorUsuario();

    console.log('Recomendacion por reproduccion cargada...');
    await poblarCancionesPorUsuarios();

    console.log('Recomendacion por genero cargada....');
    await insertarCancionesPorGenero();

    console.log('Consulta OLAP por ciudad y genero....');
    await PorciudadYGenero();

    console.log('Consulta OLAP por mes y ciudad....');
    await CancionMasEscuchadaPorMesEnCadaCiudad();

    console.log('Todos los datos fueron insertados correctamente.');
  } catch (err) {
    console.error('Error durante la inserción:', err);
  } finally {
    await client.shutdown();
  }
}

runSeeders();

