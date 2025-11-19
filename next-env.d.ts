/// <reference types="next" />
/// <reference types="next/image" />

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
