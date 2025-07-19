
export const Bar = ({ height = 100, colors = ["#cf7bff", "#aa51ef", "#6a5cff"] }: { height?: number; colors?: [string, string, string] }) => {
    // left half: top and bottom, right half: single color
    // We'll use a background-image with two linear gradients: one for left, one for right
    // But for simplicity, use a CSS gradient with hard stops for a 3-color split
    // Top 50% left: colors[0], bottom 50% left: colors[1], right 100%: colors[2]
    const bg = `linear-gradient(to bottom, ${colors[0]} 0%, ${colors[0]} 50%, ${colors[1]} 50%, ${colors[1]} 100%), linear-gradient(to right, transparent 50%, ${colors[2]} 50%, ${colors[2]} 100%)`;
    return (
        <div
            style={{
                height: `${height}px`,
                width: "10px",
                backgroundImage: bg,
                backgroundSize: "50% 100%, 100% 100%",
                backgroundPosition: "left, right",
                backgroundRepeat: "no-repeat",
                borderRadius: "9999px",
            }}
            className="mx-auto"
        />
    );
};