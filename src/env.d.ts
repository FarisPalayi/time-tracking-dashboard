/// <reference types="vite/client" />
/// <reference types="vue/ref-macros" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ITime {
  current: number;
  previous: number;
}

interface ITimeFrames {
  daily: ITime;
  weekly: ITime;
  monthly: ITime;
}

interface IData {
  title: string;
  timeFrames: ITimeFrames;
}
