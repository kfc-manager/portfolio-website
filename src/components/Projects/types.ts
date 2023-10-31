type Project = {
  headline: string;
  body: string;
  links: ProjectLink[];
};

type ProjectLink = {
  tooltip: string;
  link: string;
  github: boolean;
};
