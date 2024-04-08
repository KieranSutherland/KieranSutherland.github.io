import { Tab, Tabs } from "@/components/ui/tabs";
import { SudokuSolver } from "./sudoku-solver/sudoku-solver";
import { Skrawl } from "./skrawl/skrawl";
import { Portfolio } from "./portfolio/portfolio";
import { DiscordBot } from "./discord-bot/discord-bot";

const tabs: Tab[] = [
    {
        key: 'sudoku-solver',
        title: 'Sudoku Solver',
        content: <SudokuSolver />
    },
    {
        key: 'skrawl',
        title: 'Skrawl',
        content: <Skrawl />
    },
    {
        key: 'portfolio',
        title: 'Portfolio',
        content: <Portfolio />
    },
    {
        key: 'discord-bot',
        title: 'Discord Bot',
        content: <DiscordBot />
    },
]

export default function Projects() {
    return (
        <div className="h-[70%] max-h-[600px] w-full [perspective:1000px] relative flex flex-col max-w-5xl bg-slate-600/40 backdrop-blur-lg p-5 lg:px-10 rounded-lg">
            <Tabs tabs={tabs} tabClassName="pointer-events-auto" containerClassName="justify-center" />
        </div>
    )
}