var firebaseui = require('firebaseui')
import { fireAuth } from './firebase'

var fireUi = new firebaseui.auth.AuthUI(fireAuth)

export { fireUi }
