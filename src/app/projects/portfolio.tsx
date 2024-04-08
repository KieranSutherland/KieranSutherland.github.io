import { ProjectTab } from "./project-tab";
import SudokuExample from "./sudoku_solver.png";

const description = `This is portfolio.`;

export function Portfolio() {
    return (
        <ProjectTab
            githubUrlSuffix="kieransutherland.github.io"
            previewImage={{
                src: SudokuExample,
                alt: "Portfolio example"
            }}
            description={description}
        />
    )
}