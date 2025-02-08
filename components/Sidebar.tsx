import { X } from "lucide-react";
import React, { FC } from "react";
import { Logo } from "./Logo";
import { NavbarData } from "@/constants";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    pathname: string;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, pathname }) => {
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            onClick={onClose} // Close sidebar when clicking outside
        >
            <div
                ref={sidebarRef}
                className={`fixed inset-y-0 right-0 z-50 min-w-72 bg-bodyColor border-l border-hoverColor/20 shadow-xl shadow-lightSky/40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button
                        className="hover:text-red-600"
                        aria-label="Close sidebar"
                        onClick={onClose}
                    >
                        <X />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2">
                    <Logo title="Masum" subtitle="." />
                    {NavbarData?.map((item) => (
                        <Link
                            key={item?.title}
                            href={item?.href}
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation first (optional)
                                onClose(); // Close the sidebar
                            }}
                            className={`hover:text-hoverColor ${item?.href === pathname && "text-hoverColor"
                                }`}
                        >
                            {item?.title}
                        </Link>
                    ))}
                    <Link
                        href={"/resume.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-lightSky/10 px-4 py-2 rounded-[6px] border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black w-24 text-center"
                    >
                        Hire me
                    </Link>
                    <SocialLinks />
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
