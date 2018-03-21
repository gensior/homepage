import * as m from "mithril";

export default {
    view: function(vnode: m.Vnode) : m.Vnode {
        return m("nav.navbar.navbar-expand-lg.navbar-dark.bg-dark",
            m(".container", [
                m("a.navbar-brand[href='#']", "Jesse"),
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
                        m("li.nav-item.active", 
                            m("a.nav-link[href='#']", ["Home ", m("span.sr-only", "(current)")])
                        ),
                        m("li.nav-item",
                            m("a.nav-link[href='#']", "Link")
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