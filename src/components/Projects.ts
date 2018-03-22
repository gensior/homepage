import * as m from "mithril";
import * as State from "../State";
import {IProject, Project} from "../models/Project";

export default {
    oninit: function() {
        m.request({
            url: "/api/projects.json",
            type: Project
        })
        .then((data: IProject[]) => {
            console.log(data);
            State.projects(data);
        });
    },
    view: function(vnode : m.Vnode) : m.Vnode[] {
        return [
            m("h1", "Projects"),
            m("hr"),
            m("ul", [
                State.projects().map(function(project) {
                    return m("li", project.name)
                })
            ])
        ]
    }
}