import { Vue, Component } from 'vue-property-decorator';
import { getUserInfo } from '@/data-api/lab/user-api';
import UserState from '@/store/modules/User';
import { getModule } from 'vuex-module-decorators';

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

  /**
   * 登录函数
   */
  private async login(): Promise<any> {
    const res = await getUserInfo(this.user);
    const data = res.data;
    if (data.token === 'no token') {
      this.$message.error('用户名密码错误');
    } else {
      // login success
      getModule(UserState).SET_TOKEN(data.token);
      sessionStorage.setItem('token', data.token);
      this.$router.push('/');
    }
  }
}
