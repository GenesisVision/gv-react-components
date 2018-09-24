import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./style.scss";

const ROWS_HEIGHT = 22;

export interface GVTextAreaProps {
  className?: string;
  textAreaClassName?: string;
  value: string;
  rows: number;
  onChange: (e: any) => void;
}

export interface GVTextAreaState {
  height: number;
}

class GVTextArea extends React.Component<GVTextAreaProps, GVTextAreaState> {
  static propTypes: any;
  static defaultProps: any;
  shadowRef: React.RefObject<HTMLTextAreaElement>;

  constructor(props: GVTextAreaProps) {
    super(props);
    this.shadowRef = React.createRef();

    this.state = {
      height: props.rows * ROWS_HEIGHT
    };
  }

  componentDidMount() {
    this.syncHeightWithShadow();
  }

  componentDidUpdate() {
    this.syncHeightWithShadow();
  }

  handleChange = (event: any) => {
    const value = event.target.value;

    if (this.shadowRef.current) {
      this.shadowRef.current.value = value;
      this.syncHeightWithShadow();
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  syncHeightWithShadow() {
    const shadowRef = this.shadowRef.current;
    if (!shadowRef) return;

    const lineHeight = parseFloat(
      window.getComputedStyle(shadowRef).lineHeight || ROWS_HEIGHT.toString()
    );
    const newHeight = Math.max(shadowRef.scrollHeight, lineHeight);

    if (Math.abs(this.state.height - newHeight) > 1) {
      this.setState({
        height: newHeight
      });
    }
  }

  render() {
    const { textAreaClassName, onChange, ...props } = this.props;
    return (
      <div className={classnames(styles.gvTextArea, textAreaClassName)}>
        <textarea
          className={classnames(props.className, styles.gvTextAreaHidden)}
          readOnly
          ref={this.shadowRef}
          rows={props.rows}
          tabIndex={-1}
          value={props.value}
        />
        <textarea
          style={{ height: this.state.height }}
          onChange={this.handleChange}
          {...props}
        />
      </div>
    );
  }
}

GVTextArea.propTypes = {
  rows: PropTypes.number,
  className: PropTypes.string,
  textAreaClassName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

GVTextArea.defaultProps = {
  rows: 1
};

export default GVTextArea;
