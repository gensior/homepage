import * as m from "mithril";

export default {
    view: function(vnode : m.Vnode) : m.Vnode[] {
        return [
            m("h1", "Hello, World!"),
            m("hr"),
            m("h2.hello", "Foo bar baz!"),
            m(".alert.alert-success", [m("i.fas.fa-ambulance.fa-spin"), " asdf Alert!"])
        ];
    }
}