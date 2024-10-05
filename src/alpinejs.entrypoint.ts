import type { Alpine } from "alpinejs";
import intersect from "@alpinejs/intersect";
import ajax from "@imacrayon/alpine-ajax";

export default (Alpine: Alpine) => {
	Alpine.plugin(intersect);
	Alpine.plugin(ajax);
};
