
export const Bar = ({ height = 100, colors = ["#cf7bff", "#aa51ef", "#6a5cff"] }: { height?: number; colors?: [string, string, string] }) => {

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