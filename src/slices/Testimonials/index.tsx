import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({ slice }: TestimonialsProps): Promise<JSX.Element> => {

  const client = createClient();
  const testimonials = await Promise.all(
    slice.items.map((item) => {
      if(
        isFilled.contentRelationship(item.testimonial) && item.testimonial.uid 
      ) {
        return client.getByUID("testimonial", item.testimonial.uid)
      }
    })
  )

  console.log(slice.items)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <div>
        {testimonials.map((item, index) => {
          return <div>
            {
              item &&
              <PrismicRichText field={item.data.quote} />
            }
            <div>
              <PrismicNextImage width={56} height={56} field={item?.data.avatar} imgixParams={{ar: "1:1", fit: "crop"}}/>
              <div>
                <p>{item?.data.name}</p>
                <p>{item?.data.job_title}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </section>
  );
};

export default Testimonials;
