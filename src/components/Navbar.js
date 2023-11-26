function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    );
    
}

export default Navbar;

