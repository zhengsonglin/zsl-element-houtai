import Vue from 'vue';
import Time from '@/components/common/lt/Time';
import Arr from '@/components/common/lt/Arr';
// import common from '@/components/common';
import App from './App';
import router from './router';
import axios from 'axios';
import api from './api/'
// Vue.use(common);
Vue.prototype.$Time=Time;
Vue.prototype.$Arr=Arr;
Vue.prototype.$axios = axios
Vue.prototype.$api = api
// import ElementUI from 'element-ui';
// import { Button} from 'element-ui';
// 
// Vue.use(ElementUI, { size: 'small' });
import {
Dialog,
Dropdown,
DropdownMenu,
DropdownItem,
Menu,
Submenu,
MenuItem,
Input,
Radio,
RadioGroup,
Checkbox,
CheckboxGroup,
Switch,
Select,
Option,
Button,
Table,
TableColumn,
DatePicker,
TimePicker,
Breadcrumb,
BreadcrumbItem,
Form,
FormItem,
Row,
Col,
Upload,
Progress,
Card,
Cascader,
Tabs,
Tag,
TabPane,
Tooltip,
Pagination,
Popover,
// InputNumber,
// RadioButton,
// CheckboxButton,
// Autocomplete,
// MenuItemGroup,
// OptionGroup,
// ButtonGroup,
// TimeSelect,
// Popover,
// Vue.use(Tag);
// Vue.use(Tree);
// Vue.use(Alert);
// Vue.use(Slider);
// Vue.use(Icon);
// 
// Vue.use(Badge);
// Vue.use(Rate);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);

// Vue.use(ColorPicker);
// Vue.use(Transfer);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);
Message,
MessageBox
} from 'element-ui';
Vue.use(Pagination);
// Vue.use(basic-table);
Vue.use(Tag);
Vue.use(Popover);
Vue.component(Button.name, Button);
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../static/css/icon.css';

import "babel-polyfill";

// 顶部图标按钮组件
Vue.use(DropdownMenu);
// 图标按钮点击下拉
Vue.use(Dropdown);
// 图标按钮下拉后样式
Vue.use(DropdownItem);
// 鼠标停留触发显示未读消息数量
Vue.use(Tooltip);
// 单击弹出确认框
Vue.use(Dialog);
// 菜单按钮
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
// 卡片布局
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
// 进度条
Vue.use(Progress);
// 选中框
Vue.use(Checkbox);
// 输入框
Vue.use(Input);
// 多选中
Vue.use(Radio);
// 单选中
Vue.use(RadioGroup);
// 选择框排列
Vue.use(CheckboxGroup);
// 开关
Vue.use(Switch);
// 下拉选择列表
Vue.use(Select);
// 下拉选择列表内数据
Vue.use(Option);
// 待办事项列表表格
Vue.use(Table);
Vue.use(TableColumn);
// 选择日期
Vue.use(DatePicker);
// 选择时间
Vue.use(TimePicker);
// 城市级联
Vue.use(Cascader);
// 菜单面包屑 菜单分级 每个菜单名中间隔着一个斜杠
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
// 表单布局
Vue.use(Form);
Vue.use(FormItem);
// 拖拽上传文件
Vue.use(Upload);
// tab 选项卡标签
Vue.use(Tabs);
Vue.use(TabPane);
Vue.prototype.$Message = Message;
Vue.prototype.$MessageBox = Message;
// Vue.use(Loading.directive);
// Vue.prototype.$axios = axios;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    // alert(JSON.stringify(to.path))
    //  alert(JSON.stringify(from))
    //   alert(next)
    const role = localStorage.getItem('ms_username');
    if(!role && to.path !== '/login'){
        next('/login');
    }else if(to.meta.permission){
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    }else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');