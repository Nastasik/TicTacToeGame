declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.FC<React.SVGProps<SVGElement>>;
    export default SVG;
}

declare module "*.png";

declare const __API__: string;