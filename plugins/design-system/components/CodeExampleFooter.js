import classNames from "classnames/dedupe";
import React from "react";

const defaultClasses = {
  panel: "code-example-wrapper footer",
  content: "code-example-footer-content"
};

var CodeExampleFooter = React.createClass({
  displayName: "CodeExampleFooter",

  propTypes: {
    heading: React.PropTypes.node,
    footer: React.PropTypes.node,

    // classes
    contentClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object,
      React.PropTypes.string
    ]),
    headingClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object,
      React.PropTypes.string
    ]),
    footerClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object,
      React.PropTypes.string
    ]),
    onClick: React.PropTypes.func
  },

  getNode(nodeName) {
    const { props } = this;
    const node = props[nodeName];

    if (!node) {
      return null;
    }

    const classes = classNames(
      defaultClasses[nodeName],
      props[nodeName + "Class"]
    );

    return (
      <div className={classes}>
        {node}
      </div>
    );
  },

  render() {
    const { props } = this;
    const contentClasses = classNames(
      defaultClasses.content,
      props.contentClass
    );
    const panelClasses = classNames(defaultClasses.panel, props.className);

    return (
      <div className={panelClasses} onClick={this.props.onClick}>
        {this.getNode("heading")}
        <div className={contentClasses}>
          {props.children}
        </div>
        {this.getNode("footer")}
      </div>
    );
  }
});

module.exports = CodeExampleFooter;