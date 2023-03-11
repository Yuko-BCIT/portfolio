const folioCode1 =
`const [darkTheme, setDarkTheme] = useState(false);

const handleClick = () => {
  setDarkTheme(!darkTheme);
};

useEffect(() => {
  let elements = document.getElementsByClassName("app");
  if (darkTheme === true) {
    elements[0].classList.add("darkmode");
  } else {
    elements[0].classList.remove("darkmode");
  }
});

return (
  <>
    <div className="icon-theme" onClick={handleClick}>
      {darkTheme ? <Theme className="light" /> : <Theme className="dark" />}
    </div>
  </>
);
`;

export default folioCode1