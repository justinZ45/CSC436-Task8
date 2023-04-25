import { getLinksLinks } from "../utils/data";

const NonSocialLinks = () => {
  const nonSocialLinks = getLinksLinks();

  return (
    <div className="barge ">
      {nonSocialLinks.map((nonSocialLink) => {
        return (
          <a className=" " href={nonSocialLink.url} key={nonSocialLink.id}>
                        <br/>

            <button className="button">
              <p>{nonSocialLink.title}</p>
            </button>
            <br/>
          </a>
        );
      })}
    </div>
  );
};

export default NonSocialLinks;
