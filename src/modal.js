function Modal({ onClose }) {
  const videoId = "8iCGBz1N2eo";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="modal">
      <div className="modal-content">
        <iframe
          title="sii"
          width="560"
          height="315"
          src={embedUrl}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <div className="model-controls">
        <button onClick={onClose}>
          <i class="uil uil-times-circle"></i>
        </button>
      </div>
    </div>
  );
}
export default Modal;
