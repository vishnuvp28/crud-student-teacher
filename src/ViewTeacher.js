import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { Base } from "./Base";

export function ViewTeacher({ teacher }) {
  const history = useHistory();
  const { id } = useParams();
  const std = teacher[id];
  return (
    <Base>
      <div className="View">
        <div>
          <h1>Teacher view</h1>
        </div>
        <br></br>
        <div className="card">
          <div className="user-card">
            <h2>{std.name}</h2>

            <p>Id : {std.id}</p>
            <p>Std : {std.standard}</p>
            <p>Sub : {std.subject}</p>
            <p>Add : {std.address}</p>
            <p>Email: {std.email}</p>
            <p>Contact : {std.contact}</p>
          </div>
        </div>
        <br></br>

        <Button variant="dark" onClick={() => history.push("/teacher")}>
          Back
        </Button>
      </div>
    </Base>
  );
}
