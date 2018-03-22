import * as m from "mithril";

export default {
    view: function(vnode: m.Vnode) : m.Vnode[] {
        return [
            m("h1", "About Jesse"),
            m("hr"),
            m(".content",
                m("p", "This is Jesse's life.")
            )
        ]
    }
}