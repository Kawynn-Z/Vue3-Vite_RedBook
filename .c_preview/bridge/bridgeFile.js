import { render } from "../preset/vue.js";
export const bridgeData = {
    "workspaceFolder": "file:///c%3A/Users/86136/Desktop/临时存档/前端实习/小红书无限滚动瀑布流/my_vue3%2Bvite_xiaohongshu",
    "serverRootDir": "",
    "previewFolderRelPath": "preview",
    "activeFileRelPath": "src/views/Home/index.vue",
    "mapFileRelPath": "src/views/Home/index.vue",
    "presetName": "vue",
    "workspaceFolderName": "my_vue3+vite_xiaohongshu"
};
export const preview = () => render(getMod);
const getMod = () => import("../../src/views/Home/index.vue");