import React from "react";
import { Row, Col, Card } from "antd";
import img_1 from "../imgs/modulo_1.png";
import img_2 from "../imgs/modulo_2.png";
import img_3 from "../imgs/modulo_3.svg";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function Admin() {
  return (
    <div>
      <Row>
        <Col span={8}>
          <NavLink to={"/modulo1"}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<img style={{ height: 200 }} alt="img_1" src={img_1} />}
            >
              <Meta title="Modulo 1" />
            </Card>
          </NavLink>
        </Col>
        <Col span={8}>
          <NavLink to={"/modulo2"}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<img style={{ height: 200 }} alt="img_2" src={img_2} />}
            >
              <Meta title="Modulo 2" />
            </Card>
          </NavLink>
        </Col>
        <Col span={8}>
          <NavLink to={"/modulo3"}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<img style={{ height: 200 }} alt="img_3" src={img_3} />}
            >
              <Meta title="Modulo 3" />
            </Card>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
}
