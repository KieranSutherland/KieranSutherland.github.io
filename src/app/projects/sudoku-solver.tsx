import { ProjectTab } from "./project-tab";
import SudokuExample from "./sudoku_solver.png";

const description = `This is an augmented reality sudoku solver. Point any unsolved sudoku puzzle at the camera, it will programatically resolve the edges of the 9x9 square and disect each cell individually into a list.

Once it has this list, it uses AI to resolve the number and builds a digital construct of puzzle.

It will then solve the puzzle internally and augment the solved cell numbers onto the user's screen.

This process is looped multiple times per second to give the user a smooth experience.`;

export function SudokuSolver() {
    return (
        <ProjectTab
            githubUrlSuffix="SudokuSolver"
            previewImage={{
                src: SudokuExample,
                alt: "Sudoku working example"
            }}
            description={description}
        />
    )
}