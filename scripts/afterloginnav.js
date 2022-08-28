function nav() {
  return `<div id="largescreen">
  
    <div id="largescreensub1">
      <div id="largescreensub1logo">
      <a href="index2.html"><img src="/images/logo-surveymonkey-white (1).png" alt="" /></a>
      </div>
      <div class="largescreensub1dashboard">
        <a href="dashboard.html"><span>Dashboard</span></a>
      </div>
      <div class="largescreensub1dashboard">
        <a href="./mysurveys.html"><span>My Surveys</span></a>
      </div>
      <div class="largescreensub1dashboard">
        <a href="./plansandpricing.html"><span>Plans & Pricing</span></a>
      </div>
    </div>
    <div id="mediumscreensidebar">
          <div id="sidemenu"><i class="fa-solid fa-bars colorwhite"></i></div>
          <div id="midcreensub1logo">
          <a href="index2.html"><img src="/images/logo-surveymonkey-white (1).png" alt="" /></a>
          </div>
          
        </div>
    <div id="largescreensub2">
      <div id="lrgscreenbtn">
        <button class="largescreensub2btn largescreensub2btn1">
          Upgrade
        </button>
        <button class="largescreensub2btn largescreensub2btn2">
          Create survey
        </button>
      </div>
      <div id="largescreenopt" class="colorwhite">
        <span><i class="fa-solid fa-grip-vertical"></i></span>
      </div>
      <div class="largescreensub1dashboard1">
        <a href="#"
          ><span><i class="fa-solid fa-circle-question"></i></span
        ></a>
      </div>
      <div id="larscreenuser" class="colorwhite">
        <span>
          <div id="username">sarojpahi@gmail.com</div>
          <div id="clickusericon">
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </span>
      </div>
    </div>
  </div>
  <div id="smallscreen" class="colorwhite">
        <div id="ssidemenu"><i class="fa-solid fa-bars"></i></div>
        <div id="smllogo">
        <a href="index2.html"><img src="/images/logo-surveymonkey-white (1).png" alt="" /></a>
        </div>
        <div></div>
      </div>
      <div id="dropdowncontainer"></div>
    <div id="rightoption"></div>
    <div id="alsidenavbar"></div>`;
}
function dropdownusermenu() {
  return `<ul>
    <li><a href="myaccount.html">My Account</a></li>
    <li><a href="library.html">Library</a></li>
    <li><a href="contacts.html">Contacts</a></li>
    <li id="signout"><a href="./index.html">Sign Out</a></li>
  </ul>`;
}
function alsidenav() {
  return `<div id="afsidebar">
  <ul class="afoption">
    <li>
      <a href="dashboard.html"><span>Dashboard</span></a>
    </li>
    <li>
      <a href="./mysurveys.html"><span>My Surveys</span></a>
    </li>
    <li>
      <a href="./plansandpricing.html"><span>Plans & Pricing</span></a>
    </li>
    <li id="sidep">
      <span class="givegap"
        >Products<span><i class="fa-solid fa-angle-down"></i></span
      ></span>
      <ul class="sideproduct">
        <li>
          <a href="./plansandpricing.html"><span>SurveyMonkey</span></a>
        </li>
        <li>
          <a href="./plansandpricing.html"><span>Enterprise</span></a>
        </li>
        <li>
          <a href="./plansandpricing.html"
            ><span>Integrati0n & Plug-ins</span></a
          >
        </li>
        <li>
          <a href="./plansandpricing.html"
            ><span>Specialized products</span></a
          >
        </li>
        <li>
          <a href="./plansandpricing.html"><span>Audience</span></a>
        </li>
        <li>
          <a href="./plansandpricing.html"><span>CX</span></a>
        </li>
        <li>
          <a href="./plansandpricing.html"><span>Engage</span></a>
        </li>
        <li>
          <a href="./plansandpricing.html"><span>TechValidate</span></a>
        </li>
        <li>
          <a href="./plansandpricing.html"><span>Apply</span></a>
        </li>
        <li>
          <a href="./plansandpricing.html"><span>Wufoo</span></a>
        </li>
        <li>
          <a href="./plansandpricing.html"><span>GetFeedback</span></a>
        </li>
      </ul>
    </li>
    <li id="sidehelp">
      <span class="givegap"
        >Help <span><i class="fa-solid fa-angle-down"></i></span
      ></span>
      <ul class="help">
        <li><a href="#">Help Centre</a></li>
        <li><a href="#">Curiocity At Work</a></li>
      </ul>
    </li>
  </ul>
  <a href="./index.html"><button id="signoutsmall">Sign Out</button></a>
</div>
`;
}
export { nav, dropdownusermenu, alsidenav };
