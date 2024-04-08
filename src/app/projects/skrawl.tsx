import { ProjectTab } from "./project-tab";
import SudokuExample from "./sudoku_solver.png";

const description = `This is skrawl.`;

export function Skrawl() {
    return (
        <ProjectTab
            githubUrlSuffix="skrawl"
            previewImage={{
                src: SudokuExample,
                alt: "Skrawl example"
            }}
            description={description}
        />
    )
}