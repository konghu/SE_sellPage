import React, {Component, PropTypes} from 'react';

class NavigationLink extends Component {
  static propTypes = {
    url: PropTypes.string,
    text: PropTypes.string
  }

  render() {
    const {text, url} = this.props;
    var style = {
      display: "inline"
    };

    var a_style = {
      color: "black",
      display: "inline-block",
      padding: "30px",
      textDecoration: "none"
    }

    return (
      <li className="leftLinks" style={style}>
        <a href={url} style = {a_style}>{text}</a></li>
    )
  }

}

export default class PagesNavigation extends Component {

  render() {
    const ulStyle = {
      listStyleType: "none", 
      margin: 0,
      padding: 0,
      textAlign: "center",
      fontSize: "20px"
    };

    return (
      <div className="navWrapper" style={{display: "inline"}}>
        <ul className="listsWrapper" style={ulStyle}>
          <NavigationLink text="Home" url="default.asp" />
          <NavigationLink text="Buy" url="buy.asp" />
          <NavigationLink text="Sell" url="sell.asp" />
          <img style={{width: 160, height: 105}} src={'https://s30.postimg.org/5mw3167s1/logo.png'} />
          <NavigationLink text="News" url="news.asp" />
          <NavigationLink text="MyList" url="mylist.asp" />
          <NavigationLink text="Help" url="help.asp" />
        </ul>
        </div>
    );
  }
}
