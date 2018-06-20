import PlayArea from "./PlayArea";

class Startup {
    public static main(): number {
        let playArea = new PlayArea(document.getElementById("play-area"));
        playArea.render();

        return 0;
    }
}

Startup.main();

