export interface Image {
  url: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  image: Image;
}
