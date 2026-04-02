interface Experience {
  designation: string;
  from: string;
  to: string;
  description: React.ReactNode;
  tech: string[];
  company?: string;
}

interface Project {
  image: string;
  name: string;
  description: string;
  tech: string[];
  href: string;
}
