interface props {
  onOpenDialog: (state: boolean) => void;
}

export default function Hamburger({ onOpenDialog }: props) {
  return (
    <button
      className="hamburger"
      onClick={() => {
        onOpenDialog(true);
      }}
    >
      <span className="visually-hidden">Open menu</span>
      <img width={20} height={14} src={"/images/icon-hamburger.svg"} alt="" />
    </button>
  );
}
