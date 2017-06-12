import {connect} from "react-redux";
import FlashMessages from "./FlashMessages";

const mapStateToProps = ({flashMessages}) => ({flashMessages});

export default connect(mapStateToProps)(FlashMessages);
