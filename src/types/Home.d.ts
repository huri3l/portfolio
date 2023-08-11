export interface Image {
  url: string;
  alt: string;
}

export interface Tech {
  tech: string;
  color: string;
  bgcolor: string;
}

export interface AboutMe {
  title: {
    default: string;
    bold: string;
  };
  description: string;
  contact: {
    link: string;
    label: string;
  };
  techs: Tech[];
  pfp: {
    image: Image;
    experience: {
      default: string;
      bold: string;
    };
  };
}

export interface Project {
  slug: string;
  name: string;
  image: Image;
}
