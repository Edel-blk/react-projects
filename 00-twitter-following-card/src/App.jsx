import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

function App () {
  const formatUserName = (userName) => `@${userName}`;

  const users = [
    {
      userName: 'tonystark',
      name: 'Tony Stark'
    },
    {
      userName: 'edel-blk',
      name: 'Erick Beltran'
    },
    {
      userName: 'batman',
      name: 'Bruce Wayne'
    }
  ];
  return (
    <section className='App'>
      {
        users.map((user) => {
          const { userName, name } = user;
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              name={name}
              formatUserName={formatUserName}
            />
          );
        })
      }
    </section>
  );
}

export default App;
