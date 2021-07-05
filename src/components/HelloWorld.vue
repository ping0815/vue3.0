<template>
  <div class="hello">
    <div>
        <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
            {{t(curText.data)}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
            <el-dropdown-item v-for="item in language" :key="item.tag" :command=item.tag>{{t(item.text)}}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
        </el-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, reactive, onMounted} from 'vue'
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: 'HelloWorld',
  setup(){
    const curText = reactive({data: 'a'});
    const language = [{
      'text': '中文',
      'tag': 'zh'
    },{
      'text': 'English',
      'tag': 'en'
    }];
    const { t } = useI18n();
    let {proxy} = getCurrentInstance();
    const handleCommand = (command) => {
        curText.data = command
        console.log(proxy)
        proxy.$i18n.locale = command
      }
    onMounted(()=>{
      curText.data = language[0].text
    })
    return {
      t,
      curText,
      handleCommand,
      language
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
