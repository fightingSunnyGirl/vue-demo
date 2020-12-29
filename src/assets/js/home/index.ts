// 共有8个装饰器 @Emit @Inject Mixins @Model @Prop @Provide @Watch @Component(from vue-class-component)
import { Component, Vue,Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import {Params} from './config'
@Component({
  name:'Home',
  components: {
    HelloWorld
  },
  mixins:[],
  filters:{},
  directives:{}
})


export default class Home extends Vue {
  //data
  params:Params = {
    status:'',
    page:1
  }
  // methods
  test():void{
    console.log(111)
    this.params.status = 'order'
    
  }  

  // computed
  get pageCount(){
    return this.params.status + this.params.page
  } 
  beforeCreate() {
    console.log("beforeCreated");
  }
  created() {
    console.log("created");
  }
  mounted() {
    console.log("mounted");
    this.test()
  }
} 