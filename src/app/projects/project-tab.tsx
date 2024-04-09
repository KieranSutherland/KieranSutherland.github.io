import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import Image from 'next/image';
import GitHubLogo from "../github-mark-white.png";
import { cn } from "@/utils/cn";
import { GITHUB_ACCOUNT_URL } from "../constants";

export interface ProjectTabProps {
    repoUrlSuffix: string;
    previewImage: {
        src: string | StaticImport;
        alt: string;
        className?: string;
    };
    description: string;
}

export function ProjectTab(props: ProjectTabProps) {
    const { repoUrlSuffix, previewImage, description } = props;
    const { src, alt, className } = previewImage;
    return (
        <div className="h-full w-full flex flex-row justify-center items-center gap-8">
            <p className="text-white text-xl font-normal whitespace-pre-wrap items-center flex flex-[2] text-left">
                {description}
            </p>
            <div className="flex flex-col justify-between items-center gap-8">
                <Image className={cn("rounded-md", className)} src={src} alt={alt} width={300} />
                <Link href={GITHUB_ACCOUNT_URL + repoUrlSuffix} target="_blank" className="w-full h-full flex items-center">
                    <HoverBorderGradient
                        containerClassName="pointer-events-auto rounded-full w-full"
                        className="w-full flex justify-center"
                        as="button"
                    >
                        <div className="flex flex-row gap-3">
                            <Image src={GitHubLogo} alt="GitHub" height={24} width={24} />
                            {"GitHub"}
                        </div>
                    </HoverBorderGradient>
                </Link>
            </div>
        </div>
    );
}