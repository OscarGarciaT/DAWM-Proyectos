create table
    Juegos (
        id_juego int AUTO_INCREMENT not null,
        nombre varchar(30) not null,
        genero varchar(30) not null,
        plataforma varchar(30) not null,
        descripcion varchar(255) not null,
        primary key(id_juego)
    );

create table
    JuegosEquipos (
        id_juego int not null,
        id_equipo int not null,
        primary key(id_juego, id_equipo),
        foreign key(id_juego) references Juegos(id_juego),
        foreign key(id_equipo) references Equipos(id_equipo)
    );

create table
    Equipos (
        id_equipo int AUTO_INCREMENT not null,
        nombre varchar(30) not null,
        pais varchar(30) not null,
        activo boolean not null,
        ganancias int not null,
        primary key(id_equipo)
    );

create table
    Jugadores (
        id_jugador int AUTO_INCREMENT not null,
        nombre varchar(30) not null,
        apellido varchar(30) not null,
        nickname varchar(30) not null,
        fecha_nacimiento DATE not null,
        pais varchar(30) not null,
        activo boolean not null,
        ganancias int not null,
        equipo int not null,
        primary key(id_jugador),
        foreign key (equipo) references Equipos(id_equipo)
    );