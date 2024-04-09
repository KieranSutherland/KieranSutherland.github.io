import { ProjectTab } from "../project-tab";
import SkrawlExample from "./skrawl.png";

const description = `Skrawl is an online drawing game similar to Chinese whispers. 

Players can create/join a lobby with their friends, select either SFW/NSFW prompts and start the game.

In the first round, each player is given a random prompt to draw e.g. "A skateboarding turtle". In the second round, each player guesses what the original prompt was. It then loops back and they draw that prompt guess.

At the end, it gives an overview starting from the original prompt all the way to the final product, often being quite different. The original drawer votes on which drawing/guess is the best.`;

export function Skrawl() {
    return (
        <ProjectTab
            repoUrlSuffix="skrawl"
            previewImage={{
                src: SkrawlExample,
                alt: "Skrawl example"
            }}
            description={description}
        />
    )
}