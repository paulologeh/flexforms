export function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

export function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

export function getTextWidth(inputText) {
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    context.font = "14px Lato";
    let width = context.measureText(inputText).width;
    let border = 5;
    let padding = 7.93;
    return Math.ceil(width + padding + border);
} 