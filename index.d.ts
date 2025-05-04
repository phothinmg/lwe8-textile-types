import type {
  Root as IRoot,
  Doctype as IDoctype,
  ElementContent as IElementContent,
  Element as IElement,
  Node as INode,
  Text as IText,
  Comment as IComment,
} from "hast";

export interface Root extends IRoot {}
export interface Doctype extends IDoctype {}
export type ElementContent = IElementContent;
export interface Node extends INode {}
export interface Element extends IElement {}
export interface Text extends IText {}
export interface Comment extends IComment {}

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

export declare class TextError {}
