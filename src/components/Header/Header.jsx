const Header = (props) => {
  const { onLoginClick, logged } = props;
  const username = localStorage.getItem("username");

  return (
    <div className="flex h-16 items-center justify-around bg-blue-200">
      <div>
        <h1 className="font-medium">Kanban</h1>
      </div>
      {logged && (
        <div className="flex items-center gap-6">
          <>
            <h1>
              Bem vindo <span className="font-medium">{username.toUpperCase()}</span>
            </h1>
            <button
              onClick={onLoginClick}
              className="
            cursor-pointer 
            bg-sky-600
            w-28
            px-6 
            py-1 
            rounded-4xl
            text-white 
            font-medium
            transition
            duration-300
            hover:bg-sky-700
        "
            >
              {!logged ? "Login" : "Logout"}
            </button>
          </>
        </div>
      )}
    </div>
  );
};

export default Header;
