import { Component, Vue } from 'vue-property-decorator';
import { getList, getListByCache } from '@/data-api/lab/list-api';

interface Person {
  name: string;
  age: number;
}

@Component({
  name: 'List',
  created(): void {
    // window.console.log('List is created');
  },
})
export default class List extends Vue {
  private componentName: string | undefined = this.$options.name;
  private msg: string = 'message';
  private total: number = 0;
  private page: number = 1;
  private pageSize: number = 0;
  private list: any[] = [];
  private searchData: any = {
   searchText: '',
  };
  /**
   * mounted
   */
  public mounted(): void {
    this.getList();
  }
  /**
   * search
   */
  public search(): void {
    this.page = 1;
    this.getList();
  }
  /**
   * 获取列表
   */
  public async getList(): Promise<any> {
    const query: any = { page: this.page };
    for (const key in this.searchData) {
      if (this.searchData.hasOwnProperty(key)) {
        const element = this.searchData[key];
        if (element !== '') {
          query[key] = element;
        }
      }
    }
    try {
      // const res = await getList(query);
      // const data = res.data;
      // this.list = data.results;
      // this.total = data.count;
      // this.page = data.page;
      // this.pageSize = data.page_size;
      getListByCache(query, (res) => {
        const data = res!.data;
        this.list = data.results;
        this.total = data.count;
        this.page = data.page;
        this.pageSize = data.page_size;
      });
    } catch (error) {
      window.console.error(error);
    }
  }
  /**
   * 分页请求
   */
  public pageSwitch(page: number): void {
    this.page = page;
    this.getList();
  }
  public sendPost(): void {
    this.msg = 'hello ts...';
    window.console.log(this);
  }
}
