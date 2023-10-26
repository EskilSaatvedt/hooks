import { Planet } from "./types";

export const favoritePlanetKey = "favoritePlanet";

export const planets: Planet[] = [
  {
    id: 1,
    name: "Coruscant",
    description:
      "A city-covered planet, Coruscant is the vibrant heart and capital of the galaxy, featuring a diverse mix of citizens and culture. It features towering skyscrapers, streams of speeder-filled air traffic, and inner levels that stretch far below the world’s surface.",
    source: "Star Wars",
    image: 'coruscant.avif'
  },
  {
    id: 2,
    name: "Persephone",
    description:
      "Overview. Persephone is the second planet of the protostar Lux in the White Sun system. Discovered in 2040, S/2040(Lux)02 is closer to the border worlds than Sihnon or Londinium, and while considered a 'civilized' planet by Alliance standards, is still home to a large slum population.",
    source: "Firefly",
    image: 'persephone.jpeg'
  },
  {
    id: 3,
    name: "Vulcan",
    description:
      "Vulcan (also known as Vulcan/Vulcanis A II, Nevasa II or 40 Eridani A II) is a planet, the second planet in the 40 Eridani star system, in orbit of the star 40 Eridani A. A class M desert planet, Vulcan is inhabited by the Vulcan civilization, who refer to their world as T'Khasi, Minshara or Ti-Valka'ain.",
    source: "Star Trek",
    image: 'vulcan.avif'
  },
  {
    id: 4,
    name: "Caprica",
    description:
      "Capital of the Colonies. Caprica, originally known as Capricorn, is a planet in the quaternary Cyrannus Star System, orbiting the star Helios Alpha in a shared orbit with Gemenon. Caprica was one of twelve worlds in the system to be colonised by humans native to the distant planet Kobol, founded by those of the Capricorn tribe.",
    source: "Battlestar Galactica",
    image: 'caprica.webp'
  },
];
