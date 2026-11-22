import type { ImageMetadata } from "astro";
import type { Localized } from "@/i18n/ui";

const files = (glob: Record<string, { default: ImageMetadata }>) =>
  Object.fromEntries(Object.entries(glob).map(([path, mod]) => [path.split("/").pop()!.replace(/\.\w+$/, ""), mod.default]));

const photoFiles = files(import.meta.glob<{ default: ImageMetadata }>("../assets/album/*.jpg", { eager: true }));
const posterFiles = files(import.meta.glob<{ default: ImageMetadata }>("../assets/album/video/*.jpg", { eager: true }));

export interface Photo {
  image: ImageMetadata;
}

/** Las fotos se muestran en el orden de sus nombres de fichero: 01, 02, 03… */
export const photos: Photo[] = Object.keys(photoFiles)
  .sort()
  .map((file) => ({ image: photoFiles[file] }));

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
