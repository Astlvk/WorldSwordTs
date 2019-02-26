import { Vue, Component } from 'vue-property-decorator';

interface UsreInfo {
  name: string;
  password: string;
}

@Component({
  name: 'Login',
})
export default class Login extends Vue {
  private user: UsreInfo = {
    name: '',
    password: '',
  };
  private passwordType: string = 'password';
  private iconName: string = 'eye';

  /**
   * 控制密码框显示
   */
  private showPassword(): void {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.iconName = 'eye-open';
    } else {
      this.passwordType = 'password';
      this.iconName = 'eye';
    }
  }
}
