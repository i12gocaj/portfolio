import type { ImageMetadata } from "astro";
import type { Localized } from "@/i18n/ui";

const files = (glob: Record<string, { default: ImageMetadata }>) =>
  Object.fromEntries(Object.entries(glob).map(([path, mod]) => [path.split("/").pop()!.replace(/\.\w+$/, ""), mod.default]));

const photoFiles = files(import.meta.glob<{ default: ImageMetadata }>("../assets/album/*.jpg", { eager: true }));
const posterFiles = files(import.meta.glob<{ default: ImageMetadata }>("../assets/album/video/*.jpg", { eager: true }));

export interface Photo {
  image: ImageMetadata;
  year: number;
}

/** El orden es el del álbum: alterna colores, retratos y oscuridad para que respire. */
const photoList: [file: string, year: number][] = [
  ["01", 2026],
  ["03", 2021],
  ["13", 2022],
  ["04", 2022],
  ["07", 2022],
  ["08", 2022],
  ["02", 2024],
  ["10", 2022],
  ["14", 2020],
  ["05", 2024],
  ["19", 2020],
  ["17", 2022],
  ["06", 2026],
  ["09", 2022],
  ["15", 2021],
  ["12", 2026],
  ["16", 2023],
  ["21", 2021],
  ["11", 2026],
  ["18", 2022],
  ["22", 2018],
  ["20", 2021],
  ["23", 2020],
  ["24", 2022],
];

export const photos: Photo[] = photoList
  .filter(([file]) => photoFiles[file])
  .map(([file, year]) => ({ image: photoFiles[file], year }));

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
