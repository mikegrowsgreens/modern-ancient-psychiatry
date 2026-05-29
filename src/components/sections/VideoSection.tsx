import Image from "next/image";
import { VIDEO } from "@/content/home";
import FadeIn from "@/components/ui/FadeIn";

export default function VideoSection() {
  return (
    <section className="section-padding bg-deep">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border border-gold/10">
            {VIDEO.url ? (
              <iframe
                src={VIDEO.url}
                title="Modern Ancient Psychiatry"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={VIDEO.placeholderImage}
                  alt="Brittany Khoury reflecting in nature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-deep/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  {/* Play icon */}
                  <div className="w-16 h-16 rounded-full bg-cream/20 backdrop-blur-sm border border-cream/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-cream ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="font-heading text-subheading text-cream/80 italic">
                    {VIDEO.placeholderText}
                  </p>
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
