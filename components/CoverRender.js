import Image from 'next/image';

const CoverRender = ({ children, width, height, roundedTop = true }) => {
  if (!children?.html_url || !children?.default_branch) return null;

  const svgUrl = children.html_url
    .replace("https://github.com/", "https://raw.githubusercontent.com/")
    + `/${children.default_branch}/_docs/cover.svg`;

  return (
    <Image
      src={svgUrl}
      alt="Project cover image"
      width={width}
      height={height}
      className={`w-full object-cover ${roundedTop ? 'rounded-t-md' : ''}`}
      unoptimized
    />
  );
};

export default CoverRender;
