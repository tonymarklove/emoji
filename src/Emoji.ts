class Emoji {
    emoji: string;
    name: string;

    constructor(emoji: string, name: string) {
        this.emoji = emoji;
        this.name = name;
    }
    
    public render() {
        return `<span class="emoji ${this.name} emoji--clickable">${this.emoji}</span>`;
    }
}

export default Emoji;
