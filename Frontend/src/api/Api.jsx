/**@elsoprimeDEV */

//import { apiRegiones } from "../config/axios";

//const API_BASE_URL = `${import.meta.env.VITE_API_REGIONES}/dpa`; //Variable de entorno con la URL externa

export const getRegiones = async () => {
  return regionesChile; // Devuelve las regiones estáticas
};

export const getProvincias = async (regionId) => {
  // Filtra las provincias por el ID de la región
  const provincias = provinciasChile.filter(provincia => provincia.codigo_padre === regionId);
  return provincias;
};

export const getComunas = async (provinciaId) => {
  // Filtra las comunas por el ID de la provincia
  const comunas = comunasChile.filter(comuna => comuna.codigo_padre === provinciaId);
  return comunas;
};

// Todas las Regiones de Chile
const regionesChile = [
  {
      "codigo": "15",
      "tipo": "region",
      "nombre": "Arica y Parinacota",
      "lat": -18.5075,
      "lng": -69.6451,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "01",
      "tipo": "region",
      "nombre": "Tarapacá",
      "lat": -20.164,
      "lng": -69.5541,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "02",
      "tipo": "region",
      "nombre": "Antofagasta",
      "lat": -23.7503,
      "lng": -69.6,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "03",
      "tipo": "region",
      "nombre": "Atacama",
      "lat": -27.5276,
      "lng": -70.2494,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "04",
      "tipo": "region",
      "nombre": "Coquimbo",
      "lat": -30.8301,
      "lng": -70.9816,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "05",
      "tipo": "region",
      "nombre": "Valparaíso",
      "lat": -32.9039,
      "lng": -71.0262,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "13",
      "tipo": "region",
      "nombre": "Metropolitana de Santiago",
      "lat": -33.4417,
      "lng": -70.6541,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "06",
      "tipo": "region",
      "nombre": "Del Libertador Gral. Bernardo O’Higgins",
      "lat": -34.4294,
      "lng": -71.0393,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "07",
      "tipo": "region",
      "nombre": "Del Maule",
      "lat": -35.5892,
      "lng": -71.5007,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "08",
      "tipo": "region",
      "nombre": "Del Biobío",
      "lat": -37.2442,
      "lng": -72.4661,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "09",
      "tipo": "region",
      "nombre": "De la Araucanía",
      "lat": -38.5505,
      "lng": -72.4382,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "14",
      "tipo": "region",
      "nombre": "De los Ríos",
      "lat": -39.9086,
      "lng": -72.7034,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "10",
      "tipo": "region",
      "nombre": "De los Lagos",
      "lat": -42.1071,
      "lng": -72.6425,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "11",
      "tipo": "region",
      "nombre": "Aysén del Gral. Carlos Ibáñez del Campo",
      "lat": -46.2772,
      "lng": -73.6628,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "12",
      "tipo": "region",
      "nombre": "Magallanes y de la Antártica Chilena",
      "lat": -54.3551,
      "lng": -70.5284,
      "url": "",
      "codigo_padre": "00"
  },
  {
      "codigo": "16",
      "tipo": "region",
      "nombre": "Ñuble",
      "lat": -366.191,
      "lng": -720.182,
      "url": "",
      "codigo_padre": "00"
  }
]

// Todas las Provincias de Chile
const provinciasChile = [
  {
      "codigo": "122",
      "tipo": "provincia",
      "nombre": "Antártica Chilena",
      "lat": -55.028,
      "lng": -67.6318,
      "url": "",
      "codigo_padre": "12"
  },
  {
      "codigo": "021",
      "tipo": "provincia",
      "nombre": "Antofagasta",
      "lat": -24.5646,
      "lng": -69.2877,
      "url": "",
      "codigo_padre": "02"
  },
  {
      "codigo": "082",
      "tipo": "provincia",
      "nombre": "Arauco",
      "lat": -37.7277,
      "lng": -73.3075,
      "url": "",
      "codigo_padre": "08"
  },
  {
      "codigo": "151",
      "tipo": "provincia",
      "nombre": "Arica",
      "lat": -18.7139,
      "lng": -69.7522,
      "url": "",
      "codigo_padre": "15"
  },
  {
      "codigo": "112",
      "tipo": "provincia",
      "nombre": "Aysén",
      "lat": -46.3848,
      "lng": -72.2955,
      "url": "",
      "codigo_padre": "11"
  },
  {
      "codigo": "083",
      "tipo": "provincia",
      "nombre": "Biobío",
      "lat": -37.4739,
      "lng": -72.1572,
      "url": "",
      "codigo_padre": "08"
  },
  {
      "codigo": "061",
      "tipo": "provincia",
      "nombre": "Cachapoal",
      "lat": -36.45,
      "lng": -71.7333,
      "url": "",
      "codigo_padre": "06"
  },
  {
      "codigo": "113",
      "tipo": "provincia",
      "nombre": "Capitán Prat",
      "lat": -47.9232,
      "lng": -72.9245,
      "url": "",
      "codigo_padre": "11"
  },
  {
      "codigo": "062",
      "tipo": "provincia",
      "nombre": "Cardenal Caro",
      "lat": -34.2812,
      "lng": -71.8571,
      "url": "",
      "codigo_padre": "06"
  },
  {
      "codigo": "072",
      "tipo": "provincia",
      "nombre": "Cauquenes",
      "lat": -35.9738,
      "lng": -72.3142,
      "url": "",
      "codigo_padre": "07"
  },
  {
      "codigo": "091",
      "tipo": "provincia",
      "nombre": "Cautín",
      "lat": -38.727,
      "lng": -72.5989,
      "url": "",
      "codigo_padre": "09"
  },
  {
      "codigo": "133",
      "tipo": "provincia",
      "nombre": "Chacabuco",
      "lat": -33.1503,
      "lng": -70.7132,
      "url": "",
      "codigo_padre": "13"
  },
  {
      "codigo": "032",
      "tipo": "provincia",
      "nombre": "Chañaral",
      "lat": -26.3599,
      "lng": -70.5981,
      "url": "",
      "codigo_padre": "03"
  },
  {
      "codigo": "102",
      "tipo": "provincia",
      "nombre": "Chiloé",
      "lat": -43.117,
      "lng": -73.9984,
      "url": "",
      "codigo_padre": "10"
  },
  {
      "codigo": "042",
      "tipo": "provincia",
      "nombre": "Choapa",
      "lat": -31.8006,
      "lng": -70.9827,
      "url": "",
      "codigo_padre": "04"
  },
  {
      "codigo": "111",
      "tipo": "provincia",
      "nombre": "Coihaique",
      "lat": -45.2865,
      "lng": -71.7792,
      "url": "",
      "codigo_padre": "11"
  },
  {
      "codigo": "063",
      "tipo": "provincia",
      "nombre": "Colchagua",
      "lat": -34.6761,
      "lng": -71.0973,
      "url": "",
      "codigo_padre": "06"
  },
  {
      "codigo": "081",
      "tipo": "provincia",
      "nombre": "Concepción",
      "lat": -36.8148,
      "lng": -73.0293,
      "url": "",
      "codigo_padre": "08"
  },
  {
      "codigo": "031",
      "tipo": "provincia",
      "nombre": "Copiapó",
      "lat": -27.5765,
      "lng": -70.0269,
      "url": "",
      "codigo_padre": "03"
  },
  {
      "codigo": "132",
      "tipo": "provincia",
      "nombre": "Cordillera",
      "lat": -33.6984,
      "lng": -70.1682,
      "url": "",
      "codigo_padre": "13"
  },
  {
      "codigo": "073",
      "tipo": "provincia",
      "nombre": "Curicó",
      "lat": -35.1704,
      "lng": -70.8954,
      "url": "",
      "codigo_padre": "07"
  },
  {
      "codigo": "161",
      "tipo": "provincia",
      "nombre": "Diguillín",
      "lat": -366.197,
      "lng": -721.014,
      "url": "",
      "codigo_padre": "16"
  },
  {
      "codigo": "022",
      "tipo": "provincia",
      "nombre": "El Loa",
      "lat": -22.3196,
      "lng": -68.5107,
      "url": "",
      "codigo_padre": "02"
  },
  {
      "codigo": "041",
      "tipo": "provincia",
      "nombre": "Elqui",
      "lat": -29.8335,
      "lng": -70.8014,
      "url": "",
      "codigo_padre": "04"
  },
  {
      "codigo": "114",
      "tipo": "provincia",
      "nombre": "General Carrera",
      "lat": -46.557,
      "lng": -72.4123,
      "url": "",
      "codigo_padre": "11"
  },
  {
      "codigo": "033",
      "tipo": "provincia",
      "nombre": "Huasco",
      "lat": -28.5604,
      "lng": -70.6146,
      "url": "",
      "codigo_padre": "03"
  },
  {
      "codigo": "011",
      "tipo": "provincia",
      "nombre": "Iquique",
      "lat": -20.8011,
      "lng": -70.0963,
      "url": "",
      "codigo_padre": "01"
  },
  {
      "codigo": "052",
      "tipo": "provincia",
      "nombre": "Isla de Pascua",
      "lat": -27.1212,
      "lng": -109.366,
      "url": "",
      "codigo_padre": "05"
  },
  {
      "codigo": "162",
      "tipo": "provincia",
      "nombre": "Itata",
      "lat": -367.639,
      "lng": -724.491,
      "url": "",
      "codigo_padre": "16"
  },
  {
      "codigo": "043",
      "tipo": "provincia",
      "nombre": "Limarí",
      "lat": -30.7342,
      "lng": -70.9957,
      "url": "",
      "codigo_padre": "04"
  },
  {
      "codigo": "074",
      "tipo": "provincia",
      "nombre": "Linares",
      "lat": -35.8495,
      "lng": -71.585,
      "url": "",
      "codigo_padre": "07"
  },
  {
      "codigo": "101",
      "tipo": "provincia",
      "nombre": "Llanquihue",
      "lat": -41.453,
      "lng": -72.6135,
      "url": "",
      "codigo_padre": "10"
  },
  {
      "codigo": "053",
      "tipo": "provincia",
      "nombre": "Los Andes",
      "lat": -32.9544,
      "lng": -70.3163,
      "url": "",
      "codigo_padre": "05"
  },
  {
      "codigo": "121",
      "tipo": "provincia",
      "nombre": "Magallanes",
      "lat": -53.6316,
      "lng": -71.5924,
      "url": "",
      "codigo_padre": "12"
  },
  {
      "codigo": "134",
      "tipo": "provincia",
      "nombre": "Maipo",
      "lat": -33.7963,
      "lng": -70.7353,
      "url": "",
      "codigo_padre": "13"
  },
  {
      "codigo": "092",
      "tipo": "provincia",
      "nombre": "Malleco",
      "lat": -37.803,
      "lng": -72.7017,
      "url": "",
      "codigo_padre": "09"
  },
  {
      "codigo": "058",
      "tipo": "provincia",
      "nombre": "Marga Marga",
      "lat": -33.065,
      "lng": -71.3711,
      "url": "",
      "codigo_padre": "05"
  },
  {
      "codigo": "135",
      "tipo": "provincia",
      "nombre": "Melipilla",
      "lat": -33.7369,
      "lng": -71.1743,
      "url": "",
      "codigo_padre": "13"
  },
  {
      "codigo": "103",
      "tipo": "provincia",
      "nombre": "Osorno",
      "lat": -40.7369,
      "lng": -72.9849,
      "url": "",
      "codigo_padre": "10"
  },
  {
      "codigo": "104",
      "tipo": "provincia",
      "nombre": "Palena",
      "lat": -43.4449,
      "lng": -72.0923,
      "url": "",
      "codigo_padre": "10"
  },
  {
      "codigo": "152",
      "tipo": "provincia",
      "nombre": "Parinacota",
      "lat": -18.3135,
      "lng": -69.3788,
      "url": "",
      "codigo_padre": "15"
  },
  {
      "codigo": "054",
      "tipo": "provincia",
      "nombre": "Petorca",
      "lat": -32.1965,
      "lng": -70.8318,
      "url": "",
      "codigo_padre": "05"
  },
  {
      "codigo": "163",
      "tipo": "provincia",
      "nombre": "Punilla",
      "lat": -364.261,
      "lng": -719.708,
      "url": "",
      "codigo_padre": "16"
  },
  {
      "codigo": "055",
      "tipo": "provincia",
      "nombre": "Quillota",
      "lat": -32.9009,
      "lng": -71.2947,
      "url": "",
      "codigo_padre": "05"
  },
  {
      "codigo": "142",
      "tipo": "provincia",
      "nombre": "Ranco",
      "lat": -40.4114,
      "lng": -72.4988,
      "url": "",
      "codigo_padre": "14"
  },
  {
      "codigo": "056",
      "tipo": "provincia",
      "nombre": "San Antonio",
      "lat": -33.6648,
      "lng": -71.4597,
      "url": "",
      "codigo_padre": "05"
  },
  {
      "codigo": "057",
      "tipo": "provincia",
      "nombre": "San Felipe de Aconcagua",
      "lat": -32.7464,
      "lng": -70.7489,
      "url": "",
      "codigo_padre": "05"
  },
  {
      "codigo": "131",
      "tipo": "provincia",
      "nombre": "Santiago",
      "lat": -33.4417,
      "lng": -70.6541,
      "url": "",
      "codigo_padre": "13"
  },
  {
      "codigo": "136",
      "tipo": "provincia",
      "nombre": "Talagante",
      "lat": -33.6665,
      "lng": -70.9331,
      "url": "",
      "codigo_padre": "13"
  },
  {
      "codigo": "071",
      "tipo": "provincia",
      "nombre": "Talca",
      "lat": -35.3921,
      "lng": -71.6125,
      "url": "",
      "codigo_padre": "07"
  },
  {
      "codigo": "014",
      "tipo": "provincia",
      "nombre": "Tamarugal",
      "lat": -39.8567,
      "lng": -72.6089,
      "url": "",
      "codigo_padre": "01"
  },
  {
      "codigo": "123",
      "tipo": "provincia",
      "nombre": "Tierra del Fuego",
      "lat": -53.7422,
      "lng": -69.2249,
      "url": "",
      "codigo_padre": "12"
  },
  {
      "codigo": "023",
      "tipo": "provincia",
      "nombre": "Tocopilla",
      "lat": -22.2306,
      "lng": -69.4666,
      "url": "",
      "codigo_padre": "02"
  },
  {
      "codigo": "124",
      "tipo": "provincia",
      "nombre": "Última Esperanza",
      "lat": -51.0163,
      "lng": -73.4285,
      "url": "",
      "codigo_padre": "12"
  },
  {
      "codigo": "141",
      "tipo": "provincia",
      "nombre": "Valdivia",
      "lat": -39.7811,
      "lng": -72.5098,
      "url": "",
      "codigo_padre": "14"
  },
  {
      "codigo": "051",
      "tipo": "provincia",
      "nombre": "Valparaíso",
      "lat": -33.1381,
      "lng": -71.5617,
      "url": "",
      "codigo_padre": "05"
  }
]

//Todas las Comunas de Chile
const comunasChile = [
  {
      "codigo": "05602",
      "tipo": "comuna",
      "nombre": "Algarrobo",
      "lat": -33.3332,
      "lng": -71.6023,
      "url": "",
      "codigo_padre": "056"
  },
  {
      "codigo": "13502",
      "tipo": "comuna",
      "nombre": "Alhué",
      "lat": -34.0355,
      "lng": -71.028,
      "url": "",
      "codigo_padre": "135"
  },
  {
      "codigo": "08314",
      "tipo": "comuna",
      "nombre": "Alto Biobío",
      "lat": -37.8708,
      "lng": -71.6106,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "03302",
      "tipo": "comuna",
      "nombre": "Alto del Carmen",
      "lat": -28.7508,
      "lng": -70.4883,
      "url": "",
      "codigo_padre": "033"
  },
  {
      "codigo": "01107",
      "tipo": "comuna",
      "nombre": "Alto Hospicio",
      "lat": -20.2677,
      "lng": -70.1007,
      "url": "",
      "codigo_padre": "011"
  },
  {
      "codigo": "10202",
      "tipo": "comuna",
      "nombre": "Ancud",
      "lat": -41.8657,
      "lng": -73.8336,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "04103",
      "tipo": "comuna",
      "nombre": "Andacollo",
      "lat": -30.2357,
      "lng": -71.0828,
      "url": "",
      "codigo_padre": "041"
  },
  {
      "codigo": "09201",
      "tipo": "comuna",
      "nombre": "Angol",
      "lat": -37.803,
      "lng": -72.7017,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "12202",
      "tipo": "comuna",
      "nombre": "Antártica",
      "lat": -64.3589,
      "lng": -60.8203,
      "url": "",
      "codigo_padre": "122"
  },
  {
      "codigo": "02101",
      "tipo": "comuna",
      "nombre": "Antofagasta",
      "lat": -23.6499,
      "lng": -70.4069,
      "url": "",
      "codigo_padre": "021"
  },
  {
      "codigo": "08302",
      "tipo": "comuna",
      "nombre": "Antuco",
      "lat": -37.3273,
      "lng": -71.6775,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "08202",
      "tipo": "comuna",
      "nombre": "Arauco",
      "lat": -37.257,
      "lng": -73.2839,
      "url": "",
      "codigo_padre": "082"
  },
  {
      "codigo": "15101",
      "tipo": "comuna",
      "nombre": "Arica",
      "lat": -18.477,
      "lng": -70.3221,
      "url": "",
      "codigo_padre": "151"
  },
  {
      "codigo": "11201",
      "tipo": "comuna",
      "nombre": "Aysén",
      "lat": -45.3975,
      "lng": -72.6993,
      "url": "",
      "codigo_padre": "112"
  },
  {
      "codigo": "13402",
      "tipo": "comuna",
      "nombre": "Buin",
      "lat": -33.754,
      "lng": -70.7163,
      "url": "",
      "codigo_padre": "134"
  },
  {
      "codigo": "16102",
      "tipo": "comuna",
      "nombre": "Bulnes",
      "lat": -36.7422,
      "lng": -72.3018,
      "url": "",
      "codigo_padre": "161"
  },
  {
      "codigo": "05402",
      "tipo": "comuna",
      "nombre": "Cabildo",
      "lat": -32.4095,
      "lng": -71.0798,
      "url": "",
      "codigo_padre": "054"
  },
  {
      "codigo": "12201",
      "tipo": "comuna",
      "nombre": "Cabo de Hornos",
      "lat": -54.9352,
      "lng": -67.6041,
      "url": "",
      "codigo_padre": "122"
  },
  {
      "codigo": "08303",
      "tipo": "comuna",
      "nombre": "Cabrero",
      "lat": -37.0374,
      "lng": -72.4057,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "02201",
      "tipo": "comuna",
      "nombre": "Calama",
      "lat": -22.4542,
      "lng": -68.9337,
      "url": "",
      "codigo_padre": "022"
  },
  {
      "codigo": "10102",
      "tipo": "comuna",
      "nombre": "Calbuco",
      "lat": -41.7775,
      "lng": -73.1415,
      "url": "",
      "codigo_padre": "101"
  },
  {
      "codigo": "03102",
      "tipo": "comuna",
      "nombre": "Caldera",
      "lat": -27.0668,
      "lng": -70.817,
      "url": "",
      "codigo_padre": "031"
  },
  {
      "codigo": "05502",
      "tipo": "comuna",
      "nombre": "Calera",
      "lat": -32.7837,
      "lng": -71.1586,
      "url": "",
      "codigo_padre": "055"
  },
  {
      "codigo": "13403",
      "tipo": "comuna",
      "nombre": "Calera de Tango",
      "lat": -33.6326,
      "lng": -70.7821,
      "url": "",
      "codigo_padre": "134"
  },
  {
      "codigo": "05302",
      "tipo": "comuna",
      "nombre": "Calle Larga",
      "lat": -32.9514,
      "lng": -70.5524,
      "url": "",
      "codigo_padre": "053"
  },
  {
      "codigo": "15102",
      "tipo": "comuna",
      "nombre": "Camarones",
      "lat": -19.0089,
      "lng": -69.9074,
      "url": "",
      "codigo_padre": "151"
  },
  {
      "codigo": "01402",
      "tipo": "comuna",
      "nombre": "Camiña",
      "lat": -19.3118,
      "lng": -69.4264,
      "url": "",
      "codigo_padre": "014"
  },
  {
      "codigo": "04202",
      "tipo": "comuna",
      "nombre": "Canela",
      "lat": -31.3935,
      "lng": -71.4578,
      "url": "",
      "codigo_padre": "042"
  },
  {
      "codigo": "08203",
      "tipo": "comuna",
      "nombre": "Cañete",
      "lat": -37.8039,
      "lng": -73.4016,
      "url": "",
      "codigo_padre": "082"
  },
  {
      "codigo": "09102",
      "tipo": "comuna",
      "nombre": "Carahue",
      "lat": -38.7116,
      "lng": -73.1651,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "05603",
      "tipo": "comuna",
      "nombre": "Cartagena",
      "lat": -33.5341,
      "lng": -71.4628,
      "url": "",
      "codigo_padre": "056"
  },
  {
      "codigo": "05102",
      "tipo": "comuna",
      "nombre": "Casablanca",
      "lat": -33.3262,
      "lng": -71.3983,
      "url": "",
      "codigo_padre": "051"
  },
  {
      "codigo": "10201",
      "tipo": "comuna",
      "nombre": "Castro",
      "lat": -42.48,
      "lng": -73.7625,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "05702",
      "tipo": "comuna",
      "nombre": "Catemu",
      "lat": -32.6981,
      "lng": -70.956,
      "url": "",
      "codigo_padre": "057"
  },
  {
      "codigo": "07201",
      "tipo": "comuna",
      "nombre": "Cauquenes",
      "lat": -35.9738,
      "lng": -72.3142,
      "url": "",
      "codigo_padre": "072"
  },
  {
      "codigo": "13102",
      "tipo": "comuna",
      "nombre": "Cerrillos",
      "lat": -33.497,
      "lng": -70.7112,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "13103",
      "tipo": "comuna",
      "nombre": "Cerro Navia",
      "lat": -33.4267,
      "lng": -70.7434,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "10401",
      "tipo": "comuna",
      "nombre": "Chaitén",
      "lat": -42.9168,
      "lng": -72.7164,
      "url": "",
      "codigo_padre": "104"
  },
  {
      "codigo": "03201",
      "tipo": "comuna",
      "nombre": "Chañaral",
      "lat": -26.3425,
      "lng": -70.6107,
      "url": "",
      "codigo_padre": "032"
  },
  {
      "codigo": "07202",
      "tipo": "comuna",
      "nombre": "Chanco",
      "lat": -35.7337,
      "lng": -72.5333,
      "url": "",
      "codigo_padre": "072"
  },
  {
      "codigo": "06302",
      "tipo": "comuna",
      "nombre": "Chépica",
      "lat": -34.7303,
      "lng": -71.2688,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "08103",
      "tipo": "comuna",
      "nombre": "Chiguayante",
      "lat": -36.9046,
      "lng": -73.0164,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "11401",
      "tipo": "comuna",
      "nombre": "Chile Chico",
      "lat": -46.5401,
      "lng": -71.7218,
      "url": "",
      "codigo_padre": "114"
  },
  {
      "codigo": "16101",
      "tipo": "comuna",
      "nombre": "Chillán",
      "lat": -36.6013,
      "lng": -72.1093,
      "url": "",
      "codigo_padre": "161"
  },
  {
      "codigo": "16103",
      "tipo": "comuna",
      "nombre": "Chillán Viejo",
      "lat": -36.6333,
      "lng": -72.1404,
      "url": "",
      "codigo_padre": "161"
  },
  {
      "codigo": "06303",
      "tipo": "comuna",
      "nombre": "Chimbarongo",
      "lat": -34.7552,
      "lng": -70.9753,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "09121",
      "tipo": "comuna",
      "nombre": "Cholchol",
      "lat": -38.596,
      "lng": -72.8445,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "10203",
      "tipo": "comuna",
      "nombre": "Chonchi",
      "lat": -42.6232,
      "lng": -73.7739,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "11202",
      "tipo": "comuna",
      "nombre": "Cisnes",
      "lat": -44.728,
      "lng": -72.6828,
      "url": "",
      "codigo_padre": "112"
  },
  {
      "codigo": "16202",
      "tipo": "comuna",
      "nombre": "Cobquecura",
      "lat": -36.1318,
      "lng": -72.7911,
      "url": "",
      "codigo_padre": "162"
  },
  {
      "codigo": "10103",
      "tipo": "comuna",
      "nombre": "Cochamó",
      "lat": -41.488,
      "lng": -72.3038,
      "url": "",
      "codigo_padre": "101"
  },
  {
      "codigo": "11301",
      "tipo": "comuna",
      "nombre": "Cochrane",
      "lat": -47.2494,
      "lng": -72.5784,
      "url": "",
      "codigo_padre": "113"
  },
  {
      "codigo": "06102",
      "tipo": "comuna",
      "nombre": "Codegua",
      "lat": -34.0442,
      "lng": -70.5131,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "16203",
      "tipo": "comuna",
      "nombre": "Coelemu",
      "lat": -36.4877,
      "lng": -72.7022,
      "url": "",
      "codigo_padre": "162"
  },
  {
      "codigo": "11101",
      "tipo": "comuna",
      "nombre": "Coihaique",
      "lat": -45.5758,
      "lng": -72.0621,
      "url": "",
      "codigo_padre": "111"
  },
  {
      "codigo": "16302",
      "tipo": "comuna",
      "nombre": "Coihueco",
      "lat": -36.6166,
      "lng": -71.8344,
      "url": "",
      "codigo_padre": "163"
  },
  {
      "codigo": "06103",
      "tipo": "comuna",
      "nombre": "Coinco",
      "lat": -34.2918,
      "lng": -70.9706,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "07402",
      "tipo": "comuna",
      "nombre": "Colbún",
      "lat": -35.6927,
      "lng": -71.4067,
      "url": "",
      "codigo_padre": "074"
  },
  {
      "codigo": "01403",
      "tipo": "comuna",
      "nombre": "Colchane",
      "lat": -19.2787,
      "lng": -68.6343,
      "url": "",
      "codigo_padre": "014"
  },
  {
      "codigo": "13301",
      "tipo": "comuna",
      "nombre": "Colina",
      "lat": -33.1996,
      "lng": -70.6702,
      "url": "",
      "codigo_padre": "133"
  },
  {
      "codigo": "09202",
      "tipo": "comuna",
      "nombre": "Collipulli",
      "lat": -37.9528,
      "lng": -72.4323,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "06104",
      "tipo": "comuna",
      "nombre": "Coltauco",
      "lat": -34.2498,
      "lng": -71.0791,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "04302",
      "tipo": "comuna",
      "nombre": "Combarbalá",
      "lat": -31.1764,
      "lng": -70.9978,
      "url": "",
      "codigo_padre": "043"
  },
  {
      "codigo": "08101",
      "tipo": "comuna",
      "nombre": "Concepción",
      "lat": -36.8148,
      "lng": -73.0293,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "13104",
      "tipo": "comuna",
      "nombre": "Conchalí",
      "lat": -33.3862,
      "lng": -70.6727,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "05103",
      "tipo": "comuna",
      "nombre": "Concón",
      "lat": -32.9305,
      "lng": -71.5191,
      "url": "",
      "codigo_padre": "051"
  },
  {
      "codigo": "07102",
      "tipo": "comuna",
      "nombre": "Constitución",
      "lat": -35.3309,
      "lng": -72.4139,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "08204",
      "tipo": "comuna",
      "nombre": "Contulmo",
      "lat": -38.026,
      "lng": -73.2581,
      "url": "",
      "codigo_padre": "082"
  },
  {
      "codigo": "03101",
      "tipo": "comuna",
      "nombre": "Copiapó",
      "lat": -27.3654,
      "lng": -70.3314,
      "url": "",
      "codigo_padre": "031"
  },
  {
      "codigo": "04102",
      "tipo": "comuna",
      "nombre": "Coquimbo",
      "lat": -29.968,
      "lng": -71.337,
      "url": "",
      "codigo_padre": "041"
  },
  {
      "codigo": "08102",
      "tipo": "comuna",
      "nombre": "Coronel",
      "lat": -37.0265,
      "lng": -73.1498,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "14102",
      "tipo": "comuna",
      "nombre": "Corral",
      "lat": -39.8892,
      "lng": -73.433,
      "url": "",
      "codigo_padre": "141"
  },
  {
      "codigo": "09103",
      "tipo": "comuna",
      "nombre": "Cunco",
      "lat": -38.9307,
      "lng": -72.0264,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "09203",
      "tipo": "comuna",
      "nombre": "Curacautín",
      "lat": -38.4317,
      "lng": -71.8898,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "13503",
      "tipo": "comuna",
      "nombre": "Curacaví",
      "lat": -33.4063,
      "lng": -71.1333,
      "url": "",
      "codigo_padre": "135"
  },
  {
      "codigo": "10204",
      "tipo": "comuna",
      "nombre": "Curaco de Vélez",
      "lat": -42.4404,
      "lng": -73.6037,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "08205",
      "tipo": "comuna",
      "nombre": "Curanilahue",
      "lat": -37.4759,
      "lng": -73.353,
      "url": "",
      "codigo_padre": "082"
  },
  {
      "codigo": "09104",
      "tipo": "comuna",
      "nombre": "Curarrehue",
      "lat": -39.3592,
      "lng": -71.5881,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "07103",
      "tipo": "comuna",
      "nombre": "Curepto",
      "lat": -35.091,
      "lng": -72.0216,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "07301",
      "tipo": "comuna",
      "nombre": "Curicó",
      "lat": -34.9756,
      "lng": -71.2235,
      "url": "",
      "codigo_padre": "073"
  },
  {
      "codigo": "10205",
      "tipo": "comuna",
      "nombre": "Dalcahue",
      "lat": -42.3776,
      "lng": -73.6521,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "03202",
      "tipo": "comuna",
      "nombre": "Diego de Almagro",
      "lat": -26.3771,
      "lng": -70.0488,
      "url": "",
      "codigo_padre": "032"
  },
  {
      "codigo": "06105",
      "tipo": "comuna",
      "nombre": "Doñihue",
      "lat": -34.2024,
      "lng": -70.9325,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "13105",
      "tipo": "comuna",
      "nombre": "El Bosque",
      "lat": -33.5638,
      "lng": -70.6714,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "16104",
      "tipo": "comuna",
      "nombre": "El Carmen",
      "lat": -36.8964,
      "lng": -72.0218,
      "url": "",
      "codigo_padre": "161"
  },
  {
      "codigo": "13602",
      "tipo": "comuna",
      "nombre": "El Monte",
      "lat": -33.6662,
      "lng": -71.0294,
      "url": "",
      "codigo_padre": "136"
  },
  {
      "codigo": "05604",
      "tipo": "comuna",
      "nombre": "El Quisco",
      "lat": -33.4156,
      "lng": -71.6556,
      "url": "",
      "codigo_padre": "056"
  },
  {
      "codigo": "05605",
      "tipo": "comuna",
      "nombre": "El Tabo",
      "lat": -33.4847,
      "lng": -71.5862,
      "url": "",
      "codigo_padre": "056"
  },
  {
      "codigo": "07104",
      "tipo": "comuna",
      "nombre": "Empedrado",
      "lat": -35.6213,
      "lng": -72.2473,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "09204",
      "tipo": "comuna",
      "nombre": "Ercilla",
      "lat": -38.0587,
      "lng": -72.358,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "13106",
      "tipo": "comuna",
      "nombre": "Estación Central",
      "lat": -33.4503,
      "lng": -70.6751,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "08104",
      "tipo": "comuna",
      "nombre": "Florida",
      "lat": -36.8209,
      "lng": -72.6621,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "09105",
      "tipo": "comuna",
      "nombre": "Freire",
      "lat": -38.9538,
      "lng": -72.6219,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "03303",
      "tipo": "comuna",
      "nombre": "Freirina",
      "lat": -28.5001,
      "lng": -71.076,
      "url": "",
      "codigo_padre": "033"
  },
  {
      "codigo": "10104",
      "tipo": "comuna",
      "nombre": "Fresia",
      "lat": -41.1542,
      "lng": -73.4224,
      "url": "",
      "codigo_padre": "101"
  },
  {
      "codigo": "10105",
      "tipo": "comuna",
      "nombre": "Frutillar",
      "lat": -41.1167,
      "lng": -73.05,
      "url": "",
      "codigo_padre": "101"
  },
  {
      "codigo": "10402",
      "tipo": "comuna",
      "nombre": "Futaleufú",
      "lat": -43.1859,
      "lng": -71.8666,
      "url": "",
      "codigo_padre": "104"
  },
  {
      "codigo": "14202",
      "tipo": "comuna",
      "nombre": "Futrono",
      "lat": -40.1243,
      "lng": -72.393,
      "url": "",
      "codigo_padre": "142"
  },
  {
      "codigo": "09106",
      "tipo": "comuna",
      "nombre": "Galvarino",
      "lat": -38.4085,
      "lng": -72.7804,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "15202",
      "tipo": "comuna",
      "nombre": "General Lagos",
      "lat": -17.8324,
      "lng": -69.6094,
      "url": "",
      "codigo_padre": "152"
  },
  {
      "codigo": "09107",
      "tipo": "comuna",
      "nombre": "Gorbea",
      "lat": -39.0948,
      "lng": -72.6722,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "06106",
      "tipo": "comuna",
      "nombre": "Graneros",
      "lat": -34.0709,
      "lng": -70.7501,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "11203",
      "tipo": "comuna",
      "nombre": "Guaitecas",
      "lat": -43.8781,
      "lng": -73.7485,
      "url": "",
      "codigo_padre": "112"
  },
  {
      "codigo": "05503",
      "tipo": "comuna",
      "nombre": "Hijuelas",
      "lat": -32.8671,
      "lng": -71.0929,
      "url": "",
      "codigo_padre": "055"
  },
  {
      "codigo": "10403",
      "tipo": "comuna",
      "nombre": "Hualaihué",
      "lat": -42.0967,
      "lng": -72.4044,
      "url": "",
      "codigo_padre": "104"
  },
  {
      "codigo": "07302",
      "tipo": "comuna",
      "nombre": "Hualañé",
      "lat": -34.9762,
      "lng": -71.8043,
      "url": "",
      "codigo_padre": "073"
  },
  {
      "codigo": "08112",
      "tipo": "comuna",
      "nombre": "Hualpén",
      "lat": -36.7827,
      "lng": -73.1454,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "08105",
      "tipo": "comuna",
      "nombre": "Hualqui",
      "lat": -37.0145,
      "lng": -72.8662,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "01404",
      "tipo": "comuna",
      "nombre": "Huara",
      "lat": -19.9963,
      "lng": -69.7718,
      "url": "",
      "codigo_padre": "014"
  },
  {
      "codigo": "03304",
      "tipo": "comuna",
      "nombre": "Huasco",
      "lat": -28.4518,
      "lng": -71.2244,
      "url": "",
      "codigo_padre": "033"
  },
  {
      "codigo": "13107",
      "tipo": "comuna",
      "nombre": "Huechuraba",
      "lat": -33.3665,
      "lng": -70.6315,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "04201",
      "tipo": "comuna",
      "nombre": "Illapel",
      "lat": -31.6242,
      "lng": -71.1626,
      "url": "",
      "codigo_padre": "042"
  },
  {
      "codigo": "13108",
      "tipo": "comuna",
      "nombre": "Independencia",
      "lat": -33.4196,
      "lng": -70.6627,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "01101",
      "tipo": "comuna",
      "nombre": "Iquique",
      "lat": -20.2232,
      "lng": -70.1463,
      "url": "",
      "codigo_padre": "011"
  },
  {
      "codigo": "13603",
      "tipo": "comuna",
      "nombre": "Isla de Maipo",
      "lat": -33.7536,
      "lng": -70.8862,
      "url": "",
      "codigo_padre": "136"
  },
  {
      "codigo": "05201",
      "tipo": "comuna",
      "nombre": "Isla de Pascua",
      "lat": -27.1504,
      "lng": -109.423,
      "url": "",
      "codigo_padre": "052"
  },
  {
      "codigo": "05104",
      "tipo": "comuna",
      "nombre": "Juan Fernández",
      "lat": -33.6167,
      "lng": -78.8667,
      "url": "",
      "codigo_padre": "051"
  },
  {
      "codigo": "13109",
      "tipo": "comuna",
      "nombre": "La Cisterna",
      "lat": -33.538,
      "lng": -70.6612,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "05504",
      "tipo": "comuna",
      "nombre": "La Cruz",
      "lat": -32.8258,
      "lng": -71.2592,
      "url": "",
      "codigo_padre": "055"
  },
  {
      "codigo": "06202",
      "tipo": "comuna",
      "nombre": "La Estrella",
      "lat": -34.2037,
      "lng": -71.6073,
      "url": "",
      "codigo_padre": "062"
  },
  {
      "codigo": "13110",
      "tipo": "comuna",
      "nombre": "La Florida",
      "lat": -33.5225,
      "lng": -70.5952,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "13111",
      "tipo": "comuna",
      "nombre": "La Granja",
      "lat": -33.5373,
      "lng": -70.6188,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "04104",
      "tipo": "comuna",
      "nombre": "La Higuera",
      "lat": -29.497,
      "lng": -71.2656,
      "url": "",
      "codigo_padre": "041"
  },
  {
      "codigo": "05401",
      "tipo": "comuna",
      "nombre": "La Ligua",
      "lat": -32.449,
      "lng": -71.2309,
      "url": "",
      "codigo_padre": "054"
  },
  {
      "codigo": "13112",
      "tipo": "comuna",
      "nombre": "La Pintana",
      "lat": -33.5902,
      "lng": -70.6322,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "13113",
      "tipo": "comuna",
      "nombre": "La Reina",
      "lat": -33.4565,
      "lng": -70.5349,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "04101",
      "tipo": "comuna",
      "nombre": "La Serena",
      "lat": -29.8966,
      "lng": -71.2422,
      "url": "",
      "codigo_padre": "041"
  },
  {
      "codigo": "14201",
      "tipo": "comuna",
      "nombre": "La Unión",
      "lat": -40.2951,
      "lng": -73.0829,
      "url": "",
      "codigo_padre": "142"
  },
  {
      "codigo": "14203",
      "tipo": "comuna",
      "nombre": "Lago Ranco",
      "lat": -40.312,
      "lng": -72.5002,
      "url": "",
      "codigo_padre": "142"
  },
  {
      "codigo": "11102",
      "tipo": "comuna",
      "nombre": "Lago Verde",
      "lat": -44.2236,
      "lng": -71.8396,
      "url": "",
      "codigo_padre": "111"
  },
  {
      "codigo": "12102",
      "tipo": "comuna",
      "nombre": "Laguna Blanca",
      "lat": -52.3001,
      "lng": -71.1612,
      "url": "",
      "codigo_padre": "121"
  },
  {
      "codigo": "08304",
      "tipo": "comuna",
      "nombre": "Laja",
      "lat": -37.2768,
      "lng": -72.7171,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "13302",
      "tipo": "comuna",
      "nombre": "Lampa",
      "lat": -33.2863,
      "lng": -70.8789,
      "url": "",
      "codigo_padre": "133"
  },
  {
      "codigo": "14103",
      "tipo": "comuna",
      "nombre": "Lanco",
      "lat": -39.4522,
      "lng": -72.7747,
      "url": "",
      "codigo_padre": "141"
  },
  {
      "codigo": "06107",
      "tipo": "comuna",
      "nombre": "Las Cabras",
      "lat": -34.2945,
      "lng": -71.3066,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "13114",
      "tipo": "comuna",
      "nombre": "Las Condes",
      "lat": -33.4154,
      "lng": -70.5837,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "09108",
      "tipo": "comuna",
      "nombre": "Lautaro",
      "lat": -38.5286,
      "lng": -72.427,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "08201",
      "tipo": "comuna",
      "nombre": "Lebu",
      "lat": -37.6079,
      "lng": -73.6508,
      "url": "",
      "codigo_padre": "082"
  },
  {
      "codigo": "07303",
      "tipo": "comuna",
      "nombre": "Licantén",
      "lat": -34.9591,
      "lng": -72.0269,
      "url": "",
      "codigo_padre": "073"
  },
  {
      "codigo": "05802",
      "tipo": "comuna",
      "nombre": "Limache",
      "lat": -33.0035,
      "lng": -71.2613,
      "url": "",
      "codigo_padre": "058"
  },
  {
      "codigo": "07401",
      "tipo": "comuna",
      "nombre": "Linares",
      "lat": -35.8495,
      "lng": -71.585,
      "url": "",
      "codigo_padre": "074"
  },
  {
      "codigo": "06203",
      "tipo": "comuna",
      "nombre": "Litueche",
      "lat": -34.1069,
      "lng": -71.7204,
      "url": "",
      "codigo_padre": "062"
  },
  {
      "codigo": "05703",
      "tipo": "comuna",
      "nombre": "Llaillay",
      "lat": -32.8899,
      "lng": -70.8942,
      "url": "",
      "codigo_padre": "057"
  },
  {
      "codigo": "10107",
      "tipo": "comuna",
      "nombre": "Llanquihue",
      "lat": -41.2574,
      "lng": -73.0054,
      "url": "",
      "codigo_padre": "101"
  },
  {
      "codigo": "13115",
      "tipo": "comuna",
      "nombre": "Lo Barnechea",
      "lat": -33.2993,
      "lng": -70.3748,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "13116",
      "tipo": "comuna",
      "nombre": "Lo Espejo",
      "lat": -33.5247,
      "lng": -70.6916,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "13117",
      "tipo": "comuna",
      "nombre": "Lo Prado",
      "lat": -33.4489,
      "lng": -70.721,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "06304",
      "tipo": "comuna",
      "nombre": "Lolol",
      "lat": -34.7689,
      "lng": -71.6453,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "09109",
      "tipo": "comuna",
      "nombre": "Loncoche",
      "lat": -39.3681,
      "lng": -72.6315,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "07403",
      "tipo": "comuna",
      "nombre": "Longaví",
      "lat": -35.9657,
      "lng": -71.6816,
      "url": "",
      "codigo_padre": "074"
  },
  {
      "codigo": "09205",
      "tipo": "comuna",
      "nombre": "Lonquimay",
      "lat": -38.4501,
      "lng": -71.374,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "08206",
      "tipo": "comuna",
      "nombre": "Los Álamos",
      "lat": -37.6747,
      "lng": -73.3896,
      "url": "",
      "codigo_padre": "082"
  },
  {
      "codigo": "05301",
      "tipo": "comuna",
      "nombre": "Los Andes",
      "lat": -32.8347,
      "lng": -70.5971,
      "url": "",
      "codigo_padre": "053"
  },
  {
      "codigo": "08301",
      "tipo": "comuna",
      "nombre": "Los Ángeles",
      "lat": -37.473,
      "lng": -72.3507,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "14104",
      "tipo": "comuna",
      "nombre": "Los Lagos",
      "lat": -39.8636,
      "lng": -72.8124,
      "url": "",
      "codigo_padre": "141"
  },
  {
      "codigo": "10106",
      "tipo": "comuna",
      "nombre": "Los Muermos",
      "lat": -41.3997,
      "lng": -73.4651,
      "url": "",
      "codigo_padre": "101"
  },
  {
      "codigo": "09206",
      "tipo": "comuna",
      "nombre": "Los Sauces",
      "lat": -37.9754,
      "lng": -72.8288,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "04203",
      "tipo": "comuna",
      "nombre": "Los Vilos",
      "lat": -31.9157,
      "lng": -71.5107,
      "url": "",
      "codigo_padre": "042"
  },
  {
      "codigo": "08106",
      "tipo": "comuna",
      "nombre": "Lota",
      "lat": -37.0906,
      "lng": -73.1547,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "09207",
      "tipo": "comuna",
      "nombre": "Lumaco",
      "lat": -38.1636,
      "lng": -72.8918,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "06108",
      "tipo": "comuna",
      "nombre": "Machalí",
      "lat": -34.2938,
      "lng": -70.3371,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "13118",
      "tipo": "comuna",
      "nombre": "Macul",
      "lat": -33.492,
      "lng": -70.5968,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "14105",
      "tipo": "comuna",
      "nombre": "Máfil",
      "lat": -39.6654,
      "lng": -72.9575,
      "url": "",
      "codigo_padre": "141"
  },
  {
      "codigo": "13119",
      "tipo": "comuna",
      "nombre": "Maipú",
      "lat": -33.5213,
      "lng": -70.7572,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "06109",
      "tipo": "comuna",
      "nombre": "Malloa",
      "lat": -34.4455,
      "lng": -70.9449,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "06204",
      "tipo": "comuna",
      "nombre": "Marchihue",
      "lat": -34.3979,
      "lng": -71.6144,
      "url": "",
      "codigo_padre": "062"
  },
  {
      "codigo": "02302",
      "tipo": "comuna",
      "nombre": "María Elena",
      "lat": -22.1639,
      "lng": -69.4171,
      "url": "",
      "codigo_padre": "023"
  },
  {
      "codigo": "13504",
      "tipo": "comuna",
      "nombre": "María Pinto",
      "lat": -33.5154,
      "lng": -71.1191,
      "url": "",
      "codigo_padre": "135"
  },
  {
      "codigo": "14106",
      "tipo": "comuna",
      "nombre": "Mariquina",
      "lat": -39.5399,
      "lng": -72.9621,
      "url": "",
      "codigo_padre": "141"
  },
  {
      "codigo": "07105",
      "tipo": "comuna",
      "nombre": "Maule",
      "lat": -35.5057,
      "lng": -71.7069,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "10108",
      "tipo": "comuna",
      "nombre": "Maullín",
      "lat": -41.6172,
      "lng": -73.5956,
      "url": "",
      "codigo_padre": "101"
  },
  {
      "codigo": "02102",
      "tipo": "comuna",
      "nombre": "Mejillones",
      "lat": -23.0962,
      "lng": -70.4498,
      "url": "",
      "codigo_padre": "021"
  },
  {
      "codigo": "09110",
      "tipo": "comuna",
      "nombre": "Melipeuco",
      "lat": -38.8429,
      "lng": -71.6871,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "13501",
      "tipo": "comuna",
      "nombre": "Melipilla",
      "lat": -33.6866,
      "lng": -71.2139,
      "url": "",
      "codigo_padre": "135"
  },
  {
      "codigo": "07304",
      "tipo": "comuna",
      "nombre": "Molina",
      "lat": -35.0896,
      "lng": -71.2788,
      "url": "",
      "codigo_padre": "073"
  },
  {
      "codigo": "04303",
      "tipo": "comuna",
      "nombre": "Monte Patria",
      "lat": -30.8291,
      "lng": -70.6984,
      "url": "",
      "codigo_padre": "043"
  },
  {
      "codigo": "06110",
      "tipo": "comuna",
      "nombre": "Mostazal",
      "lat": -33.9772,
      "lng": -70.7092,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "08305",
      "tipo": "comuna",
      "nombre": "Mulchén",
      "lat": -37.7147,
      "lng": -72.2394,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "08306",
      "tipo": "comuna",
      "nombre": "Nacimiento",
      "lat": -37.5011,
      "lng": -72.6763,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "06305",
      "tipo": "comuna",
      "nombre": "Nancagua",
      "lat": -34.6615,
      "lng": -71.1749,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "12401",
      "tipo": "comuna",
      "nombre": "Natales",
      "lat": -51.7219,
      "lng": -72.5208,
      "url": "",
      "codigo_padre": "124"
  },
  {
      "codigo": "06205",
      "tipo": "comuna",
      "nombre": "Navidad",
      "lat": -34.0068,
      "lng": -71.8101,
      "url": "",
      "codigo_padre": "062"
  },
  {
      "codigo": "08307",
      "tipo": "comuna",
      "nombre": "Negrete",
      "lat": -37.5974,
      "lng": -72.5646,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "16204",
      "tipo": "comuna",
      "nombre": "Ninhue",
      "lat": -36.4011,
      "lng": -72.397,
      "url": "",
      "codigo_padre": "162"
  },
  {
      "codigo": "16303",
      "tipo": "comuna",
      "nombre": "Ñiquén",
      "lat": -36.2848,
      "lng": -71.8994,
      "url": "",
      "codigo_padre": "163"
  },
  {
      "codigo": "05506",
      "tipo": "comuna",
      "nombre": "Nogales",
      "lat": -32.6923,
      "lng": -71.1894,
      "url": "",
      "codigo_padre": "055"
  },
  {
      "codigo": "09111",
      "tipo": "comuna",
      "nombre": "Nueva Imperial",
      "lat": -38.7445,
      "lng": -72.9482,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "13120",
      "tipo": "comuna",
      "nombre": "Ñuñoa",
      "lat": -33.4607,
      "lng": -70.5927,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "06111",
      "tipo": "comuna",
      "nombre": "Olivar",
      "lat": -34.2186,
      "lng": -70.8355,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "02202",
      "tipo": "comuna",
      "nombre": "Ollagüe",
      "lat": -21.2238,
      "lng": -68.2529,
      "url": "",
      "codigo_padre": "022"
  },
  {
      "codigo": "05803",
      "tipo": "comuna",
      "nombre": "Olmué",
      "lat": -33.0132,
      "lng": -71.1525,
      "url": "",
      "codigo_padre": "058"
  },
  {
      "codigo": "10301",
      "tipo": "comuna",
      "nombre": "Osorno",
      "lat": -40.5747,
      "lng": -73.1319,
      "url": "",
      "codigo_padre": "103"
  },
  {
      "codigo": "04301",
      "tipo": "comuna",
      "nombre": "Ovalle",
      "lat": -30.5942,
      "lng": -71.1983,
      "url": "",
      "codigo_padre": "043"
  },
  {
      "codigo": "11302",
      "tipo": "comuna",
      "nombre": "O’Higgins",
      "lat": -48.4643,
      "lng": -72.5613,
      "url": "",
      "codigo_padre": "113"
  },
  {
      "codigo": "13604",
      "tipo": "comuna",
      "nombre": "Padre Hurtado",
      "lat": -33.5761,
      "lng": -70.8003,
      "url": "",
      "codigo_padre": "136"
  },
  {
      "codigo": "09112",
      "tipo": "comuna",
      "nombre": "Padre las Casas",
      "lat": -38.7658,
      "lng": -72.5929,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "04105",
      "tipo": "comuna",
      "nombre": "Paiguano",
      "lat": -30.2496,
      "lng": -70.3832,
      "url": "",
      "codigo_padre": "041"
  },
  {
      "codigo": "14107",
      "tipo": "comuna",
      "nombre": "Paillaco",
      "lat": -40.0707,
      "lng": -72.8708,
      "url": "",
      "codigo_padre": "141"
  },
  {
      "codigo": "13404",
      "tipo": "comuna",
      "nombre": "Paine",
      "lat": -33.8673,
      "lng": -70.7303,
      "url": "",
      "codigo_padre": "134"
  },
  {
      "codigo": "10404",
      "tipo": "comuna",
      "nombre": "Palena",
      "lat": -43.6162,
      "lng": -71.8176,
      "url": "",
      "codigo_padre": "104"
  },
  {
      "codigo": "06306",
      "tipo": "comuna",
      "nombre": "Palmilla",
      "lat": -34.6042,
      "lng": -71.3583,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "14108",
      "tipo": "comuna",
      "nombre": "Panguipulli",
      "lat": -39.6436,
      "lng": -72.3365,
      "url": "",
      "codigo_padre": "141"
  },
  {
      "codigo": "05704",
      "tipo": "comuna",
      "nombre": "Panquehue",
      "lat": -32.8079,
      "lng": -70.8428,
      "url": "",
      "codigo_padre": "057"
  },
  {
      "codigo": "05403",
      "tipo": "comuna",
      "nombre": "Papudo",
      "lat": -32.4699,
      "lng": -71.3842,
      "url": "",
      "codigo_padre": "054"
  },
  {
      "codigo": "06206",
      "tipo": "comuna",
      "nombre": "Paredones",
      "lat": -34.6972,
      "lng": -71.8978,
      "url": "",
      "codigo_padre": "062"
  },
  {
      "codigo": "07404",
      "tipo": "comuna",
      "nombre": "Parral",
      "lat": -36.14,
      "lng": -71.8244,
      "url": "",
      "codigo_padre": "074"
  },
  {
      "codigo": "13121",
      "tipo": "comuna",
      "nombre": "Pedro Aguirre Cerda",
      "lat": -33.4891,
      "lng": -70.6729,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "07106",
      "tipo": "comuna",
      "nombre": "Pelarco",
      "lat": -35.3723,
      "lng": -71.3278,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "07203",
      "tipo": "comuna",
      "nombre": "Pelluhue",
      "lat": -35.8145,
      "lng": -72.5736,
      "url": "",
      "codigo_padre": "072"
  },
  {
      "codigo": "16105",
      "tipo": "comuna",
      "nombre": "Pemuco",
      "lat": -36.9865,
      "lng": -72.0191,
      "url": "",
      "codigo_padre": "161"
  },
  {
      "codigo": "13605",
      "tipo": "comuna",
      "nombre": "Peñaflor",
      "lat": -33.6141,
      "lng": -70.8876,
      "url": "",
      "codigo_padre": "136"
  },
  {
      "codigo": "13122",
      "tipo": "comuna",
      "nombre": "Peñalolén",
      "lat": -33.4904,
      "lng": -70.5105,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "07107",
      "tipo": "comuna",
      "nombre": "Pencahue",
      "lat": -35.3051,
      "lng": -71.8284,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "08107",
      "tipo": "comuna",
      "nombre": "Penco",
      "lat": -36.7423,
      "lng": -72.998,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "06307",
      "tipo": "comuna",
      "nombre": "Peralillo",
      "lat": -34.4593,
      "lng": -71.5,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "09113",
      "tipo": "comuna",
      "nombre": "Perquenco",
      "lat": -38.4154,
      "lng": -72.3725,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "05404",
      "tipo": "comuna",
      "nombre": "Petorca",
      "lat": -32.1965,
      "lng": -70.8318,
      "url": "",
      "codigo_padre": "054"
  },
  {
      "codigo": "06112",
      "tipo": "comuna",
      "nombre": "Peumo",
      "lat": -34.3798,
      "lng": -71.1687,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "01405",
      "tipo": "comuna",
      "nombre": "Pica",
      "lat": -20.4889,
      "lng": -69.3289,
      "url": "",
      "codigo_padre": "014"
  },
  {
      "codigo": "06113",
      "tipo": "comuna",
      "nombre": "Pichidegua",
      "lat": -34.3758,
      "lng": -71.3469,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "06201",
      "tipo": "comuna",
      "nombre": "Pichilemu",
      "lat": -34.3869,
      "lng": -72.0032,
      "url": "",
      "codigo_padre": "062"
  },
  {
      "codigo": "16106",
      "tipo": "comuna",
      "nombre": "Pinto",
      "lat": -36.6978,
      "lng": -71.8934,
      "url": "",
      "codigo_padre": "161"
  },
  {
      "codigo": "13202",
      "tipo": "comuna",
      "nombre": "Pirque",
      "lat": -33.7384,
      "lng": -70.4914,
      "url": "",
      "codigo_padre": "132"
  },
  {
      "codigo": "09114",
      "tipo": "comuna",
      "nombre": "Pitrufquén",
      "lat": -38.9829,
      "lng": -72.6429,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "06308",
      "tipo": "comuna",
      "nombre": "Placilla",
      "lat": -34.6135,
      "lng": -71.0951,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "16205",
      "tipo": "comuna",
      "nombre": "Portezuelo",
      "lat": -36.529,
      "lng": -72.433,
      "url": "",
      "codigo_padre": "162"
  },
  {
      "codigo": "12301",
      "tipo": "comuna",
      "nombre": "Porvenir",
      "lat": -53.2898,
      "lng": -70.3633,
      "url": "",
      "codigo_padre": "123"
  },
  {
      "codigo": "01401",
      "tipo": "comuna",
      "nombre": "Pozo Almonte",
      "lat": -20.2532,
      "lng": -69.7848,
      "url": "",
      "codigo_padre": "014"
  },
  {
      "codigo": "12302",
      "tipo": "comuna",
      "nombre": "Primavera",
      "lat": -52.7122,
      "lng": -69.2496,
      "url": "",
      "codigo_padre": "123"
  },
  {
      "codigo": "13123",
      "tipo": "comuna",
      "nombre": "Providencia",
      "lat": -33.4214,
      "lng": -70.6033,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "05105",
      "tipo": "comuna",
      "nombre": "Puchuncaví",
      "lat": -32.7499,
      "lng": -71.396,
      "url": "",
      "codigo_padre": "051"
  },
  {
      "codigo": "09115",
      "tipo": "comuna",
      "nombre": "Pucón",
      "lat": -39.2824,
      "lng": -71.9545,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "13124",
      "tipo": "comuna",
      "nombre": "Pudahuel",
      "lat": -33.4184,
      "lng": -70.8324,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "13201",
      "tipo": "comuna",
      "nombre": "Puente Alto",
      "lat": -33.6079,
      "lng": -70.5778,
      "url": "",
      "codigo_padre": "132"
  },
  {
      "codigo": "10101",
      "tipo": "comuna",
      "nombre": "Puerto Montt",
      "lat": -41.4633,
      "lng": -72.9314,
      "url": "",
      "codigo_padre": "101"
  },
  {
      "codigo": "10302",
      "tipo": "comuna",
      "nombre": "Puerto Octay",
      "lat": -40.9755,
      "lng": -72.8833,
      "url": "",
      "codigo_padre": "103"
  },
  {
      "codigo": "10109",
      "tipo": "comuna",
      "nombre": "Puerto Varas",
      "lat": -41.316,
      "lng": -72.9836,
      "url": "",
      "codigo_padre": "101"
  },
  {
      "codigo": "06309",
      "tipo": "comuna",
      "nombre": "Pumanque",
      "lat": -34.6052,
      "lng": -71.6443,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "04304",
      "tipo": "comuna",
      "nombre": "Punitaqui",
      "lat": -30.8256,
      "lng": -71.2585,
      "url": "",
      "codigo_padre": "043"
  },
  {
      "codigo": "12101",
      "tipo": "comuna",
      "nombre": "Punta Arenas",
      "lat": -53.1641,
      "lng": -70.9305,
      "url": "",
      "codigo_padre": "121"
  },
  {
      "codigo": "10206",
      "tipo": "comuna",
      "nombre": "Puqueldón",
      "lat": -42.6015,
      "lng": -73.6714,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "09208",
      "tipo": "comuna",
      "nombre": "Purén",
      "lat": -38.0326,
      "lng": -73.0728,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "10303",
      "tipo": "comuna",
      "nombre": "Purranque",
      "lat": -40.9085,
      "lng": -73.1653,
      "url": "",
      "codigo_padre": "103"
  },
  {
      "codigo": "05705",
      "tipo": "comuna",
      "nombre": "Putaendo",
      "lat": -32.6279,
      "lng": -70.7165,
      "url": "",
      "codigo_padre": "057"
  },
  {
      "codigo": "15201",
      "tipo": "comuna",
      "nombre": "Putre",
      "lat": -18.1798,
      "lng": -69.5544,
      "url": "",
      "codigo_padre": "152"
  },
  {
      "codigo": "10304",
      "tipo": "comuna",
      "nombre": "Puyehue",
      "lat": -40.6806,
      "lng": -72.599,
      "url": "",
      "codigo_padre": "103"
  },
  {
      "codigo": "10207",
      "tipo": "comuna",
      "nombre": "Queilén",
      "lat": -42.9001,
      "lng": -73.4827,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "10208",
      "tipo": "comuna",
      "nombre": "Quellón",
      "lat": -43.1156,
      "lng": -73.6172,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "10209",
      "tipo": "comuna",
      "nombre": "Quemchi",
      "lat": -42.1426,
      "lng": -73.475,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "08308",
      "tipo": "comuna",
      "nombre": "Quilaco",
      "lat": -37.6799,
      "lng": -72.0074,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "13125",
      "tipo": "comuna",
      "nombre": "Quilicura",
      "lat": -33.3551,
      "lng": -70.7278,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "08309",
      "tipo": "comuna",
      "nombre": "Quilleco",
      "lat": -37.4335,
      "lng": -71.8761,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "16107",
      "tipo": "comuna",
      "nombre": "Quillón",
      "lat": -36.7383,
      "lng": -72.469,
      "url": "",
      "codigo_padre": "161"
  },
  {
      "codigo": "05501",
      "tipo": "comuna",
      "nombre": "Quillota",
      "lat": -32.8793,
      "lng": -71.2508,
      "url": "",
      "codigo_padre": "055"
  },
  {
      "codigo": "05801",
      "tipo": "comuna",
      "nombre": "Quilpué",
      "lat": -33.0492,
      "lng": -71.4435,
      "url": "",
      "codigo_padre": "058"
  },
  {
      "codigo": "10210",
      "tipo": "comuna",
      "nombre": "Quinchao",
      "lat": -42.472,
      "lng": -73.4898,
      "url": "",
      "codigo_padre": "102"
  },
  {
      "codigo": "06114",
      "tipo": "comuna",
      "nombre": "Quinta de Tilcoco",
      "lat": -34.367,
      "lng": -71.0096,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "13126",
      "tipo": "comuna",
      "nombre": "Quinta Normal",
      "lat": -33.428,
      "lng": -70.6964,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "05107",
      "tipo": "comuna",
      "nombre": "Quintero",
      "lat": -32.7872,
      "lng": -71.5274,
      "url": "",
      "codigo_padre": "051"
  },
  {
      "codigo": "16201",
      "tipo": "comuna",
      "nombre": "Quirihue",
      "lat": -36.2839,
      "lng": -72.5414,
      "url": "",
      "codigo_padre": "162"
  },
  {
      "codigo": "06101",
      "tipo": "comuna",
      "nombre": "Rancagua",
      "lat": -34.162,
      "lng": -70.741,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "16206",
      "tipo": "comuna",
      "nombre": "Ránquil",
      "lat": -36.6485,
      "lng": -72.6064,
      "url": "",
      "codigo_padre": "162"
  },
  {
      "codigo": "07305",
      "tipo": "comuna",
      "nombre": "Rauco",
      "lat": -34.9295,
      "lng": -71.3111,
      "url": "",
      "codigo_padre": "073"
  },
  {
      "codigo": "13127",
      "tipo": "comuna",
      "nombre": "Recoleta",
      "lat": -33.4173,
      "lng": -70.6303,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "09209",
      "tipo": "comuna",
      "nombre": "Renaico",
      "lat": -37.6654,
      "lng": -72.5687,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "13128",
      "tipo": "comuna",
      "nombre": "Renca",
      "lat": -33.4141,
      "lng": -70.7129,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "06115",
      "tipo": "comuna",
      "nombre": "Rengo",
      "lat": -34.4017,
      "lng": -70.8561,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "06116",
      "tipo": "comuna",
      "nombre": "Requínoa",
      "lat": -34.3533,
      "lng": -70.6797,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "07405",
      "tipo": "comuna",
      "nombre": "Retiro",
      "lat": -36.0458,
      "lng": -71.7591,
      "url": "",
      "codigo_padre": "074"
  },
  {
      "codigo": "05303",
      "tipo": "comuna",
      "nombre": "Rinconada",
      "lat": -32.8765,
      "lng": -70.7085,
      "url": "",
      "codigo_padre": "053"
  },
  {
      "codigo": "14204",
      "tipo": "comuna",
      "nombre": "Río Bueno",
      "lat": -40.333,
      "lng": -72.9513,
      "url": "",
      "codigo_padre": "142"
  },
  {
      "codigo": "07108",
      "tipo": "comuna",
      "nombre": "Río Claro",
      "lat": -35.2827,
      "lng": -71.2665,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "04305",
      "tipo": "comuna",
      "nombre": "Río Hurtado",
      "lat": -30.2603,
      "lng": -70.6668,
      "url": "",
      "codigo_padre": "043"
  },
  {
      "codigo": "11402",
      "tipo": "comuna",
      "nombre": "Río Ibáñez",
      "lat": -46.2938,
      "lng": -71.9357,
      "url": "",
      "codigo_padre": "114"
  },
  {
      "codigo": "10305",
      "tipo": "comuna",
      "nombre": "Río Negro",
      "lat": -40.7829,
      "lng": -73.2319,
      "url": "",
      "codigo_padre": "103"
  },
  {
      "codigo": "12103",
      "tipo": "comuna",
      "nombre": "Río Verde",
      "lat": -52.5814,
      "lng": -71.5128,
      "url": "",
      "codigo_padre": "121"
  },
  {
      "codigo": "07306",
      "tipo": "comuna",
      "nombre": "Romeral",
      "lat": -34.9634,
      "lng": -71.1205,
      "url": "",
      "codigo_padre": "073"
  },
  {
      "codigo": "09116",
      "tipo": "comuna",
      "nombre": "Saavedra",
      "lat": -38.7803,
      "lng": -73.3897,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "07307",
      "tipo": "comuna",
      "nombre": "Sagrada Familia",
      "lat": -34.9949,
      "lng": -71.3798,
      "url": "",
      "codigo_padre": "073"
  },
  {
      "codigo": "04204",
      "tipo": "comuna",
      "nombre": "Salamanca",
      "lat": -31.7737,
      "lng": -70.9717,
      "url": "",
      "codigo_padre": "042"
  },
  {
      "codigo": "05601",
      "tipo": "comuna",
      "nombre": "San Antonio",
      "lat": -33.5812,
      "lng": -71.613,
      "url": "",
      "codigo_padre": "056"
  },
  {
      "codigo": "13401",
      "tipo": "comuna",
      "nombre": "San Bernardo",
      "lat": -33.5913,
      "lng": -70.702,
      "url": "",
      "codigo_padre": "134"
  },
  {
      "codigo": "16301",
      "tipo": "comuna",
      "nombre": "San Carlos",
      "lat": -36.4221,
      "lng": -71.9594,
      "url": "",
      "codigo_padre": "163"
  },
  {
      "codigo": "07109",
      "tipo": "comuna",
      "nombre": "San Clemente",
      "lat": -35.534,
      "lng": -71.4865,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "05304",
      "tipo": "comuna",
      "nombre": "San Esteban",
      "lat": -32.693,
      "lng": -70.3703,
      "url": "",
      "codigo_padre": "053"
  },
  {
      "codigo": "16304",
      "tipo": "comuna",
      "nombre": "San Fabián",
      "lat": -36.5538,
      "lng": -71.5487,
      "url": "",
      "codigo_padre": "163"
  },
  {
      "codigo": "05701",
      "tipo": "comuna",
      "nombre": "San Felipe",
      "lat": -32.7464,
      "lng": -70.7489,
      "url": "",
      "codigo_padre": "057"
  },
  {
      "codigo": "06301",
      "tipo": "comuna",
      "nombre": "San Fernando",
      "lat": -34.584,
      "lng": -70.9874,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "12104",
      "tipo": "comuna",
      "nombre": "San Gregorio",
      "lat": -52.3135,
      "lng": -69.6842,
      "url": "",
      "codigo_padre": "121"
  },
  {
      "codigo": "16108",
      "tipo": "comuna",
      "nombre": "San Ignacio",
      "lat": -36.8186,
      "lng": -71.9883,
      "url": "",
      "codigo_padre": "161"
  },
  {
      "codigo": "07406",
      "tipo": "comuna",
      "nombre": "San Javier",
      "lat": -35.6035,
      "lng": -71.7362,
      "url": "",
      "codigo_padre": "074"
  },
  {
      "codigo": "13129",
      "tipo": "comuna",
      "nombre": "San Joaquín",
      "lat": -33.4961,
      "lng": -70.6245,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "13203",
      "tipo": "comuna",
      "nombre": "San José de Maipo",
      "lat": -33.6921,
      "lng": -70.1325,
      "url": "",
      "codigo_padre": "132"
  },
  {
      "codigo": "10306",
      "tipo": "comuna",
      "nombre": "San Juan de la Costa",
      "lat": -40.5156,
      "lng": -73.3997,
      "url": "",
      "codigo_padre": "103"
  },
  {
      "codigo": "13130",
      "tipo": "comuna",
      "nombre": "San Miguel",
      "lat": -33.5017,
      "lng": -70.6489,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "16305",
      "tipo": "comuna",
      "nombre": "San Nicolás",
      "lat": -36.4996,
      "lng": -72.2126,
      "url": "",
      "codigo_padre": "163"
  },
  {
      "codigo": "10307",
      "tipo": "comuna",
      "nombre": "San Pablo",
      "lat": -40.4118,
      "lng": -73.0102,
      "url": "",
      "codigo_padre": "103"
  },
  {
      "codigo": "13505",
      "tipo": "comuna",
      "nombre": "San Pedro",
      "lat": -33.8779,
      "lng": -71.4609,
      "url": "",
      "codigo_padre": "135"
  },
  {
      "codigo": "02203",
      "tipo": "comuna",
      "nombre": "San Pedro de Atacama",
      "lat": -22.9157,
      "lng": -68.2004,
      "url": "",
      "codigo_padre": "022"
  },
  {
      "codigo": "08108",
      "tipo": "comuna",
      "nombre": "San Pedro de la Paz",
      "lat": -36.8635,
      "lng": -73.1085,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "07110",
      "tipo": "comuna",
      "nombre": "San Rafael",
      "lat": -35.2942,
      "lng": -71.5254,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "13131",
      "tipo": "comuna",
      "nombre": "San Ramón",
      "lat": -33.5349,
      "lng": -70.6392,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "08310",
      "tipo": "comuna",
      "nombre": "San Rosendo",
      "lat": -37.2021,
      "lng": -72.748,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "06117",
      "tipo": "comuna",
      "nombre": "San Vicente",
      "lat": -34.4381,
      "lng": -71.0792,
      "url": "",
      "codigo_padre": "061"
  },
  {
      "codigo": "08311",
      "tipo": "comuna",
      "nombre": "Santa Bárbara",
      "lat": -37.6627,
      "lng": -72.0184,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "06310",
      "tipo": "comuna",
      "nombre": "Santa Cruz",
      "lat": -34.6383,
      "lng": -71.367,
      "url": "",
      "codigo_padre": "063"
  },
  {
      "codigo": "08109",
      "tipo": "comuna",
      "nombre": "Santa Juana",
      "lat": -37.1726,
      "lng": -72.9352,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "05706",
      "tipo": "comuna",
      "nombre": "Santa María",
      "lat": -32.7446,
      "lng": -70.654,
      "url": "",
      "codigo_padre": "057"
  },
  {
      "codigo": "13101",
      "tipo": "comuna",
      "nombre": "Santiago Centro",
      "lat": -33.4417,
      "lng": -70.6541,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "05606",
      "tipo": "comuna",
      "nombre": "Santo Domingo",
      "lat": -33.7076,
      "lng": -71.6301,
      "url": "",
      "codigo_padre": "056"
  },
  {
      "codigo": "02103",
      "tipo": "comuna",
      "nombre": "Sierra Gorda",
      "lat": -22.8921,
      "lng": -69.3203,
      "url": "",
      "codigo_padre": "021"
  },
  {
      "codigo": "13601",
      "tipo": "comuna",
      "nombre": "Talagante",
      "lat": -33.6643,
      "lng": -70.9296,
      "url": "",
      "codigo_padre": "136"
  },
  {
      "codigo": "07101",
      "tipo": "comuna",
      "nombre": "Talca",
      "lat": -35.4288,
      "lng": -71.6607,
      "url": "",
      "codigo_padre": "071"
  },
  {
      "codigo": "08110",
      "tipo": "comuna",
      "nombre": "Talcahuano",
      "lat": -36.7364,
      "lng": -73.1047,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "02104",
      "tipo": "comuna",
      "nombre": "Taltal",
      "lat": -25.4054,
      "lng": -70.4826,
      "url": "",
      "codigo_padre": "021"
  },
  {
      "codigo": "09101",
      "tipo": "comuna",
      "nombre": "Temuco",
      "lat": -38.7362,
      "lng": -72.5989,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "07308",
      "tipo": "comuna",
      "nombre": "Teno",
      "lat": -34.8701,
      "lng": -71.0895,
      "url": "",
      "codigo_padre": "073"
  },
  {
      "codigo": "09117",
      "tipo": "comuna",
      "nombre": "Teodoro Schmidt",
      "lat": -38.9989,
      "lng": -73.093,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "03103",
      "tipo": "comuna",
      "nombre": "Tierra Amarilla",
      "lat": -27.4877,
      "lng": -70.2696,
      "url": "",
      "codigo_padre": "031"
  },
  {
      "codigo": "13303",
      "tipo": "comuna",
      "nombre": "Tiltil",
      "lat": -33.0655,
      "lng": -70.8465,
      "url": "",
      "codigo_padre": "133"
  },
  {
      "codigo": "12303",
      "tipo": "comuna",
      "nombre": "Timaukel",
      "lat": -54.2877,
      "lng": -69.1644,
      "url": "",
      "codigo_padre": "123"
  },
  {
      "codigo": "08207",
      "tipo": "comuna",
      "nombre": "Tirúa",
      "lat": -38.3315,
      "lng": -73.3794,
      "url": "",
      "codigo_padre": "082"
  },
  {
      "codigo": "02301",
      "tipo": "comuna",
      "nombre": "Tocopilla",
      "lat": -22.0858,
      "lng": -70.193,
      "url": "",
      "codigo_padre": "023"
  },
  {
      "codigo": "09118",
      "tipo": "comuna",
      "nombre": "Toltén",
      "lat": -39.2022,
      "lng": -73.2004,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "08111",
      "tipo": "comuna",
      "nombre": "Tomé",
      "lat": -36.6177,
      "lng": -72.9579,
      "url": "",
      "codigo_padre": "081"
  },
  {
      "codigo": "12402",
      "tipo": "comuna",
      "nombre": "Torres del Paine",
      "lat": -50.9896,
      "lng": -73.0893,
      "url": "",
      "codigo_padre": "124"
  },
  {
      "codigo": "11303",
      "tipo": "comuna",
      "nombre": "Tortel",
      "lat": -47.8242,
      "lng": -73.5645,
      "url": "",
      "codigo_padre": "113"
  },
  {
      "codigo": "09210",
      "tipo": "comuna",
      "nombre": "Traiguén",
      "lat": -38.2509,
      "lng": -72.6647,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "16207",
      "tipo": "comuna",
      "nombre": "Treguaco",
      "lat": -36.4095,
      "lng": -72.6603,
      "url": "",
      "codigo_padre": "162"
  },
  {
      "codigo": "08312",
      "tipo": "comuna",
      "nombre": "Tucapel",
      "lat": -37.2901,
      "lng": -71.9491,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "14101",
      "tipo": "comuna",
      "nombre": "Valdivia",
      "lat": -39.8201,
      "lng": -73.2457,
      "url": "",
      "codigo_padre": "141"
  },
  {
      "codigo": "03301",
      "tipo": "comuna",
      "nombre": "Vallenar",
      "lat": -28.5777,
      "lng": -70.7566,
      "url": "",
      "codigo_padre": "033"
  },
  {
      "codigo": "05101",
      "tipo": "comuna",
      "nombre": "Valparaíso",
      "lat": -33.0436,
      "lng": -71.6231,
      "url": "",
      "codigo_padre": "051"
  },
  {
      "codigo": "07309",
      "tipo": "comuna",
      "nombre": "Vichuquén",
      "lat": -34.8594,
      "lng": -72.0074,
      "url": "",
      "codigo_padre": "073"
  },
  {
      "codigo": "09211",
      "tipo": "comuna",
      "nombre": "Victoria",
      "lat": -38.2336,
      "lng": -72.3329,
      "url": "",
      "codigo_padre": "092"
  },
  {
      "codigo": "04106",
      "tipo": "comuna",
      "nombre": "Vicuña",
      "lat": -30.0287,
      "lng": -70.7108,
      "url": "",
      "codigo_padre": "041"
  },
  {
      "codigo": "09119",
      "tipo": "comuna",
      "nombre": "Vilcún",
      "lat": -38.6701,
      "lng": -72.2238,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "07407",
      "tipo": "comuna",
      "nombre": "Villa Alegre",
      "lat": -35.6868,
      "lng": -71.6704,
      "url": "",
      "codigo_padre": "074"
  },
  {
      "codigo": "05804",
      "tipo": "comuna",
      "nombre": "Villa Alemana",
      "lat": -33.0429,
      "lng": -71.3724,
      "url": "",
      "codigo_padre": "058"
  },
  {
      "codigo": "09120",
      "tipo": "comuna",
      "nombre": "Villarrica",
      "lat": -39.2803,
      "lng": -72.2182,
      "url": "",
      "codigo_padre": "091"
  },
  {
      "codigo": "05109",
      "tipo": "comuna",
      "nombre": "Viña del Mar",
      "lat": -33.0445,
      "lng": -71.5224,
      "url": "",
      "codigo_padre": "051"
  },
  {
      "codigo": "13132",
      "tipo": "comuna",
      "nombre": "Vitacura",
      "lat": -33.3863,
      "lng": -70.5698,
      "url": "",
      "codigo_padre": "131"
  },
  {
      "codigo": "07408",
      "tipo": "comuna",
      "nombre": "Yerbas Buenas",
      "lat": -35.6882,
      "lng": -71.5636,
      "url": "",
      "codigo_padre": "074"
  },
  {
      "codigo": "08313",
      "tipo": "comuna",
      "nombre": "Yumbel",
      "lat": -37.0964,
      "lng": -72.5562,
      "url": "",
      "codigo_padre": "083"
  },
  {
      "codigo": "16109",
      "tipo": "comuna",
      "nombre": "Yungay",
      "lat": -37.122,
      "lng": -72.0132,
      "url": "",
      "codigo_padre": "161"
  },
  {
      "codigo": "05405",
      "tipo": "comuna",
      "nombre": "Zapallar",
      "lat": -32.5933,
      "lng": -71.3686,
      "url": "",
      "codigo_padre": "054"
  }
]
