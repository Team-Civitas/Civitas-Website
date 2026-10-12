
import type { ImageMetadata } from "astro";

import reCreatedLogo from "../assets/projects/logos/re-created.png";
import pokemonLogo from "../assets/projects/logos/pokemon_ascension.png";
import spellboundLogo from "../assets/projects/logos/spellbound.png";
import earthboundLogo from "../assets/projects/logos/earthbound.png";

import reCreatedImage from "../assets/projects/recreated/promo.png";
import pokemonImage from "../assets/projects/pokemon_ascension/promo.png";
import spellboundImage from "../assets/projects/spellbound/promo.png";
import earthboundImage from "../assets/projects/earthbound/promo.png";

export type ModpackStatus = "active" | "upcoming" | "archived";

export interface Modpack {
    slug: string;
    title: string;
    description: string;
    series: string;
    logo: ImageMetadata;
    image: ImageMetadata;
    status: ModpackStatus;
    releaseDate: string | null;
    current: boolean;
    featured: boolean;
}

export const modpacks: Modpack[] = [
    {
        slug: "re-created",
        title: "Civitas: Re-Created",
        description:
            "Civitas mest populära och längst varande modpack. Fokus på mekanik och stadsutveckling.",
        series: "The Civitas Stories",
        logo: reCreatedLogo,
        image: reCreatedImage,
        status: "active",
        releaseDate: "2023-10-18",
        current: true,
        featured: false,
    },
    {
        slug: "pokemon-ascension",
        title: "Civitas: Pokémon Ascension",
        description: "En Pokémon-upplevelse i Minecraft.",
        series: "Civitas Originals",
        logo: pokemonLogo,
        image: pokemonImage,
        status: "upcoming",
        releaseDate: null,
        current: false,
        featured: true,
    },
    {
        slug: "spellbound",
        title: "Civitas: Spellbound",
        description:
            "Ett fantasyinriktat modpack med drakar, magi och mystiska dimensioner, där utforskning och progression står i centrum.",
        series: "Civitas Originals",
        logo: spellboundLogo,
        image: spellboundImage,
        status: "archived",
        releaseDate: null,
        current: false,
        featured: true,
    },
    {
        slug: "earthbound",
        title: "Civitas Earthbound",
        description: "Ett kommande Civitas-projekt.",
        series: "Civitas Originals",
        logo: earthboundLogo,
        image: earthboundImage,
        status: "upcoming",
        releaseDate: null,
        current: false,
        featured: false,
    },
];
