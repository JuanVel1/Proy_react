import React from "react";
import { Button, Row, Col, Image } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons";
import img_1 from "./imgs/modulo_1.png";
import {Link} from "react-router-dom"
import "../scss/index.scss"
import "../App.scss";


export default function Modulo_1() {
  return (
    <Row className="modulo">
      <Col span={12}>
        <h1>Modulo 1</h1>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          pariatur quasi quisquam obcaecati. Voluptas laboriosam perspiciatis
          ducimus, quod animi qui nulla magnam sapiente minus quidem odio,
          repudiandae doloremque debitis reprehenderit?
        </span>
      </Col>
      <Col span={8}>
        <Image className="img" width={200} src={img_1} />
      </Col>
      <Col span={8}>
        <Link to="/admin">
          <Button
            type="ghost"
            shape="round"
            icon={<LeftSquareOutlined />}
            size={"large"}
          />
        </Link>
      </Col>
    </Row>
  );
}
