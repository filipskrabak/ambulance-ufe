/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FskrabakAmbulanceWlApp {
        "basePath": string;
    }
    interface FskrabakAmbulanceWlEditor {
        "entryId": string;
    }
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
export interface FskrabakAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFskrabakAmbulanceWlEditorElement;
}
export interface FskrabakAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFskrabakAmbulanceWlListElement;
}
declare global {
    interface HTMLFskrabakAmbulanceWlAppElement extends Components.FskrabakAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLFskrabakAmbulanceWlAppElement: {
        prototype: HTMLFskrabakAmbulanceWlAppElement;
        new (): HTMLFskrabakAmbulanceWlAppElement;
    };
    interface HTMLFskrabakAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLFskrabakAmbulanceWlEditorElement extends Components.FskrabakAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFskrabakAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLFskrabakAmbulanceWlEditorElement, ev: FskrabakAmbulanceWlEditorCustomEvent<HTMLFskrabakAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFskrabakAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLFskrabakAmbulanceWlEditorElement, ev: FskrabakAmbulanceWlEditorCustomEvent<HTMLFskrabakAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFskrabakAmbulanceWlEditorElement: {
        prototype: HTMLFskrabakAmbulanceWlEditorElement;
        new (): HTMLFskrabakAmbulanceWlEditorElement;
    };
    interface HTMLFskrabakAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLFskrabakAmbulanceWlListElement extends Components.FskrabakAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFskrabakAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLFskrabakAmbulanceWlListElement, ev: FskrabakAmbulanceWlListCustomEvent<HTMLFskrabakAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFskrabakAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLFskrabakAmbulanceWlListElement, ev: FskrabakAmbulanceWlListCustomEvent<HTMLFskrabakAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
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
        "fskrabak-ambulance-wl-app": HTMLFskrabakAmbulanceWlAppElement;
        "fskrabak-ambulance-wl-editor": HTMLFskrabakAmbulanceWlEditorElement;
        "fskrabak-ambulance-wl-list": HTMLFskrabakAmbulanceWlListElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface FskrabakAmbulanceWlApp {
        "basePath"?: string;
    }
    interface FskrabakAmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: FskrabakAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface FskrabakAmbulanceWlList {
        "onEntry-clicked"?: (event: FskrabakAmbulanceWlListCustomEvent<string>) => void;
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
        "fskrabak-ambulance-wl-app": FskrabakAmbulanceWlApp;
        "fskrabak-ambulance-wl-editor": FskrabakAmbulanceWlEditor;
        "fskrabak-ambulance-wl-list": FskrabakAmbulanceWlList;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fskrabak-ambulance-wl-app": LocalJSX.FskrabakAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLFskrabakAmbulanceWlAppElement>;
            "fskrabak-ambulance-wl-editor": LocalJSX.FskrabakAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLFskrabakAmbulanceWlEditorElement>;
            "fskrabak-ambulance-wl-list": LocalJSX.FskrabakAmbulanceWlList & JSXBase.HTMLAttributes<HTMLFskrabakAmbulanceWlListElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
