import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroNew`.
 */
export type HeroNewProps = SliceComponentProps<Content.HeroNewSlice>;

/**
 * Component for "HeroNew" Slices.
 */
const HeroNew = ({ slice }: HeroNewProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
      <>{slice.primary.button_text}</>
      <PrismicNextLink field={slice.primary.button_link}>{slice.primary.button_text}</PrismicNextLink>
      <PrismicNextImage field={slice.primary.image} />
    </Bounded>
  );
};

export default HeroNew;
