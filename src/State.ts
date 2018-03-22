import * as stream from "mithril/stream";
import {IProject} from "./models/Project";

export let active : stream.Stream<string> = stream("");

export let projects : stream.Stream<IProject[]> = stream([]);

export function isActive(route : string, style?: string) : boolean | string {
    if (style) {
        return active() == route ? style : "";
    }
    return active() == route;
}