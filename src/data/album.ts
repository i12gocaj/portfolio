import type { ImageMetadata } from "astro";
import type { Localized } from "@/i18n/ui";

const files = (glob: Record<string, { default: ImageMetadata }>) =>
  Object.fromEntries(Object.entries(glob).map(([path, mod]) => [path.split("/").pop()!.replace(/\.\w+$/, ""), mod.default]));

const photoFiles = files(import.meta.glob<{ default: ImageMetadata }>("../assets/album/*.jpg", { eager: true }));
const posterFiles = files(import.meta.glob<{ default: ImageMetadata }>("../assets/album/video/*.jpg", { eager: true }));

export interface Photo {
  image: ImageMetadata;
  year: number;
  alt: Localized;
}

/** El orden es el del álbum: alterna luz y oscuridad para que respire. */
const photoList: [file: string, year: number, es: string, en: string][] = [
  ["DcHoYxEjD9y", 2026, "Sillón rojo sobre la nieve", "Red armchair on the snow"],
  ["C9VhU49oewz", 2024, "Arcos de la Mezquita de Córdoba", "Arches of the Mosque of Córdoba"],
  ["C9VijAhIDiW", 2024, "La costa vista desde la cabina de una avioneta", "The coast seen from a light aircraft cockpit"],
  ["DcHnaeQjHx9", 2026, "La luna en cuarto", "The half moon"],
  ["DcHqHijjOg9", 2026, "Santa Sofía con una gaviota en vuelo", "Hagia Sophia with a seagull in flight"],
  ["C9Vg8pLIw3D", 2024, "Aplique encendido entre flores rojas", "Lit wall lamp among red flowers"],
  ["DcHqQVXjIRR", 2026, "Atardecer rosa tras la silueta de un árbol", "Pink sunset behind the silhouette of a tree"],
  ["CuzfUaTo9U9", 2023, "Cúpula de vidriera vista desde abajo", "Stained-glass dome seen from below"],
  ["C9VhOiWIl2t", 2024, "Hortensias azules", "Blue hydrangeas"],
  ["CuzZ4nBI54X", 2023, "Esculturas de figuras caminando de noche", "Sculptures of walking figures at night"],
  ["Cuzbk7xIhMT", 2023, "Farol encendido sobre una pared blanca", "Lit lantern on a white wall"],
  ["C9ViaW6ICel", 2024, "Dado de veinte caras iluminado en azul", "Twenty-sided die glowing blue"],
  ["CuwuLimoGtS", 2023, "Papel picado de colores", "Colourful paper bunting"],
  ["CuzfoV-ImMg", 2023, "Ventana en arco a contraluz", "Arched window against the light"],
  ["CuzbISNoLN9", 2023, "Columna barroca bajo las nubes", "Baroque column under the clouds"],
  ["C9VYqm-IvJF", 2024, "Noria iluminada de noche", "Ferris wheel lit up at night"],
  ["DcHnwl0jD4M", 2026, "Flor amarilla de cerca", "Yellow flower up close"],
  ["CuzWQN5oCxS", 2023, "Bloques de hormigón de un memorial", "Concrete blocks of a memorial"],
  ["CunFrI-Is_G", 2023, "Torre de iglesia al sol de la tarde", "Church tower in the evening sun"],
  ["C9Viw6rIEqD", 2024, "Lámpara encendida sobre ladrillo", "Lamp glowing on a brick wall"],
];

export const photos: Photo[] = photoList
  .filter(([file]) => photoFiles[file])
  .map(([file, year, es, en]) => ({ image: photoFiles[file], year, alt: { es, en } }));

export interface Video {
  id: string;
  title: string;
  place: Localized;
  poster?: ImageMetadata;
}

/** Del más reciente al más antiguo. */
const videoList: [id: string, title: string, es: string, en: string][] = [
  ["p8lxNOh849Y", "İstanbul · Ramazan", "Estambul", "Istanbul"],
  ["QwrY3dDIblA", "Ring Road", "Sur de Islandia", "Southern Iceland"],
  ["XtLNuP3zMnY", "rumania.vision", "Rumanía", "Romania"],
  ["qaB5qX8URE8", "Norwegian Fjords", "Noruega", "Norway"],
  ["7-YKjgI_cuk", "Saturday Memories", "Castro del Río", "Castro del Río"],
  ["0iaAv8BHnuw", "Las Ermitas", "Córdoba", "Córdoba"],
  ["lbJiJcMLDB8", "Over the Sea", "Islas griegas", "Greek Islands"],
  ["0WMNMluIpkY", "House", "Córdoba", "Córdoba"],
  ["MRARzwt5KmE", "Volcán y mar", "Tenerife", "Tenerife"],
  ["SvGnv2mz9k8", "Una isla paradisíaca", "Lanzarote", "Lanzarote"],
];

export const videos: Video[] = videoList.map(([id, title, es, en]) => ({
  id,
  title,
  place: { es, en },
  poster: posterFiles[id],
}));

export const accounts = {
  instagram: "https://www.instagram.com/jpquality/",
  youtube: "https://www.youtube.com/@jpquality0",
};
