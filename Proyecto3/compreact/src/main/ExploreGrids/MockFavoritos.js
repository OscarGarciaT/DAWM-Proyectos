const MockFavoritos = (type) => {
  const juegos = {
    0: { id: 1, name: "Valorant" },
    1: { id: 2, name: "Dota 2" },
    2: { id: 3, name: "Overwatch" },
    3: { id: 4, name: "osu!" },
    4: { id: 5, name: "Rainbow Six Siege" },
  };

  const equipos = {
    0: { id: 1, name: "Team Liquid" },
    1: { id: 2, name: "Fnatic" },
    2: { id: 3, name: "Team Secret" },
    3: { id: 4, name: "Sentinels" },
    4: { id: 5, name: "The Guard" },
  };

  return type === "juegos" ? juegos : equipos;
};

export default MockFavoritos;
