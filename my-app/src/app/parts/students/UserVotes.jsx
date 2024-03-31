import { useDispatch } from "react-redux";
import { voteClicked } from "./studentsSlice";

const votesObj = {
  leader: "GL",
  captain: "TC",
};

export const UserVotes = ({ student }) => {
  const dispatch = useDispatch();

  const userVotes = Object.entries(votesObj).map(([name, image]) => {
    return (
      <button
        key={name}
        type='button'
        className='vote-button'
        onClick={() =>
          dispatch(voteClicked({ studentID: student.id, vote: name }))
        }
      >
        {image} {student.votes[name]}
      </button>
    );
  });

  return <div> {userVotes}</div>;
};
