import { Link } from 'react-router-dom';

const HootList = ({hoots}) => {
  return (
    <main>
      {hoots.map( hoot => (
        <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
          <article>
            <header>
              <h2>{hoot.title}</h2>
              <p>
                {hoot.author.username} posted on {' '} 
                {new Date(hoot.createdAt).toLocaleDateString()}
              </p>
            </header>
            <p>{hoot.text}</p>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default HootList
