import * as React from "react";
import { Link, LinkStyle } from "ui";

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
        <Link
          style={LinkStyle.PrimaryButton}
          href="https://beta.developers.miro.com/docs/create-a-developer-team"
          target="_blank"
        >
          Create a Developer team
        </Link>
      </div>
    </div>
  );
}

export default Home;
