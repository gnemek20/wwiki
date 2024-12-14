import { NextRouter } from "next/router";

interface routerPushOptions {
  query?: Record<string, string | number | boolean>;
  shallow?: boolean;
}

const routerPush = (router: NextRouter, pathName: string, options?: routerPushOptions) => {
  router.push({pathname: pathName, query: options?.query}, undefined, { shallow: options?.shallow });
}
const routerReplace = (router: NextRouter, pathName: string, options?: routerPushOptions) => {
  router.replace({pathname: pathName, query: options?.query}, undefined, { shallow: options?.shallow });
}
const routerBack = (router: NextRouter) => {
  router.back();
}

const pageReload = () => {
  window.location.reload();
}

export { routerPush, routerReplace, routerBack };
export { pageReload };