import React, { useState } from "react";
import { arraySubjects } from "../../api/subject";
import "./Subjects.scss";
import ListSubject from "../../components/AdminComponents/Subject/ListSubject/ListSubject";

export default function Subjects() {
  const subjects = arraySubjects();
  const [renderSubjecs, getRenderSubjecs] = useState(false);

  return (
    <>
      {renderSubjecs}
      <ListSubject>
        {{ subjects: subjects, getRenderSubjecs: getRenderSubjecs }}
      </ListSubject>
    </>
  );
}
