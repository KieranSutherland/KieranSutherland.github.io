import Link from "next/link";
import Image from 'next/image';
import { GITHUB_ACCOUNT_URL } from "../constants";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import GitHubIcon from "../github-mark-white.png";
import LinkedInIcon from "./linkedin.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface LinkButtonProps {
    href: string;
    logo: {
        src: string | StaticImport;
        alt: string;
    };
    name: string;
}

function LinkButton(props: LinkButtonProps) {
    const { href, logo, name } = props;
    const { src, alt } = logo;
    return (
        <Link href={href} target="_blank" className="w-full h-full flex items-center">
            <HoverBorderGradient
                containerClassName="pointer-events-auto rounded-full w-full"
                className="w-full flex justify-center"
                as="button"
            >
                <div className="flex flex-row gap-3">
                    <Image src={src} alt={alt} height={24} width={24} />
                    {name}
                </div>
            </HoverBorderGradient>
        </Link>
    );
}

export default function Links() {
    return (
        <div className="w-full flex flex-col gap-10 items-center justify-center max-w-[300px]">
            <LinkButton
                href={GITHUB_ACCOUNT_URL}
                logo={{
                    src: GitHubIcon,
                    alt: "GitHub"
                }}
                name="GitHub"
            />
            <LinkButton
                href={"https://www.linkedin.com/in/kieran-sutherland/"}
                logo={{
                    src: LinkedInIcon,
                    alt: "LinkedIn"
                }}
                name="LinkedIn"
            />
        </div>
    )
}