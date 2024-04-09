import { ProjectTab } from "../project-tab";
import PortfolioExample from "./portfolio.png";

const description = `This is website you are currently viewing.

This is a showcase of some of my side projects I've been working on in my spare time.

It functions as a way to exhibit my skills, as well as being a way to learn and practise new technologies outside of work so I can learn and implement them from the ground up.`;

export function Portfolio() {
    return (
        <ProjectTab
            repoUrlSuffix="kieransutherland.github.io"
            previewImage={{
                src: PortfolioExample,
                alt: "Portfolio example"
            }}
            description={description}
        />
    )
}