import React from "react";
import { Button, Row, Col, Image } from "antd";
import img_2 from "./imgs/modulo_2.png";
import { LeftSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Modulo_2() {
  return (
    <Row className="modulo">
      <Col span={12}>
        <h1>Modulo 2</h1>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          pariatur quasi quisquam obcaecati. Voluptas laboriosam perspiciatis
          ducimus, quod animi qui nulla magnam sapiente minus quidem odio,
          repudiandae doloremque debitis reprehenderit?
        </span>
      </Col>
      <Col span={8}>
        <Image className="img" width={200} src={img_2} />
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
