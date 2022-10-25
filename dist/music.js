const ap = new APlayer({
  container: document.getElementById("aplayer"),
  fixed: true,
  autoplay: true,
  theme: "#000",
  mutex: true,
  lrcType: 1,
  audio: [
    {
      name: "空と海と詩",
      artist: "天門",
      url: "http://music.163.com/song/media/outer/url?id=528300.mp3",
      cover:
        "http://p1.music.126.net/aoQ2MZLG0Np34Mgjt7l60Q==/109951166556965359.jpg?param=130y130",
      lrc: "",
    },
  ],
});