class UserMenu {
  private icon: string;
  private title: string;
  private routeName: string;
  private path: string;
  private filePath: string;
  private children: UserMenu[];

  constructor(
    $icon: string, $title: string,
    $routeName: string, $path: string,
    $filePath: string, $children: UserMenu[],
  ) {
    this.icon = $icon;
    this.title = $title;
    this.routeName = $routeName;
    this.path = $path;
    this.filePath = $filePath;
    this.children = $children;
  }

  public getIcon(): string {
    return this.icon;
  }

  public setIcon(icon: string): void {
    this.icon = icon;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getRouteName(): string {
    return this.routeName;
  }

  public setRouteName(routeName: string): void {
    this.routeName = routeName;
  }

  public getPath(): string {
    return this.path;
  }

  public setPath(path: string): void {
    this.path = path;
  }

  public getFilePath(): string {
    return this.filePath;
  }

  public setFilePath(filePath: string): void {
    this.filePath = filePath;
  }

  public getChildren(): UserMenu[] {
    return this.children;
  }

  public setChildren(children: UserMenu[]): void {
    this.children = children;
  }
}

export default UserMenu;
