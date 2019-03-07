class RouteMap {
  private title: string;
  private icon: string;
  private name: string;
  private path: string;
  private alwaysShow: boolean;
  private component: string | null;
  private children: RouteMap[] | null;

  constructor(
    $title: string, $icon: string, $name: string, $path: string,
    $alwaysShow: boolean, $component: string, $children: RouteMap[],
  ) {
    this.title = $title;
    this.icon = $icon;
    this.name = $name;
    this.path = $path;
    this.alwaysShow = $alwaysShow;
    this.component = $component;
    this.children = $children;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getIcon(): string {
    return this.icon;
  }

  public setIcon(icon: string): void {
    this.icon = icon;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPath(): string {
    return this.path;
  }

  public setPath(path: string): void {
    this.path = path;
  }

  public isAlwaysShow(): boolean {
    return this.alwaysShow;
  }

  public setAlwaysShow(alwaysShow: boolean): void {
    this.alwaysShow = alwaysShow;
  }

  public getComponent(): string | null {
    return this.component;
  }

  public setComponent(component: string | null): void {
    this.component = component;
  }

  public getChildren(): RouteMap[] | null {
    return this.children;
  }

  public setChildren(children: RouteMap[] | null): void {
    this.children = children;
  }

}

export default RouteMap;
