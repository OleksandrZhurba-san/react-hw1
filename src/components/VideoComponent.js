function VideoComponent() {
  return (
    <div>
      <video width="400" controls>
        <source src="mov_bbb.mp4" type="video/mp4" />
        <source src="mov_bbb.ogg" type="video/ogg" />
      </video>
    </div>
  );
}

export default VideoComponent;
