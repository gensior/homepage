import * as m from "mithril";
import './styles/foo.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(solid);

import Layout from "./components/Layout";
import Hello from "./components/Hello";
import About from "./components/About";
import Projects from "./components/Projects";
import * as State from "./State";

let div = document.createElement('div');
let state = State;
div.id = "app";
document.body.appendChild(div);

m.route(document.getElementById("app"), '/', {
    '/': {
        view: function() {
            State.active("home");
            return m(Layout, m(Hello));
        }
    },
    '/about': {
        view: function() {
            State.active("about");
            return m(Layout, m(About));
        }
    },
    '/projects': {
        view: function() {
            State.active("projects");
            return m(Layout, m(Projects));
        }
    }
});