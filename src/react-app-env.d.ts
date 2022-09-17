// / <reference types="react-scripts" />

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.jpg' {
  export default '' as string
}

declare module '*.jpeg' {
  export default '' as string
}

declare module '*.png' {
  export default '' as string
}

declare interface ObjectConstructor {
  entries<K, V>(o: { [s: K]: V } | ArrayLike<V>): [K, V][];
}
