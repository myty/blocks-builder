import * as React from "react";

function Home() {
  return (
    <div className="grid container">
      <div className="cs1 ce12">
        <h1>Great, your app is running locally</h1>
        <p>
          You can now create your Developer team to get your app running in
          Miro.
        </p>
      </div>
      <div className="cs1 ce12">
        <a
          className="button button-primary"
          href="https://beta.developers.miro.com/docs/create-a-developer-team"
          target="_blank"
        >
          Create a Developer team
        </a>
      </div>
    </div>
  );
}

export default Home;
