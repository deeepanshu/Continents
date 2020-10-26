import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

const Loading = ({ message }: { message?: string }) => (
  <div className="align-items-center d-flex flex-column justify-content-center loading">
    <FontAwesomeIcon size={'4x'} color={"#808080"} icon={faGlobeAsia} />
    <h4 >{message || "Loading"}</h4>
  </div>
)

export default Loading;