import Emoji from "./Emoji";

class PlayArea {
    element: Element;

    constructor(element: Element) {
        this.element = element;
    }

    public render() {
       let emoji = new Emoji("🌴", "palmtree");
       this.element.innerHTML = emoji.render();
    }
}

export default PlayArea;
