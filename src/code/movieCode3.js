const movieCode3 =
`const navigate = useNavigate();

function nothingWillSubmit(e) {
  e.preventDefault();
  navigate("/thanks");
}
    // some code omitted

<form action="" method="post" onSubmit={nothingWillSubmit}>
  <label htmlFor="name">Nickame</label>
  <input type="text" id="name" required />

  <label htmlFor="email">Email</label>
  <input type="email" id="email" required />

  <input
    type="submit"
    value="Subscribe"
    className="button-spceial"
  />
</form>
`;

export default movieCode3