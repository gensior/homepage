import * as m from "mithril";
import './styles/foo.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(solid);

import Layout from "./components/Layout";
import Hello from "./components/Hello";

let div = document.createElement('div');
div.id = "app";
document.body.appendChild(div);

m.route(document.getElementById("app"), '/', {
    '/': {
        view: function() {
            return m(Layout, m(Hello))
        }
    }
});