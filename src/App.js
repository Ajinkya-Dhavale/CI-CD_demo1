import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Ajinkya Dhavale</h1>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




// C:\Users\Ajinkya\Desktop\Docker\myapp>git push
// To https://github.com/Ajinkya-Dhavale/CI-CD_demo1.git
//  ! [rejected]        main -> main (fetch first)
// error: failed to push some refs to 'https://github.com/Ajinkya-Dhavale/CI-CD_demo1.git'
// hint: Updates were rejected because the remote contains work that you do not
// hint: have locally. This is usually caused by another repository pushing to
// hint: the same ref. If you want to integrate the remote changes, use
// hint: 'git pull' before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.

// C:\Users\Ajinkya\Desktop\Docker\myapp>git fetch origin

// C:\Users\Ajinkya\Desktop\Docker\myapp>git fetch origin
// remote: Enumerating objects: 46, done.
// remote: Counting objects: 100% (46/46), done.
// remote: Compressing objects: 100% (34/34), done.
// remote: Total 45 (delta 12), reused 27 (delta 4), pack-reused 0 (from 0)
// Unpacking objects: 100% (45/45), 284.99 KiB | 80.00 KiB/s, done.
// From https://github.com/Ajinkya-Dhavale/CI-CD_demo1
//    1934343..8725eec  main       -> origin/main
//  * [new branch]      gh-pages   -> origin/gh-pages

// C:\Users\Ajinkya\Desktop\Docker\myapp>git pull origin main --rebase
// From https://github.com/Ajinkya-Dhavale/CI-CD_demo1
//  * branch            main       -> FETCH_HEAD
// Successfully rebased and updated refs/heads/main.

// C:\Users\Ajinkya\Desktop\Docker\myapp>git push origin main
// Enumerating objects: 7, done.
// Counting objects: 100% (7/7), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (4/4), done.
// Writing objects: 100% (4/4), 375 bytes | 125.00 KiB/s, done.
// Total 4 (delta 3), reused 0 (delta 0), pack-reused 0
// remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
// To https://github.com/Ajinkya-Dhavale/CI-CD_demo1.git
//    8725eec..9ea4e43  main -> main

// C:\Users\Ajinkya\Desktop\Docker\myapp>


