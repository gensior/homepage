import * as m from "mithril";
import Nav from "./Nav";

export default {
    view: function(vnode: m.Vnode) : m.Vnode {
        return m("div", [
            m(Nav),
            m(".container", vnode.children)
        ])
    }
}