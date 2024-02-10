import { createClient } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
    const client = createClient('tutorialcreating');
  
    const settings = await client.getSingle('settings')

    return (
    <header>
        <Link href={'/'}>
            <h2>
                {settings.data.site_title}
            </h2>
        </Link>
        <nav>
            <ul>
                {settings.data.navigation.map(({label, link}) => (
                    <li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>)
}