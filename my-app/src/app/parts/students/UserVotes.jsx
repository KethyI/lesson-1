const votesObj = {
  leader: "GL",
  captain: "TC",
};

export const UserVotes = ({ student }) => {
  const userVotes = Object.entries(votesObj).map(([name, image]) => {
    return (
      <button
        key='name'
        type='button'
        className='vote-button'
      >
        {image} {student.votes[name]}
      </button>
    );
  });

  return <div> {userVotes}</div>;
};
