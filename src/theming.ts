export const getVariantColorByTag = (tag: string) => {
  switch (tag) {
    case "Development":
      return "blue";
    case "Productivity":
      return "teal";
    case "Apps":
      return "gray";
    case "Communication":
      return "purple";
    case "Music":
      return "yellow";
    case "Design":
      return "orange";
    case "Database Management":
      return "green";
    case "Version Control":
      return "cyan";
    case "CI/CD":
      return "pink";
    default:
      return undefined;
  }
};
