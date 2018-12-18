import { Component, Vue } from 'vue-property-decorator';

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
  private list: Person[] = [];
  private msg: string = 'message';
  private sendPost(): void {
    this.msg = 'hello ts...';
    window.console.log(this);
  }
}
