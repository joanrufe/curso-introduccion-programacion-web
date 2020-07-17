/*
Implementar una aplicación para filtar los siguientes
empleados por género y ciudad de nacimiento.
*/

const empleados = [
  {
    id: 1,
    first_name: "Mara",
    last_name: "Denniss",
    gender: "Female",
    photo: "https://robohash.org/omnisnostrumut.bmp?size=100x100&set=set1",
    city_of_birth: "Huangdu"
  },
  {
    id: 2,
    first_name: "Celestia",
    last_name: "Bartoszewicz",
    gender: "Female",
    photo: "https://robohash.org/magnameoslaudantium.bmp?size=100x100&set=set1",
    city_of_birth: "Shuishiying"
  },
  {
    id: 3,
    first_name: "Portia",
    last_name: "Rushford",
    gender: "Female",
    photo: "https://robohash.org/etlaudantiumab.jpg?size=100x100&set=set1",
    city_of_birth: "Taloko"
  },
  {
    id: 4,
    first_name: "Timotheus",
    last_name: "Canario",
    gender: "Male",
    photo:
      "https://robohash.org/voluptatumofficiisdolor.bmp?size=100x100&set=set1",
    city_of_birth: "Dos Hermanas"
  },
  {
    id: 5,
    first_name: "Christian",
    last_name: "Thraves",
    gender: "Male",
    photo:
      "https://robohash.org/exercitationemvoluptatemnesciunt.jpg?size=100x100&set=set1",
    city_of_birth: "Chełm"
  },
  {
    id: 6,
    first_name: "Jarret",
    last_name: "Gerbel",
    gender: "Male",
    photo: "https://robohash.org/nonteneturet.bmp?size=100x100&set=set1",
    city_of_birth: "Tocumen"
  },
  {
    id: 7,
    first_name: "Darcy",
    last_name: "L'argent",
    gender: "Female",
    photo: "https://robohash.org/voluptasavoluptatem.png?size=100x100&set=set1",
    city_of_birth: "Nizhniye Vyazovyye"
  },
  {
    id: 8,
    first_name: "Ian",
    last_name: "Ropkes",
    gender: "Male",
    photo:
      "https://robohash.org/adipiscisuntdistinctio.jpg?size=100x100&set=set1",
    city_of_birth: "Lewo"
  },
  {
    id: 9,
    first_name: "Margaretta",
    last_name: "Milburn",
    gender: "Female",
    photo: "https://robohash.org/sitomnisoptio.jpg?size=100x100&set=set1",
    city_of_birth: "Bojong"
  },
  {
    id: 10,
    first_name: "Moselle",
    last_name: "Korf",
    gender: "Female",
    photo: "https://robohash.org/doloresvoluptateset.bmp?size=100x100&set=set1",
    city_of_birth: "Fiães"
  },
  {
    id: 11,
    first_name: "Danila",
    last_name: "Gasnoll",
    gender: "Female",
    photo: "https://robohash.org/etnequequasi.png?size=100x100&set=set1",
    city_of_birth: "Yanahuanca"
  },
  {
    id: 12,
    first_name: "Doy",
    last_name: "Houlston",
    gender: "Male",
    photo:
      "https://robohash.org/quaeratvoluptatemeaque.bmp?size=100x100&set=set1",
    city_of_birth: "Andramasina"
  },
  {
    id: 13,
    first_name: "Base",
    last_name: "Garfoot",
    gender: "Male",
    photo: "https://robohash.org/sitsitcumque.bmp?size=100x100&set=set1",
    city_of_birth: "Kayar"
  },
  {
    id: 14,
    first_name: "Avie",
    last_name: "Hegden",
    gender: "Female",
    photo: "https://robohash.org/quibusdamsintsed.bmp?size=100x100&set=set1",
    city_of_birth: "Qila Saifullāh"
  },
  {
    id: 15,
    first_name: "Virgilio",
    last_name: "Greenlies",
    gender: "Male",
    photo: "https://robohash.org/nobisnihilrerum.bmp?size=100x100&set=set1",
    city_of_birth: "Puqian"
  },
  {
    id: 16,
    first_name: "Virginie",
    last_name: "Grinaugh",
    gender: "Female",
    photo: "https://robohash.org/blanditiisaliassit.png?size=100x100&set=set1",
    city_of_birth: "Alexandria"
  },
  {
    id: 17,
    first_name: "Deeanne",
    last_name: "Morson",
    gender: "Female",
    photo: "https://robohash.org/quibusdamnisiut.png?size=100x100&set=set1",
    city_of_birth: "Tha Mai"
  },
  {
    id: 18,
    first_name: "Marita",
    last_name: "Jira",
    gender: "Female",
    photo: "https://robohash.org/culpanihilin.png?size=100x100&set=set1",
    city_of_birth: "As Sab‘ Biyār"
  },
  {
    id: 19,
    first_name: "Charin",
    last_name: "Daingerfield",
    gender: "Female",
    photo:
      "https://robohash.org/placeatdistinctioeos.png?size=100x100&set=set1",
    city_of_birth: "Sacanche"
  },
  {
    id: 20,
    first_name: "Cordy",
    last_name: "Foakes",
    gender: "Female",
    photo: "https://robohash.org/utdolorcommodi.bmp?size=100x100&set=set1",
    city_of_birth: "Xichang"
  },
  {
    id: 21,
    first_name: "Verena",
    last_name: "Feldhammer",
    gender: "Female",
    photo: "https://robohash.org/ipsumautemdolor.png?size=100x100&set=set1",
    city_of_birth: "Lethem"
  },
  {
    id: 22,
    first_name: "Jeniece",
    last_name: "Harkus",
    gender: "Female",
    photo: "https://robohash.org/laboriosambeataeaut.bmp?size=100x100&set=set1",
    city_of_birth: "Yakovlevo"
  },
  {
    id: 23,
    first_name: "Rudolfo",
    last_name: "Younghusband",
    gender: "Male",
    photo: "https://robohash.org/autemautsunt.bmp?size=100x100&set=set1",
    city_of_birth: "Tsimlyansk"
  },
  {
    id: 24,
    first_name: "Shae",
    last_name: "Lyles",
    gender: "Male",
    photo: "https://robohash.org/etdolorquisquam.png?size=100x100&set=set1",
    city_of_birth: "Jabłonowo Pomorskie"
  },
  {
    id: 25,
    first_name: "Torry",
    last_name: "Fessby",
    gender: "Male",
    photo: "https://robohash.org/etassumendaex.bmp?size=100x100&set=set1",
    city_of_birth: "Diang"
  }
];
