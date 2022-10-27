import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Sample from './passenger-components/sample.component.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "sample" component = {Sample} title = "Sample" initial = {true} />
         {/* <Scene key = "about" component = {About} title = "About" /> */}
      </Scene>
   </Router>
)
export default Routes