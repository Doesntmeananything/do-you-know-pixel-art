import React from "react"
import titularYearStyles from "./titular-year.module.css"

const TitularYear = props => (
  <div className={titularYearStyles.year}>
    <h1>{props.year}</h1>
  </div>
)

export default TitularYear
