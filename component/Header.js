const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Salaam Muxammad Walaal Seed tahay ',
}

export default Header
