import { connect } from 'react-redux'
import Head from '../component/Head'
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user

  }
}
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Head)

export default HeaderContainer
