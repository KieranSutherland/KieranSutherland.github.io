import { ProjectTab } from "../project-tab";
import DiscordBotExample from "./discord-bot.png";

const description = `The discord bot was a fun project over lockdown where I first taught myself TypeScript outside of what I learned from work.

This bot connects to the Discord API and is verified on their developer portal.

Anyone in the Discord server can send commands to the bot within the server chat and it will interpret and execute them.

Commands are added/removed as we please, including sending random insults, playing noises in the voice chat, forcing (exiling) a user to be in a specific voice chat, using Google's text-to-speech, etc.`;

export function DiscordBot() {
    return (
        <ProjectTab
            githubUrlSuffix="DeanBot"
            previewImage={{
                src: DiscordBotExample,
                alt: "Discord bot example"
            }}
            description={description}
        />
    )
}