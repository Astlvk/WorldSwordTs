import { Component, Vue } from 'vue-property-decorator';
import { getList } from '@/data-api/lab/list-api';

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
  private total: number = 0;
  private page: number = 1;
  private pageSize: number = 0;
  private list: any[] = [];
  private msg: string = 'message';
  /**
   * mounted
   */
  public mounted(): void {
    this.getList({page: this.page});
  }
  /**
   * 获取列表
   */
  public async getList(query: any): Promise<any> {
    const res = await getList(query);
    const data = res.data;
    this.list = data.results;
    this.total = data.count;
    this.page = data.page;
    this.pageSize = data.page_size;
  }
  /**
   * 分页请求
   */
  public pageSwitch(page: number): void {
    this.page = page;
    this.getList({page: this.page});
  }
  public sendPost(): void {
    this.msg = 'hello ts...';
    window.console.log(this);
  }
}
