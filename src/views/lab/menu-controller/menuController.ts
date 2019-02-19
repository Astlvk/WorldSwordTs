import { Component, Vue } from 'vue-property-decorator';
import { TreeNode } from 'element-ui/types/tree';

interface TreeData {
  id: number;
  label: string;
  children: TreeData[] | undefined;
}

@Component({
  name: 'MenuController',
})
export default class MenuController extends Vue {
  private id: number = 1000;
  private data: TreeData[] = [
    {
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1',
        }, {
          id: 10,
          label: '三级 1-1-2',
        }],
      }],
    },
    {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1',
      }, {
        id: 6,
        label: '二级 2-2',
      }],
    },
    {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1',
      }, {
        id: 8,
        label: '二级 3-2',
      }],
    },
  ];

  private append(data: TreeData): void {
    const newChild = { id: this.id++, label: 'testtest', children: [] };
    if (!data.children) {
      this.$set(data, 'children', []);
    }
    data.children!.push(newChild);
  }

  private remove(node: TreeNode<any, TreeData | TreeData[]>, data: TreeData): void {
    const parent = node.parent;
    window.console.log(node);
    window.console.log(parent);
    if (parent !== null) {
      // const children = parent.data.children || parent.data;
      const parentData = parent.data;
      let children: TreeData[];
      if (Array.isArray(parentData)) {
        children = parentData;
      } else {
        children = parentData.children!;
      }
      const index = children.findIndex((d: TreeData) => d.id === data.id);
      children.splice(index, 1);
    }
  }
}
