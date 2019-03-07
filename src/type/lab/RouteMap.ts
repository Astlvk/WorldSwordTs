export default interface RouteMap {
  title: string;
  icon: string;
  name: string;
  path: string;
  redirect?: string;
  alwaysShow: boolean;
  component: string | null;
  children: RouteMap[] | null;
}
