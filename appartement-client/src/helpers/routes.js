import Home from "../components/pages/home/Home";
import List from "../components/pages/list/List";

export const routes = [
    { uri : '', component : Home},
    { uri : '/', component : Home},
    { uri : '/list', component : List},
]