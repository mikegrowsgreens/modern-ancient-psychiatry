import { Fragment, type ReactNode } from "react";

/**
 * Renders `*word*` spans in a content string as <em>.
 *
 * Exists so per-word emphasis is a property of the copy, not of a component.
 * Philosophy.tsx used to hardcode one statement's markup inline and branch on
 * array index, which silently overrode the content file: editing the string in
 * home.ts changed nothing on the page.
 */
export function em(text: string): ReactNode {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
      <em key={i} className="italic">
        {part.slice(1, -1)}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
