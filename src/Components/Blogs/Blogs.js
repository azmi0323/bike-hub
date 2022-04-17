import React from "react";

const Blogs = () => {
  return (
    <div className="container my-5">
      <h2>1. Difference between authorization and authentication.</h2>
      <h3>Authentication</h3>
      <h6>
        Authentication is the process of verifying your identity by confirming
        your credentials, such as your User Name/User ID and password. Using
        your credentials, the system determines if you are who you claim you
        are. The system uses login passwords to verify the user's identity in
        both public and private networks. Authentication is normally done with a
        username and password, but it may also be done with factors of
        authentication, which are several methods to be authenticated.
      </h6>
      <h3>Authorization</h3>
      <h6>
        Authorization, on the other hand, comes when the system successfully
        authenticates your identity, granting you complete access to resources
        such as information, files, databases, finances, places, and nearly
        anything else. Simply said, authorisation affects your capacity to use
        the system and the extent to which you may do so. After the system
        verifies your identity through successful authentication, you are
        granted access to the system's resources.
      </h6>
      <br />
      <h2>
        2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h2>
      <h3>Why are you using firebase?</h3>
      <h6>
        Indeed, using Firebase as a backend for dynamic apps is a less technical
        and time-consuming alternative to building full-fledged backend code.
        You might also want to use this tool if you intend to host and
        administer your app on the cloud in the future. Because Firebase is
        serverless, it eliminates the need to bother about cloud server
        configuration details.
      </h6>
      <h3>What other options do you have to implement authentication?</h3>
      <h6>
        * Assword-based authentication. <br />
        * Passwords are the most common methods of authentication. <br />
        * Multi-factor authentication. <br />
        * Certificate-based authentication. <br />
        * Biometric authentication. <br />* Token-based authentication.
      </h6>
      <br />
      <h2>
        3. What other services does firebase provide other than authentication.
      </h2>
      <h6>
        # Parse = Open Source Backend Platform. <br /> # Back4app = Parse Hosting Platform. <br />
        # Kinvey = Mobile Backend as a Service (mBaaS) for the Enterprise. <br />
        # Backendless = Mobile Backend and API Services Platform. <br />
        # Kuzzle = Backend
        for web, hybrid, or native mobile apps and IoT projects. <br />
        # Pubnub =
        Real-time APIs and Global Messaging. <br />
        # Kumulos = App Performance
        Management. <br />
        # Game Sparks = Game Backend Platform; <br />
        # Hoodie = Generic
        backend with a client API for Offline First applications. <br />
        # Appwrite =
        Open-Source backend for Flutter developers Deployd Simple core
        library, with a modular API for your application. <br />
        # NHost = Accelerates
        development and provides full control. <br />
        # Amplify JS = Open-source
        Javascript framework. <br />
        # Heroku 
        = Platform as a service backed by
        Salesforce.
      </h6>
    </div>
  );
};

export default Blogs;
