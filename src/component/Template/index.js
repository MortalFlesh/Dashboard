import {connect} from "react-redux";
import * as actions from "./action";

import Template from "./Template";

const mapStateToProps = ({template}) => ({template});

export default connect(mapStateToProps, actions)(Template);
