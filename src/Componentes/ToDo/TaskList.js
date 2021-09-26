import Button from "@restart/ui/esm/Button";
import React, { Fragment } from "react";
import { Container, ListGroup } from "react-bootstrap";

// 1:27 del video 17/08

const TaskList = (props) => {
  console.log(props.tasksToRender);
  return (
    <Fragment>
      <Container className="d-flex justify-content-center mt-2">
        <ListGroup className="w-75">
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Button className="mx-2">Delete</Button>
      </Container>
    </Fragment>
  );
};

export default TaskList;
