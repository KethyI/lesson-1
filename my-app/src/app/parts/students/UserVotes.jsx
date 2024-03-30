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
        className='reaction-button'
      >
        {image} {student.reactions[name]}
      </button>
    );
  });

  return <div> {userVotes}</div>;
};
