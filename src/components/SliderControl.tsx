interface props {
  index: number;
  onChangeIndex: (arg: number) => void;
  slidesLength: number;
}

export default function SliderControl({
  index,
  onChangeIndex,
  slidesLength,
}: props) {
  function decreaseHandler() {
    if (index - 1 < 0) return onChangeIndex(slidesLength - 1);
    onChangeIndex(index - 1);
  }
  function increaseHandler() {
    if (index + 1 > slidesLength - 1) return onChangeIndex(0);
    onChangeIndex(index + 1);
  }

  return (
    <div className="controls">
      <button
        className="controls__button controls__button_previous"
        onClick={decreaseHandler}
      >
        <span className="visually-hidden">Previous image</span>
        <img src="/images/icon-angle-left.svg" alt="" width={14} height={24} />
      </button>
      <button
        className="controls__button controls__button_next"
        onClick={increaseHandler}
      >
        <span className="visually-hidden">Next image</span>
        <img src="/images/icon-angle-right.svg" alt="" width={14} height={24} />
      </button>
    </div>
  );
}
