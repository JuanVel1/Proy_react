import React, { useState } from "react";
import { Button, message, notification } from "antd";
import { getSubjects, postSubject } from "../../../../api/subject";
export default function CreateSubject({ children }) {
    
    const { setModal, getRenderSubjecs } = children;
    const [formSubject, setformSubect] = useState({
    department: null,
    academic_activity: null,
    activity_code: null,
    number_credits: 0,
    piaa_version: 0,
    piaa_status: true,
    file_number: {
      month_file: 0,
      year_file: 0,
    },
    file_date: null,
    theory_hours: 0,
    offsite_hours: 0,
    hourson_attendence_reprovals: 0,
    last_chance: false,
    duration_semester: 0,
    practical_hours: 10,
    presential_teacher_hours: 0,
    maximum_quotas: 0,
    passing_score: 0,
    weeks_duration: 0,
  });

  const updateForm = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    if (
      e.target.name == "department" ||
      e.target.name == "academic_activity" ||
      e.target.name == "activity_code" ||
      e.target.name == "file_date"
    ) {
      setformSubect({
        ...formSubject,
        [key]: value,
      });
    } else {
      if (e.target.name == "month_file") {
        formSubject.file_number.month_file = parseInt(value);
      } else if (e.target.name == "year_file") {
        formSubject.file_number.year_file = parseInt(value);
      } else if (e.target.name == "last_chance") {
        setformSubect({
          ...formSubject,
          [key]: value == "true",
        });
      } else {
        setformSubect({
          ...formSubject,
          [key]: parseInt(value),
        });
      }
    }
    console.log(formSubject);
  };

  return (
    <div>
      <div>
        <div>
          <b>Departameto</b>:{" "}
          <input name="department" onChange={updateForm} type={"text"}></input>{" "}
          <br />
          <b>Actividad académica</b>:{" "}
          <input
            name="academic_activity"
            onChange={updateForm}
            type={"text"}
          ></input>
          <br />
          <b>Código</b>:{" "}
          <input
            name="activity_code"
            onChange={updateForm}
            type={"text"}
          ></input>{" "}
          <br />
          <b>Créditos</b>:{" "}
          <input
            name="number_credits"
            onChange={updateForm}
            type={"number"}
            min="0"
          ></input>{" "}
          <br />
          <b>Versión del PIAA</b>:{" "}
          <input
            name="piaa_version"
            onChange={updateForm}
            type={"number"}
            min="0"
          ></input>{" "}
          <br />
          <b>Número de acta</b>:{" "}
          <input
            name="month_file"
            onChange={updateForm}
            type={"number"}
            min="0"
          ></input>
          -
          <input
            name="year_file"
            onChange={updateForm}
            type={"number"}
            min="0"
          ></input>
          <br />
          <b>Fecha de acta</b>:{" "}
          <input name="file_date" onChange={updateForm} type={"date"}></input>
          <br />
          <br />
        </div>
        <table>
          <tbody>
            <tr>
              <td>Horas Teóricas</td>
              <td>
                <input
                  name="theory_hours"
                  onChange={updateForm}
                  type={"Number"}
                  min="0"
                ></input>
              </td>
              <td>Horas prácticas</td>
              <td>
                <input
                  name="offsite_hours"
                  onChange={updateForm}
                  type={"Number"}
                  min="0"
                ></input>
              </td>
            </tr>
            <tr>
              <td>Horas no presenciales</td>
              <td>
                <input
                  name="offsite_hours"
                  onChange={updateForm}
                  type={"Number"}
                  min="0"
                ></input>
              </td>
              <td>Horas presenciales profesor</td>
              <td>
                <input
                  name="presential_teacher_hours"
                  onChange={updateForm}
                  type={"Number"}
                  min="0"
                ></input>
              </td>
            </tr>
            <tr>
              <td>Horas inasistencia de repruebe</td>
              <td>
                <input
                  name="hourson_attendence_reprovals"
                  onChange={updateForm}
                  type={"Number"}
                  min="0"
                ></input>
              </td>
              <td>Cupos máximos</td>
              <td>
                <input
                  name="maximum_quotas"
                  onChange={updateForm}
                  type={"Number"}
                  min="0"
                ></input>
              </td>
            </tr>
            <tr>
              <td>Habilitable</td>
              <td>
                <select name="last_chance" onChange={updateForm}>
                  <option value="true" key="1">
                    SÍ
                  </option>
                  <option value="false" key="2">
                    NO
                  </option>
                </select>
              </td>
              <td>Nota aprobatoria</td>
              <td>
                <input
                  name="passing_score"
                  onChange={updateForm}
                  type="number"
                />
              </td>
            </tr>
            <tr>
              <td>Dutación en semestres</td>
              <td>
                <input
                  name="duration_semester"
                  onChange={updateForm}
                  type="number"
                />
              </td>
              <td>Duración en semanas</td>
              <td>
                <input
                  name="weeks_duration"
                  onChange={updateForm}
                  type="number"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        type="prinary"
        onClick={() => {
          postSubject(formSubject).then((data) => {
            if (data.message) {
              notification["error"]({
                message: "error",
              });
            } else {
              getSubjects();
              setTimeout(() => {
                getRenderSubjecs(true);
                setModal(false);
              }, 300);
            }
          });
        }}
      >
        Crear
      </Button>
    </div>
  );
}
