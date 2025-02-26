const Modal = (props) => {
  const onClickHandler = (val) => {
    props.onResponseClick(val);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          width: "50vw",
          background: "grey",
          padding: "24px",
          borderRadius: "10px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p>
          Are you sure you want to make the changes?
        </p>
        <button
          onClick={() => {
            onClickHandler(true);
          }}
        >
          Yes
        </button>
        &nbsp;
        <button
          onClick={() => {
            onClickHandler(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};
export default Modal;
