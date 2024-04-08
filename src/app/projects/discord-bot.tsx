import { ProjectTab } from "./project-tab";
import SudokuExample from "./sudoku_solver.png";

const description = `This is discord bot.`;

export function DiscordBot() {
    return (
        <ProjectTab
            githubUrlSuffix="DeanBot"
            previewImage={{
                src: SudokuExample,
                alt: "Discord bot example"
            }}
            description={description}
        />
    )
}