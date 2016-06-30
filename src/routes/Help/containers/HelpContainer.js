import { connect } from 'react-redux'
import { titleToggleActive } from '../modules/help'

import Help from '../components/Help'

const mapActionCreators = {
  titleToggleActive
}

const mapStateToProps = (state) => ({
  help: state.help
})

export default connect(mapStateToProps, mapActionCreators)(Help)