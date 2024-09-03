import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { filterPizza } from "../action/pizzaAction";

const Filters = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Form className="p-4 m-4">
        <Row >
          <Col>
            <Form.Control
              placeholder="Search pizza"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Select
              defaultValue="Choose..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
              <option>veg</option>
              <option>nonveg</option>
            </Form.Select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(filterPizza(searchKey, category));
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;
