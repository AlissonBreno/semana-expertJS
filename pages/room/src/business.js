class Business {
  constructor({ room, media, view }) {
    this.room = room;
    this.media = media;
    this.view = view;

    this.currentStream = {};
  }

  static initialize(deps) {
    const instance = new Business(deps);
    return instance._init();
  }

  async _init() {
    this.currentStream = await this.media.getCamera();
    this.addVideoStream("teste01");
  }

  // parei aqui :)
  // video = 30:54
  // * https://www.youtube.com/watch?v=zAEu5Smx5h4&feature=emb_logo
  // comando:
  // npm ci --silent
  // npm start

  addVideoStream(userId, stream = this.currentStream) {
    const isCurrentId = false;

    this.view.renderVideo({ userId, stream, isCurrentId });
  }
}
