import type { Root, Doctype, ElementContent, Element } from "hast";

export type TextileVisitor = (
  node: Root | Doctype | ElementContent,
  index?: number,
  parent?: Root | Element
) => any;
export interface TextileTreeWalker {
  walk: TextileVisitor;
}
export interface TextileExtension extends TextileTreeWalker {}
export type TextileExtensionFn = (...args: any[]) => TextileExtension;
