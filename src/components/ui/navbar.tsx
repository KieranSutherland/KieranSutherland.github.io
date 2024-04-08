import Link from "next/link";

export function Navbar() {
    return (
        <header className="fixed w-full inset-x-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="w-auto text-lg font-semibold leading-6 nav-bar-text">
                        Kieran Sutherland
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="projects" className="text-sm font-semibold leading-6 nav-bar-text">Projects</Link>
                    <Link href="links" className="text-sm font-semibold leading-6 nav-bar-text">Links</Link>
                </div>
            </nav>
            {/* Mobile menu, show/hide based on menu open state. */}
            <div className="lg:hidden" role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on slide-over state. */}
                <div className="fixed inset-0 z-10"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            Kieran Sutherland
                        </Link>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-100">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <div className="-mx-3">
                                    <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 nav-bar-text hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                                        Product
                                        {/* Expand/collapse icon, toggle classNamees based on menu open state.

                  Open: "rotate-180", Closed: "" */}
                                        <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <Link href="projects" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 nav-bar-text hover:bg-gray-50">Projects</Link>
                                <Link href="links" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 nav-bar-text hover:bg-gray-50">Links</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}