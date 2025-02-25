const Modal = ({ isModalOpen, setIsModalOpen, setResponse }) => {
  const onClickHandler = (val) => {
    setIsModalOpen(false);
    setResponse(val);
  };

  return (
    isModalOpen && (
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          width: "50vw",
          background: "grey",
          padding: "24px",
          borderRadius: "10px",
        }}
      >
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
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
    )
  );
};
export default Modal;
