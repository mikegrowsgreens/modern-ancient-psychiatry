import { EMERGENCY } from "@/content/shared";

/**
 * The most important safety content on the site. It previously read as a cookie
 * notice — centered, muted grey, 14px, with the numbers as inert text.
 *
 * Now: flush-left on the one sanctioned `--surface` field (a different piece of
 * stock from the program), a gold hairline above marking the change of stock,
 * and 911 / 988 set as real `tel:` links at --t-title in Cormorant so they are
 * the largest thing in the strip and dialable with one tap. Nothing here
 * animates, and nothing adjacent to it does either.
 */

// Cormorant ships old-style figures by default, which set "911" as "9 i i".
// `lining-nums` is required on every Cormorant numeral on the site.
//
// These two stay at ~37px rather than being forced to 44. They are inline
// links inside a sentence, which is the case WCAG 2.5.8 exempts by name
// ("the target is in a sentence or its size is otherwise constrained by the
// line-height of non-target text") — and the two attempts to force it both
// damaged the sentence: padding pushed the following comma off ("call 911 ,
// go to"), and a min-height stretched that one line's leading. They are set at
// --t-title, which already makes them the largest thing in the strip and much
// larger than the surrounding text.
const NUMBER =
  "lining-nums tabular-nums inline-block py-1 font-heading text-title text-gold underline-offset-[6px] hover:underline focus-visible:underline";

/*
 * `mt` is the gap above the band, `py` is the air inside it. A filled element
 * cannot use padding for both without the fill swallowing the gap.
 */
export default function EmergencyBanner() {
  return (
    <aside className="relative mt-rhythm-close border-b border-cream/[0.12] bg-surface px-6 py-rhythm-hairline md:px-12 lg:px-[4.5rem]">
      {/* Gold hairline above: this strip is a different piece of stock. */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gold/[0.28]" />

      <div className="mx-auto w-full max-w-index">
        {/* `--t-prose` at `--measure-prose`, not `--t-fine` at
            `--measure-display`: 13px across 46rem ran 118 characters a line —
            174 on /contact, where this strip sat at the index measure. This is
            the most important safety content on the site and it was set at the
            longest line and the smallest size on the page. */}
        <p className="max-w-prose font-body text-body leading-[1.8] text-cream/85">
          {EMERGENCY.lead}{" "}
          <a href={EMERGENCY.emergency.href} className={NUMBER}>
            {EMERGENCY.emergency.number}
          </a>
          {EMERGENCY.middle}{" "}
          <a href={EMERGENCY.crisis.href} className={NUMBER}>
            {EMERGENCY.crisis.number}
          </a>{" "}
          {EMERGENCY.tail}
        </p>
        <p className="mt-3 max-w-prose font-body text-fine leading-[1.6] text-muted">
          {EMERGENCY.note}
        </p>
      </div>
    </aside>
  );
}
