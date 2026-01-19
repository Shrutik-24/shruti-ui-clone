document.querySelectorAll(".song").forEach(song => {
    song.addEventListener("click", () => {
        alert("UI only — music not playable 🎧");
    });
});
