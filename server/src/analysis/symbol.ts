import { Range } from 'vscode-languageserver';

export type SymbolKind = 'Function' | 'FunctionParameter' | 'Variable';

export interface Symbol {
    kind: SymbolKind;

    name: string | null;
    comment: string;
    display?: string | null;
    container?: string | null;
    range: Range;
    isGlobalScope: boolean;
    isOuterScope: boolean;
}
