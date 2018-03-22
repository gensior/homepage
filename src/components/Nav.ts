import * as m from "mithril";
import * as State from "../State";

export default {
    view: function(vnode: m.Vnode) : m.Vnode {
        return m("nav.navbar.navbar-expand-lg.navbar-dark.bg-dark",
            m(".container", [
                m("a.navbar-brand[href='/']", {oncreate: m.route.link}, "Jesse"),
                m("button.navbar-toggler" +
                    "[type='button']" + 
                    "[data-toggle='collapse']" + 
                    "[data-target='#mainNav']" + 
                    "[aria-controls='mainNav']" + 
                    "[aria-expanded='false']" + 
                    "[aria-label='Toggle Navigation']",
                    m("span.navbar-toggler-icon")
                ),
                m(".collapse.navbar-collapse#mainNav",
                    m("ul.navbar-nav.mr-auto", [
                        m("li.nav-item", { class: State.isActive("projects", "active") as string }, 
                            m("a.nav-link[href='/projects']", {oncreate: m.route.link }, ["Projects ", m("span.sr-only", "(current)")])
                        ),
                        m("li.nav-item", { class: State.isActive("about", "active") as string },
                            m("a.nav-link[href='/about']", {oncreate: m.route.link }, "About")
                        ),
                        m("li.nav-item.dropdown", { style: "cursor:pointer;" }, [
                            m("a.nav-link.dropdown-toggle#dropDown[href='#'][data-toggle='dropdown'][aria-haspopup='true'][aria-expanded='false']", "Dropdown"),
                            m(".dropdown-menu[aria-labelledby='dropDown']", [
                                m("a.dropdown-item[href='#']", [m("i.fas.fa-fw.fa-user"), " Jesse"]),
                                m("a.dropdown-item[href='#']", [m("i.fas.fa-fw.fa-ambulance", {style: "color:tomato;"}), " Ambulance"]),
                                m(".dropdown-divider"),
                                m("a.dropdown-item[href='#']", [m("i.fas.fa-fw.fa-spinner.fa-pulse"), " Loading"]),
                            ])
                        ])
                    ])
                )
            ])
        );
    }
}