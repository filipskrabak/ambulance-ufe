/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FskrabakAmbulanceWlList {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLFskrabakAmbulanceWlListElement extends Components.FskrabakAmbulanceWlList, HTMLStencilElement {
    }
    var HTMLFskrabakAmbulanceWlListElement: {
        prototype: HTMLFskrabakAmbulanceWlListElement;
        new (): HTMLFskrabakAmbulanceWlListElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "fskrabak-ambulance-wl-list": HTMLFskrabakAmbulanceWlListElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface FskrabakAmbulanceWlList {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "fskrabak-ambulance-wl-list": FskrabakAmbulanceWlList;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fskrabak-ambulance-wl-list": LocalJSX.FskrabakAmbulanceWlList & JSXBase.HTMLAttributes<HTMLFskrabakAmbulanceWlListElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
