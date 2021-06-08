declare namespace SomeStyleScssNamespace {
    export interface ISomeStyleScss {
        someClass: string;
    }
}

declare const SomeStyleScssModule: SomeStyleScssNamespace.ISomeStyleScss;

export = SomeStyleScssModule;
