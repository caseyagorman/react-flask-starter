import React from "react";
import { Link } from "react-router-dom";

const WordStudentsPage = props => (
  <div key={props.student_id}>
    <li>
      <Link to={`/details/${props.student_id}`}>
        {props.fname} {props.lname}
      </Link>
    </li>
  </div>
);

export default WordStudentsPage;