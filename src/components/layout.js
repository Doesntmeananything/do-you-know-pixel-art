import React from "react"

function Layout(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  )
}

export default Layout
