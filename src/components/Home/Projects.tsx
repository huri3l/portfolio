import { Project } from '@/types/Home';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left">
      <h2 className="text-4xl">Projetos Recentes</h2>

      <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
        {projects.map(({ slug, name, image }, index) => (
          <Link href={`/projects/${slug}`} key={name + index}>
            <li className="text-md relative">
              <Image
                src={image.url}
                alt={image.alt}
                width={300}
                height={300}
                className="object-cover rounded-2xl h-[300px] mb-4"
              />
              <span>{name}</span>
              <div className="bg-h-blue-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[20px] right-[-20px]">
                <span>{index + 1}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
};
