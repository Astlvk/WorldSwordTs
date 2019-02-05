class UserMenu {
  private icon: string = '';
  private title: string = '';
  private path: string = '';
  private children: UserMenu[] = [];

  constructor($icon: string , $title: string , $path: string , $children: UserMenu[] ) {
    this.icon = $icon;
    this.title = $title;
    this.path = $path;
    this.children = $children;
  }

  public get getIcon() {
    return this.icon;
  }
  public get getTitle() {
    return this.title;
  }
  public get getPath() {
    return this.path;
  }
  public get getChildren() {
    return this.children;
  }

  public set setIcon(icon: string) {
    this.icon = icon;
  }
  public set setTitle(title: string) {
    this.title = title;
  }
  public set setPath(path: string) {
    this.path = path;
  }
  public set setChildren(children: UserMenu[]) {
    this.children = children;
  }
}

export default UserMenu;
